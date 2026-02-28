// Final Touch site scripts + CMS-driven content rendering
(async () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  async function loadJSON(path) {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    return await res.json();
  }

  function escapeHTML(str){
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function escapeAttr(str){ return escapeHTML(str).replace(/\s/g, "%20"); }

  // Site settings
  try {
    const site = await loadJSON("content/site.json");
    document.querySelectorAll("[data-site]").forEach(el => {
      const key = el.getAttribute("data-site");
      if (site[key]) el.textContent = site[key];
    });

    const phone = site.phone || "";
    const email = site.email || "";
    document.querySelectorAll('a[href^="tel:"]').forEach(a => a.setAttribute("href", `tel:${phone}`));
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => a.setAttribute("href", `mailto:${email}`));
    document.querySelectorAll('a[href^="tel:"]').forEach(a => { a.textContent = `📞 ${phone}`; });
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => { a.textContent = `✉️ ${email}`; });
  } catch (e) {
    console.warn(e);
  }

  // Services
  try {
    const data = await loadJSON("content/services.json");
    const wrap = document.getElementById("services-cards");
    if (wrap && Array.isArray(data.services)) {
      wrap.innerHTML = data.services.map(s => `
        <article class="card">
          <h3>${escapeHTML(s.title || "")}</h3>
          <p>${escapeHTML(s.summary || "")}</p>
          ${Array.isArray(s.bullets) && s.bullets.length ? `
            <ul>
              ${s.bullets.map(b => `<li>${escapeHTML(b || "")}</li>`).join("")}
            </ul>
          ` : ""}
        </article>
      `).join("");
    }
  } catch (e) {
    console.warn(e);
  }

  // Gallery
  try {
    const data = await loadJSON("content/gallery.json");
    const grid = document.getElementById("gallery-grid");
    if (grid && Array.isArray(data.items)) {
      grid.innerHTML = data.items.map((it, idx) => {
        const caption = escapeHTML(it.caption || `Project ${idx+1}`);
        const img = (it.image || "").trim();
        if (img) {
          return `
            <figure class="shot">
              <img src="${escapeAttr(img)}" alt="${caption}" loading="lazy" />
              <figcaption>${caption}</figcaption>
            </figure>
          `;
        }
        return `
          <figure class="shot placeholder">
            <div class="ph">Add Photo ${idx+1}</div>
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      }).join("");
    }
  } catch (e) {
    console.warn(e);
  }
})();
