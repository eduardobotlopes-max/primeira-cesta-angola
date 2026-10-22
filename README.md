# Sua Primeira Cesta Vendida — Angola

Quiz estático que começa pelo primeiro nome, segue com três perguntas básicas e dez perguntas de diagnóstico, resposta adaptada a cada escolha, resultado com plano visual interativo de 7 dias e oferta final. O nome é usado apenas nesta sessão para personalizar o resultado. O gráfico mostra tarefas sugeridas, não uma previsão de vendas. A copy está adaptada para Angola. O cartão da oferta apresenta **17.990 Kz** riscado e o preço atual de **4.990 Kz**.

## Executar

Abra `index.html` com um servidor estático, por exemplo `python -m http.server 8765`.

## Publicar na Vercel

Importe este repositório. Preset: **Other**. Sem comando de build; pasta de saída: raiz (`.`).

## Checkout

O checkout ClickPay está configurado em `CHECKOUT_URL` no início de `quiz.js`:

https://pay.clickpayon.com/94f51905-70c4-4a57-988a-28e39dec83f0

O botão de compra usa este endereço e encaminha os parâmetros UTM da página.

## Ficheiros

`index.html`, `quiz.css` e `quiz.js` formam a experiência atual. `visualSlots` em `quiz.js` define os espaços de imagem das perguntas 4 e 8; basta trocar o caminho `src` para substituir cada imagem. `carouselImages` em `renderResult()` define as imagens do carrossel automático e infinito. As três fotografias `exemplo-cesta-*.webp` são ilustrativas e não representam depoimentos de clientes. Substitua-as por fotografias e relatos autorizados quando disponíveis. As imagens em uso estão em WebP para reduzir o tempo de carregamento; a logo, a imagem de abertura, os visuais intermédios, o selo de garantia e a fonte estão guardados neste repositório. Os ficheiros de imagem e estilo da versão anterior permanecem no histórico do projeto.
