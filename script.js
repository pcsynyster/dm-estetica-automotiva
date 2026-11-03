const CONFIG = {
  whatsapp: "558498961905",
  storageKey: "dm_agendamentos",
  daysAhead: 14,
  days: {
    0: [],
    1: ["manha", "tarde"],
    2: ["manha", "tarde"],
    3: ["manha", "tarde"],
    4: ["manha", "tarde"],
    5: ["manha", "tarde"],
    6: ["manha"]
  },
  shifts: {
    manha: { label: "Manhã", range: "8h às 12h", end: 12 },
    tarde: { label: "Tarde", range: "13h às 17h", end: 17 }
  },
  hoursText: "Segunda a sexta, das 8h às 17h &middot; Sábado, das 8h às 12h"
};

const shiftText = (key) => CONFIG.shifts[key] ? `${CONFIG.shifts[key].label} (${CONFIG.shifts[key].range})` : key;

const SIZES = {
  carro: {
    P: { label: "Pequeno", examples: "Hatches e compactos, como Mobi, Onix, HB20 e Polo" },
    M: { label: "Médio", examples: "Sedãs e SUVs compactos, como Corolla, Civic, Creta e T-Cross" },
    G: { label: "Grande", examples: "SUVs grandes e picapes, como SW4, Hilux, Ranger e Commander" }
  },
  moto: {
    P: { label: "Pequena", examples: "Baixa cilindrada, como CG, Fan, Biz e Pop" },
    M: { label: "Média", examples: "Média cilindrada e scooters, como XRE 300, Fazer 250, NMAX e PCX" },
    G: { label: "Grande", examples: "Alta cilindrada, como MT-09, CB 1000R, Hornet e BMW GS" }
  }
};

const MOTO_SERVICES = [
  {
    id: "moto-basic", vehicle: "moto", type: "lavagem", name: "Lavagem", highlight: "Basic", sub: "Lavagem detalhada com cera protetiva",
    prices: { P: 50, M: 80, G: 100 },
    items: [
      "Lavagem detalhada com shampoo para motocicleta",
      "Limpeza detalhada do motor",
      "Verniz de motor: condicionamento e proteção contra ressecamento em altas temperaturas, por até 6 meses",
      "Selagem dos pneus",
      "Limpeza e lubrificação da corrente",
      "Cera protetiva na pintura, com proteção de até 4 meses"
    ]
  },
  {
    id: "moto-medium", vehicle: "moto", type: "lavagem", name: "Lavagem", highlight: "Medium", sub: "Lavagem técnica com descontaminação", tag: "Mais pedido",
    prices: { P: 80, M: 100, G: 120 },
    items: [
      "Lavagem detalhada com shampoo para motocicleta",
      "Limpeza detalhada do motor",
      "Descontaminação ferrosa",
      "Descontaminação da pintura",
      "Revitalização dos plásticos",
      "Verniz de motor: condicionamento e proteção contra ressecamento em altas temperaturas, por até 6 meses",
      "Selagem dos pneus",
      "Higienização e lubrificação da corrente",
      "Cera Blend All in One aplicada na máquina, protegendo a pintura por até 6 meses"
    ]
  },
  {
    id: "moto-gold", vehicle: "moto", type: "tratamento", name: "Tratamento", highlight: "Gold", sub: "Polimento técnico",
    prices: { P: 150, M: 200 },
    items: [
      "Lavagem detalhada com shampoo para motocicleta",
      "Limpeza detalhada do motor",
      "Descontaminação ferrosa e da pintura",
      "Revitalização dos plásticos",
      "Polimento técnico ou cristalização de pintura: elimina o máximo possível de microriscos e manchas",
      "Verniz de motor com proteção contra ressecamento por até 6 meses",
      "Selagem dos pneus",
      "Higienização e lubrificação da corrente",
      "Cera Blend All in One, protegendo a pintura por até 6 meses"
    ]
  },
  {
    id: "moto-protection", vehicle: "moto", type: "tratamento", name: "Protection", highlight: "Premium", sub: "Vitrificação completa",
    prices: { P: 350, M: 500 },
    items: [
      "Lavagem detalhada com shampoo para motocicleta",
      "Limpeza detalhada do motor",
      "Descontaminação ferrosa e da pintura",
      "Revitalização do escapamento",
      "Coating nanocerâmico VX45 na pintura: alto brilho, repelência e proteção UV por até 3 anos",
      "Vitrificação dos plásticos com V-Plastic (Vonixx), com até 1 ano de proteção",
      "Selagem dos pneus",
      "Higienização e lubrificação da corrente"
    ]
  }
];

const SERVICES = [
  {
    id: "completa", type: "lavagem", name: "Lavagem", highlight: "Completa", sub: "O essencial bem feito",
    prices: { P: 80, M: 100, G: 120 },
    items: [
      "Lavagem externa com shampoo automotivo",
      "Limpeza simples das rodas e caixas de roda",
      "Aspiração interna e limpeza dos tapetes e do painel",
      "Selagem dos pneus",
      "Revitalização dos plásticos internos e externos",
      "Selagem da pintura com brilho e proteção"
    ]
  },
  {
    id: "premium", type: "lavagem", name: "Lavagem", highlight: "Premium", sub: "Detalhada com cera de carnaúba", tag: "Mais pedido",
    prices: { P: 150, M: 170, G: 190 },
    items: [
      "Lavagem externa detalhada",
      "Limpeza e condicionamento das caixas de roda",
      "Limpeza detalhada de emblemas, cantos e frisos",
      "Remoção de piche",
      "Descontaminação com claybar",
      "Descontaminação ferrosa das rodas",
      "Aspiração interna e limpeza dos tapetes",
      "Selagem dos pneus",
      "Limpeza dos plásticos internos com bactericida (portas, painel e colunas)",
      "Revitalização dos plásticos internos e externos",
      "Cera em pasta de carnaúba com proteção de 4 meses"
    ]
  },
  {
    id: "couro", type: "lavagem", name: "Lavagem", highlight: "para Couro", sub: "Para carros com bancos em couro",
    prices: { P: 200, M: 220, G: 240 },
    items: [
      "Tudo da Lavagem Premium",
      "Higienização e hidratação do couro",
      "Limpeza dos plásticos internos com bactericida",
      "Cera em pasta de carnaúba com proteção de 4 meses"
    ]
  },
  {
    id: "master", type: "tratamento", name: "Tratamento", highlight: "Master", sub: "Enceramento técnico + restauração de faróis",
    prices: { P: 350, M: 380, G: 400 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Remoção de manchas de chuva ácida dos vidros",
      "Limpeza interna com bactericida",
      "Hidratação do couro (se possuir)",
      "Enceramento técnico com máquina: elimina até 50% dos microriscos",
      "Proteção da pintura por até 4 meses",
      "Cristalização dos faróis: até 90% mais visibilidade",
      "Verniz cerâmico no farol com proteção de até 1 ano"
    ]
  },
  {
    id: "gold", type: "tratamento", name: "Tratamento", highlight: "Gold", sub: "Polimento comercial",
    prices: { P: 350, M: 400, G: 450 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Aspiração interna e limpeza dos tapetes",
      "Selagem dos pneus",
      "Polimento comercial: elimina 70% das imperfeições",
      "Aplicação de cera Blend All in One",
      "Proteção da pintura por até 6 meses"
    ]
  },
  {
    id: "titanium", type: "tratamento", name: "Tratamento", highlight: "Titanium", sub: "Tratamento interno + polimento técnico",
    prices: { P: 650, M: 700, G: 790 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Limpeza interna com bactericida",
      "Limpeza do forro do teto",
      "Revitalização dos plásticos internos e externos",
      "Hidratação do couro (se possuir)",
      "Polimento técnico ou cristalização de pintura",
      "Aplicação de Sinergy Paint (coating em spray)",
      "Proteção da pintura por até 12 meses"
    ]
  },
  {
    id: "protection", type: "tratamento", name: "Protection", highlight: "Premium", sub: "Vitrificação completa com 3 anos de proteção",
    prices: { P: 1100, M: 1200, G: 1500 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Remoção de manchas de chuva ácida dos vidros",
      "Polimento técnico: elimina o máximo de imperfeições",
      "Coating nanocerâmico VX45 na pintura",
      "Alto brilho, repelência e proteção UV",
      "Durabilidade de 3 anos",
      "Coating cerâmico V-Plastic (Vonixx) nos plásticos externos, com até 1 ano de proteção"
    ]
  },
  {
    id: "gt", type: "tratamento", name: "GT", highlight: "Exclusive", sub: "Vitrificação + tratamento interno + faróis", tag: "Completo",
    prices: { P: 1500, M: 1700, G: 1800 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Remoção de manchas de chuva ácida dos vidros",
      "Limpeza interna com bactericida e limpeza do forro do teto",
      "Hidratação do couro e higienização dos bancos de tecido (se possuir)",
      "Polimento técnico ou cristalização de pintura",
      "Coating nanocerâmico VX45 com 3 anos de durabilidade",
      "Cristalização e vitrificação dos faróis",
      "Vitrificação dos plásticos externos com V-Plastic (Vonixx)",
      "Brinde: aromatizante Areon"
    ]
  }
];

const EXTRAS = [
  { id: "bancos", name: "Lavagem dos bancos de tecido", price: 300 },
  { id: "hidratacao", name: "Limpeza e hidratação do couro", price: 150 },
  { id: "motor", name: "Lavagem do motor", price: 80 },
  { id: "farol", name: "Restauração do farol", price: 170 },
  { id: "jet-lav", name: "Lavagem de manutenção de jet ski", price: 50 },
  { id: "jet-pol", name: "Polimento técnico de jet ski", price: 390 },
  { id: "jet-vit", name: "Vitrificação completa de jet ski (3 anos)", price: 650 }
];

const ONLY_EXTRAS = "avulso";
const WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const serviceTitle = (s) => `${s.name} ${s.highlight}`;
const fullTitle = (s) => s.vehicle === "moto" ? `${serviceTitle(s)} (moto)` : serviceTitle(s);
const vehicleOf = (id) => (findService(id) || {}).vehicle || "carro";
const findService = (id) => SERVICES.find((x) => x.id === id) || MOTO_SERVICES.find((x) => x.id === id);
const sizeLabel = (vehicle, size) => SIZES[vehicle || "carro"][size].label;
const pad = (n) => String(n).padStart(2, "0");
const isoDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromIso = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
const formatDate = (iso) => { const d = fromIso(iso); return `${WEEK[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth() + 1)}`; };

/* Camada de dados: trocar estas funções por chamadas ao Supabase quando o cliente aprovar */
const Store = {
  all() {
    try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)) || []; }
    catch { return []; }
  },
  save(list) {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(list)); } catch {}
  },
  add(item) { const list = Store.all(); list.push(item); Store.save(list); },
  remove(id) { Store.save(Store.all().filter((a) => a.id !== id)); },
  seed() {
    const base = new Date();
    const next = (offset) => {
      const d = new Date(base);
      d.setDate(d.getDate() + offset);
      while (!CONFIG.days[d.getDay()].length) d.setDate(d.getDate() + 1);
      return isoDate(d);
    };
    Store.save([
      { id: "demo1", code: "DM-1001", demo: true, date: next(1), time: "manha", service: "premium", size: "M", extras: [], name: "Rafael Souza", phone: "(84) 9 9999-0001", car: "Corolla prata", total: 170 },
      { id: "demo2", code: "DM-1002", demo: true, date: next(1), time: "tarde", service: "completa", size: "P", extras: ["motor"], name: "Ana Lima", phone: "(84) 9 9999-0002", car: "HB20 branco", total: 160 },
      { id: "demo3", code: "DM-1003", demo: true, date: next(2), time: "manha", service: "protection", size: "G", extras: [], name: "Carlos Mendes", phone: "(84) 9 9999-0003", car: "SW4 preta", total: 1500 }
    ]);
  }
};

/* serviços */
const brlShort = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const catalogs = {
  carro: { grid: "#servicesGrid", picker: "#sizePicker", hint: "#sizeHint", size: "P", filter: "lavagem" },
  moto: { grid: "#motoGrid", picker: "#motoSizePicker", hint: "#motoSizeHint", size: "P", filter: "todos" }
};

function cardPrice(s, size) {
  const v = s.prices[size];
  return v ? brlShort(v) : "Sob consulta";
}

function cardCta(s, size) {
  if (s.prices[size]) return `<a href="#agendar" class="pill" data-book="${s.id}">Agendar</a>`;
  const msg = encodeURIComponent(`Olá! Quero saber o valor do ${serviceTitle(s)} para moto de porte ${size}.`);
  return `<a href="https://wa.me/${CONFIG.whatsapp}?text=${msg}" target="_blank" rel="noopener" class="pill pill--light" data-consult>Consultar valor</a>`;
}

function renderCatalog(vehicle) {
  const c = catalogs[vehicle];
  const source = vehicle === "moto" ? MOTO_SERVICES : SERVICES;
  const list = source.filter((s) => c.filter === "todos" || s.type === c.filter);
  $(c.grid).innerHTML = list.map((s) => `
    <article class="card ${s.tag ? "is-featured" : ""}" data-id="${s.id}">
      ${s.tag ? `<span class="card__tag">${s.tag}</span>` : ""}
      ${s.name === "Lavagem" || s.name === "Tratamento" ? "" : `<p class="card__kind">Tratamento</p>`}
      <h3 class="card__name">${serviceTitle(s)}</h3>
      <p class="card__sub">${s.sub}</p>
      <p class="card__price"><span>Porte ${c.size}</span><strong>${cardPrice(s, c.size)}</strong></p>
      <div class="card__ctas">
        ${cardCta(s, c.size)}
        <button type="button" class="card__more" data-more aria-expanded="false">O que está incluso</button>
      </div>
      <div class="card__list"><ul>${s.items.map((it) => `<li>${it}</li>`).join("")}</ul></div>
    </article>`).join("");
  updateHint(vehicle);
}

function updateHint(vehicle) {
  const c = catalogs[vehicle];
  $(c.hint).textContent = `Porte ${c.size}: ${SIZES[vehicle][c.size].examples}`;
}

function updatePrices(vehicle) {
  const c = catalogs[vehicle];
  $$(`${c.grid} .card`).forEach((card) => {
    const s = findService(card.dataset.id);
    const strong = card.querySelector(".card__price strong");
    strong.classList.add("is-changing");
    setTimeout(() => {
      strong.textContent = cardPrice(s, c.size);
      card.querySelector(".card__price span").textContent = `Porte ${c.size}`;
      card.querySelector(".card__ctas .pill").outerHTML = cardCta(s, c.size);
      strong.classList.remove("is-changing");
    }, 180);
  });
  updateHint(vehicle);
}

function bindCatalog(vehicle) {
  const c = catalogs[vehicle];
  $$(`${c.picker} button`).forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.size === c.size) return;
    $$(`${c.picker} button`).forEach((x) => x.classList.toggle("is-active", x === b));
    c.size = b.dataset.size;
    updatePrices(vehicle);
  }));
  $(c.grid).addEventListener("click", (e) => {
    const more = e.target.closest("[data-more]");
    if (more) {
      const card = more.closest(".card");
      const open = card.classList.toggle("is-open");
      more.textContent = open ? "Ocultar itens" : "O que está incluso";
      more.setAttribute("aria-expanded", open);
    }
    const book = e.target.closest("[data-book]");
    if (book) { e.preventDefault(); preselect(book.dataset.book, c.size); }
  });
  renderCatalog(vehicle);
}

function initServices() {
  $$(".tab").forEach((t) => t.addEventListener("click", () => {
    if (t.classList.contains("is-active")) return;
    $$(".tab").forEach((x) => {
      x.classList.toggle("is-active", x === t);
      x.setAttribute("aria-selected", x === t);
    });
    catalogs.carro.filter = t.dataset.filter;
    renderCatalog("carro");
  }));
  $("#extrasList").innerHTML = EXTRAS.map((x) => `<li><span>${x.name}</span><strong>${brlShort(x.price)}</strong></li>`).join("");
  bindCatalog("carro");
  bindCatalog("moto");
}

/* agendamento */
const state = { step: 1, vehicle: "carro", service: null, size: null, extras: [], date: null, time: null };

function getService() { return findService(state.service); }

function calcTotal() {
  const s = getService();
  const base = s && state.size ? s.prices[state.size] : 0;
  const extras = state.extras.reduce((sum, id) => sum + EXTRAS.find((x) => x.id === id).price, 0);
  return base + extras;
}

function renderServiceChoices() {
  const source = state.vehicle === "moto" ? MOTO_SERVICES : SERVICES;
  const opts = source.map((s) => `
    <label class="choice">
      <input type="radio" name="service" value="${s.id}" ${state.service === s.id ? "checked" : ""}>
      <span class="choice__name">${serviceTitle(s)}<small>${s.sub}</small></span>
      <span class="choice__price">${brlShort(s.prices.P)}+</span>
    </label>`).join("");
  const avulso = state.vehicle === "carro" ? `
    <label class="choice">
      <input type="radio" name="service" value="${ONLY_EXTRAS}" ${state.service === ONLY_EXTRAS ? "checked" : ""}>
      <span class="choice__name">Só serviços adicionais<small>Motor, farol, bancos, jet ski e outros</small></span>
      <span class="choice__price">na etapa 2</span>
    </label>` : "";
  $("#bkServices").innerHTML = opts + avulso;
}

function renderSizeChoices() {
  const s = getService();
  $("#bkSizes").innerHTML = Object.entries(SIZES[state.vehicle]).map(([k, v]) => {
    const off = s && !s.prices[k];
    return `
    <label class="choice ${off ? "is-off" : ""}">
      <input type="radio" name="size" value="${k}" ${state.size === k ? "checked" : ""} ${off ? "disabled" : ""}>
      <span class="choice__name">${k}</span>
      <span class="choice__price">${off ? "Sob consulta pelo WhatsApp" : v.examples}</span>
    </label>`;
  }).join("");
}

function renderExtraChoices() {
  const moto = state.vehicle === "moto";
  $("#bkExtrasNote").textContent = moto
    ? "Os adicionais são para carros e jet ski. Para a moto, é só seguir."
    : "Opcional. Pode seguir sem marcar nada.";
  $("#bkExtras").style.display = moto ? "none" : "";
}

function setVehicle(vehicle) {
  if (state.vehicle === vehicle) return;
  state.vehicle = vehicle;
  state.service = null;
  state.size = null;
  state.extras = [];
  $$("#bkExtras input").forEach((i) => { i.checked = false; });
  $$("#bkVehicle button").forEach((b) => b.classList.toggle("is-active", b.dataset.vehicle === vehicle));
  $("#bkSizeTitle").style.display = "";
  $("#bkSizes").style.display = "";
  renderServiceChoices();
  renderSizeChoices();
  renderExtraChoices();
  updateSummary();
}

function renderBookingOptions() {
  renderServiceChoices();
  renderSizeChoices();
  $("#bkExtras").innerHTML = EXTRAS.map((x) => `
    <label class="choice">
      <input type="checkbox" name="extra" value="${x.id}">
      <span class="choice__name">${x.name}</span>
      <span class="choice__price">+ ${brlShort(x.price)}</span>
    </label>`).join("");
  renderExtraChoices();

  $$("#bkVehicle button").forEach((b) => b.addEventListener("click", () => { setVehicle(b.dataset.vehicle); clearError(); }));
  $("#bkServices").addEventListener("change", (e) => {
    state.service = e.target.value;
    const needsSize = state.service !== ONLY_EXTRAS;
    $("#bkSizeTitle").style.display = needsSize ? "" : "none";
    $("#bkSizes").style.display = needsSize ? "" : "none";
    const s = getService();
    if (!needsSize || (s && state.size && !s.prices[state.size])) state.size = null;
    renderSizeChoices();
    state.time = null;
    clearError();
    updateSummary();
  });
  $("#bkSizes").addEventListener("change", (e) => { state.size = e.target.value; clearError(); updateSummary(); });
  $("#bkExtras").addEventListener("change", () => {
    state.extras = $$("#bkExtras input:checked").map((i) => i.value);
    clearError();
    updateSummary();
  });
}

function availableShifts(iso) {
  const now = new Date();
  const isToday = iso === isoDate(now);
  return (CONFIG.days[fromIso(iso).getDay()] || []).filter((k) => !isToday || now.getHours() < CONFIG.shifts[k].end - 1);
}

function renderDays() {
  const wrap = $("#bkDays");
  const today = new Date();
  let html = "";
  for (let i = 0; i < CONFIG.daysAhead; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = isoDate(d);
    const closed = !availableShifts(iso).length;
    const label = i === 0 ? "Hoje" : WEEK[d.getDay()];
    html += `<button type="button" class="day ${state.date === iso ? "is-active" : ""}" data-date="${iso}" ${closed ? "disabled" : ""}>
      <span>${label}</span><strong>${pad(d.getDate())}</strong><small>${closed ? "Fechado" : MONTHS[d.getMonth()]}</small>
    </button>`;
  }
  wrap.innerHTML = html;
}

function renderSlots() {
  const wrap = $("#bkSlots");
  if (!state.date) { wrap.innerHTML = `<p class="slots__empty">Selecione um dia acima.</p>`; return; }
  const open = availableShifts(state.date);
  wrap.innerHTML = Object.entries(CONFIG.shifts).map(([k, v]) => {
    const off = !open.includes(k);
    return `<button type="button" class="shift ${state.time === k ? "is-active" : ""}" data-time="${k}" ${off ? "disabled" : ""}>
      <strong>${v.label}</strong><span>${off ? "Indisponível" : v.range}</span>
    </button>`;
  }).join("");
}

function initDateTime() {
  $("#bkDays").addEventListener("click", (e) => {
    const b = e.target.closest(".day");
    if (!b || b.disabled) return;
    state.date = b.dataset.date;
    if (!availableShifts(state.date).includes(state.time)) state.time = null;
    renderDays();
    renderSlots();
    clearError();
    updateSummary();
  });
  $("#bkSlots").addEventListener("click", (e) => {
    const b = e.target.closest(".shift");
    if (!b || b.disabled) return;
    state.time = b.dataset.time;
    renderSlots();
    clearError();
    updateSummary();
  });
}

function updateSummary() {
  const s = getService();
  $("#sService").textContent = state.service === ONLY_EXTRAS ? "Só serviços adicionais" : s ? fullTitle(s) : "-";
  $("#sSize").textContent = state.size ? `${state.size} - ${sizeLabel(state.vehicle, state.size)}` : "-";
  $("#sExtras").textContent = state.extras.length
    ? state.extras.map((id) => EXTRAS.find((x) => x.id === id).name).join(", ")
    : "Nenhum";
  $("#sDate").textContent = state.date ? formatDate(state.date) : "-";
  $("#sTime").textContent = state.time ? shiftText(state.time) : "-";
  $("#sTotal").textContent = brl(calcTotal());
  $("#sTotalMini").textContent = brl(calcTotal());
}

function showError(msg) { $("#formError").textContent = msg; }
function clearError() { $("#formError").textContent = ""; }

function validateStep(step) {
  if (step === 1) {
    if (!state.service) return "Escolha um serviço para continuar.";
    if (state.service !== ONLY_EXTRAS && !state.size) return "Selecione o porte do seu veículo.";
  }
  if (step === 2 && state.service === ONLY_EXTRAS && !state.extras.length) {
    return "Marque pelo menos um serviço adicional.";
  }
  if (step === 3) {
    if (!state.date) return "Escolha o dia do atendimento.";
    if (!state.time) return "Escolha o turno: manhã ou tarde.";
  }
  if (step === 4) {
    const fields = [["#fName", (v) => v.trim().length >= 2], ["#fPhone", (v) => v.replace(/\D/g, "").length >= 10], ["#fCar", (v) => v.trim().length >= 2]];
    let ok = true;
    fields.forEach(([sel, test]) => {
      const el = $(sel);
      const valid = test(el.value);
      el.classList.toggle("is-invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) return `Preencha nome, WhatsApp e modelo ${state.vehicle === "moto" ? "da moto" : "do carro"}.`;
  }
  return "";
}

function goTo(step, scroll = true) {
  state.step = step;
  $$(".step").forEach((f) => f.classList.toggle("is-active", Number(f.dataset.step) === step));
  $$("#stepsNav li").forEach((li) => {
    const n = Number(li.dataset.step);
    li.classList.toggle("is-active", n === step);
    li.classList.toggle("is-done", n < step);
  });
  $(".booking__actions").classList.toggle("has-back", step > 1);
  $("#btnNext").textContent = step === 4 ? "Confirmar agendamento" : "Continuar";
  if (step === 3) { renderDays(); renderSlots(); }
  clearError();
  const top = $("#bookingForm").getBoundingClientRect().top;
  if (scroll && (top < 0 || top > window.innerHeight * 0.6)) {
    window.scrollTo({ top: window.scrollY + top - 72, behavior: "smooth" });
  }
}

function buildMessage(a) {
  const s = findService(a.service);
  const lines = [
    "Olá, DM Estética Automotiva! Quero confirmar meu agendamento:",
    "",
    `Protocolo: ${a.code}`,
    `Serviço: ${s ? fullTitle(s) : "Só serviços adicionais"}`
  ];
  if (a.size) lines.push(`Porte: ${a.size} (${sizeLabel(a.vehicle, a.size)})`);
  if (a.extras.length) lines.push(`Adicionais: ${a.extras.map((id) => EXTRAS.find((x) => x.id === id).name).join(", ")}`);
  lines.push(
    `Dia: ${formatDate(a.date)}`,
    `Turno: ${shiftText(a.time)}`,
    `Veículo: ${a.car}${a.plate ? ` - ${a.plate}` : ""}`,
    `Nome: ${a.name}`,
    `Total estimado: ${brl(a.total)}`
  );
  if (a.notes) lines.push(`Obs.: ${a.notes}`);
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function confirmBooking() {
  const appt = {
    id: String(Date.now()),
    code: `DM-${String(Date.now()).slice(-5)}`,
    date: state.date,
    time: state.time,
    vehicle: state.vehicle,
    service: state.service,
    size: state.size,
    extras: [...state.extras],
    name: $("#fName").value.trim(),
    phone: $("#fPhone").value.trim(),
    car: $("#fCar").value.trim(),
    plate: $("#fPlate").value.trim().toUpperCase(),
    notes: $("#fNotes").value.trim(),
    total: calcTotal(),
    createdAt: new Date().toISOString()
  };
  Store.add(appt);

  const link = buildMessage(appt);
  $("#successText").textContent = `${appt.name.split(" ")[0]}, seu pedido para ${formatDate(appt.date)}, no turno da ${CONFIG.shifts[appt.time].label.toLowerCase()}, foi registrado. Envie a mensagem no WhatsApp para a equipe confirmar.`;
  $("#successCode").textContent = appt.code;
  $("#successWa").href = link;
  $(".booking__wrap").hidden = true;
  $("#success").hidden = false;
  $("#agendar").scrollIntoView({ behavior: "smooth" });
  window.open(link, "_blank", "noopener");
}

function resetBooking() {
  Object.assign(state, { step: 1, service: null, size: null, extras: [], date: null, time: null });
  $("#bookingForm").reset();
  const v = state.vehicle;
  state.vehicle = null;
  setVehicle(v || "carro");
  $$(".field input").forEach((i) => i.classList.remove("is-invalid"));
  $("#bkSizes").style.display = "";
  $("#bkSizeTitle").style.display = "";
  $("#success").hidden = true;
  $(".booking__wrap").hidden = false;
  updateSummary();
  goTo(1, false);
}

function preselect(serviceId, size) {
  resetBooking();
  setVehicle(vehicleOf(serviceId));
  state.service = serviceId;
  state.size = size;
  renderServiceChoices();
  renderSizeChoices();
  updateSummary();
  goTo(2);
}

function phoneMask(e) {
  let v = e.target.value.replace(/\D/g, "").slice(0, 11);
  if (v.length > 6) v = v.replace(/^(\d{2})(\d)(\d{4})(\d{0,4}).*/, "($1) $2 $3-$4");
  else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  else if (v.length) v = v.replace(/^(\d*)/, "($1");
  e.target.value = v;
}

function initBooking() {
  renderBookingOptions();
  initDateTime();
  $("#fPhone").addEventListener("input", phoneMask);
  $$(".field input").forEach((i) => i.addEventListener("input", () => i.classList.remove("is-invalid")));
  $("#btnNext").addEventListener("click", () => {
    const err = validateStep(state.step);
    if (err) return showError(err);
    if (state.step < 4) goTo(state.step + 1);
    else confirmBooking();
  });
  $("#btnBack").addEventListener("click", () => state.step > 1 && goTo(state.step - 1));
  $("#stepsNav").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li && Number(li.dataset.step) < state.step) goTo(Number(li.dataset.step));
  });
  $("#btnNew").addEventListener("click", resetBooking);
  updateSummary();
}

/* painel demo */
function renderPanel() {
  const order = (t) => (t === "tarde" ? "2" : "1");
  const list = Store.all().sort((a, b) => (a.date + order(a.time)).localeCompare(b.date + order(b.time)));
  const box = $("#panelList");
  if (!list.length) { box.innerHTML = `<p class="panel__empty">Nenhum agendamento por enquanto.</p>`; return; }
  box.innerHTML = list.map((a) => {
    const s = findService(a.service);
    const d = fromIso(a.date);
    return `
      <div class="appt">
        <div class="appt__date"><strong>${pad(d.getDate())}/${pad(d.getMonth() + 1)}</strong><span>${WEEK[d.getDay()]} &middot; ${CONFIG.shifts[a.time] ? CONFIG.shifts[a.time].label : a.time}</span></div>
        <div class="appt__info">
          <strong>${a.name}${a.demo ? " <small>exemplo</small>" : ""}</strong>
          <span>${s ? fullTitle(s) : "Só serviços adicionais"}${a.size ? ` &middot; Porte ${a.size}` : ""} &middot; ${a.car} &middot; ${a.phone}</span>
        </div>
        <div class="appt__side"><b>${brl(a.total)}</b><button type="button" class="appt__del" data-del="${a.id}">Cancelar</button></div>
      </div>`;
  }).join("");
}

function initPanel() {
  const panel = $("#panel");
  const open = () => { renderPanel(); panel.hidden = false; document.body.style.overflow = "hidden"; };
  const close = () => { panel.hidden = true; document.body.style.overflow = ""; };
  $("#openPanel").addEventListener("click", open);
  $("#closePanel").addEventListener("click", close);
  panel.addEventListener("click", (e) => { if (e.target === panel) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) close(); });
  $("#panelList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-del]");
    if (!b) return;
    Store.remove(b.dataset.del);
    renderPanel();
    if (state.step === 3) renderSlots();
  });
  $("#resetDemo").addEventListener("click", () => { Store.seed(); renderPanel(); if (state.step === 3) renderSlots(); });
}

function initHero() {
  const hero = $(".hero");
  const header = $(".header");
  const video = $("#heroVideo");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 20);
    if (!reduce) hero.style.setProperty("--p", Math.min(1, y / hero.offsetHeight).toFixed(3));
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();

  const keepPlaying = () => { if (video.paused) video.play().catch(() => {}); };
  video.addEventListener("pause", () => setTimeout(keepPlaying, 50));
  document.addEventListener("visibilitychange", () => { if (!document.hidden) keepPlaying(); });
  window.addEventListener("touchstart", keepPlaying, { once: true, passive: true });
  keepPlaying();
}

function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

function initReels() {
  const vids = $$("video[data-src]");
  const start = (v) => {
    if (!v.src) { v.src = v.dataset.src; v.load(); }
    v.play().catch(() => {});
  };
  vids.forEach((v) => v.addEventListener("pause", () => { if (v.src) setTimeout(() => v.play().catch(() => {}), 50); }));
  if (!("IntersectionObserver" in window)) { vids.forEach(start); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { start(en.target); io.unobserve(en.target); } });
  }, { rootMargin: "400px 0px" });
  vids.forEach((v) => io.observe(v));
  document.addEventListener("visibilitychange", () => { if (!document.hidden) vids.forEach((v) => v.src && v.play().catch(() => {})); });
}

function initFloat() {
  const btn = $(".wa-float");
  const targets = [$("#agendar"), $(".footer")];
  if (!("IntersectionObserver" in window)) return;
  const visible = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => en.isIntersecting ? visible.add(en.target) : visible.delete(en.target));
    btn.classList.toggle("is-hidden", visible.size > 0);
  }, { threshold: 0.15 });
  targets.forEach((t) => io.observe(t));
}

/* menu */
function initNav() {
  const toggle = $("#navToggle");
  const nav = $("#nav");
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = open ? "hidden" : "";
    $(".header").classList.toggle("is-menu", open);
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  $$("#nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) setOpen(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 760 && nav.classList.contains("is-open")) setOpen(false); });
}

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  try { if (!localStorage.getItem(CONFIG.storageKey)) Store.seed(); } catch {}
  $("#year").textContent = new Date().getFullYear();
  $("#hoursText").innerHTML = CONFIG.hoursText;
  initNav();
  initHero();
  initReveal();
  initFloat();
  initReels();
  initServices();
  initBooking();
  initPanel();
});
