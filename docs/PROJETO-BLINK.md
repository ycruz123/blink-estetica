# Projeto do site da Blink Estética Automotiva

Documento de acompanhamento: o que já foi feito, o que falta e as decisões
tomadas. **Atualize este arquivo a cada mudança no site.**

- Site: https://www.blinkautomotiva.com.br (o domínio sem `www` redireciona)
- Hospedagem: Vercel, conta do Yuri ("Yuri's projects", plano Hobby)
- Domínio: Registro.br, na conta do Yuri; DNS no próprio Registro.br
- Código: GitHub `ycruz123/blink-estetica`. O branch `main` vai para o ar.

---

## Dados confirmados da empresa

| Item | Valor |
|---|---|
| Nome | Blink Estética Automotiva |
| Endereço | Rua Joathur Bueno, 272 – Barra da Tijuca, Rio de Janeiro - RJ, CEP 22631-160 (Condomínio Lagoa Mar Sul) |
| Instagram | [@blinkesteticaauto](https://www.instagram.com/blinkesteticaauto/) |
| Google Meu Negócio | Existe: nota 4,7, 109 avaliações, categoria "Pintura automotiva". **Dono do perfil ainda não identificado** |
| Horário | Segunda a sexta, das 8h às 18h |
| Telefone para ligar (botões "Ligar") | (21) 98279-5747 |
| WhatsApp (todos os botões de WhatsApp) | (21) 98222-7699 |
| Outros telefones exibidos | Fixo (21) 2439-4259 |
| Não usar no site | (21) 96918-7827 (é do pessoal do Ricardo) |
| Seguradoras | **Parceria direta** com as seguradoras (Porto Seguro, Azul, Itaú) |

**Serviços que a Blink faz:** Lanternagem, Pintura Automotiva, Polimento e
Cristalização, Vitrificação, Revitalização de Plásticos e Detalhamento
Automotivo.

**Serviços que a Blink NÃO faz:** Lavagem completa e Higienização interna
(a higienização pode voltar quando houver profissional; o Instagram ainda tem
um vídeo antigo sobre ela). Não colocar no site.

**Campanha ativa:** quem segue o Instagram ganha 10% de desconto em serviços
particulares (pedido do Yuri). Aparece como aviso discreto no canto da tela;
liga/desliga em `campanhaInstagram.ativa` em `lib/dados.js`.

Todos esses dados ficam centralizados em `lib/dados.js`.

---

## Regras do projeto

1. **Nada de imagens geradas ou "melhoradas" por IA generativa** em fotos
   da oficina, dos carros ou da equipe. Elas inventam detalhes (placas,
   logos, textos). Exemplo: uma versão da fachada refeita por IA trocou o
   logo da Blink por outro símbolo e criou placas falsas, e por isso foi
   descartada. Ampliar a resolução só com super-resolução não generativa (EDSR).
2. **Não inventar informações.** Prazos, garantias, marcas de produto,
   números ("X anos", "X carros") e serviços só entram no site depois de a
   Blink confirmar.
3. **Público inclui pessoas mais velhas:** texto base de 18px, contraste
   WCAG AA, botões com no mínimo 48px de altura, telefone sempre escrito por
   extenso e clicável.
4. **Visual:** tema claro. Cores: grafite `#16181B`, branco quente
   `#FAFAF8`, cinza `#F1F1EE` e azul-petróleo do logo (`#01A6BC` para
   destaques, `#007C8C` para botões com texto branco). Fontes: Archivo (títulos,
   largura expandida) e Inter (texto).
5. **Publicação automática autorizada pelo Yuri:** depois de `npm run build`
   passar e de conferir as páginas no navegador, o Claude publica sozinho.
   O fluxo é: commit no branch de trabalho, pull request para o `main` e
   merge. A Vercel publica o `main` automaticamente.

---

## Já feito

### Infraestrutura
- [x] Deploy migrado para a conta Vercel do Yuri
- [x] Domínio `blinkautomotiva.com.br` apontado para o novo projeto (DNS no Registro.br)
- [x] Next.js atualizado de 14.1.0 para 14.2.35 (correções de segurança)
- [x] Publicação automática: o Claude faz o merge no `main` depois de validar
- [x] Administrador antigo (`salsa200-prog`) removido dos colaboradores do
      GitHub: não consegue mais alterar o código
- [x] Google Search Console verificado (propriedade Domínio), sitemap
      processado com 8 páginas e indexação solicitada para todas

### Conteúdo e conversão
- [x] Pop-up vencido da "Promoção Copa do Mundo" removido
- [x] Menu no celular e barra fixa com "Ligar" e "WhatsApp"
- [x] Telefones clicáveis e mensagens prontas no WhatsApp ("Vim pelo site…")
- [x] Formulário de orçamento reduzido a 3 campos, enviado pelo WhatsApp
- [x] Lista de serviços com o que a Blink realmente faz e descrição própria para cada um
- [x] Seção de seguradoras destacando a parceria direta, com o processo em 4 passos
- [x] Passo 2 do sinistro cita o guincho da seguradora como opção (conforme a apólice)

### Visual
- [x] Redesign em tema claro, alinhado ao logo
- [x] Logo novo em alta resolução (`logo-marca.png`) e versão branca para fundo escuro (`logo-branco.png`)
- [x] Fotos da fachada e da galeria ampliadas 2x com EDSR (sem alterar conteúdo)
- [x] Logos das seguradoras recortados para fundo branco
- [x] **Celular** (sem mudar o computador): foto no topo da página, antes do
      título; fotos do topo alternando com transição suave (fachada, Mercedes,
      lanternagem); tudo cerca de 6% menor; títulos, espaçamentos e botões mais
      compactos para não parecer aplicativo. Quem configura "reduzir movimento"
      no celular vê só a primeira foto.

### SEO
- [x] Título e descrição com palavras-chave locais em todas as páginas
- [x] **Uma página para cada serviço**: `/lanternagem`, `/pintura-automotiva`,
      `/polimento-e-cristalizacao`, `/vitrificacao`,
      `/revitalizacao-de-plasticos`, `/detalhamento-automotivo`
- [x] Página `/sinistro` (oficina parceira de seguradoras)
- [x] Links internos: cards de serviço, rodapé com todos os serviços e "outros serviços" em cada página
- [x] Dados estruturados: `AutoBodyShop` (empresa e catálogo de serviços), `Service` e `BreadcrumbList`
- [x] Trilha de navegação ("Início › Serviços › Lanternagem") nas páginas internas
- [x] `sitemap.xml` com todas as páginas e `robots.txt`
- [x] Endereço canônico em cada página
- [x] Imagem de compartilhamento 1200×630 (`public/og-blink.png`) em todas as páginas
- [x] Telefones revisados: WhatsApp passa a ser (21) 98222-7699; (21) 96918-7827 saiu do site
- [x] Página 404 em português
- [x] Aviso da campanha "siga no Instagram e ganhe 10%" (discreto, sem bloquear a tela)
- [x] CEP no endereço e Instagram no rodapé e nos dados estruturados (`sameAs`)
- [x] Imagens otimizadas (`next/image`) com textos alternativos descritivos
- [x] Topo e rodapé como componentes compartilhados (menos JavaScript no navegador)

---

## Pendências

### Precisa de resposta da Blink
- [ ] **Card "Demais seguradoras":** a imagem mostra Allianz, Bradesco, HDI,
      Mapfre, Zurich, Sompo, Yelum etc. A Blink é parceira de todas? Se não,
      trocar a imagem ou o texto ("Atendemos segurados de outras seguradoras").
- [ ] **Sábado:** a oficina abre?
- [ ] **Perguntas frequentes** (para criar a seção de FAQ com dados estruturados):
      prazo médio de reparo, garantia, se busca/leva o carro, carro reserva
      pela seguradora, formas de pagamento no particular.
- [ ] **Números reais:** anos de mercado, carros atendidos, garantia.
- [ ] **História da Blink:** um parágrafo e uma foto do dono ou da equipe.

### Precisa de fotos (reais)
- [ ] Fachada real, de dia, com sol (por volta das 10h), com um carro limpo na entrada
- [ ] Antes e depois do mesmo carro, no mesmo ângulo, para um comparador "arrastar para ver"
- [ ] Fotos de processo: pintura, polimento, aplicação de vitrificação
- [ ] Uma foto específica para cada página de serviço (hoje elas reaproveitam fotos da galeria)

### Acesso do projeto antigo
- [x] Projeto Vercel do Yuri (`yuri-s-projects12`) conectado ao GitHub e
      publicando o site oficial. Os dois projetos (o do Yuri e o antigo) têm o
      mesmo nome, então o GitHub mostra só o status de quem termina por último;
      isso não indica falha.
- [ ] Desligar o projeto Vercel do administrador antigo
      (`salsa200-progs-projects`), que ainda recebe cópia do código a cada
      mudança: pedir para ele apagar o projeto, ou migrar para um repositório
      novo. Não afeta o site oficial (o domínio está na conta do Yuri).

### Pode ser feito sem depender da Blink
- [ ] Medição: Vercel Analytics e contagem de cliques em WhatsApp/Ligar
- [ ] Logo em vetor (SVG), se o original não for encontrado

### Fora do site (decisivo para o Google)
- [ ] Em ~2 semanas: analisar Search Console → Desempenho → Consultas com o Yuri
- [ ] **Google Meu Negócio:** o perfil já existe (4,7 ★, 109 avaliações).
      Descobrir quem é o dono (Blink ou administrador antigo?) e conseguir
      acesso; depois alinhar telefone principal (21) 98279-5747, site,
      horário e categorias
- [ ] Rotina de **pedir avaliação no Google** a cada carro entregue
- [ ] Depois que houver avaliações reais, incluir depoimentos no site
- [ ] Avaliar o plano Pro da Vercel: o Hobby é para uso não comercial

---

## Aulas (modo aula)

- [x] Aula 1: Como o Google funciona (rastrear, indexar, classificar; busca local)
- [x] Aula 2: Search Console (verificação, sitemap, indexação, relatórios)
- [ ] Aula 3: Google Meu Negócio
- [ ] Aula 4: Velocidade e experiência (Core Web Vitals)
- [ ] Aula 5: Blogs e conteúdo

---

## Estrutura do código

```
app/
  layout.jsx              topo, rodapé, fontes, SEO padrão e dados da empresa
  page.jsx                página inicial
  [slug]/page.jsx         páginas de serviço (geradas a partir de lib/dados.js)
  sinistro/page.jsx       página de seguradoras
  not-found.jsx           página 404
  sitemap.js, robots.js
components/
  Cabecalho.jsx           faixa superior, logo, menu (inclusive no celular)
  Rodape.jsx              rodapé e barra fixa do celular
  SecaoContato.jsx        endereço, telefones, mapa e formulário
  FormOrcamento.jsx       formulário que monta a mensagem do WhatsApp
  Blocos.jsx              cards de serviço, seguradoras, passos, trilha
  ui.jsx, Icones.jsx
lib/dados.js              todos os dados da empresa e textos dos serviços
public/                   imagens (logos, fotos, og-blink.png)
```

Para **adicionar um serviço**, inclua um item em `servicos` dentro de
`lib/dados.js`. A página, o card, o link no rodapé, a opção do formulário,
o sitemap e os dados estruturados são gerados automaticamente.
