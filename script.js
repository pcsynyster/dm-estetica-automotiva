const CONFIG = {
  whatsapp: "5584989861905",
  storageKey: "dm_agendamentos",
  daysAhead: 14,
  hours: {
    0: null,
    1: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
    2: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
    3: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
    4: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
    5: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
    6: ["08:00", "09:00", "10:00", "11:00"]
  },
  hoursText: "Segunda a sexta, 08h às 17h &middot; Sábado, 08h às 12h",
  treatmentSlots: ["08:00", "09:00"]
};

const SIZES = {
  P: { label: "Pequeno", examples: "Hatches e compactos: Mobi, Onix, HB20, Polo" },
  M: { label: "Médio", examples: "Sedãs e SUVs compactos: Corolla, Civic, Creta, T-Cross" },
  G: { label: "Grande", examples: "SUVs grandes e picapes: SW4, Hilux, Ranger, Commander" }
};

const SERVICES = [
  {
    id: "completa", type: "lavagem", name: "Lavagem", highlight: "Completa", sub: "O essencial bem feito",
    prices: { P: 80, M: 100, G: 120 },
    items: [
      "Lavagem externa com shampoo automotivo",
      "Limpeza de rodas e caixas",
      "Aspiração interna, tapetes e painel",
      "Selagem dos pneus",
      "Revitalização dos plásticos internos e externos",
      "Selagem na pintura com brilho e proteção"
    ]
  },
  {
    id: "premium", type: "lavagem", name: "Lavagem", highlight: "Premium", sub: "Detalhada com cera de carnaúba", tag: "Mais pedido",
    prices: { P: 150, M: 170, G: 190 },
    items: [
      "Lavagem externa detalhada",
      "Limpeza e condicionamento das caixas de roda",
      "Emblemas, cantos e frisos detalhados",
      "Remoção de piche",
      "Descontaminação com claybar",
      "Descontaminação ferrosa das rodas",
      "Aspiração interna e limpeza dos tapetes",
      "Selagem dos pneus",
      "Plásticos internos com bactericida (portas, painel e colunas)",
      "Revitalização dos plásticos internos e externos",
      "Cera em pasta de carnaúba com proteção de 4 meses"
    ]
  },
  {
    id: "couro", type: "lavagem", name: "Lavagem", highlight: "Couro", sub: "Para carros com bancos em couro",
    prices: { P: 200, M: 220, G: 240 },
    items: [
      "Tudo da Lavagem Premium",
      "Higienização e hidratação do couro",
      "Plásticos internos com bactericida",
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
      "Cera Blend All in One",
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
      "Aplicação de Sinergy Paint (coat spray)",
      "Proteção da pintura por até 12 meses"
    ]
  },
  {
    id: "protection", type: "tratamento", name: "Protection", highlight: "Premium", sub: "Vitrificação completa de 3 anos",
    prices: { P: 1100, M: 1200, G: 1500 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Remoção de chuva ácida dos vidros",
      "Polimento técnico: elimina o máximo de imperfeições",
      "Coating nano cerâmico VX45 (alcance) na pintura",
      "Alto brilho, repelência e proteção UV",
      "Durabilidade de 3 anos",
      "Coating cerâmico V-Plastic (Vonixx) nos plásticos externos, até 1 ano"
    ]
  },
  {
    id: "gt", type: "tratamento", name: "GT", highlight: "Exclusive", sub: "Vitrificação + tratamento interno + faróis", tag: "Completo",
    prices: { P: 1500, M: 1700, G: 1800 },
    items: [
      "Lavagem detalhada com descontaminação completa",
      "Remoção de chuva ácida dos vidros",
      "Limpeza interna com bactericida e forro do teto",
      "Hidratação do couro e higienização de bancos de tecido",
      "Polimento técnico ou cristalização de pintura",
      "Coating nano cerâmico VX45 com 3 anos de durabilidade",
      "Cristalização e vitrificação dos faróis",
      "Vitrificação dos plásticos externos V-Plastic (Vonixx)",
      "Brinde aromático Areon"
    ]
  }
];

const EXTRAS = [
  { id: "bancos", name: "Lavagem dos bancos de tecido", price: 300 },
  { id: "hidratacao", name: "Limpeza e hidratação do couro", price: 150 },
  { id: "motor", name: "Lavagem do motor", price: 80 },
  { id: "farol", name: "Restauração do farol", price: 170 },
  { id: "jet-lav", name: "Lavagem de manutenção de jetski", price: 50 },
  { id: "jet-pol", name: "Polimento técnico de jetski", price: 390 },
  { id: "jet-vit", name: "Vitrificação completa de jetski (3 anos)", price: 650 }
];

const ONLY_EXTRAS = "avulso";
const WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const serviceTitle = (s) => `${s.name} ${s.highlight}`;
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
  isTaken(date, time) { return Store.all().some((a) => a.date === date && a.time === time); },
  seed() {
    const base = new Date();
    const next = (offset) => {
      const d = new Date(base);
      d.setDate(d.getDate() + offset);
      while (!CONFIG.hours[d.getDay()]) d.setDate(d.getDate() + 1);
      return isoDate(d);
    };
    Store.save([
      { id: "demo1", code: "DM-1001", demo: true, date: next(1), time: "09:00", service: "premium", size: "M", extras: [], name: "Rafael Souza", phone: "(84) 9 9999-0001", car: "Corolla prata", total: 170 },
      { id: "demo2", code: "DM-1002", demo: true, date: next(1), time: "14:00", service: "completa", size: "P", extras: ["motor"], name: "Ana Lima", phone: "(84) 9 9999-0002", car: "HB20 branco", total: 160 },
      { id: "demo3", code: "DM-1003", demo: true, date: next(2), time: "08:00", service: "protection", size: "G", extras: [], name: "Carlos Mendes", phone: "(84) 9 9999-0003", car: "SW4 preta", total: 1500 }
    ]);
  }
};

/* serviços */
let currentSize = "P";
let currentFilter = "lavagem";
const brlShort = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function renderServices() {
  const list = SERVICES.filter((s) => currentFilter === "todos" || s.type === currentFilter);
  $("#servicesGrid").innerHTML = list.map((s) => `
    <article class="card ${s.tag ? "is-featured" : ""}" data-id="${s.id}">
      ${s.tag ? `<span class="card__tag">${s.tag}</span>` : ""}
      <p class="card__kind">${s.type === "lavagem" ? "Lavagem" : "Tratamento"}</p>
      <h3 class="card__name">${serviceTitle(s)}</h3>
      <p class="card__sub">${s.sub}</p>
      <p class="card__price"><span>Porte ${currentSize}</span><strong>${brlShort(s.prices[currentSize])}</strong></p>
      <div class="card__ctas">
        <a href="#agendar" class="pill" data-book="${s.id}">Agendar</a>
        <button type="button" class="card__more" data-more aria-expanded="false">O que está incluso</button>
      </div>
      <div class="card__list"><ul>${s.items.map((it) => `<li>${it}</li>`).join("")}</ul></div>
    </article>`).join("");
  updateSizeHint();
}

function updateSizeHint() {
  $("#sizeHint").textContent = `Porte ${currentSize}: ${SIZES[currentSize].examples}`;
}

function updatePrices() {
  $$("#servicesGrid .card").forEach((card) => {
    const s = SERVICES.find((x) => x.id === card.dataset.id);
    const strong = card.querySelector(".card__price strong");
    strong.classList.add("is-changing");
    setTimeout(() => {
      strong.textContent = brlShort(s.prices[currentSize]);
      card.querySelector(".card__price span").textContent = `Porte ${currentSize}`;
      strong.classList.remove("is-changing");
    }, 180);
  });
  updateSizeHint();
}

function initServices() {
  $$(".tab").forEach((t) => t.addEventListener("click", () => {
    if (t.classList.contains("is-active")) return;
    $$(".tab").forEach((x) => {
      x.classList.toggle("is-active", x === t);
      x.setAttribute("aria-selected", x === t);
    });
    currentFilter = t.dataset.filter;
    renderServices();
  }));
  $$("#sizePicker button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.size === currentSize) return;
    $$("#sizePicker button").forEach((x) => x.classList.toggle("is-active", x === b));
    currentSize = b.dataset.size;
    updatePrices();
  }));
  $("#servicesGrid").addEventListener("click", (e) => {
    const more = e.target.closest("[data-more]");
    if (more) {
      const card = more.closest(".card");
      const open = card.classList.toggle("is-open");
      more.textContent = open ? "Ocultar itens" : "O que está incluso";
      more.setAttribute("aria-expanded", open);
    }
    const book = e.target.closest("[data-book]");
    if (book) { e.preventDefault(); preselect(book.dataset.book, currentSize); }
  });
  $("#extrasList").innerHTML = EXTRAS.map((x) => `<li><span>${x.name}</span><strong>${brlShort(x.price)}</strong></li>`).join("");
  renderServices();
}

/* agendamento */
const state = { step: 1, service: null, size: null, extras: [], date: null, time: null };

function getService() { return SERVICES.find((s) => s.id === state.service); }

function calcTotal() {
  const s = getService();
  const base = s && state.size ? s.prices[state.size] : 0;
  const extras = state.extras.reduce((sum, id) => sum + EXTRAS.find((x) => x.id === id).price, 0);
  return base + extras;
}

function renderBookingOptions() {
  const opts = SERVICES.map((s) => `
    <label class="choice">
      <input type="radio" name="service" value="${s.id}">
      <span class="choice__name">${serviceTitle(s)}<small>${s.sub}</small></span>
      <span class="choice__price">${brlShort(s.prices.P)}+</span>
    </label>`).join("");
  const avulso = `
    <label class="choice">
      <input type="radio" name="service" value="${ONLY_EXTRAS}">
      <span class="choice__name">Só serviço adicional<small>Motor, farol, bancos, jetski...</small></span>
      <span class="choice__price">ver etapa 2</span>
    </label>`;
  $("#bkServices").innerHTML = opts + avulso;

  $("#bkSizes").innerHTML = Object.entries(SIZES).map(([k, v]) => `
    <label class="choice">
      <input type="radio" name="size" value="${k}">
      <span class="choice__name">${k}</span>
      <span class="choice__price">${v.examples}</span>
    </label>`).join("");

  $("#bkExtras").innerHTML = EXTRAS.map((x) => `
    <label class="choice">
      <input type="checkbox" name="extra" value="${x.id}">
      <span class="choice__name">${x.name}</span>
      <span class="choice__price">+ ${brlShort(x.price)}</span>
    </label>`).join("");

  $("#bkServices").addEventListener("change", (e) => {
    state.service = e.target.value;
    const needsSize = state.service !== ONLY_EXTRAS;
    $("#bkSizeTitle").style.display = needsSize ? "" : "none";
    $("#bkSizes").style.display = needsSize ? "" : "none";
    if (!needsSize) state.size = null;
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

function availableSlots(iso) {
  const d = fromIso(iso);
  let slots = CONFIG.hours[d.getDay()] || [];
  const s = getService();
  if (s && s.type === "tratamento") slots = slots.filter((t) => CONFIG.treatmentSlots.includes(t));
  return slots;
}

function renderDays() {
  const wrap = $("#bkDays");
  const today = new Date();
  let html = "";
  for (let i = 0; i < CONFIG.daysAhead; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = isoDate(d);
    const closed = !CONFIG.hours[d.getDay()];
    const label = i === 0 ? "Hoje" : WEEK[d.getDay()];
    html += `<button type="button" class="day ${state.date === iso ? "is-active" : ""}" data-date="${iso}" ${closed ? "disabled" : ""}>
      <span>${label}</span><strong>${pad(d.getDate())}</strong><small>${closed ? "Fechado" : MONTHS[d.getMonth()]}</small>
    </button>`;
  }
  wrap.innerHTML = html;
}

function renderSlots() {
  const wrap = $("#bkSlots");
  const s = getService();
  $("#bkSlotNote").textContent = s && s.type === "tratamento"
    ? "Tratamentos exigem o veículo no estúdio durante o dia. Entrada pela manhã; o prazo de entrega é combinado com a equipe."
    : "Escolha o horário em que vai deixar o veículo.";
  if (!state.date) { wrap.innerHTML = `<p class="slots__empty">Selecione um dia acima.</p>`; return; }

  const now = new Date();
  const isToday = state.date === isoDate(now);
  const slots = availableSlots(state.date);
  wrap.innerHTML = slots.map((t) => {
    const [h, m] = t.split(":").map(Number);
    const past = isToday && (h * 60 + m) <= (now.getHours() * 60 + now.getMinutes() + 30);
    const taken = Store.isTaken(state.date, t);
    return `<button type="button" class="slot ${state.time === t ? "is-active" : ""}" data-time="${t}" ${past || taken ? "disabled" : ""} title="${taken ? "Horário ocupado" : ""}">${t}</button>`;
  }).join("") || `<p class="slots__empty">Sem horários neste dia.</p>`;
}

function initDateTime() {
  $("#bkDays").addEventListener("click", (e) => {
    const b = e.target.closest(".day");
    if (!b || b.disabled) return;
    state.date = b.dataset.date;
    state.time = null;
    renderDays();
    renderSlots();
    clearError();
    updateSummary();
  });
  $("#bkSlots").addEventListener("click", (e) => {
    const b = e.target.closest(".slot");
    if (!b || b.disabled) return;
    state.time = b.dataset.time;
    renderSlots();
    clearError();
    updateSummary();
  });
}

function updateSummary() {
  const s = getService();
  $("#sService").textContent = state.service === ONLY_EXTRAS ? "Só adicionais" : s ? serviceTitle(s) : "-";
  $("#sSize").textContent = state.size ? `${state.size} - ${SIZES[state.size].label}` : "-";
  $("#sExtras").textContent = state.extras.length
    ? state.extras.map((id) => EXTRAS.find((x) => x.id === id).name).join(", ")
    : "Nenhum";
  $("#sDate").textContent = state.date ? formatDate(state.date) : "-";
  $("#sTime").textContent = state.time || "-";
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
    if (!state.time) return "Escolha um horário disponível.";
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
    if (!ok) return "Preencha nome, WhatsApp e modelo do carro.";
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
  const s = SERVICES.find((x) => x.id === a.service);
  const lines = [
    "Olá, DM Estética Automotiva! Quero confirmar meu agendamento:",
    "",
    `Protocolo: ${a.code}`,
    `Serviço: ${s ? serviceTitle(s) : "Só adicionais"}`
  ];
  if (a.size) lines.push(`Porte: ${a.size} (${SIZES[a.size].label})`);
  if (a.extras.length) lines.push(`Adicionais: ${a.extras.map((id) => EXTRAS.find((x) => x.id === id).name).join(", ")}`);
  lines.push(
    `Data: ${formatDate(a.date)} às ${a.time}`,
    `Veículo: ${a.car}${a.plate ? ` - ${a.plate}` : ""}`,
    `Nome: ${a.name}`,
    `Total estimado: ${brl(a.total)}`
  );
  if (a.notes) lines.push(`Obs.: ${a.notes}`);
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function confirmBooking() {
  if (Store.isTaken(state.date, state.time)) {
    goTo(3);
    showError("Esse horário acabou de ser reservado. Escolha outro, por favor.");
    return;
  }
  const appt = {
    id: String(Date.now()),
    code: `DM-${String(Date.now()).slice(-5)}`,
    date: state.date,
    time: state.time,
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
  $("#successText").textContent = `${appt.name.split(" ")[0]}, seu horário de ${formatDate(appt.date)} às ${appt.time} está reservado. Envie a mensagem no WhatsApp para a equipe confirmar.`;
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
  const input = $(`#bkServices input[value="${serviceId}"]`);
  const sizeInput = $(`#bkSizes input[value="${size}"]`);
  if (input) input.checked = true;
  if (sizeInput) sizeInput.checked = true;
  state.service = serviceId;
  state.size = size;
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
  const list = Store.all().sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  const box = $("#panelList");
  if (!list.length) { box.innerHTML = `<p class="panel__empty">Nenhum agendamento por enquanto.</p>`; return; }
  box.innerHTML = list.map((a) => {
    const s = SERVICES.find((x) => x.id === a.service);
    const d = fromIso(a.date);
    return `
      <div class="appt">
        <div class="appt__date"><strong>${pad(d.getDate())}/${pad(d.getMonth() + 1)}</strong><span>${WEEK[d.getDay()]} ${a.time}</span></div>
        <div class="appt__info">
          <strong>${a.name}${a.demo ? " <small>exemplo</small>" : ""}</strong>
          <span>${s ? serviceTitle(s) : "Só adicionais"}${a.size ? ` &middot; Porte ${a.size}` : ""} &middot; ${a.car} &middot; ${a.phone}</span>
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

function initHeroStage() {
  const stage = $("#heroStage");
  if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  const update = () => {
    const rect = stage.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
    stage.style.setProperty("--p", p.toFixed(3));
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
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

function initMedia() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const v = en.target;
      if (en.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.05 });
  $$("video").forEach((v) => io.observe(v));
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
  initHeroStage();
  initReveal();
  initMedia();
  initFloat();
  initServices();
  initBooking();
  initPanel();
});
