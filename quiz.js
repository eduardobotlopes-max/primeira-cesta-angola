const CHECKOUT_URL = 'https://pay.clickpayon.com/94f51905-70c4-4a57-988a-28e39dec83f0';
const questions = [
  {
    title: 'Em que ponto estás com a venda de cestas de presente?',
    options: [
      'Nunca vendi e quero começar do zero.',
      'Já tentei vender, mas ainda não consegui ter vendas regulares.',
      'Já vendo e quero organizar melhor os preços e a divulgação.'
    ]
  },
  {
    title: 'O que mais dificulta a tua próxima venda?',
    options: [
      'Não sei que materiais comprar nem como escolher fornecedores.',
      'Tenho receio de gastar dinheiro e não conseguir vender.',
      'Não sei como divulgar as cestas e conversar com possíveis clientes.'
    ]
  },
  {
    title: 'Se continuares sem um plano claro, o que pode acontecer nos próximos meses?',
    options: [
      'Vou continuar a adiar a primeira venda.',
      'Posso gastar em materiais sem saber quanto preciso cobrar.',
      'Vou continuar a vender de forma irregular.'
    ]
  },
  {
    title: 'O que mais te incomoda nessa situação?',
    options: [
      'Querer contribuir mais para o rendimento da casa e não saber por onde começar.',
      'Sentir insegurança ao investir tempo ou dinheiro numa ideia.',
      'Ter vontade de criar algo meu, mas continuar sem um método.'
    ]
  },
  {
    title: 'O que te ajudaria mais a avançar agora?',
    options: [
      'Uma lista de compras e vídeos para montar as primeiras cestas.',
      'Um jeito simples de calcular preços antes de vender.',
      'Guiões de WhatsApp e um plano para divulgar as cestas.'
    ]
  }
];

const app = document.getElementById('app');
const answers = [];
let screen = 'intro';
let questionIndex = 0;
let loadingTimer;
let loadingMessageTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function topbar(percent, backLabel) {
  return `<div class="topbar"><button class="back" type="button" aria-label="${escapeHtml(backLabel)}">←</button><div class="progress" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso do quiz"><span style="width:${percent}%"></span></div></div>`;
}

function renderIntro() {
  app.innerHTML = `<div class="intro"><img class="brand" src="/4cc051cd6c3e688d.webp" alt="Sua Primeira Cesta Vendida" width="134" height="134"><img class="hero" src="/transformacao-cestas.png" alt="A mesma mulher antes, com poucas moedas, e depois, com dinheiro e uma cesta de presentes" width="1774" height="887"><p class="eyebrow">Quiz rápido</p><h1>Descobre o teu perfil para vender cestas de presente.</h1><p class="subhead">Responde a 5 perguntas e vê qual é o teu próximo passo para começar em casa.</p><button class="button" id="start" type="button">COMEÇAR O QUIZ</button><p class="note">Leva cerca de 1 minuto.</p></div>`;
  document.getElementById('start').addEventListener('click', () => {screen = 'question'; questionIndex = 0; render();});
}

function renderQuestion() {
  const question = questions[questionIndex];
  const percent = Math.round((questionIndex / questions.length) * 100);
  app.innerHTML = `${topbar(percent, 'Voltar')}<p class="counter">Pergunta ${questionIndex + 1} de ${questions.length}</p><h1>${escapeHtml(question.title)}</h1><div class="choices">${question.options.map((option, index) => `<button class="choice" type="button" data-answer="${index}">${escapeHtml(option)}</button>`).join('')}</div>`;
  app.querySelector('.back').addEventListener('click', () => {
    if (questionIndex === 0) screen = 'intro'; else questionIndex -= 1;
    render();
  });
  app.querySelectorAll('.choice').forEach(button => button.addEventListener('click', () => {
    answers[questionIndex] = Number(button.dataset.answer);
    app.querySelectorAll('.choice').forEach(choice => choice.disabled = true);
    button.classList.add('selected');
    window.setTimeout(() => {
      if (questionIndex === questions.length - 1) screen = 'loading';
      else questionIndex += 1;
      render();
    }, 300);
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
  app.innerHTML = `<div class="result">${topbar(100, 'Voltar à última pergunta')}<div class="diagnosis"><p class="eyebrow">O teu diagnóstico está pronto</p><h1>Já tens um ponto de partida.</h1><p>${escapeHtml(diagnosis())} O curso Sua Primeira Cesta Vendida mostra os passos para transformar essa intenção num plano de ação.</p></div><section class="section" aria-labelledby="plan-title"><h2 id="plan-title">Um plano simples para começar</h2><div class="steps"><div class="step"><b>1</b><span>Escolhe os materiais e organiza o teu orçamento.</span></div><div class="step"><b>2</b><span>Monta uma das 3 cestas mostradas nas aulas.</span></div><div class="step"><b>3</b><span>Define o preço, fotografa e divulga pelo WhatsApp.</span></div></div></section><section class="section offer" aria-labelledby="offer-title"><p class="eyebrow">Acesso ao curso</p><h2 id="offer-title">Sua Primeira Cesta Vendida | Angola</h2><p class="price">4.990 <small>Kz</small></p><p class="subhead">Pagamento único. Sem mensalidade.</p><ul class="features"><li>5 passos em vídeo para começar</li><li>Montagem de 3 modelos de cestas</li><li>Orientação para definir preços e divulgar</li><li>Lista de compras, guiões de WhatsApp e plano de 7 dias</li></ul><button class="button buy" type="button">QUERO COMEÇAR AGORA</button><p class="note">Acesso após a confirmação do pagamento.</p></section><section class="section guarantee" aria-label="Garantia de 7 dias"><img src="/garantia-7-dias.jpg" alt="Selo de garantia de 7 dias" width="84" height="84" loading="lazy"><div><h2>7 dias de garantia</h2><p>Experimenta o curso. Se não for para ti, pede o reembolso de 100% do valor dentro de 7 dias.</p></div></section><section class="section faq" aria-labelledby="faq-title"><h2 id="faq-title">Ainda tens dúvidas?</h2><details><summary>Preciso de experiência?</summary><p>Não. As aulas mostram como começar do zero e montar as cestas passo a passo.</p></details><details><summary>Posso acompanhar pelo telemóvel?</summary><p>Sim. Podes assistir às aulas ao teu ritmo no telemóvel ou computador.</p></details><details><summary>Como recebo o acesso?</summary><p>Após a confirmação do pagamento, recebes acesso às aulas na área de membros.</p></details></section><p class="footer">© 2026 · Sua Primeira Cesta Vendida</p></div>`;
  app.querySelector('.back').addEventListener('click', () => {questionIndex = questions.length - 1; screen = 'question'; render();});
  app.querySelector('.buy').addEventListener('click', checkout);
}

function render() {
  window.clearTimeout(loadingTimer);
  window.clearInterval(loadingMessageTimer);
  window.scrollTo(0, 0);
  if (screen === 'intro') renderIntro();
  else if (screen === 'question') renderQuestion();
  else if (screen === 'loading') renderLoading();
  else renderResult();
}

render();
