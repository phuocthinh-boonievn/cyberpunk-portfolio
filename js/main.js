/**
 * Cyberpunk Portfolio — Nguyễn Phan Phước Thịnh
 * Static site — no build step required
 */

const SKILLS = [
  { name: "C# / .NET", level: 92 },
  { name: "ASP.NET Core / EF", level: 88 },
  { name: "SQL Server", level: 85 },
  { name: "TypeScript / React", level: 82 },
  { name: "React Native", level: 78 },
  { name: "Java / Spring Boot", level: 70 },
  { name: "Docker / CI/CD", level: 75 },
  { name: "Git / Linux", level: 85 },
];

const FRAMEWORKS = [
  ".NET", "ABP.IO", "Spring Boot", "React", "React Native",
  "Unity", "Unreal Engine", "Expo", "Redux", "Quartz.NET",
  "Redis", "Entity Framework", "xUnit", "Jest",
];

const PROJECTS = [
  {
    id: "uobong",
    title: "UOBONG.COM (MOUNTAIN PROJECT)",
    type: "MOBILE",
    category: "mobile",
    overview:
      " Cross-platform outdoor adventure app where users complete location based quests, track hikes with background GPS, earn achievements, and join social guilds. Built as a Turborepo monorepo with React Native (Expo), Next.js, and an admin dashboard.",
    features: [
      "cross-platform mobile app (iOS/Android) using Expo SDK 54, React Native New Architecture, React 19, and TypeScript",
      "Quest & target achievement flows with background geofencing, offline-first local storage, and backend sync when connectivity returns",
      "Activity recording screens: live GPS tracking, GPX export/upload, map overlays (Naver Maps), distance/elevation stats, and shareable record cards",
      "Social & gamification screens: user profiles, followers, reviews, badges/titles/challenges, weekly targets, and achievement celebrations",
    ],
    tech: ["React Native", "TypeScript", "Expo", "NativeWind / Tailwind CSS", "Expo", " SQLite (Drizzle ORM)", "Jest"],
  },
  {
    id: "dsa",
    title: " DSA ADMIN PLATFORM (꼼꼼이)",
    type: "WEB",
    category: "web",
    overview:
      " DSA Admin Platform (꼼꼼이) — Construction Safety Technical Guidance SaaS & Admin Platform",
    features: [
      "Multi-tenant SaaS platform for construction safety technical guidance organizations, serving system admins, org managers, field instructors, and external clients",
      "Monorepo with NestJS API (JWT, BullMQ job queues, Swagger) and React/Vite frontend (570+ components, role-based routing) on Supabase",
      "Project management, technical guidance scheduling, 13page compliance report generation, risk assessment matrices, and hazard inspection tooling",
      "Toss Payments for subscription/seat billing and G2B API for public bid notice synchronization",
      "Nginx reverse proxy with HTTPS/HTTP2/SSL",
      "Signup flows, invite-based project joining, document exports, construction management, KPI dashboards, and mobile WebView (responsive) navigation",
    ],
    tech: ["React", "TypeScript", "NestJS", "Supabase", "Expo", "PostgreSQL", "Tailwind CSS", "Toss Payment"],
  },
  {
    id: "avatar-backend",
    title: "Avatar Tour System — Back-end",
    type: "BACKEND",
    category: "backend",
    overview:
      "Zalo Mini-App backend granting tour vouchers and discounts for solo travel experiences.",
    features: [
      "3-Layer Architecture with Entity Framework & JWT",
      "VNPay Sandbox payment integration",
      "Generic Repositories & Unit of Work",
      "Docker microservices (3 containers)",
      "Nginx reverse proxy with HTTPS/HTTP2/SSL",
      "GitHub Actions CI/CD on Linux VPS",
    ],
    tech: ["ASP.NET Core", "EF Core", "JWT", "Docker", "Nginx", "SQL Server", "GitHub Actions"],
  },
  {
    id: "avatar-mobile",
    title: "Avatar Tour System — Mobile",
    type: "MOBILE",
    category: "mobile",
    overview:
      "React Native Expo app for tourism staff — booking validation, QR check-in, and real-time sync.",
    features: [
      "Staff login & JWT authentication",
      "QR/barcode scanning for booking validation",
      "Real-time booking status with central DB",
      "Redux state management & custom API hooks",
      "Cross-platform iOS & Android via Expo",
    ],
    tech: ["React Native", "Expo", "Redux", "REST API", "JWT", "TypeScript"],
  },
  {
    id: "pharmacy",
    title: "Home Pharmacy Management",
    type: "WEB",
    category: "web",
    overview:
      "ASP.NET Core 8 MVC for pharmaceutical ops — inventory, prescriptions, sales, and scheduled Excel exports.",
    features: [
      "CRUD for patients, medicine, prescriptions & sales",
      "Server-side pagination & multi-criteria search",
      "Quartz.NET scheduled daily Excel reports (10 PM)",
      "Dual-database setup (app + Quartz job store)",
      "ClosedXML dynamic report generation",
    ],
    tech: ["ASP.NET Core 8", "MVC", "EF Core 8", "Quartz.NET", "SQL Server", "ClosedXML"],
  },
];

const CERTIFICATES = [
  { title: "User Experience Research and Design", org: "University of Michigan — Coursera" },
  { title: "Software Development Lifecycle", org: "University of Minnesota — Coursera" },
  { title: "Computer Communications", org: "University of Colorado System — Coursera" },
  { title: "CertNexus Certified Ethical Emerging Technologist", org: "CertNexus — Coursera" },
];

const TERMINAL_LINES = [
  "> Initializing neural link...",
  "> Loading profile: PHUOC_THINH.dev",
  "> Stack: .NET | React Native | TypeScript",
  "> Status: Ready for transmission_",
];

// ——— Matrix rain background ———
function initMatrix() {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let width, height, columns, drops;
  const chars = "アイウエオカキクケコサシスセソタチツテト01アイウエオ";
  const fontSize = 14;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(1);
  }

  function draw() {
    ctx.fillStyle = "rgba(5, 8, 16, 0.08)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00f0ff";
    ctx.font = `${fontSize}px Share Tech Mono, monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.globalAlpha = Math.random() * 0.5 + 0.2;
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

// ——— Typewriter ———
function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  let lineIndex = 0;
  let charIndex = 0;
  let currentText = "";

  function type() {
    if (lineIndex >= TERMINAL_LINES.length) return;

    const line = TERMINAL_LINES[lineIndex];
    if (charIndex < line.length) {
      currentText += line[charIndex];
      el.textContent = currentText;
      charIndex++;
      setTimeout(type, 28 + Math.random() * 40);
    } else {
      currentText += "\n";
      el.textContent = currentText;
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 400);
    }
  }

  setTimeout(type, 800);
}

// ——— Live clock ———
function initClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  function tick() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
  }
  tick();
  setInterval(tick, 1000);
}

// ——— Skill bars ———
function renderSkills() {
  const container = document.getElementById("skill-bars");
  if (!container) return;

  container.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-bar" data-level="${s.level}">
      <div class="skill-bar-header">
        <span>${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="width: 0"></div>
      </div>
    </div>`
  ).join("");
}

function renderFrameworks() {
  const container = document.getElementById("framework-chips");
  if (!container) return;
  container.innerHTML = FRAMEWORKS.map((f) => `<span class="chip">${f}</span>`).join("");
}

// ——— Projects ———
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card" data-category="${p.category}">
      <div class="project-card-header">
        <h3>${p.title}</h3>
        <span class="project-type">${p.type}</span>
      </div>
      <div class="project-card-body">
        <p>${p.overview}</p>
        <ul class="project-features">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="project-tech">
          ${p.tech.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    </article>`
  ).join("");
}

function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });
}

// ——— Certificates ———
function renderCerts() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  grid.innerHTML = CERTIFICATES.map(
    (c) => `
    <article class="cert-card">
      <h4>${c.title}</h4>
      <p>${c.org}</p>
    </article>`
  ).join("");
}

// ——— Scroll reveal ———
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("skill-category")) {
            animateSkillBars(entry.target);
          }
          if (entry.target.closest(".hero-panel") || entry.target.classList.contains("hero-panel")) {
            animateRings();
          }
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function animateSkillBars(section) {
  section.querySelectorAll(".skill-bar-fill").forEach((fill) => {
    const bar = fill.closest(".skill-bar");
    const level = bar?.dataset.level || 0;
    requestAnimationFrame(() => {
      fill.style.width = `${level}%`;
    });
  });
}

// Animate rings on hero visible
function animateRings() {
  document.querySelectorAll(".skill-ring").forEach((ring) => {
    const value = parseInt(ring.dataset.value, 10) || 0;
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (value / 100) * circumference;
    const fill = ring.querySelector(".ring-fill");
    if (fill) fill.style.strokeDashoffset = offset;
  });
}

// Trigger ring animation when hero loads
function initRings() {
  const hero = document.querySelector(".hero-panel");
  if (!hero) return;
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateRings();
        obs.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  obs.observe(hero);
}

// ——— Nav ———
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  // Active section highlight
  const sections = document.querySelectorAll("section[id]");
  const navLinks = nav?.querySelectorAll("a") || [];

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((a) => {
            a.style.color =
              a.getAttribute("href") === `#${id}` ? "var(--neon-cyan)" : "";
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => sectionObserver.observe(s));
}

// ——— Contact form (mailto) ———
function initContactForm() {
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const message = document.getElementById("sender-message").value.trim();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:phuocthinhlkr@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ——— Header shrink on scroll ———
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true }
  );
}

// ——— Boot ———
document.addEventListener("DOMContentLoaded", () => {
  initMatrix();
  initTypewriter();
  initClock();
  renderSkills();
  renderFrameworks();
  renderProjects();
  renderCerts();
  initProjectFilters();
  initReveal();
  initRings();
  initNav();
  initContactForm();
  initHeaderScroll();

  // Animate skill bars when skills section scrolls in
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSkillBars(skillsSection);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(skillsSection);
  }
});
