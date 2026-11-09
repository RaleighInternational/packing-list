// Raleigh International - Expedition Packing Checklist
// This file drives filtering, tooltips, tick-boxes and the print/PDF button.
// It reads its content from data.js - edit data.js to change items, not this file.

const CATEGORY_LABELS = {
  essential: "Essential — you must take these items",
  recommended: "Recommended — will make your life more comfortable",
  optional: "Optional — entirely up to you"
};
const SUBCATEGORY_LABELS = { personal: "Personal belongings", toiletries: "Toiletries", firstaid: "First aid", clothing: "Clothing" };
const CATEGORY_ORDER = ["essential", "recommended", "optional"];
const SUBCATEGORY_ORDER = ["personal", "toiletries", "firstaid", "clothing"];

const state = { country: null, length: null, cycle: null };

const $ = id => document.getElementById(id);
function currentCountry() { return KIT_DATA.countries.find(c => c.id === state.country) || null; }
function lengthDef(id) { return KIT_DATA.lengths.find(l => l.id === id) || { id, label: id, isNew: false }; }
function cycleDef(id) { return KIT_DATA.cycles.find(c => c.id === id) || null; }

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function lengthButtonLabel(id) {
  const l = lengthDef(id);
  return l.label + (l.isNew ? ' <span class="tag-new">NEW</span>' : "");
}
function lengthText(id) {
  const l = lengthDef(id);
  return l.label.replace(" weeks", " week") + " Expedition" + (l.isNew ? " (new)" : "");
}
function cycleText(id) { const c = cycleDef(id); return c ? `Cycle ${c.cycle} ${c.year}` : ""; }

function cyclesForLength(lengthId) {
  const isNew = lengthDef(lengthId).isNew;
  return KIT_DATA.cycles.filter(c => isNew ? c.newLengths : c.previousLengths);
}

function buildOptionButtons(container, values, labelFn, onSelect, activeValue) {
  container.innerHTML = "";
  values.forEach(v => {
    const btn = el("button", "option-btn" + (v === activeValue ? " active" : ""), labelFn(v));
    btn.type = "button";
    btn.addEventListener("click", () => {
      [...container.querySelectorAll(".option-btn")].forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      onSelect(v);
    });
    container.appendChild(btn);
  });
}

function buildCycleButtons() {
  const container = $("cycle-options");
  container.innerHTML = "";
  if (!state.length) {
    container.appendChild(el("p", "filter-hint", "Pick an Expedition length first."));
    return;
  }
  const cycles = cyclesForLength(state.length);
  const years = [...new Set(cycles.map(c => c.year))];
  years.forEach(y => {
    const row = el("div", "year-row");
    row.appendChild(el("span", "year-label", String(y)));
    const btns = el("div", "option-row");
    cycles.filter(c => c.year === y).forEach(c => {
      const btn = el("button", "option-btn" + (c.id === state.cycle ? " active" : ""), "Cycle " + c.cycle);
      btn.type = "button";
      btn.addEventListener("click", () => {
        container.querySelectorAll(".option-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.cycle = c.id;
        render();
      });
      btns.appendChild(btn);
    });
    row.appendChild(btns);
    container.appendChild(row);
  });
}

function selectCountry(country) {
  state.country = country.id;
  state.length = null;
  state.cycle = null;

  if (country.lengths.length > 1) {
    $("length-group").hidden = false;
    buildOptionButtons($("length-options"), country.lengths, lengthButtonLabel, (l) => {
      state.length = l;
      const c = cycleDef(state.cycle);
      if (c && !cyclesForLength(l).includes(c)) state.cycle = null;
      buildCycleButtons();
      render();
    });
  } else {
    $("length-group").hidden = true;
    state.length = country.lengths[0];
  }

  if (country.hasCycles) {
    $("cycle-group").hidden = false;
    buildCycleButtons();
  } else {
    $("cycle-group").hidden = true;
    state.cycle = "na";
  }
  render();
}

function init() {
  buildOptionButtons($("country-options"), KIT_DATA.countries, c => c.name, selectCountry);
  $("print-btn").addEventListener("click", printChecklist);
  $("copy-btn").addEventListener("click", copyChecklist);
  $("reset-checks-btn").addEventListener("click", resetTicks);
  setupTooltip();
}

function storageKey() { return `raleigh-kit-${state.country}-${state.length}-cycle${state.cycle}`; }
function loadTicks() { try { return JSON.parse(localStorage.getItem(storageKey()) || "{}"); } catch (e) { return {}; } }
function saveTicks(t) { try { localStorage.setItem(storageKey(), JSON.stringify(t)); } catch (e) {} }
function resetTicks() { try { localStorage.removeItem(storageKey()); } catch (e) {} render(); }

function appliesToLength(it) {
  if (!state.length) return true;
  if (!it.lengths || it.lengths === "all") return true;
  return Array.isArray(it.lengths) && it.lengths.includes(state.length);
}

function cycleNumber() { const c = cycleDef(state.cycle); return c ? c.cycle : null; }

function resolveQuantity(it) {
  if (it.quantityByLength && state.length != null) {
    const o = it.quantityByLength[String(state.length)];
    if (o) return o;
  }
  if (it.quantityByCycle && cycleNumber() != null) {
    const o = it.quantityByCycle[String(cycleNumber())];
    if (o) return o;
  }
  return it.quantity;
}

function getFilteredItems() {
  const country = currentCountry();
  if (!country) return null;
  if (country.lengths.length > 1 && state.length === null) return null;
  if (country.hasCycles && state.cycle === null) return null;
  const items = KIT_DATA.items[state.country] || [];
  return items.filter(it => {
    const cycleOk = !country.hasCycles || it.cycle === "all" || it.cycle === cycleNumber();
    return cycleOk && appliesToLength(it);
  });
}

function groupItems(items) {
  const g = {};
  CATEGORY_ORDER.forEach(cat => { g[cat] = {}; SUBCATEGORY_ORDER.forEach(s => g[cat][s] = []); });
  items.forEach(it => {
    if (!g[it.category]) g[it.category] = {};
    if (!g[it.category][it.subcategory]) g[it.category][it.subcategory] = [];
    g[it.category][it.subcategory].push(it);
  });
  return g;
}

function extendNoteText(country) {
  if (!country.hasCycles || country.lengths.length <= 1) return null;
  let text = "If you think there's a possibility you might extend your Expedition to a longer length, it's worth packing for that length so you don't run out of anything important.";
  if (state.length === "4" && country.lengths.includes("5")) {
    text += " If you think you might extend from 4 to 5 weeks, it's worth packing to the 5-week list instead, since it includes trekking equipment.";
  }
  if (state.length === "4-new" && country.lengths.includes("8")) {
    text += " If you think you might extend from 4 to 8 weeks, it's worth packing to the 8-week list instead, since it includes trekking equipment.";
  }
  return text;
}

function summaryBits(country, items) {
  const bits = [country.name];
  if (country.lengths.length > 1) bits.push(lengthText(state.length));
  if (country.hasCycles) bits.push(cycleText(state.cycle));
  if (items) bits.push(items.length + " items");
  return bits;
}

function render() {
  const items = getFilteredItems();
  const country = currentCountry();

  $("length-filter-note").hidden = !(country && country.hasCycles && country.lengths.length > 1 && !country.lengthDataConfirmed);
  $("new-lengths-note").hidden = !(country && country.lengths.length > 1);

  if (!items) {
    ["results", "results-toolbar", "howto-note", "extend-note"].forEach(id => $(id).hidden = true);
    $("empty-state").hidden = false;
    $("empty-state").textContent = !country ? "Choose a destination above to build your kit list."
      : (country.lengths.length > 1 && !state.length) ? "Now choose your Expedition length."
      : "Now choose your Cycle.";
    return;
  }

  $("empty-state").hidden = true;
  ["howto-note", "results-toolbar", "results"].forEach(id => $(id).hidden = false);

  const extendText = extendNoteText(country);
  $("extend-note").hidden = !extendText;
  if (extendText) $("extend-note").textContent = extendText;

  $("results-summary").textContent = summaryBits(country, items).join(" · ");

  const grouped = groupItems(items);
  const ticks = loadTicks();
  const results = $("results");
  results.innerHTML = "";

  CATEGORY_ORDER.forEach(cat => {
    const subs = grouped[cat];
    if (!SUBCATEGORY_ORDER.some(s => subs[s] && subs[s].length)) return;
    const block = el("div", "category-block cat-" + cat);
    block.appendChild(el("div", "category-heading", `<h3>${CATEGORY_LABELS[cat]}</h3>`));

    SUBCATEGORY_ORDER.forEach(sub => {
      const list = subs[sub];
      if (!list || !list.length) return;
      const box = el("div", "subcategory");
      box.appendChild(el("h4", null, SUBCATEGORY_LABELS[sub]));
      list.forEach(it => {
        const row = el("label", "item-row");
        const key = it.item;
        const cb = el("input");
        cb.type = "checkbox";
        cb.checked = !!ticks[key];
        row.classList.toggle("done", cb.checked);
        cb.addEventListener("change", () => {
          const t = loadTicks(); t[key] = cb.checked; saveTicks(t);
          row.classList.toggle("done", cb.checked);
        });
        const name = el("span", "name", it.item);
        name.tabIndex = 0;
        attachTooltip(name, it.description);
        const qty = el("span", "qty", `<span class="qty-value">${resolveQuantity(it)}</span>`);
        const pill = el("span", "cyclepill", (country.hasCycles && it.cycle !== "all") ? `Cycle ${it.cycle} only` : "");
        if (!country.hasCycles || it.cycle === "all") pill.style.visibility = "hidden";
        row.append(cb, name, qty, pill);
        box.appendChild(row);
      });
      block.appendChild(box);
    });
    results.appendChild(block);
  });
}

let activeTooltipTarget = null;
function setupTooltip() {
  document.addEventListener("mousemove", (e) => {
    const t = $("tooltip");
    if (t.hidden || !window.matchMedia("(pointer: fine)").matches) return;
    const pad = 16;
    let x = e.clientX + pad, y = e.clientY + pad;
    const r = t.getBoundingClientRect();
    if (x + r.width > window.innerWidth) x = e.clientX - r.width - pad;
    if (y + r.height > window.innerHeight) y = e.clientY - r.height - pad;
    t.style.left = x + "px"; t.style.top = y + "px";
  });
  document.addEventListener("click", (e) => {
    if (activeTooltipTarget && !e.target.closest(".item-row .name")) hideTooltip();
  });
}
function attachTooltip(name, text) {
  const fine = () => window.matchMedia("(pointer: fine)").matches;
  name.addEventListener("mouseenter", () => { if (fine()) showTooltip(name, text); });
  name.addEventListener("mouseleave", () => { if (fine()) hideTooltip(); });
  name.addEventListener("focus", () => showTooltip(name, text));
  name.addEventListener("blur", hideTooltip);
  name.addEventListener("click", (e) => {
    e.preventDefault(); e.stopPropagation();
    if (activeTooltipTarget === name) hideTooltip(); else showTooltip(name, text);
  });
}
function showTooltip(target, text) {
  const t = $("tooltip");
  t.textContent = text; t.hidden = false; activeTooltipTarget = target;
  if (!window.matchMedia("(pointer: fine)").matches) {
    const r = target.getBoundingClientRect();
    t.style.left = "12px"; t.style.right = "12px";
    t.style.top = Math.min(r.bottom + 8, window.innerHeight - t.offsetHeight - 12) + "px";
  }
}
function hideTooltip() { $("tooltip").hidden = true; activeTooltipTarget = null; }

function printChecklist() {
  const items = getFilteredItems();
  if (!items) return;
  const grouped = groupItems(items);
  const country = currentCountry();
  const bits = summaryBits(country);
  const extendText = extendNoteText(country);

  let html = `<div class="print-header">
    <h1>Raleigh International &mdash; ${country.name} Kit List</h1>
    <p>${bits.slice(1).join(" &middot; ")}${bits.length > 1 ? " &middot; " : ""}Generated ${new Date().toLocaleDateString()}</p>
  </div>`;
  if (extendText) html += `<div class="print-extend-note"><strong>${extendText}</strong></div>`;

  CATEGORY_ORDER.forEach(cat => {
    const subs = grouped[cat];
    if (!SUBCATEGORY_ORDER.some(s => subs[s] && subs[s].length)) return;
    html += `<div class="print-category"><h2>${CATEGORY_LABELS[cat]}</h2>`;
    SUBCATEGORY_ORDER.forEach(sub => {
      const list = subs[sub];
      if (!list || !list.length) return;
      html += `<div class="print-sub"><h3>${SUBCATEGORY_LABELS[sub]}</h3>
        <table class="print-table"><tr><th style="width:24px"></th><th>Item</th><th style="width:170px">Quantity</th></tr>`;
      list.forEach(it => { html += `<tr><td><span class="box"></span></td><td>${it.item}</td><td>${resolveQuantity(it)}</td></tr>`; });
      html += `</table></div>`;
    });
    html += `</div>`;
  });
  $("print-area").innerHTML = html;
  try { window.print(); } catch (e) {}
}

function copyChecklist() {
  const items = getFilteredItems();
  if (!items) return;
  const grouped = groupItems(items);
  const country = currentCountry();
  let t = `Raleigh International — ${country.name} Kit List\n${summaryBits(country).slice(1).join(" · ")}\n`;
  const ex = extendNoteText(country); if (ex) t += `\n${ex}\n`;
  CATEGORY_ORDER.forEach(cat => {
    const subs = grouped[cat];
    if (!SUBCATEGORY_ORDER.some(s => subs[s] && subs[s].length)) return;
    t += `\n${CATEGORY_LABELS[cat].toUpperCase()}\n`;
    SUBCATEGORY_ORDER.forEach(sub => {
      const list = subs[sub]; if (!list || !list.length) return;
      t += `\n${SUBCATEGORY_LABELS[sub]}\n`;
      list.forEach(it => t += `[ ] ${it.item} — ${resolveQuantity(it)}\n`);
    });
  });
  const done = () => toast("Kit list copied");
  const fallback = () => {
    const a = document.createElement("textarea"); a.value = t; document.body.appendChild(a); a.select();
    try { document.execCommand("copy"); done(); } catch (e) { toast("Couldn't copy"); } a.remove();
  };
  try { navigator.clipboard.writeText(t).then(done, fallback); } catch (e) { fallback(); }
}
function toast(m) { const e = $("toast"); e.textContent = m; e.classList.add("show"); setTimeout(() => e.classList.remove("show"), 1600); }

init();
