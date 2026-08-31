// Raleigh International - Expedition Packing Checklist
// This file drives filtering, tooltips, tick-boxes and the print/PDF button.
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

function currentCountry() {
  return KIT_DATA.countries.find(c => c.id === state.country) || null;
}

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

function selectCountry(country) {
  state.country = country.id;
  state.length = null;
  state.cycle = null;

  const lengthGroup = document.getElementById("length-group");
  const cycleGroup = document.getElementById("cycle-group");

  if (country.lengths.length > 1) {
    lengthGroup.hidden = false;
    buildOptionButtons("length-options", country.lengths, l => (typeof l === "number" ? l + " weeks" : l), (l) => {
      state.length = l;
      render();
    });
  } else {
    lengthGroup.hidden = true;
    state.length = country.lengths[0];
  }

  if (country.hasCycles) {
    cycleGroup.hidden = false;
    buildOptionButtons("cycle-options", KIT_DATA.cycles, c => "Cycle " + c, (c) => {
      state.cycle = c;
      render();
    });
  } else {
    cycleGroup.hidden = true;
    state.cycle = "na";
  }

  render();
}

function init() {
  buildOptionButtons("country-options", KIT_DATA.countries, c => c.name, selectCountry);
  document.getElementById("print-btn").addEventListener("click", printChecklist);
  document.getElementById("reset-checks-btn").addEventListener("click", resetTicks);
  setupTooltip();
}

function storageKey() {
  return `raleigh-kit-${state.country}-${state.length}-cycle${state.cycle}`;
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

function appliesToLength(it) {
  if (!state.length) return true;
  if (!it.lengths || it.lengths === "all") return true;
  return Array.isArray(it.lengths) && it.lengths.includes(state.length);
}

function resolveQuantity(it) {
  if (it.quantityByLength && state.length != null) {
    const override = it.quantityByLength[String(state.length)];
    if (override) return override;
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
    const cycleOk = !country.hasCycles || it.cycle === "all" || it.cycle === state.cycle;
    return cycleOk && appliesToLength(it);
  });
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

function extendNoteText(country) {
  if (!country.hasCycles || country.lengths.length <= 1) return null;
  let text = "If you think there's a possibility you might extend your Expedition to a longer length, it's worth packing for that length so you don't run out of anything important.";
  if (state.length === 4 && country.lengths.includes(5)) {
    text += " If you think you might extend from 4 to 5 weeks, it's worth packing to the 5-week list instead, since it includes trekking equipment.";
  }
  return text;
}

function render() {
  const resultsEl = document.getElementById("results");
  const toolbarEl = document.getElementById("results-toolbar");
  const emptyEl = document.getElementById("empty-state");
  const summaryEl = document.getElementById("results-summary");
  const howtoEl = document.getElementById("howto-note");
  const extendEl = document.getElementById("extend-note");
  const lengthFilterNoteEl = document.getElementById("length-filter-note");

  const items = getFilteredItems();
  const country = currentCountry();

  if (lengthFilterNoteEl) {
    if (country && country.hasCycles && country.lengths.length > 1 && !country.lengthDataConfirmed) {
      lengthFilterNoteEl.hidden = false;
    } else {
      lengthFilterNoteEl.hidden = true;
    }
  }

  if (!items) {
    resultsEl.hidden = true;
    toolbarEl.hidden = true;
    howtoEl.hidden = true;
    extendEl.hidden = true;
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  howtoEl.hidden = false;
  toolbarEl.hidden = false;
  resultsEl.hidden = false;

  const extendText = extendNoteText(country);
  if (extendText) {
    extendEl.textContent = extendText;
    extendEl.hidden = false;
  } else {
    extendEl.hidden = true;
  }

  const bits = [country.name];
  if (country.lengths.length > 1) bits.push(state.length + " week Expedition");
  if (country.hasCycles) bits.push("Cycle " + state.cycle);
  bits.push(items.length + " items");
  summaryEl.textContent = bits.join(" · ");

  const grouped = groupItems(items);
  const ticks = loadTicks();

  resultsEl.innerHTML = "";

  CATEGORY_ORDER.forEach(cat => {
    const subgroups = grouped[cat];
    const hasAny = SUBCATEGORY_ORDER.some(sub => subgroups[sub] && subgroups[sub].length);
    if (!hasAny) return;

    const block = el("div", "category-block cat-" + cat);
    const heading = el("div", "category-heading", `<h3>${CATEGORY_LABELS[cat]}</h3>`);
    block.appendChild(heading);

    SUBCATEGORY_ORDER.forEach(sub => {
      const list = subgroups[sub];
      if (!list || !list.length) return;

      const subBox = el("div", "subcategory");
      subBox.appendChild(el("h4", null, SUBCATEGORY_LABELS[sub]));

      list.forEach(it => {
        const row = el("div", "item-row");
        const key = it.item;

        const cb = el("input");
        cb.type = "checkbox";
        cb.checked = !!ticks[key];
        cb.addEventListener("change", () => {
          const t = loadTicks();
          t[key] = cb.checked;
          saveTicks(t);
        });

        const nameSpan = el("span", "name", it.item);
        nameSpan.tabIndex = 0;
        attachTooltip(nameSpan, it.description);

        const qtySpan = el("span", "qty", `<span class="qty-value">${resolveQuantity(it)}</span>`);

        const cycleSpan = el("span", "cyclepill", (country.hasCycles && it.cycle !== "all") ? `Cycle ${it.cycle} only` : "");
        if (!country.hasCycles || it.cycle === "all") cycleSpan.style.visibility = "hidden";

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

let activeTooltipTarget = null;

function setupTooltip() {
  document.addEventListener("mousemove", (e) => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip.hidden || !window.matchMedia("(pointer: fine)").matches) return;
    const pad = 16;
    let x = e.clientX + pad;
    let y = e.clientY + pad;
    const rect = tooltip.getBoundingClientRect();
    if (x + rect.width > window.innerWidth) x = e.clientX - rect.width - pad;
    if (y + rect.height > window.innerHeight) y = e.clientY - rect.height - pad;
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
  });

  document.addEventListener("click", (e) => {
    if (activeTooltipTarget && !e.target.closest(".item-row .name")) {
      hideTooltip();
    }
  });
}

function attachTooltip(nameSpan, text) {
  const fine = () => window.matchMedia("(pointer: fine)").matches;
  nameSpan.addEventListener("mouseenter", () => { if (fine()) showTooltip(nameSpan, text); });
  nameSpan.addEventListener("mouseleave", () => { if (fine()) hideTooltip(); });
  nameSpan.addEventListener("focus", () => showTooltip(nameSpan, text));
  nameSpan.addEventListener("blur", hideTooltip);
  nameSpan.addEventListener("click", (e) => {
    e.stopPropagation();
    if (activeTooltipTarget === nameSpan) {
      hideTooltip();
    } else {
      showTooltip(nameSpan, text);
    }
  });
}

function showTooltip(target, text) {
  const tooltip = document.getElementById("tooltip");
  tooltip.textContent = text;
  tooltip.hidden = false;
  activeTooltipTarget = target;
}

function hideTooltip() {
  document.getElementById("tooltip").hidden = true;
  activeTooltipTarget = null;
}

function printChecklist() {
  const items = getFilteredItems();
  if (!items) return;
  const grouped = groupItems(items);
  const country = currentCountry();

  const bits = [country.name];
  if (country.lengths.length > 1) bits.push(state.length + " week Expedition");
  if (country.hasCycles) bits.push("Cycle " + state.cycle);

  const extendText = extendNoteText(country);

  let html = `<div class="print-header">
    <h1>Raleigh International &mdash; ${country.name} Packing Checklist</h1>
    <p>${bits.slice(1).join(" &middot; ")}${bits.length > 1 ? " &middot; " : ""}Generated ${new Date().toLocaleDateString()}</p>
  </div>`;

  if (extendText) {
    html += `<div class="print-extend-note"><strong>${extendText}</strong></div>`;
  }

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
          <tr><th style="width:24px"></th><th>Item</th><th style="width:170px">Quantity</th></tr>`;
      list.forEach(it => {
        html += `<tr><td><span class="box"></span></td><td>${it.item}</td><td>${resolveQuantity(it)}</td></tr>`;
      });
      html += `</table></div>`;
    });

    html += `</div>`;
  });

  document.getElementById("print-area").innerHTML = html;
  window.print();
}

init();
