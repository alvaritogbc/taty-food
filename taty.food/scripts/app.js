// ============================
// CONFIG
// ============================
const WHATSAPP_NUMBER = "5492646305405"; // Taty Food

// ============================
// HELPERS
// ============================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const money = (n) => `$ ${Number(n).toLocaleString("es-AR")}`;

// Extras globales (agregados del menú)
const EXTRAS_GLOBALES = [
  { name: "Medallón extra",  price: 2500 },
  { name: "Cheddar extra",   price: 1000 },
  { name: "Panceta extra",   price: 1000 },
  { name: "Extra papas",     price: 1200 },
  { name: "Pepinos",         price: 500  },
  { name: "Dip de mayo",     price: 500  },
  { name: "Dip de cheddar",  price: 1000 },
];

// ============================
// DATA — menú actualizado Taty Food
// ============================
const DATA = {

  burgers: [
    {
      id: "b1",
      name: "Hamburguesa Común",
      desc: "Pan de papa artesanal, medallón de carne, doble queso tybo, tomate y lechuga.",
      price: 6600,
      img: "img/burger-comun.jpg",
      remove: ["Tomate", "Lechuga", "Queso tybo"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b2",
      name: "Hamburguesa Cheese",
      desc: "Pan de papa artesanal, medallón de carne, triple cheddar, doble queso tybo, salsa thousand island.",
      price: 8200,
      img: "img/burger-cheese.jpg",
      remove: ["Queso tybo", "Cheddar", "Salsa thousand island"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b3",
      name: "Hamburguesa Especial",
      desc: "Pan de papa artesanal, medallón de carne, doble queso tybo, doble paleta cocida, lechuga, tomate y huevo.",
      price: 8200,
      img: "img/burger-especial.jpg",
      remove: ["Lechuga", "Tomate", "Huevo", "Paleta"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b4",
      name: "Hamburguesa Explosive",
      desc: "Pan de papa artesanal, medallón de carne, cebolla morada caramelizada, queso tybo, doble cheddar, panceta ahumada, huevo y barbacoa.",
      price: 9000,
      img: "img/burger-explosive.jpg",
      remove: ["Cebolla morada", "Panceta", "Huevo", "Barbacoa", "Cheddar"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b5",
      name: "Hamburguesa Big Taty",
      desc: "Pan de papa artesanal, medallón de carne, tomate, lechuga, triple cheddar, pepinillos, salsa taty.",
      price: 8500,
      img: "img/burger-bigtaty.jpg",
      remove: ["Tomate", "Lechuga", "Pepinillos", "Salsa taty"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b6",
      name: "Hamburguesa Scrappy",
      desc: "Pan de papa artesanal, medallón de carne, triple cheddar, salsa tasty casera, doble panceta ahumada, lechuga, tomate.",
      price: 9000,
      img: "img/burger-scrappy.jpg",
      remove: ["Lechuga", "Tomate", "Panceta", "Salsa casera"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b7",
      name: "Hamburguesa Cangri",
      desc: "Pan de papa artesanal, medallón de carne, doble cheddar, doble panceta ahumada, lechuga, tomate, huevo, cebolla morada, barbacoa y mayo de ajo.",
      price: 9500,
      img: "img/burger-cangri.jpg",
      remove: ["Lechuga", "Tomate", "Huevo", "Cebolla morada", "Barbacoa", "Mayo de ajo"],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "b8",
      name: "Hamburguesa Sweet",
      desc: "Pan de papa artesanal, medallón de carne, doble cheddar, salsa thousand island, mermelada bacon.",
      price: 9500,
      img: "img/burger-sweet.jpg",
      remove: ["Salsa thousand island", "Mermelada bacon", "Cheddar"],
      extras: EXTRAS_GLOBALES,
    },
  ],

  pachatas: [
    {
      id: "pa1",
      name: "Pachata de 30cm",
      desc: "Pachata artesanal de 30cm. Consultá el relleno disponible.",
      price: 11500,
      img: "img/pachata.jpg",
      remove: [],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "pa2",
      name: "Pachata + Papas + Mayo",
      desc: "Pachata de 30cm + porción de papas + mayo de ajo.",
      price: 12500,
      img: "img/pachata.jpg",
      remove: [],
      extras: EXTRAS_GLOBALES,
    },
  ],

  lomos: [
    {
      id: "lo1",
      name: "Lomo",
      desc: "Lomo tierno en pachata de 30cm con los ingredientes que elijas.",
      price: 15000,
      img: "img/lomo.jpg",
      remove: [],
      extras: EXTRAS_GLOBALES,
    },
    {
      id: "lo2",
      name: "Lomo + Papas + Mayo",
      desc: "Lomo en pachata de 30cm + porción de papas + mayo de ajo.",
      price: 16000,
      img: "img/lomo.jpg",
      remove: [],
      extras: EXTRAS_GLOBALES,
    },
  ],

  fries: [
    {
      id: "f1",
      name: "Bandeja Mediana",
      desc: "Porción mediana de papas fritas crocantes.",
      price: 6000,
      img: "img/papas-mediana.jpg",
      remove: ["Sal"],
      extras: [
        { name: "Dip de mayo",    price: 500  },
        { name: "Dip de cheddar", price: 1000 },
      ],
    },
    {
      id: "f2",
      name: "Bandeja Grande",
      desc: "Porción grande de papas fritas crocantes.",
      price: 7000,
      img: "img/papas-grande.jpg",
      remove: ["Sal"],
      extras: [
        { name: "Dip de mayo",    price: 500  },
        { name: "Dip de cheddar", price: 1000 },
      ],
    },
    {
      id: "f3",
      name: "Papas Bacon — Mediana",
      desc: "Papas fritas con bacon crujiente. Tamaño mediano.",
      price: 7800,
      img: "img/papas-bacon.jpg",
      remove: ["Bacon"],
      extras: [
        { name: "Extra bacon",    price: 1000 },
        { name: "Dip de mayo",    price: 500  },
        { name: "Dip de cheddar", price: 1000 },
      ],
    },
    {
      id: "f4",
      name: "Papas Bacon — Grande",
      desc: "Papas fritas con bacon crujiente. Tamaño grande.",
      price: 9000,
      img: "img/papas-bacon-grande.jpg",
      remove: ["Bacon"],
      extras: [
        { name: "Extra bacon",    price: 1000 },
        { name: "Dip de mayo",    price: 500  },
        { name: "Dip de cheddar", price: 1000 },
      ],
    },
  ],

  promos: [
    // ── Promos Hamburguesas (2x) ──
    {
      id: "pr1",
      name: "Promo 2× Especial",
      desc: "2 Hamburguesas Especial + papas + mayo de ajo.",
      price: 16000,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    {
      id: "pr2",
      name: "Promo 2× Cheese",
      desc: "2 Hamburguesas Cheese + papas + mayo de ajo.",
      price: 16000,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    {
      id: "pr3",
      name: "Promo 2× Explosive",
      desc: "2 Hamburguesas Explosive + papas + mayo de ajo.",
      price: 17600,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    {
      id: "pr4",
      name: "Promo 2× Scrappy",
      desc: "2 Hamburguesas Scrappy + papas + mayo de ajo.",
      price: 17600,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    {
      id: "pr5",
      name: "Promo 2× Big Taty",
      desc: "2 Hamburguesas Big Taty + papas + mayo de ajo.",
      price: 16500,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    {
      id: "pr6",
      name: "Promo 2× Cangri",
      desc: "2 Hamburguesas Cangri + papas + mayo de ajo.",
      price: 18500,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    {
      id: "pr7",
      name: "Promo 2× Sweet",
      desc: "2 Hamburguesas Sweet + papas + mayo de ajo.",
      price: 18500,
      img: "img/promo-burger.jpg",
      remove: [],
      extras: [{ name: "Extra cheddar", price: 1000 }],
    },
    // ── Promos Pachatas ──
    {
      id: "pr8",
      name: "2 Pachatas",
      desc: "2 pachatas de 30cm a elección.",
      price: 22000,
      img: "img/promo-pachata.jpg",
      remove: [],
      extras: [{ name: "Extra papas", price: 1200 }],
    },
    {
      id: "pr9",
      name: "3 Pachatas",
      desc: "3 pachatas de 30cm a elección.",
      price: 33000,
      img: "img/promo-pachata.jpg",
      remove: [],
      extras: [{ name: "Extra papas", price: 1200 }],
    },
    {
      id: "pr10",
      name: "4 Pachatas",
      desc: "4 pachatas de 30cm a elección.",
      price: 44000,
      img: "img/promo-pachata.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "pr11",
      name: "2 Pachatas + Papas",
      desc: "2 pachatas de 30cm + papas. ¡Mayo de ajo de regalo!",
      price: 25000,
      img: "img/promo-pachata.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "pr12",
      name: "3 Pachatas + Papas",
      desc: "3 pachatas de 30cm + papas. ¡Mayo de ajo de regalo!",
      price: 36000,
      img: "img/promo-pachata.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "pr13",
      name: "4 Pachatas + Papas",
      desc: "4 pachatas de 30cm + papas. ¡Mayo de ajo de regalo!",
      price: 46500,
      img: "img/promo-pachata.jpg",
      remove: [],
      extras: [],
    },
    // ── Promos Lomos ──
    {
      id: "pr14",
      name: "2 Lomos",
      desc: "2 lomos de 30cm a elección.",
      price: 28000,
      img: "img/promo-lomo.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "pr15",
      name: "3 Lomos",
      desc: "3 lomos de 30cm a elección.",
      price: 42000,
      img: "img/promo-lomo.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "pr16",
      name: "2 Lomos + Papas",
      desc: "2 lomos de 30cm + papas. ¡Mayo de ajo de regalo!",
      price: 31600,
      img: "img/promo-lomo.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "pr17",
      name: "3 Lomos + Papas",
      desc: "3 lomos de 30cm + papas. ¡Mayo de ajo de regalo!",
      price: 47000,
      img: "img/promo-lomo.jpg",
      remove: [],
      extras: [],
    },
  ],

  bebidas: [
    {
      id: "d1",
      name: "Coca Cola 1,5lts",
      desc: "Botella 1,5 litros bien fría.",
      price: 3000,
      img: "img/coca.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "d2",
      name: "Sprite 1,5lts",
      desc: "Botella 1,5 litros bien fría.",
      price: 3000,
      img: "img/sprite.jpg",
      remove: [],
      extras: [],
    },
    {
      id: "d3",
      name: "Cerveza Quilmes 710cc",
      desc: "Quilmes bien fría, 710cc.",
      price: 2600,
      img: "img/cerveza.jpg",
      remove: [],
      extras: [],
    },
  ],
};

// ============================
// STATE
// ============================
const state = {
  mode: "delivery",
  when: "asap",
  cart: [],
  activeProduct: null,
  qty: 1,
  remove: new Set(),
  extras: new Map(),
};

// ============================
// CART TOTALS
// ============================
function cartTotals() {
  let total = 0, count = 0;
  for (const item of state.cart) {
    count += item.qty;
    total += item.total;
  }
  return { total, count };
}

// ============================
// RENDER CARDS
// ============================
function buildCard(p) {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.id = p.id;

  div.innerHTML = `
    <div class="card-info">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">${money(p.price)}</div>
    </div>
    <div class="thumb">
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
  `;
  div.addEventListener("click", () => openProduct(p));
  return div;
}

function renderAll() {
  const map = [
    ["#list-burgers",  DATA.burgers],
    ["#list-pachatas", DATA.pachatas],
    ["#list-lomos",    DATA.lomos],
    ["#list-fries",    DATA.fries],
    ["#list-promos",   DATA.promos],
    ["#list-bebidas",  DATA.bebidas],
  ];
  for (const [sel, arr] of map) {
    const root = $(sel);
    if (!root) continue;
    root.innerHTML = "";
    arr.forEach((p) => root.appendChild(buildCard(p)));
  }
}

// ============================
// SEARCH
// ============================
function applySearch(q) {
  const term = q.trim().toLowerCase();
  const all = [
    ...DATA.burgers, ...DATA.pachatas, ...DATA.lomos,
    ...DATA.fries, ...DATA.promos, ...DATA.bebidas,
  ];
  const ids = new Set(
    all.filter((p) => (p.name + " " + p.desc).toLowerCase().includes(term)).map((p) => p.id)
  );

  let anyVisible = false;
  $$(".card").forEach((c) => {
    const ok = !term || ids.has(c.dataset.id);
    c.style.display = ok ? "" : "none";
    if (ok) anyVisible = true;
  });

  ["cat-burgers","cat-pachatas","cat-lomos","cat-fries","cat-promos","cat-bebidas"].forEach((id) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const vis = [...sec.querySelectorAll(".card")].some((c) => c.style.display !== "none");
    sec.style.display = term && !vis ? "none" : "";
  });

  const empty = $("#searchEmpty");
  if (empty) empty.classList.toggle("hidden", !term || anyVisible);
}

// ============================
// MODAL
// ============================
function openProduct(p) {
  state.activeProduct = p;
  state.qty = 1;
  state.remove = new Set();
  state.extras = new Map();
  $("#mNote").value = "";

  $("#mTitle").textContent = p.name;
  $("#mDesc").textContent = p.desc;
  $("#mBasePrice").textContent = money(p.price);
  $("#qty").textContent = "1";

  const mImg = $("#mImg");
  if (mImg) {
    mImg.src = p.img;
    mImg.alt = p.name;
  }

  const rBox = $("#removeBox");
  const r = $("#mRemove");
  r.innerHTML = "";
  if (p.remove && p.remove.length) {
    rBox.style.display = "";
    p.remove.forEach((name) => {
      const label = document.createElement("label");
      label.className = "check";
      label.innerHTML = `
        <input type="checkbox" />
        <div class="check-label"><span>${name}</span><small>Quitar</small></div>
      `;
      label.querySelector("input").addEventListener("change", (e) => {
        if (e.target.checked) state.remove.add(name);
        else state.remove.delete(name);
      });
      r.appendChild(label);
    });
  } else {
    rBox.style.display = "none";
  }

  const eBox = $("#extrasBox");
  const ex = $("#mExtras");
  ex.innerHTML = "";
  if (p.extras && p.extras.length) {
    eBox.style.display = "";
    p.extras.forEach((x) => {
      const label = document.createElement("label");
      label.className = "check";
      label.innerHTML = `
        <input type="checkbox" />
        <div class="check-label"><span>${x.name}</span><small>+ ${money(x.price)}</small></div>
      `;
      label.querySelector("input").addEventListener("change", (e) => {
        if (e.target.checked) state.extras.set(x.name, x.price);
        else state.extras.delete(x.name);
        refreshModalPrice();
      });
      ex.appendChild(label);
    });
  } else {
    eBox.style.display = "none";
  }

  refreshModalPrice();
  $("#modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function refreshModalPrice() {
  const p = state.activeProduct;
  if (!p) return;
  const extrasSum = [...state.extras.values()].reduce((a, b) => a + b, 0);
  $("#mPrice").textContent = money((p.price + extrasSum) * state.qty);
}

function closeModal() {
  $("#modal").classList.add("hidden");
  document.body.style.overflow = "";
}

// ============================
// CART
// ============================
function addToCart() {
  const p = state.activeProduct;
  if (!p) return;

  const note       = $("#mNote").value.trim();
  const removeArr  = [...state.remove];
  const extrasArr  = [...state.extras.entries()].map(([name, price]) => ({ name, price }));
  const unit       = p.price + extrasArr.reduce((a, x) => a + x.price, 0);

  state.cart.push({
    id: crypto.randomUUID(),
    productId: p.id,
    name: p.name,
    qty: state.qty,
    unit,
    total: unit * state.qty,
    remove: removeArr,
    extras: extrasArr,
    note,
  });

  closeModal();
  renderCart();
}

function renderCart() {
  const root = $("#cartItems");
  root.innerHTML = "";

  if (state.cart.length === 0) {
    root.innerHTML = `
      <div class="cart-empty">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".35">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Tu carrito está vacío</p>
      </div>`;
  } else {
    state.cart.forEach((it) => {
      const div = document.createElement("div");
      div.className = "citem";
      const meta = [];
      if (it.remove?.length) meta.push(`❌ Sacar: ${it.remove.join(", ")}`);
      if (it.extras?.length) meta.push(`➕ Extras: ${it.extras.map((x) => x.name).join(", ")}`);
      if (it.note) meta.push(`📝 ${it.note}`);

      div.innerHTML = `
        <div>
          <div class="citem-title">${it.qty}× ${it.name}</div>
          ${meta.length ? `<div class="citem-meta">${meta.join("<br>")}</div>` : ""}
          <div class="citem-price">${money(it.total)}</div>
        </div>
        <div class="citem-actions">
          <button data-act="plus">+</button>
          <button data-act="minus">−</button>
          <button data-act="del" class="del-btn">Eliminar</button>
        </div>`;

      div.querySelector('[data-act="minus"]').onclick = () => { it.qty = Math.max(1, it.qty-1); it.total = it.unit*it.qty; renderCart(); };
      div.querySelector('[data-act="plus"]').onclick  = () => { it.qty++; it.total = it.unit*it.qty; renderCart(); };
      div.querySelector('[data-act="del"]').onclick   = () => { state.cart = state.cart.filter((x) => x.id !== it.id); renderCart(); };

      root.appendChild(div);
    });
  }

  const { total, count } = cartTotals();
  $("#cartCount").textContent  = String(count);
  $("#cartTotal").textContent  = money(total);
  $("#drawerTotal").textContent = money(total);
  $("#cartbar").classList.toggle("hidden", count === 0);
}

function openDrawer()  { $("#drawer").classList.remove("hidden"); document.body.style.overflow = "hidden"; }
function closeDrawer() { $("#drawer").classList.add("hidden");    document.body.style.overflow = ""; }

function clearCart() {
  if (!state.cart.length) return;
  if (!confirm("¿Vaciar el carrito?")) return;
  state.cart = [];
  renderCart();
}

// ============================
// WHATSAPP
// ============================
function sendWhatsApp() {
  if (!state.cart.length) { alert("Tu carrito está vacío."); return; }

  const name    = $("#name").value.trim()    || "Sin nombre";
  const phone   = $("#phone").value.trim();
  const address = $("#address")?.value.trim() || "";
  const maps    = $("#maps")?.value.trim()    || "";
  const date    = $("#date")?.value           || "";
  const time    = $("#time")?.value           || "";

  if (state.mode === "delivery" && !address && !maps) {
    alert("Para Delivery necesitás cargar una dirección o compartir tu ubicación.");
    return;
  }

  const modeLabel = { delivery: "🛵 Delivery", retiro: "🏃 Retiro en local", salon: "🪑 Salón" };

  let msg = `🍔 *Nuevo pedido — Taty Food*\n\n`;
  msg += `👤 *Nombre:* ${name}\n`;
  if (phone) msg += `📞 *Teléfono:* ${phone}\n`;
  msg += `📦 *Modalidad:* ${modeLabel[state.mode] || state.mode}\n`;
  if (state.mode === "delivery") {
    if (address) msg += `📍 *Dirección:* ${address}\n`;
    if (maps)    msg += `🗺 *Maps:* ${maps}\n`;
  }
  msg += state.when === "asap"
    ? `⏱ *Entrega:* Lo más pronto posible\n`
    : `📅 *Programada:* ${date} a las ${time}\n`;

  msg += `\n━━━━━━━━━━━━━━━━\n🛒 *Productos:*\n`;
  state.cart.forEach((it, i) => {
    msg += `\n${i+1}) *${it.qty}× ${it.name}*\n`;
    if (it.remove?.length) msg += `   ❌ Sacar: ${it.remove.join(", ")}\n`;
    if (it.extras?.length) msg += `   ➕ Extras: ${it.extras.map((x) => `${x.name} (+${money(x.price)})`).join(", ")}\n`;
    if (it.note) msg += `   📝 Nota: ${it.note}\n`;
    msg += `   💵 Subtotal: ${money(it.total)}\n`;
  });

  const { total } = cartTotals();
  msg += `\n━━━━━━━━━━━━━━━━\n💰 *TOTAL: ${money(total)}*\n`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ============================
// MODE / WHEN
// ============================
function setMode(mode) {
  state.mode = mode;
  $$(".tab").forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
  $("#addrWrap")?.classList.toggle("hidden", mode !== "delivery");
}
function setWhen(when) {
  state.when = when;
  $$(".segbtn").forEach((b) => b.classList.toggle("active", b.dataset.when === when));
  $("#scheduleWrap")?.classList.toggle("hidden", when !== "schedule");
}

// ============================
// CATEGORY NAV + SCROLL SPY
// ============================
const CAT_IDS = ["cat-burgers","cat-pachatas","cat-lomos","cat-fries","cat-promos","cat-bebidas"];

function setupCats() {
  $$(".cat").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".cat").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function spy() {
  const y = window.scrollY + 130;
  let active = CAT_IDS[0];
  for (const id of CAT_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= y) active = id;
  }
  $$(".cat").forEach((b) => b.classList.toggle("active", b.dataset.target === active));
}

// ============================
// GEOLOCATION
// ============================
function shareLocation() {
  const hint = $("#locHint");
  hint.textContent = "";
  if (!navigator.geolocation) { hint.textContent = "Tu navegador no soporta geolocalización."; return; }
  hint.textContent = "Obteniendo ubicación…";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const link = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
      const mapsInput = $("#maps");
      if (mapsInput) mapsInput.value = link;
      hint.textContent = "✅ Se generó el link de Maps.";
    },
    () => { hint.textContent = "No se pudo obtener la ubicación. Pegá el link manualmente."; },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

// ============================
// ESTADO DEL LOCAL (abierto/cerrado)
// ============================
async function loadStoreStatus() {
  const badge = $("#statusBadge");
  if (!badge) return;
  try {
    const res = await fetch("/api/status", { cache: "no-store" });
    const data = await res.json();
    if (data.open) {
      badge.textContent = "Abierto";
      badge.classList.remove("status-closed");
      badge.classList.add("status-open");
    } else {
      badge.textContent = "Cerrado temporalmente";
      badge.classList.remove("status-open");
      badge.classList.add("status-closed");
    }
  } catch (err) {
    // Si falla la consulta, dejamos el estado por defecto (cerrado) sin romper la página.
    console.warn("No se pudo obtener el estado del local:", err);
  }
}

// ============================
// INIT
// ============================
function init() {
  renderAll();
  renderCart();
  setupCats();
  loadStoreStatus();

  $("#q").addEventListener("input", (e) => applySearch(e.target.value));
  $$(".tab").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
  $$(".segbtn").forEach((b) => b.addEventListener("click", () => setWhen(b.dataset.when)));
  setMode("delivery");
  setWhen("asap");

  $("#closeModal").onclick = closeModal;
  $("#xModal").onclick     = closeModal;
  $("#minus").onclick      = () => { state.qty = Math.max(1, state.qty-1); $("#qty").textContent = state.qty; refreshModalPrice(); };
  $("#plus").onclick       = () => { state.qty++; $("#qty").textContent = state.qty; refreshModalPrice(); };
  $("#addCart").onclick    = addToCart;

  $("#openCart").onclick    = openDrawer;
  $("#closeDrawer").onclick = closeDrawer;
  $("#xDrawer").onclick     = closeDrawer;
  $("#clearCart").onclick   = clearCart;
  $("#sendWA").onclick      = sendWhatsApp;

  $("#btnLocation")?.addEventListener("click", shareLocation);

  window.addEventListener("scroll", spy, { passive: true });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeDrawer(); }
  });
}

init();