/* ==========================================================================
   script.js
   PART 1 (top): ALL your content. This is the only part you need to edit.
   PART 2 (below): the code that builds the page and runs the animations.
   Any value starting with "[" is a placeholder: it shows as muted text and
   links with placeholders are not made clickable (or are hidden).
   ========================================================================== */

/* ---------- PART 1: YOUR CONTENT ---------- */

const portfolioConfig = {
  name: "Aryan Srivastav",
  building: "AI systems & neural computing",
  location: "Ranchi, Jharkhand",
  college: "Amity University Jharkhand",
  degree: "BSc in Information Technology with Honours & Research",
  year: "2nd year",
  graduation: "2029",
  email: "13aryanah@gmail.com",
  github: "https://github.com/aryalytical",
  linkedin: "https://in.linkedin.com/in/aryan-srivastav-859507363",
  leetcode: "https://leetcode.com/u/13arya/",
  photo: "assets/images/aryan.jpg"
};

// To add a project, copy one { ... } block. Leave github/demo as "" until links exist.
const projects = [
  {
    title: "SIH26117 — LocalAI Contribution", icon: "code", status: "Contribution",
    description: "A contribution to LocalAI as part of the SIH26117 project, exploring local AI infrastructure and privacy-focused AI systems.",
    technologies: ["Local AI", "AI Systems", "Python", "Ollama"],
    github: "https://github.com/ar7aditya720-oss/LocalAI", demo: ""
  },
  {
    title: "AI-Based Invoice Data Extracting System", icon: "chip", status: "Project",
    description: "An AI-based system designed to extract and structure useful information from invoices.",
    technologies: ["AI/ML", "Python", "Document Processing"],
    github: "", demo: ""
  },
  {
    title: "Smart Palm Oil Solution System", icon: "globe", status: "Project",
    description: "A smart solution concept focused on palm tracking and improving visibility across the palm oil workflow.",
    technologies: ["AI", "Web Technologies", "Tracking"],
    github: "", demo: ""
  },
  {
    title: "2D Endless Running Game with Story Narrative", icon: "gamepad", status: "Initial Project",
    description: "A mobile-focused 2D endless-running game combined with a story-driven narrative experience.",
    technologies: ["JavaScript", "HTML", "CSS", "2D Game", "Storytelling"],
    github: "", demo: ""
  },
  {
    title: "Solar System Replica", icon: "sparkle", status: "Initial Project",
    description: "A visual replica of the solar system created using web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "WebGL"],
    github: "", demo: ""
  }
];

// Skill levels (tabs) and groups.
const skillLevels = [
  { id: "using", label: "Using" },
  { id: "learning", label: "Learning" },
  { id: "other", label: "Other Skills" }
];
const skillGroups = [
  { title: "Technology & Programming", icon: "code", items: [["HTML", "using"], ["CSS", "using"], ["JavaScript", "using"], ["Java", "using"], ["Python", "using"], ["C", "using"]] },
  { title: "AI & Neural Computing", icon: "chip", items: [["Ollama", "learning"], ["AI/ML/JEV", "learning"], ["AI Systems", "learning"], ["Neural Computing", "learning"], ["Data Structures & Algorithms", "learning"]] },
  { title: "Other Skills", icon: "tools", items: [["Graphic Designing", "other"], ["GitHub", "other"], ["VS Code", "other"]] }
];

// Newest first. Add, remove or edit lines freely.
const journey = [
  { when: "2025", title: "Building the fundamentals", text: "Learning and understanding fundamental concepts of computer science and information technology." },
  { when: "2026", title: "Hackathon participation", text: "Participated in HackHorizon 2.0 and SIH26117." },
  { when: "2026", title: "Going deeper", text: "Learning deeper concepts and building real-life projects." }
];
const education = [
  { icon: "bank", lines: ["Amity University Jharkhand", "BSc in Information Technology with Honours & Research", "Ongoing — 2nd Year"] }
];
const certifications = [
  { title: "Oracle — Database Management System course", provider: "Oracle", url: "assets/images/oracleCertification.png", action: "View certificate" },
  { title: "AI for Product Management", provider: "Pendo", url: "https://www.credly.com/badges/633926a1-6065-4f90-91e8-e1412950286c/public_url", action: "View badge" },
  { title: "The Joy of Computing Python", provider: "NPTEL-SWAYAM", url: "https://onlinecourses.nptel.ac.in/e-learning/course/noc26_cs136", action: "Currently pursuing" }
];
const participations = [
  { title: "HackHorizon 2.0 — 2026 Hackathon", provider: "HackHorizon", url: "hackhorizon.png", action: "View certificate" },
  { title: "SIH26117", provider: "Smart India Hackathon 2026", url: "", action: "Currently happening" }
];

/* ---------- PART 2: BUILDING THE PAGE (no need to edit) ---------- */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const isPlaceholder = (v) => !v || v.trim().startsWith("[");

// Icon artwork (24x24 outline shapes)
const icons = {
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  leetcode: '<path d="M9.2 3.5 3.8 9a4.2 4.2 0 0 0 0 6l4.8 4.8a4.2 4.2 0 0 0 6 0l5.6-5.6"/><path d="m12 7 5 5-5 5M3 12h14"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',
  chip: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  tools: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/>',
  sparkle: '<path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"/>',
  gamepad: '<path d="M6 12h4M8 10v4M15 13h.01M18 11h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-4 3.6C2.6 9.4 2 14.5 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.4-1.4a2 2 0 0 1 1.4-.6h4.4a2 2 0 0 1 1.4.6L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.5-.6-6.6-.7-7.4A4 4 0 0 0 17.3 5z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 15v2c0 .6-.5 1-1 1.2-1.1.6-2 2-2 3.8M14 15v2c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
  bank: '<path d="m3 10 9-6 9 6M5 10v11M9 10v11M15 10v11M19 10v11M3 21h18"/>',
  school: '<path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-6h4v6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  ext: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>'
};
const svg = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

// Small DOM helpers
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function icon(name, className) { const i = el("i", className); i.innerHTML = svg(name); return i; }
function bubble(name) { const b = el("span", "bubble"); b.append(icon(name)); return b; }
function textOrPlaceholder(value, tag = "span") { return el(tag, isPlaceholder(value) ? "ph" : "", value); }

/* ----- Rendering ----- */

function renderHero() {
  const c = portfolioConfig;
  document.getElementById("building").textContent = c.building;
  if (!isPlaceholder(c.photo)) {
    const img = el("img");
    img.src = c.photo; img.alt = "Portrait of " + c.name; img.loading = "lazy";
    document.getElementById("photo").replaceChildren(img);
  }
}

function socialLinks(listId) {
  const c = portfolioConfig;
  const list = document.getElementById(listId);
  [["github", "GitHub", c.github], ["linkedin", "LinkedIn", c.linkedin], ["leetcode", "LeetCode", c.leetcode], ["mail", "Email", isPlaceholder(c.email) ? "" : "mailto:" + c.email]]
    .filter(([, , url]) => !isPlaceholder(url))
    .forEach(([name, label, url]) => {
      const a = el("a"); a.href = url; a.setAttribute("aria-label", label); a.append(icon(name));
      if (url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      const li = el("li"); li.append(a); list.append(li);
    });
}

function renderAbout() {
  const c = portfolioConfig;
  const list = document.getElementById("facts");
  [["pin", "Location", c.location], ["cap", "College / University", c.college], ["book", "Degree / Course", c.degree],
   ["calendar", "Current Year / Semester", c.year], ["calendar", "Expected Graduation", c.graduation]]
    .forEach(([name, label, value]) => {
      const li = el("li"); const text = el("span");
      text.append(el("b", "", label), textOrPlaceholder(value));
      li.append(bubble(name), text); list.append(li);
    });
}

function renderSkills() {
  const tabs = document.getElementById("tabs");
  tabs.append(el("span", "tab-pill"));
  skillLevels.forEach((level, i) => {
    const b = el("button", "tab", level.label);
    b.type = "button"; b.dataset.level = level.id; b.setAttribute("aria-selected", String(i === 0));
    tabs.append(b);
  });
  const grid = document.getElementById("skills-grid");
  skillGroups.forEach((group) => {
    const card = el("article", "card skill-card");
    const head = el("div", "skill-head"); head.append(bubble(group.icon), el("span", "", group.title));
    const ul = el("ul");
    group.items.forEach(([name, level]) => { const li = el("li", "", name); li.dataset.level = level; ul.append(li); });
    card.append(head, ul); grid.append(card);
  });
}

function linkIfAvailable(label, iconName, url) {
  if (isPlaceholder(url)) return null;
  const a = el("a"); a.href = url; a.target = "_blank"; a.rel = "noopener"; a.append(icon(iconName), document.createTextNode(label));
  return a;
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  projects.forEach((p) => {
    const card = el("article", "card project");
    const head = el("div", "project-head"); const titles = el("div");
    titles.append(el("h4", "", p.title), el("span", "badge", p.status));
    head.append(bubble(p.icon), titles);
    const tags = el("ul", "tags"); p.technologies.forEach((t) => tags.append(el("li", "", t)));
    const links = el("div", "links");
    [linkIfAvailable("GitHub", "github", p.github), linkIfAvailable("Live Demo", "ext", p.demo)]
      .filter(Boolean).forEach((link) => links.append(link));
    card.append(head, el("p", "", p.description), tags);
    if (links.children.length) card.append(links);
    grid.append(card);
  });
  const c = portfolioConfig;
  if (!isPlaceholder(c.github)) {
    const all = document.getElementById("all-projects");
    all.href = c.github; all.target = "_blank"; all.rel = "noopener"; all.hidden = false;
  }
}

function renderJourney() {
  const tl = document.getElementById("timeline");
  journey.forEach((j) => {
    const li = el("li"); const body = el("div");
    body.append(el("b", isPlaceholder(j.title) ? "ph" : "", j.title));
    if (j.text) body.append(el("p", "", j.text));
    li.append(el("span", isPlaceholder(j.when) ? "ph" : "", j.when), body); tl.append(li);
  });
  const edu = document.getElementById("education");
  education.forEach((e) => {
    const row = el("div", "row"); const text = el("span");
    e.lines.forEach((line, i) => text.append(i === 0 ? el("b", isPlaceholder(line) ? "ph" : "", line) : Object.assign(textOrPlaceholder(line, "small"))));
    row.append(bubble(e.icon), text); edu.append(row);
  });
  const ach = document.getElementById("achievements");
  const renderCredentialGroup = (heading, items) => {
    ach.append(el("h4", "credential-heading", heading));
    items.forEach((item) => {
      const row = el("div", "row credential-row");
      const text = el("span");
      text.append(el("b", "", item.title), el("small", "", item.provider));
      const action = el("span", "credential-action");
      if (item.url) {
        const a = el("a", "", item.action); a.href = item.url; a.target = "_blank"; a.rel = "noopener"; action.append(a);
      } else if (item.action === "Currently happening") {
        action.append(el("small", "status-text", item.action));
      } else {
        const a = el("span", "disabled-action", item.action); a.setAttribute("aria-disabled", "true"); a.title = "Certificate link will be added here"; action.append(a);
      }
      row.append(bubble("trophy"), text, action);
      ach.append(row);
    });
  };
  renderCredentialGroup("Certifications", certifications);
  renderCredentialGroup("Participations", participations);
}

function renderContact() {
  const c = portfolioConfig;
  const wrap = document.getElementById("email-wrap");
  const btn = el("a", "btn btn-solid", "Email Me ");
  if (isPlaceholder(c.email)) { btn.removeAttribute("href"); btn.setAttribute("aria-disabled", "true"); }
  else btn.href = "mailto:" + c.email;
  btn.append(icon("arrow")); wrap.append(btn);

  const list = document.getElementById("contact-list");
  [["mail", "Email", c.email, isPlaceholder(c.email) ? "" : "mailto:" + c.email], ["github", "GitHub", c.github, c.github],
   ["linkedin", "LinkedIn", c.linkedin, c.linkedin], ["leetcode", "LeetCode", c.leetcode, c.leetcode]]
    .forEach(([name, label, value, url]) => {
      const li = el("li"); const text = el("span"); text.append(el("small", "", label));
      if (isPlaceholder(value)) text.append(textOrPlaceholder(value));
      else { const a = el("a", "", value.replace(/^https?:\/\//, "")); a.href = url; if (url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; } text.append(a); }
      li.append(bubble(name), text); list.append(li);
    });
  socialLinks("hero-socials"); socialLinks("footer-socials");
}

/* ----- Theme (light / dark) ----- */

function setupTheme() {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const sync = () => {
    const dark = root.dataset.theme === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#151311" : "#f7f3ed";
  };
  const apply = (theme) => {
    root.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable: fine */ }
    sync();
  };
  sync();
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    if (!document.startViewTransition || reduceMotion) { apply(next); return; }
    // The new theme expands as a circle from the button.
    const box = button.getBoundingClientRect();
    const x = box.left + box.width / 2, y = box.top + box.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(() => apply(next)).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" }
      );
    }).catch(() => {});
  });
}

/* ----- Navigation, side indicator, scroll effects ----- */

const sectionList = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["journey", "Journey"], ["contact", "Contact"]];

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-links");
  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

  const dots = document.getElementById("side-dots");
  sectionList.forEach(([id, label]) => {
    const a = el("a"); a.href = "#" + id; a.setAttribute("aria-label", label); a.append(el("span", "", label));
    const li = el("li"); li.append(a); dots.append(li);
  });
}

function setupScroll() {
  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const dotLinks = [...document.querySelectorAll("#side-dots a")];
  const fill = document.querySelector(".side-fill");
  const timeline = document.getElementById("timeline");
  const sections = sectionList.map(([id]) => document.getElementById(id));
  let lastY = 0, waiting = false;

  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.transform = `scaleY(${max > 0 ? y / max : 0})`;
    header.classList.toggle("scrolled", y > 10);
    const menuOpen = document.getElementById("nav-links").classList.contains("open");
    header.classList.toggle("hide", y > lastY + 2 && y > 260 && !menuOpen);
    if (y < lastY - 2) header.classList.remove("hide");
    lastY = y;

    let current = 0;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) current = i; });
    if (max > 0 && y >= max - 4) current = sections.length - 1;
    navLinks.forEach((a) => a.classList.toggle("active", a.hash === "#" + sectionList[current][0]));
    dotLinks.forEach((a, i) => { a.classList.toggle("active", i === current); a.classList.toggle("past", i < current); });

    const box = timeline.getBoundingClientRect();
    timeline.style.setProperty("--p", Math.min(1, Math.max(0, (window.innerHeight * 0.75 - box.top) / box.height)));
    waiting = false;
  };
  window.addEventListener("scroll", () => { if (!waiting) { waiting = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ----- Reveal animations ----- */

function setupReveal() {
  document.querySelectorAll("[data-stagger]").forEach((list) => {
    [...list.children].forEach((item, i) => { item.classList.add("rv"); item.style.setProperty("--d", i); });
  });
  const targets = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) { targets.forEach((t) => t.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  targets.forEach((t) => io.observe(t));
}

// Hero name: each letter slides up out of a mask.
function setupHeroName() {
  const name = document.getElementById("hero-name");
  if (reduceMotion) return;
  name.setAttribute("aria-label", name.textContent);
  const word = el("span", "word"); word.setAttribute("aria-hidden", "true");
  [...name.textContent].forEach((letter, i) => {
    const wrap = el("span", "c"); const inner = el("span", "ci", letter);
    inner.style.setProperty("--ci", i); wrap.append(inner); word.append(wrap);
  });
  name.replaceChildren(word);
}

/* ----- Skills tabs ----- */

function setupTabs() {
  const wrap = document.getElementById("tabs");
  const pill = wrap.querySelector(".tab-pill");
  const buttons = [...wrap.querySelectorAll(".tab")];
  const items = document.querySelectorAll("#skills-grid li");
  const select = (button) => {
    buttons.forEach((b) => b.setAttribute("aria-selected", String(b === button)));
    pill.style.width = button.offsetWidth + "px";
    pill.style.height = button.offsetHeight + "px";
    pill.style.transform = `translate(${button.offsetLeft}px, ${button.offsetTop}px)`;
    items.forEach((li) => li.classList.toggle("dim", li.dataset.level !== button.dataset.level));
  };
  const reselect = () => select(buttons.find((b) => b.getAttribute("aria-selected") === "true"));
  buttons.forEach((b) => b.addEventListener("click", () => select(b)));
  window.addEventListener("resize", reselect);
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(reselect);
  reselect();
}

/* ----- Pointer effects (mouse only) ----- */

function setupPointerEffects() {
  if (!finePointer || reduceMotion) return;
  // Buttons lean toward the mouse.
  document.querySelectorAll(".btn:not([aria-disabled])").forEach((button) => {
    button.addEventListener("pointermove", (e) => {
      const box = button.getBoundingClientRect();
      button.style.transform = `translate(${(e.clientX - box.left - box.width / 2) * 0.18}px, ${(e.clientY - box.top - box.height / 2) * 0.28}px)`;
    });
    button.addEventListener("pointerleave", () => { button.style.transform = ""; });
  });
  // Soft light under the mouse inside cards.
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty("--px", e.clientX - box.left + "px");
      card.style.setProperty("--py", e.clientY - box.top + "px");
    });
  });
  // The profile circle tilts gently toward the mouse.
  const hero = document.getElementById("home");
  const photo = document.getElementById("photo");
  hero.addEventListener("pointermove", (e) => {
    const box = hero.getBoundingClientRect();
    const nx = (e.clientX - box.left) / box.width - 0.5, ny = (e.clientY - box.top) / box.height - 0.5;
    photo.style.transform = `perspective(800px) rotateY(${nx * 12}deg) rotateX(${-ny * 12}deg)`;
  });
  hero.addEventListener("pointerleave", () => { photo.style.transform = ""; });
}

/* ----- Start ----- */

renderHero(); renderAbout(); renderSkills(); renderProjects(); renderJourney(); renderContact();
document.querySelectorAll("[data-icon]").forEach((node) => { node.innerHTML = svg(node.dataset.icon); });
setupTheme(); setupNav(); setupHeroName(); setupReveal(); setupTabs(); setupScroll(); setupPointerEffects();
