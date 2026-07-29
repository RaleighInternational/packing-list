// Raleigh International - Expedition Packing Checklist
// This file drives filtering, tooltips, tick-box persistence and the print/PDF view.
// It reads its content from data.js - edit data.js to change items, not this file.

const CATEGORY_LABELS = {
  essential: "Essential — you must take these items",
  recommended: "Recommended — will make your life more comfortable",
  optional: "Optional — entirely up to you"
};

const SUBCATEGORY_LABELS = {
  personal: "Personal belongings",
  toiletries: "Toiletries",
  firstaid: "First aid",
  clothing: "Clothing"
};

const CATEGORY_ORDER = ["essential", "recommended", "optional"];
const SUBCATEGORY_ORDER = ["personal", "toiletries", "firstaid", "clothing"];

const state = {
  country: null,
  length: null,
  cycle: null
};

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function buildOptionButtons(containerId, values, labelFn, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  values.forEach(v => {
    const btn = el("button", "option-btn", labelFn(v));
    btn.type = "button";
    btn.addEventListener("click", () => {
      [...container.children].forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      onSelect(v);
    });
    container.appendChild(btn);
  });
}

function init() {
  buildOptionButtons("country-options", KIT_DATA.countries, c => c.name, (c) => {
    state.country = c.id;
    render();
  });
  buildOptionButtons("length-options", KIT_DATA.lengths, l => l + " weeks", (l) => {
    state.length = l;
    render();
  });
  buildOptionButtons("cycle-options", KIT_DATA.cycles, c => "Cycle " + c, (c) => {
    state.cycle = c;
    render();
  });

  document.getElementById("print-btn").addEventListener("click", printChecklist);
  document.getElementById("reset-checks-btn").addEventListener("click", resetTicks);

  const tooltip = document.getElementById("tooltip");
  document.addEventListener("mousemove", (e) => {
    if (tooltip.hidden) return;
    const pad = 16;
    let x = e.clientX + pad;
    let y = e.clientY + pad;
    const rect = tooltip.getBoundingClientRect();
    if (x + rect.width > window.innerWidth) x = e.clientX - rect.width - pad;
    if (y + rect.height > window.innerHeight) y = e.clientY - rect.height - pad;
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
  });
}

function storageKey() {
  return `raleigh-kit-${state.country}-${state.length}wk-cycle${state.cycle}`;
}

function loadTicks() {
  try {
    return JSON.parse(localStorage.getItem(storageKey()) || "{}");
  } catch (e) {
    return {};
  }
}

function saveTicks(ticks) {
  localStorage.setItem(storageKey(), JSON.stringify(ticks));
}

function resetTicks() {
  localStorage.removeItem(storageKey());
  render();
}

function getFilteredItems() {
  if (!state.country || !state.length || !state.cycle) return null;
  const items = KIT_DATA.items[state.country] || [];
  return items.filter(it => it.cycle === "all" || it.cycle === state.cycle);
}

function groupItems(items) {
  const grouped = {};
  CATEGORY_ORDER.forEach(cat => {
    grouped[cat] = {};
    SUBCATEGORY_ORDER.forEach(sub => grouped[cat][sub] = []);
  });
  items.forEach(it => {
    if (!grouped[it.category]) grouped[it.category] = {};
    if (!grouped[it.category][it.subcategory]) grouped[it.category][it.subcategory] = [];
    grouped[it.category][it.subcategory].push(it);
  });
  return grouped;
}

function render() {
  const resultsEl = document.getElementById("results");
  const toolbarEl = document.getElementById("results-toolbar");
  const emptyEl = document.getElementById("empty-state");
  const summaryEl = document.getElementById("results-summary");

  const items = getFilteredItems();

  if (!items) {
    resultsEl.hidden = true;
    toolbarEl.hidden = true;
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  toolbarEl.hidden = false;
  resultsEl.hidden = false;

  const countryName = KIT_DATA.countries.find(c => c.id === state.country).name;
  summaryEl.textContent = `${countryName} · ${state.length} week expedition · Cycle ${state.cycle} · ${items.length} items`;

  const grouped = groupItems(items);
  const ticks = loadTicks();

  resultsEl.innerHTML = "";

  CATEGORY_ORDER.forEach(cat => {
    const subgroups = grouped[cat];
    const hasAny = SUBCATEGORY_ORDER.some(sub => subgroups[sub] && subgroups[sub].length);
    if (!hasAny) return;

    const block = el("div", "category-block cat-" + cat);
    const heading = el("div", "category-heading", `<span class="dot"></span><h3>${CATEGORY_LABELS[cat]}</h3>`);
    block.appendChild(heading);

    SUBCATEGORY_ORDER.forEach(sub => {
      const list = subgroups[sub];
      if (!list || !list.length) return;

      const subBox = el("div", "subcategory");
      subBox.appendChild(el("h4", null, SUBCATEGORY_LABELS[sub]));

      list.forEach(it => {
        const row = el("div", "item-row");
        const key = it.item;
        const checked = ticks[key] ? "checked" : "";

        const cb = el("input");
        cb.type = "checkbox";
        cb.checked = !!ticks[key];
        cb.addEventListener("change", () => {
          const t = loadTicks();
          t[key] = cb.checked;
          saveTicks(t);
        });

        const nameSpan = el("span", "name", it.item);
        nameSpan.addEventListener("mouseenter", () => showTooltip(it.description));
        nameSpan.addEventListener("mouseleave", hideTooltip);
        nameSpan.addEventListener("focus", () => showTooltip(it.description));
        nameSpan.addEventListener("blur", hideTooltip);
        nameSpan.tabIndex = 0;

        const qtySpan = el("span", "qty", it.quantity);

        const cycleSpan = el("span", "cyclepill", it.cycle === "all" ? "" : `Cycle ${it.cycle} only`);
        if (it.cycle === "all") cycleSpan.style.visibility = "hidden";

        row.appendChild(cb);
        row.appendChild(nameSpan);
        row.appendChild(qtySpan);
        row.appendChild(cycleSpan);
        subBox.appendChild(row);
      });

      block.appendChild(subBox);
    });

    resultsEl.appendChild(block);
  });
}

function showTooltip(text) {
  const tooltip = document.getElementById("tooltip");
  tooltip.textContent = text;
  tooltip.hidden = false;
}
function hideTooltip() {
  document.getElementById("tooltip").hidden = true;
}

function printChecklist() {
  const items = getFilteredItems();
  if (!items) return;
  const grouped = groupItems(items);
  const countryName = KIT_DATA.countries.find(c => c.id === state.country).name;

  let html = `<div class="print-header">
    <h1>Raleigh International &mdash; ${countryName} Expedition Packing Checklist</h1>
    <p>${state.length} week expedition &middot; Cycle ${state.cycle} &middot; Generated ${new Date().toLocaleDateString()}</p>
  </div>`;

  CATEGORY_ORDER.forEach(cat => {
    const subgroups = grouped[cat];
    const hasAny = SUBCATEGORY_ORDER.some(sub => subgroups[sub] && subgroups[sub].length);
    if (!hasAny) return;

    html += `<div class="print-category"><h2>${CATEGORY_LABELS[cat]}</h2>`;

    SUBCATEGORY_ORDER.forEach(sub => {
      const list = subgroups[sub];
      if (!list || !list.length) return;
      html += `<div class="print-sub"><h3>${SUBCATEGORY_LABELS[sub]}</h3>
        <table class="print-table">
          <tr><th style="width:24px"></th><th>Item</th><th style="width:150px">Quantity</th><th style="width:90px">Cycle</th></tr>`;
      list.forEach(it => {
        html += `<tr><td><span class="box"></span></td><td>${it.item}</td><td>${it.quantity}</td><td>${it.cycle === "all" ? "All" : "Cycle " + it.cycle}</td></tr>`;
      });
      html += `</table></div>`;
    });

    html += `</div>`;
  });

  document.getElementById("print-area").innerHTML = html;
  window.print();
}

init();
