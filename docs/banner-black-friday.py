# Gera a arte do banner da Black Friday (flat, com foto real).
# Uso: python3 docs/banner-black-friday.py <pasta-das-fontes> <raiz-do-site> desktop|mobile <saida.jpg>
# Fontes: Archivo e Inter (Google Fonts) salvas como Archivo.ttf e Inter.ttf em <pasta-das-fontes>/fonts
import sys
from PIL import Image, ImageDraw, ImageFont, ImageEnhance
S, R, modo, out = sys.argv[1:5]
INK = (14, 15, 17); WHITE = (255, 255, 255); TEAL = (1, 166, 188); GREY = (185, 189, 195)

def font(name, size, axes):
    f = ImageFont.truetype(f"{S}/fonts/{name}.ttf", size); f.set_variation_by_axes(axes); return f
BLACKF = lambda s: font("Archivo", s, [900, 125])
INTER = lambda s, w=600: font("Inter", s, [14, w])

def foto(W, H, foco):
    ph = Image.open(f"{R}/public/galeria/5.jpg").convert("RGB")
    r = max(W / ph.width, H / ph.height)
    ph = ph.resize((round(ph.width * r), round(ph.height * r)), Image.LANCZOS)
    l = int((ph.width - W) * foco[0]); t = int((ph.height - H) * foco[1])
    ph = ph.crop((l, t, l + W, t + H))
    ph = ImageEnhance.Color(ph).enhance(0.75)
    return Image.blend(ph, Image.new("RGB", ph.size, INK), 0.35)

def bloco_pct(d, x, y, tam):
    """Etiqueta chapada azul-petróleo com 15% em preto + OFF."""
    f15 = BLACKF(tam); fof = BLACKF(int(tam * 0.42))
    w15 = d.textlength("15%", font=f15); wof = d.textlength("OFF", font=fof)
    pad = int(tam * 0.16)
    bx2 = x + pad + w15 + int(tam * 0.1) + wof + pad
    by2 = y + int(tam * 1.02)
    d.rectangle([x, y, bx2, by2], fill=TEAL)
    d.text((x + pad, y + int(tam * 0.06)), "15%", font=f15, fill=INK)
    d.text((x + pad + w15 + int(tam * 0.1), y + int(tam * 0.16)), "OFF", font=fof, fill=INK)
    return bx2, by2

if modo == "desktop":
    W, H = 2400, 1000
    c = Image.new("RGB", (W, H), INK)
    c.paste(foto(1300, H, (0.55, 0.5)), (W - 1300, 0)); d = ImageDraw.Draw(c)
    # painel preto chapado com corte diagonal + faixa azul paralela
    d.polygon([(0, 0), (1420, 0), (1180, H), (0, H)], fill=INK)
    d.polygon([(1420, 0), (1452, 0), (1212, H), (1180, H)], fill=TEAL)
    M = 150
    d.text((M, 120), "BLACK", font=BLACKF(220), fill=WHITE)
    d.text((M, 325), "FRIDAY", font=BLACKF(220), fill=WHITE)
    bx2, by2 = bloco_pct(d, M, 575, 150)
    d.text((bx2 + 30, 590), "em serviços", font=INTER(44, 700), fill=WHITE)
    d.text((bx2 + 30, 643), "particulares", font=INTER(44, 700), fill=WHITE)
    # área livre para o botão (HTML) entre y≈840 e 930
    d.text((M, H - 52), "VÁLIDO ATÉ 30/11  ·  NÃO CUMULATIVO COM OUTRAS PROMOÇÕES", font=INTER(24, 600), fill=GREY, anchor="ls")
    # etiqueta branca chapada sobre a foto
    tag = Image.new("RGBA", (420, 150), (0, 0, 0, 0)); td = ImageDraw.Draw(tag)
    td.rectangle([0, 0, 419, 149], fill=WHITE)
    td.text((210, 52), "SÓ ATÉ", font=INTER(34, 800), fill=INK, anchor="mm")
    td.text((210, 104), "30/11", font=BLACKF(64), fill=INK, anchor="mm")
    tag = tag.rotate(-6, expand=True, resample=Image.BICUBIC)
    c.paste(tag, (1880, 90), tag)
else:
    W, H = 1080, 1440
    c = foto(W, H, (0.32, 0.25)); d = ImageDraw.Draw(c)
    top = 600
    d.polygon([(0, top + 90), (W, top - 20), (W, H), (0, H)], fill=INK)
    d.polygon([(0, top + 62), (W, top - 48), (W, top - 20), (0, top + 90)], fill=TEAL)
    M = 70
    tag = Image.new("RGBA", (300, 116), (0, 0, 0, 0)); td = ImageDraw.Draw(tag)
    td.rectangle([0, 0, 299, 115], fill=WHITE)
    td.text((150, 38), "SÓ ATÉ", font=INTER(26, 800), fill=INK, anchor="mm")
    td.text((150, 80), "30/11", font=BLACKF(48), fill=INK, anchor="mm")
    tag = tag.rotate(-6, expand=True, resample=Image.BICUBIC)
    c.paste(tag, (W - M - 300, 70), tag)
    d.text((M - 4, 710), "BLACK", font=BLACKF(178), fill=WHITE)
    d.text((M - 4, 878), "FRIDAY", font=BLACKF(178), fill=WHITE)
    bx2, by2 = bloco_pct(d, M, 1080, 118)
    d.text((bx2 + 24, 1092), "em serviços", font=INTER(34, 700), fill=WHITE)
    d.text((bx2 + 24, 1134), "particulares", font=INTER(34, 700), fill=WHITE)
    # área livre para o botão (HTML) entre y≈1240 e 1350
    d.text((W // 2, H - 36), "VÁLIDO ATÉ 30/11 · NÃO CUMULATIVO", font=INTER(24, 600), fill=GREY, anchor="ms")
c.save(out, quality=90, optimize=True, progressive=True)
