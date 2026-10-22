const CHECKOUT_URL = 'https://pay.clickpayon.com/94f51905-70c4-4a57-988a-28e39dec83f0';
const questions = [
  {
    title: 'Em que ponto estás com a venda de cestas de presente?',
    options: [
      'Nunca vendi e quero começar do zero.',
      'Já tentei vender, mas ainda não consegui ter vendas regulares.',
      'Já vendo e quero organizar melhor os preços e a divulgação.'
    ],
    feedback: [
      'O teu primeiro passo é escolher um modelo simples e preparar a primeira cesta.',
      'Já tens alguma experiência. Vale perceber onde o processo de venda está a falhar.',
      'Tens uma base. Organizar preços e divulgação pode tornar o trabalho mais consistente.'
    ]
  },
  {
    title: 'O que mais dificulta a tua próxima venda?',
    options: [
      'Não sei que materiais comprar nem como escolher fornecedores.',
      'Tenho receio de gastar dinheiro e não conseguir vender.',
      'Não sei como divulgar as cestas e conversar com possíveis clientes.'
    ],
    feedback: [
      'Começa com uma lista de materiais para uma cesta e compara preços antes de comprar.',
      'Um orçamento pequeno e um preço calculado antes da compra ajudam a decidir com mais segurança.',
      'Fotografias claras e mensagens simples podem ajudar a apresentar as tuas cestas.'
    ]
  },
  {
    title: 'Se continuares sem um plano claro, o que pode acontecer nos próximos meses?',
    options: [
      'Vou continuar a adiar a primeira venda.',
      'Posso gastar em materiais sem saber quanto preciso cobrar.',
      'Vou continuar a vender de forma irregular.'
    ],
    feedback: [
      'Definir uma pequena tarefa para esta semana ajuda a sair do adiamento.',
      'Anotar o custo de cada material é o primeiro passo para definir um preço.',
      'Um processo repetível de montagem e divulgação pode dar mais organização às vendas.'
    ]
  },
  {
    title: 'O que mais te incomoda nessa situação?',
    options: [
      'Querer contribuir mais para o rendimento da casa e não saber por onde começar.',
      'Sentir insegurança ao investir tempo ou dinheiro numa ideia.',
      'Ter vontade de criar algo meu, mas continuar sem um método.'
    ],
    feedback: [
      'Um plano dividido em tarefas pequenas torna mais claro por onde começar.',
      'Podes testar uma cesta com um orçamento definido antes de fazer compras maiores.',
      'O próximo passo é transformar essa vontade numa sequência simples de ações.'
    ]
  },
  {
    title: 'O que te ajudaria mais a avançar agora?',
    options: [
      'Uma lista de compras e vídeos para montar as primeiras cestas.',
      'Um jeito simples de calcular preços antes de vender.',
      'Guiões de WhatsApp e um plano para divulgar as cestas.'
    ],
    feedback: [
      'Ter os materiais organizados e ver a montagem passo a passo pode facilitar o início.',
      'Definir o preço a partir dos custos ajuda a perceber a margem de cada cesta.',
      'Um guião de mensagem pode ajudar a apresentar a oferta com mais clareza.'
    ]
  },
  {
    title: 'O que mais queres alcançar com as cestas?',
    options: [
      'Ter um rendimento extra sem sair de casa.',
      'Trabalhar por conta própria no futuro.',
      'Organizar melhor o negócio que já tenho.',
      'Aprender primeiro e decidir depois.'
    ],
    feedback: [
      'Começar com uma cesta e testar a procura pode ajudar a explorar uma renda extra.',
      'Construir um negócio próprio leva tempo; a primeira venda é um passo concreto.',
      'O foco pode ser registar custos, preços e pedidos para organizar o que já vendes.',
      'Aprender o processo antes de investir é uma forma válida de começar.'
    ]
  },
  {
    title: 'Quanto tempo por dia consegues dedicar às cestas?',
    options: [
      'Menos de 1 hora.',
      'Entre 1 e 2 horas.',
      'Entre 2 e 4 horas.',
      'Mais de 4 horas.'
    ],
    feedback: [
      'Com pouco tempo, escolhe uma tarefa por dia: comprar, montar, fotografar ou divulgar.',
      'Uma ou duas horas podem ser divididas entre preparação e divulgação.',
      'Podes reservar blocos de tempo para montar, fotografar e responder a interessados.',
      'Com mais tempo disponível, vale criar uma rotina e acompanhar os resultados.'
    ]
  },
  {
    title: 'Qual é a tua experiência com cestas de presente?',
    options: [
      'Nunca montei uma cesta.',
      'Já montei para família ou amigos, mas nunca vendi.',
      'Já vendi algumas cestas sem um processo definido.',
      'Vendo com frequência e quero melhorar.'
    ],
    feedback: [
      'Um modelo simples e uma lista de materiais podem orientar a primeira montagem.',
      'Já conheces a montagem. O próximo passo é calcular um preço e apresentar a cesta.',
      'Registar materiais, tempo e preço pode tornar cada venda mais fácil de repetir.',
      'O teu foco pode ser rever custos, apresentação e divulgação das cestas.'
    ]
  },
  {
    title: 'Qual é o teu maior receio ao começar ou crescer?',
    options: [
      'Investir e não conseguir vender.',
      'Não montar cestas bonitas.',
      'Não conseguir conciliar com a rotina.',
      'Cobrar um preço errado.',
      'Encontrar muita concorrência.'
    ],
    feedback: [
      'Testar um modelo com orçamento definido ajuda a limitar o investimento inicial.',
      'A prática com um modelo guiado pode ajudar a melhorar a montagem e a apresentação.',
      'Divide o processo em tarefas curtas que caibam na tua rotina.',
      'Soma materiais e outros custos antes de decidir quanto cobrar.',
      'Uma apresentação clara e um bom atendimento ajudam a mostrar o valor da tua cesta.'
    ]
  },
  {
    title: 'Quanto gostarias de faturar por mês com cestas nos próximos 3 meses?',
    options: [
      'Até 50.000 Kz.',
      'Entre 50.000 Kz e 150.000 Kz.',
      'Entre 150.000 Kz e 300.000 Kz.',
      'Mais de 300.000 Kz.',
      'Ainda não sei; quero entender o potencial primeiro.'
    ],
    feedback: [
      'É uma meta inicial. Calcula quantas cestas precisarias vender e qual seria a margem.',
      'Divide a meta pelo valor de venda de cada cesta e considera os custos envolvidos.',
      'Para avaliar essa meta, estima a quantidade de pedidos, os custos e o tempo necessário.',
      'Uma meta alta exige testar a procura e acompanhar margem, capacidade e vendas reais.',
      'Começa por conhecer custos e preços; depois define uma meta baseada nas primeiras vendas.'
    ]
  }
];

// Troca o ficheiro src de cada espaço para actualizar as imagens do quiz.
const visualSlots = {
  3: {
    src: '/quiz-planeamento.png',
    alt: 'Mulher a planear os materiais para montar uma cesta de presente',
    title: 'Primeiro, um plano simples',
    detail: 'Escolher os materiais e conhecer os custos ajuda a dar o primeiro passo com mais clareza.'
  },
  7: {
    src: '/quiz-montagem.png',
    alt: 'Mulher a terminar uma cesta de presente com um laço',
    title: 'Depois, a cesta ganha forma',
    detail: 'Com um modelo para seguir, podes praticar a montagem e preparar fotografias para divulgar.'
  }
};

const app = document.getElementById('app');
const answers = [];
let screen = 'intro';
let questionIndex = 0;
let loadingTimer;
let loadingMessageTimer;
let answerTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function topbar(percent, backLabel) {
  return `<div class="topbar"><button class="back" type="button" aria-label="${escapeHtml(backLabel)}">←</button><div class="progress" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso do quiz"><span style="width:${percent}%"></span></div><span class="progress-value">${percent}%</span></div>`;
}

function renderIntro() {
  app.innerHTML = `<div class="intro"><img class="brand" src="/4cc051cd6c3e688d.webp" alt="Sua Primeira Cesta Vendida" width="134" height="134"><img class="hero" src="/transformacao-cestas.png" alt="A mesma mulher antes, com poucas moedas, e depois, com dinheiro e uma cesta de presentes" width="1774" height="887"><p class="eyebrow">Quiz rápido</p><h1>Descobre o teu perfil para vender cestas de presente.</h1><p class="subhead">Responde a 10 perguntas e recebe um próximo passo de acordo com as tuas respostas.</p><button class="button" id="start" type="button">COMEÇAR O QUIZ</button><p class="note">Leva cerca de 2 minutos.</p></div>`;
  document.getElementById('start').addEventListener('click', () => {screen = 'question'; questionIndex = 0; render();});
}

function renderQuestion() {
  const question = questions[questionIndex];
  const percent = Math.round(((questionIndex + 1) / questions.length) * 100);
  const visual = visualSlots[questionIndex];
  const visualHtml = visual ? `<figure class="visual-card"><button class="visual-toggle" type="button" aria-expanded="false" aria-controls="visual-note-${questionIndex}"><img src="${visual.src}" alt="${escapeHtml(visual.alt)}" width="1536" height="1024" loading="lazy"><span class="visual-overlay"><strong>${escapeHtml(visual.title)}</strong><span>Ver a ideia +</span></span></button><figcaption class="visual-note" id="visual-note-${questionIndex}" hidden>${escapeHtml(visual.detail)}</figcaption></figure>` : '';
  app.innerHTML = `${topbar(percent, 'Voltar')}<p class="counter">Pergunta ${questionIndex + 1} de ${questions.length}</p>${visualHtml}<h1>${escapeHtml(question.title)}</h1><div class="choices">${question.options.map((option, index) => `<button class="choice" type="button" data-answer="${index}">${escapeHtml(option)}</button>`).join('')}</div><p class="answer-feedback" role="status" hidden></p>`;
  if (visual) {
    const toggle = app.querySelector('.visual-toggle');
    const note = app.querySelector('.visual-note');
    toggle.addEventListener('click', () => {
      note.hidden = !note.hidden;
      toggle.setAttribute('aria-expanded', String(!note.hidden));
      toggle.querySelector('.visual-overlay span').textContent = note.hidden ? 'Ver a ideia +' : 'Fechar −';
    });
  }
  app.querySelector('.back').addEventListener('click', () => {
    if (questionIndex === 0) screen = 'intro'; else questionIndex -= 1;
    render();
  });
  app.querySelectorAll('.choice').forEach(button => button.addEventListener('click', () => {
    answers[questionIndex] = Number(button.dataset.answer);
    app.querySelectorAll('.choice').forEach(choice => choice.disabled = true);
    button.classList.add('selected');
    const feedback = app.querySelector('.answer-feedback');
    feedback.textContent = question.feedback[answers[questionIndex]];
    feedback.hidden = false;
    answerTimer = window.setTimeout(() => {
      if (questionIndex === questions.length - 1) screen = 'loading';
      else questionIndex += 1;
      render();
    }, 1300);
  }));
}

function renderLoading() {
  const messages = [
    'A analisar as tuas respostas...',
    'A identificar o teu principal desafio...',
    'A preparar o teu próximo passo...'
  ];
  app.innerHTML = '<div class="loading"><div class="spinner" aria-hidden="true"></div><h1>A preparar o teu resultado</h1><p id="loading-message" class="subhead" role="status"></p></div>';
  let index = 0;
  const message = document.getElementById('loading-message');
  message.textContent = messages[0];
  loadingMessageTimer = window.setInterval(() => {index = (index + 1) % messages.length; message.textContent = messages[index];}, 950);
  loadingTimer = window.setTimeout(() => {window.clearInterval(loadingMessageTimer); screen = 'result'; render();}, 3000);
}

function diagnosis() {
  const problem = answers[1];
  if (problem === 0) return 'O teu principal desafio é saber o que comprar e como montar as primeiras cestas.';
  if (problem === 1) return 'O teu principal desafio é começar com um orçamento claro e definir preços antes de vender.';
  return 'O teu principal desafio é divulgar as cestas e iniciar conversas com possíveis clientes.';
}

function checkout() {
  const url = new URL(CHECKOUT_URL);
  for (const [key, value] of new URLSearchParams(window.location.search)) url.searchParams.set(key, value);
  window.location.href = url.toString();
}

function renderResult() {
  const insights = questions.map((question, index) => `<div class="insight"><b>${index + 1}. ${escapeHtml(question.title)}</b><p>${escapeHtml(question.feedback[answers[index]])}</p></div>`).join('');
  const carouselImages = [
    {src: '/exemplo-cesta-1.png', alt: 'Imagem ilustrativa de uma mulher com uma cesta de presente pronta'},
    {src: '/exemplo-cesta-2.png', alt: 'Imagem ilustrativa de uma mulher com uma cesta de presente decorada'},
    {src: '/exemplo-cesta-3.png', alt: 'Imagem ilustrativa de três cestas de presente prontas'}
  ];
  const carouselHtml = `<section class="section basket-gallery" aria-labelledby="basket-gallery-title"><p class="eyebrow">Inspiração para começar</p><h2 id="basket-gallery-title">Olha como podem ficar as tuas cestas</h2><p class="gallery-disclosure">Imagens ilustrativas</p><div class="gallery-track" role="region" aria-label="Exemplos de cestas" tabindex="0">${carouselImages.map((item, index) => `<figure class="gallery-card"><img src="${item.src}" alt="${item.alt}" width="1122" height="1402" loading="lazy"><figcaption>Exemplo ${index + 1}</figcaption></figure>`).join('')}</div><div class="gallery-controls"><button class="gallery-arrow gallery-prev" type="button" aria-label="Imagem anterior">‹</button><span class="gallery-count" role="status" aria-live="polite">1 de ${carouselImages.length}</span><button class="gallery-arrow gallery-next" type="button" aria-label="Próxima imagem">›</button></div></section>`;
  app.innerHTML = `<div class="result">${topbar(100, 'Voltar à última pergunta')}<div class="diagnosis"><p class="eyebrow">O teu diagnóstico está pronto</p><h1>Já tens um ponto de partida.</h1><p>${escapeHtml(diagnosis())} O curso Sua Primeira Cesta Vendida mostra os passos para transformar essa intenção num plano de ação.</p></div><section class="section" aria-labelledby="plan-title"><h2 id="plan-title">Um plano simples para começar</h2><div class="steps"><div class="step"><b>1</b><span>Escolhe os materiais e organiza o teu orçamento.</span></div><div class="step"><b>2</b><span>Monta uma das 3 cestas mostradas nas aulas.</span></div><div class="step"><b>3</b><span>Define o preço, fotografa e divulga pelo WhatsApp.</span></div></div></section><section class="section offer" aria-labelledby="offer-title"><p class="eyebrow">Acesso ao curso</p><h2 id="offer-title">Sua Primeira Cesta Vendida | Angola</h2><p class="price">4.990 <small>Kz</small></p><p class="subhead">Pagamento único. Sem mensalidade.</p><ul class="features"><li>5 passos em vídeo para começar</li><li>Montagem de 3 modelos de cestas</li><li>Orientação para definir preços e divulgar</li><li>Lista de compras, guiões de WhatsApp e plano de 7 dias</li></ul><button class="button buy" type="button">QUERO COMEÇAR AGORA</button><p class="note">Acesso após a confirmação do pagamento.</p></section><section class="section guarantee" aria-label="Garantia de 7 dias"><img src="/garantia-7-dias-sem-fundo.png" alt="Selo de garantia de 7 dias" width="100" height="100" loading="lazy"><div><h2>7 dias de garantia</h2><p>Experimenta o curso. Se não for para ti, pede o reembolso de 100% do valor dentro de 7 dias.</p></div></section>${carouselHtml}<section class="section insights" aria-labelledby="insights-title"><h2 id="insights-title">O que as tuas 10 respostas mostram</h2>${insights}</section><section class="section faq" aria-labelledby="faq-title"><h2 id="faq-title">Ainda tens dúvidas?</h2><details><summary>Preciso de experiência?</summary><p>Não. As aulas mostram como começar do zero e montar as cestas passo a passo.</p></details><details><summary>Posso acompanhar pelo telemóvel?</summary><p>Sim. Podes assistir às aulas ao teu ritmo no telemóvel ou computador.</p></details><details><summary>Como recebo o acesso?</summary><p>Após a confirmação do pagamento, recebes acesso às aulas na área de membros.</p></details></section><p class="footer">© 2026 · Sua Primeira Cesta Vendida</p></div>`;
  app.querySelector('.back').addEventListener('click', () => {questionIndex = questions.length - 1; screen = 'question'; render();});
  app.querySelector('.buy').addEventListener('click', checkout);
  const gallery = app.querySelector('.gallery-track');
  const cards = [...gallery.querySelectorAll('.gallery-card')];
  const previous = app.querySelector('.gallery-prev');
  const next = app.querySelector('.gallery-next');
  const counter = app.querySelector('.gallery-count');
  let activeCard = 0;
  const updateGallery = () => {
    const center = gallery.scrollLeft + gallery.clientWidth / 2;
    activeCard = cards.reduce((best, card, index) => Math.abs(card.offsetLeft + card.offsetWidth / 2 - center) < Math.abs(cards[best].offsetLeft + cards[best].offsetWidth / 2 - center) ? index : best, 0);
    counter.textContent = `${activeCard + 1} de ${cards.length}`;
    previous.disabled = activeCard === 0;
    next.disabled = activeCard === cards.length - 1;
  };
  const showCard = (index) => gallery.scrollTo({left: cards[index].offsetLeft - (gallery.clientWidth - cards[index].clientWidth) / 2, behavior: 'smooth'});
  previous.addEventListener('click', () => showCard(Math.max(0, activeCard - 1)));
  next.addEventListener('click', () => showCard(Math.min(cards.length - 1, activeCard + 1)));
  gallery.addEventListener('scroll', updateGallery, {passive: true});
  updateGallery();
}

function render() {
  window.clearTimeout(loadingTimer);
  window.clearInterval(loadingMessageTimer);
  window.clearTimeout(answerTimer);
  window.scrollTo(0, 0);
  if (screen === 'intro') renderIntro();
  else if (screen === 'question') renderQuestion();
  else if (screen === 'loading') renderLoading();
  else renderResult();
}

render();
