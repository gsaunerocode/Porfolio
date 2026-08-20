const translations = {
  en: {
    brand: { role: "Technology operations / deployment" },
    nav: { profile: "Profile", experience: "Experience", certifications: "Credentials", toolkit: "Toolkit", linkedin: "LinkedIn ↗" },
    menu: { open: "Open menu", close: "Close menu" },
    hero: {
      eyebrow: "Technology operations / global deployment",
      title: "Turning complex IT operations into reliable global delivery.",
      lede: "Technology Operations & Deployment Leader with 20+ years across global organizations, combining service reliability, infrastructure delivery and human-centered leadership.",
      primary: "Explore experience <span>↓</span>",
      download: "Download CV · EN <span>↗</span>",
      linkedinPdf: "LinkedIn profile PDF <span>↗</span>",
      photoLabel: "Human-first operator",
      photoCaption: "Global scale. Clear ownership. Calm execution.",
      stamp: "years in<br />technology"
    },
    metrics: {
      years: "years in technology operations",
      countries: "countries supported",
      servers: "Windows servers deployed",
      success: "deployment success rate",
      csat: "client CSAT on current deployments"
    },
    profile: {
      kicker: "PROFILE",
      title: "Operational clarity is a leadership discipline.",
      lede: "I build dependable operating systems around people, platforms and measurable outcomes. My work sits at the intersection of global IT operations, deployment engineering and service improvement.",
      body: "Across Venn Technology and EY, I have led distributed teams, enterprise deployments and infrastructure programs where communication, governance and technical depth all need to work together. The goal is simple: make complex delivery feel clear, predictable and useful to the people it serves.",
      calloutTitle: "What I bring",
      calloutBody: "A calm operating rhythm for high-visibility environments: clear ownership, useful metrics and teams that can keep improving after the launch."
    },
    expertise: ["Global IT operations", "Deployment engineering", "Service reliability", "People leadership", "Program delivery", "Continuous improvement", "ITSM", "Stakeholder management", "SLA / MTTR / CSAT"],
    experience: {
      kicker: "EXPERIENCE",
      title: "A career built for distributed complexity.",
      note: "Dates follow the supplied CV chronology. LinkedIn adds scope, context and outcomes to the same story.",
      roles: [
        { company: "Venn Technology", title: "Deployment Engineer Lead", period: "Oct 2025 — Present", context: "Enterprise software deployments / global clients", highlights: ["Lead a distributed team of 8 engineers across 3 regions delivering enterprise software deployments for Fortune 500 clients.", "Maintain a 98% deployment success rate and CSAT above 4.7/5 across high-visibility accounts.", "Coordinate planning, execution, incident resolution and stakeholder communication."] },
        { company: "EY — Ernst & Young", title: "Global Operations Leader", period: "Jul 2017 — Nov 2024", context: "Global print services / service improvement", highlights: ["Led multicultural operations across Argentina and India, supporting enterprise print services in 60+ countries and 25,000+ users.", "Reduced SLA breaches from 40% to 6% and improved MTTR by 35% through governance, metrics and continuous improvement.", "LinkedIn also records an 80% reduction in global outages through new processes and close collaboration with infrastructure teams."] },
        { company: "EY — Ernst & Young", title: "Global Engineering Supervisor", period: "Mar 2013 — Jul 2017", context: "Global infrastructure & deployment programs", highlights: ["Expanded global print services from 5 to 55 countries through the deployment of 600 physical and virtual Windows servers and HP devices.", "Directed 30+ server, software implementation, upgrade and infrastructure projects.", "Worked as a Wintel specialist across secure Follow You Printing, HP technologies, Equitrac, ShareScan and Active Directory authentication."] },
        { company: "ABB Group", title: "Wintel System Administrator / Printing Project Manager", period: "Oct 2012 — Feb 2013", context: "Global printing services", highlights: ["Led a global project to renew printing services with secure release using Active Directory credentials and badges.", "Replaced services with no downtime and improved security compliance and performance."] },
        { company: "Cementos Avellaneda S.A.", title: "Wintel System Administrator / Technical Project Coordinator", period: "Jan 2012 — Sep 2012", context: "Local infrastructure & disaster recovery", highlights: ["Transformed office spaces into a data-room environment for company servers.", "Coordinated contractor services to build a new disaster-recovery site in Villa Luzuriaga, completed on time despite environmental and resource challenges."] },
        { company: "Cargill", title: "Senior Wintel System Administrator", period: "Mar 2011 — Jan 2012", context: "High-criticality server support", highlights: ["Defined new procedures that reduced complex Citrix case handling from 1 hour to 10 minutes, increasing team efficiency on server OS issues."] },
        { company: "IBM", title: "Wintel / IAM System Administrator", period: "Aug 2008 — Mar 2011", context: "Logical security & Wintel", highlights: ["Supported a Vanity Fair environment with 10,000 users and 500 Windows servers.", "Administered Active Directory security groups and mixed enterprise platforms including Lotus Notes, AS400, Mainframe, PeopleSoft, Unix and SAP."] },
        { company: "Teleperformance", title: "AT&T Technical Support / Coach", period: "Nov 2005 — Aug 2008", context: "US DSL customer support", highlights: ["Provided technical support for AT&T DSL users, email and Outlook synchronization, VPN software and connectivity issues.", "Worked with US-based mobile technology analysts on outages and coached new agents through nesting."] }
      ]
    },
    credentials: {
      kicker: "CREDENTIALS",
      title: "Proof of continuous learning.",
      note: "Certificates and badges are linked to the original files supplied for this portfolio.",
      view: "Open evidence",
      listed: "Listed in source profile",
      onFile: "Certificate on file",
      course: "Course completion",
      historical: "Historical credential",
      cards: [
        { type: "course", title: "Certified Scrum Product Owner (CSPO)", issuer: "ALAIMO Labs", note: "16-hour course completed on September 5, 2023. The supplied document identifies itself as a certificate of attendance.", file: "assets/certifications/cspo-alaimo-labs.pdf" },
        { type: "course", title: "Cybersecurity and Cloud Fundamentals 1.0", issuer: "Fortinet", note: "Course completion acknowledged August 20, 2026.", file: "assets/certifications/cybersecurity-cloud-fundamentals-fortinet.pdf" },
        { type: "course", title: "Introduction to Next Generation Firewall 1.0", issuer: "Fortinet", note: "Course completion acknowledged August 20, 2026.", file: "assets/certifications/next-generation-firewall-fortinet.pdf" },
        { type: "historical", title: "ITIL Foundation in IT Service Management", issuer: "AXELOS / PeopleCert · ITIL v3", note: "Certificate on file. The document shows a renew-by date of July 15, 2014.", file: "assets/certifications/itil-v3-peoplecert.pdf" },
        { type: "historical", title: "Certified SAFe 4 Scrum Master", issuer: "Scaled Agile", note: "Certificate on file; valid from October 12, 2018 to October 11, 2019.", file: "assets/certifications/safe-4-scrum-master.pdf" },
        { type: "course", title: "Ethical Hacker", issuer: "Cisco Networking Academy", note: "Verified badge supplied as a PNG asset.", file: "assets/certifications/ethical-hacker-cisco.png" },
        { type: "listed", title: "Certified ScrumMaster (CSM)", issuer: "CV-listed certification", note: "Included in the supplied CV; no separate certificate file was included in the source folder." },
        { type: "listed", title: "Lean Six Sigma Yellow Belt", issuer: "CV-listed certification", note: "Included in the supplied CV; no separate certificate file was included in the source folder." },
        { type: "listed", title: "eCopy ShareScan 6 Technical Certification", issuer: "LinkedIn-listed certification", note: "Certification listed in the supplied LinkedIn profile export." },
        { type: "listed", title: "EY Transformative Leadership — Teaming — Bronze", issuer: "LinkedIn-listed certification", note: "Leadership learning listed in the supplied LinkedIn profile export." }
      ]
    },
    toolkit: {
      kicker: "TOOLKIT",
      title: "The systems behind the service.",
      lede: "Technical fluency is most useful when it creates better decisions, faster recovery and more confident teams.",
      clusters: [
        { title: "Cloud & infrastructure", items: ["Azure", "AWS", "Windows Server", "Active Directory", "HP enterprise devices", "Wintel"] },
        { title: "ITSM & CRM", items: ["ServiceNow", "Remedy", "Salesforce", "ITIL", "Incident resolution"] },
        { title: "Automation & analytics", items: ["PowerShell", "Power BI", "SLA / MTTR / CSAT", "Continuous improvement"] },
        { title: "Collaboration & AI", items: ["Microsoft 365 / Office", "Monday.com", "Slack", "SharePoint", "Knowledge bases", "Visual Studio Code", "Codex + ChatGPT", "Claude", "Gemini", "Copilot"] },
        { title: "Leadership", items: ["Distributed teams", "Coaching", "Stakeholder management", "Program delivery", "Global service operations"] }
      ]
    },
    details: {
      educationKicker: "EDUCATION", educationTitle: "Technical foundation.", educationDegree: "Technical Degree in Computer Science", educationSchool: "Technical School No. 1 Otto Krause · Buenos Aires · 1996–2001",
      languagesKicker: "LANGUAGES", languagesTitle: "Cross-cultural by default.",
      recognitionKicker: "RECOGNITION", recognitionTitle: "Leadership that travels.", award: "EY Cultural Global Enhancement Champion", awardNote: "LinkedIn-listed recognition for contributing to a stronger global culture.",
      languages: [["Spanish", "Native / bilingual"], ["English", "Advanced C2 · LinkedIn: native / bilingual"], ["Portuguese", "Basic A2 / elementary"], ["Italian", "Basic A2"]]
    },
    contact: { kicker: "CONNECT", title: "Let’s make the next complex thing feel simple.", body: "For global operations, deployment leadership, service reliability or a thoughtful conversation about delivery at scale.", email: "Email Gabriel <span>↗</span>", linkedin: "Open LinkedIn <span>↗</span>", side: "Based in Castelar<br />Buenos Aires, Argentina<br />Working globally" },
    footer: { note: "Technology operations / deployment / service reliability", back: "Back to top ↑" },
    toast: "Language updated to English"
  },
  es: {
    brand: { role: "operaciones tecnológicas / despliegues" },
    nav: { profile: "Perfil", experience: "Experiencia", certifications: "Credenciales", toolkit: "Herramientas", linkedin: "LinkedIn ↗" },
    menu: { open: "Abrir menú", close: "Cerrar menú" },
    hero: {
      eyebrow: "Operaciones tecnológicas / despliegue global",
      title: "Convierto operaciones de TI complejas en entregas globales confiables.",
      lede: "Líder de Operaciones Tecnológicas e Implementaciones con más de 20 años en organizaciones globales, combinando confiabilidad de servicios, infraestructura y liderazgo centrado en las personas.",
      primary: "Ver experiencia <span>↓</span>",
      download: "Descargar CV · ES <span>↗</span>",
      linkedinPdf: "Perfil de LinkedIn en PDF <span>↗</span>",
      photoLabel: "Liderazgo humano",
      photoCaption: "Escala global. Responsabilidad clara. Ejecución serena.",
      stamp: "años en<br />tecnología"
    },
    metrics: {
      years: "años en operaciones tecnológicas",
      countries: "países con servicios soportados",
      servers: "servidores Windows desplegados",
      success: "éxito en despliegues",
      csat: "CSAT de clientes en despliegues actuales"
    },
    profile: {
      kicker: "PERFIL",
      title: "La claridad operativa es una disciplina de liderazgo.",
      lede: "Construyo sistemas operativos confiables alrededor de las personas, las plataformas y los resultados medibles. Mi trabajo conecta operaciones globales de TI, ingeniería de despliegues y mejora de servicios.",
      body: "En Venn Technology y EY lideré equipos distribuidos, despliegues empresariales y programas de infraestructura donde la comunicación, la gobernanza y la profundidad técnica deben funcionar juntas. El objetivo es simple: que una entrega compleja sea clara, predecible y útil para las personas a las que sirve.",
      calloutTitle: "Lo que aporto",
      calloutBody: "Un ritmo operativo sereno para entornos de alta visibilidad: responsabilidades claras, métricas útiles y equipos capaces de seguir mejorando después del lanzamiento."
    },
    expertise: ["Operaciones globales de TI", "Ingeniería de despliegues", "Confiabilidad de servicios", "Liderazgo de equipos", "Gestión de programas", "Mejora continua", "ITSM", "Gestión de stakeholders", "SLA / MTTR / CSAT"],
    experience: {
      kicker: "EXPERIENCIA",
      title: "Una carrera preparada para la complejidad distribuida.",
      note: "Las fechas siguen la cronología del CV suministrado. LinkedIn aporta alcance, contexto y resultados a la misma historia.",
      roles: [
        { company: "Venn Technology", title: "Líder de Ingeniería de Despliegues", period: "Oct 2025 — Actualidad", context: "Despliegues de software empresarial / clientes globales", highlights: ["Lidero un equipo distribuido de 8 ingenieros en 3 regiones que entrega despliegues de software empresarial para clientes Fortune 500.", "Mantengo una tasa de éxito del 98% y un CSAT superior a 4,7/5 en cuentas de alta visibilidad.", "Coordino planificación, ejecución, resolución de incidentes y comunicación con stakeholders."] },
        { company: "EY — Ernst & Young", title: "Líder Global de Operaciones", period: "Jul 2017 — Nov 2024", context: "Servicios globales de impresión / mejora de servicios", highlights: ["Lideré operaciones multiculturales entre Argentina e India, dando soporte a servicios de impresión empresarial en más de 60 países y para más de 25.000 usuarios.", "Reduje los incumplimientos de SLA del 40% al 6% y mejoré el MTTR en un 35% mediante gobernanza, métricas y mejora continua.", "LinkedIn también registra una reducción del 80% en interrupciones globales mediante nuevos procesos y colaboración con infraestructura."] },
        { company: "EY — Ernst & Young", title: "Supervisor Global de Ingeniería", period: "Mar 2013 — Jul 2017", context: "Programas globales de infraestructura y despliegues", highlights: ["Expandí los servicios globales de impresión de 5 a 55 países mediante el despliegue de 600 servidores Windows físicos y virtuales y dispositivos HP.", "Dirigí más de 30 proyectos de implementación, actualización e infraestructura de servidores y software.", "Trabajé como especialista Wintel en Follow You Printing seguro, tecnologías HP, Equitrac, ShareScan y autenticación con Active Directory."] },
        { company: "ABB Group", title: "Administrador de Sistemas Wintel / PM de Impresión", period: "Oct 2012 — Feb 2013", context: "Servicios globales de impresión", highlights: ["Lideré un proyecto global para renovar servicios de impresión con liberación segura mediante credenciales de Active Directory y credenciales físicas.", "Reemplacé los servicios sin interrupciones y mejoré el cumplimiento de seguridad y el rendimiento."] },
        { company: "Cementos Avellaneda S.A.", title: "Administrador de Sistemas Wintel / Coordinador Técnico", period: "Ene 2012 — Sep 2012", context: "Infraestructura local y recuperación ante desastres", highlights: ["Transformé espacios de oficina en un entorno de sala técnica para alojar servidores de la compañía.", "Coordiné contratistas para construir un nuevo sitio de recuperación ante desastres en Villa Luzuriaga, terminado a tiempo pese a desafíos ambientales y de recursos."] },
        { company: "Cargill", title: "Ingeniero Senior de Sistemas Wintel", period: "Mar 2011 — Ene 2012", context: "Soporte de servidores de alta criticidad", highlights: ["Definí nuevos procedimientos que redujeron la atención de casos complejos de Citrix de 1 hora a 10 minutos, aumentando la eficiencia del equipo."] },
        { company: "IBM", title: "Administrador de Sistemas Wintel / IAM", period: "Ago 2008 — Mar 2011", context: "Seguridad lógica y Wintel", highlights: ["Soporté un entorno de Vanity Fair con 10.000 usuarios y 500 servidores Windows.", "Administré grupos de seguridad de Active Directory y plataformas empresariales mixtas, incluyendo Lotus Notes, AS400, Mainframe, PeopleSoft, Unix y SAP."] },
        { company: "Teleperformance", title: "Soporte Técnico AT&T / Coach", period: "Nov 2005 — Ago 2008", context: "Soporte a clientes DSL en EE. UU.", highlights: ["Brindé soporte técnico a usuarios de AT&T DSL, sincronización de correo y Outlook, software VPN y problemas de conectividad.", "Trabajé con analistas de tecnología en EE. UU. ante interrupciones y entrené agentes nuevos mediante nesting."] }
      ]
    },
    credentials: {
      kicker: "CREDENCIALES",
      title: "Evidencia de aprendizaje continuo.",
      note: "Los certificados y badges enlazan a los archivos originales suministrados para este portfolio.",
      view: "Abrir evidencia",
      listed: "Listado en el perfil fuente",
      onFile: "Certificado disponible",
      course: "Curso completado",
      historical: "Credencial histórica",
      cards: [
        { type: "course", title: "Certified Scrum Product Owner (CSPO)", issuer: "ALAIMO Labs", note: "Curso de 16 horas completado el 5 de septiembre de 2023. El documento suministrado se identifica como certificado de asistencia.", file: "assets/certifications/cspo-alaimo-labs.pdf" },
        { type: "course", title: "Cybersecurity and Cloud Fundamentals 1.0", issuer: "Fortinet", note: "Curso completado según constancia del 20 de agosto de 2026.", file: "assets/certifications/cybersecurity-cloud-fundamentals-fortinet.pdf" },
        { type: "course", title: "Introduction to Next Generation Firewall 1.0", issuer: "Fortinet", note: "Curso completado según constancia del 20 de agosto de 2026.", file: "assets/certifications/next-generation-firewall-fortinet.pdf" },
        { type: "historical", title: "ITIL Foundation in IT Service Management", issuer: "AXELOS / PeopleCert · ITIL v3", note: "Certificado disponible. El documento muestra una fecha de renovación del 15 de julio de 2014.", file: "assets/certifications/itil-v3-peoplecert.pdf" },
        { type: "historical", title: "Certified SAFe 4 Scrum Master", issuer: "Scaled Agile", note: "Certificado disponible; válido del 12 de octubre de 2018 al 11 de octubre de 2019.", file: "assets/certifications/safe-4-scrum-master.pdf" },
        { type: "course", title: "Ethical Hacker", issuer: "Cisco Networking Academy", note: "Badge verificado suministrado como imagen PNG.", file: "assets/certifications/ethical-hacker-cisco.png" },
        { type: "listed", title: "Certified ScrumMaster (CSM)", issuer: "Certificación listada en CV", note: "Incluida en el CV suministrado; no se encontró un archivo de certificado separado en la carpeta fuente." },
        { type: "listed", title: "Lean Six Sigma Yellow Belt", issuer: "Certificación listada en CV", note: "Incluida en el CV suministrado; no se encontró un archivo de certificado separado en la carpeta fuente." },
        { type: "listed", title: "eCopy ShareScan 6 Technical Certification", issuer: "Certificación listada en LinkedIn", note: "Certificación listada en el PDF de perfil de LinkedIn suministrado." },
        { type: "listed", title: "EY Transformative Leadership — Teaming — Bronze", issuer: "Certificación listada en LinkedIn", note: "Formación de liderazgo listada en el PDF de perfil de LinkedIn suministrado." }
      ]
    },
    toolkit: {
      kicker: "HERRAMIENTAS",
      title: "Los sistemas detrás del servicio.",
      lede: "La fluidez técnica es más valiosa cuando produce mejores decisiones, recuperación más rápida y equipos con más confianza.",
      clusters: [
        { title: "Nube e infraestructura", items: ["Azure", "AWS", "Windows Server", "Active Directory", "Dispositivos HP enterprise", "Wintel"] },
        { title: "ITSM y CRM", items: ["ServiceNow", "Remedy", "Salesforce", "ITIL", "Resolución de incidentes"] },
        { title: "Automatización y analítica", items: ["PowerShell", "Power BI", "SLA / MTTR / CSAT", "Mejora continua"] },
        { title: "Colaboración e IA", items: ["Microsoft 365 / Office", "Monday.com", "Slack", "SharePoint", "Bases de conocimiento", "Visual Studio Code", "Codex + ChatGPT", "Claude", "Gemini", "Copilot"] },
        { title: "Liderazgo", items: ["Equipos distribuidos", "Coaching", "Gestión de stakeholders", "Entrega de programas", "Operaciones globales"] }
      ]
    },
    details: {
      educationKicker: "EDUCACIÓN", educationTitle: "Base técnica.", educationDegree: "Título Técnico en Computación", educationSchool: "Escuela Técnica N.° 1 Otto Krause · Buenos Aires · 1996–2001",
      languagesKicker: "IDIOMAS", languagesTitle: "Multicultural por naturaleza.",
      recognitionKicker: "RECONOCIMIENTO", recognitionTitle: "Liderazgo que trasciende fronteras.", award: "EY Cultural Global Enhancement Champion", awardNote: "Reconocimiento listado en LinkedIn por contribuir a una cultura global más sólida.",
      languages: [["Español", "Nativo / bilingüe"], ["Inglés", "Avanzado C2 · LinkedIn: nativo / bilingüe"], ["Portugués", "Básico A2 / elemental"], ["Italiano", "Básico A2"]]
    },
    contact: { kicker: "CONECTEMOS", title: "Hagamos que lo próximo complejo se sienta simple.", body: "Para operaciones globales, liderazgo de despliegues, confiabilidad de servicios o una conversación con criterio sobre entregar a escala.", email: "Escribir a Gabriel <span>↗</span>", linkedin: "Abrir LinkedIn <span>↗</span>", side: "Basado en Castelar<br />Buenos Aires, Argentina<br />Trabajo global" },
    footer: { note: "operaciones tecnológicas / despliegues / confiabilidad de servicios", back: "Volver arriba ↑" },
    toast: "Idioma actualizado a español"
  }
};

let currentLanguage = localStorage.getItem("portfolio-language") || "en";

function getValue(source, path) {
  return path.split(".").reduce((value, key) => value && value[key], source);
}

function setText(selector, value) {
  const node = document.querySelector(`[data-i18n="${selector}"]`);
  if (node) node.innerHTML = value;
}

function renderExperience(content) {
  const list = document.querySelector("#experience-list");
  list.innerHTML = content.experience.roles.map((role, index) => `
    <article class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-period">${role.period}</div>
      <div>
        <div class="timeline-company">${role.company}</div>
        <div class="timeline-title">${role.title}</div>
        <div class="timeline-context">${role.context}</div>
        <ul class="timeline-highlights">
          ${role.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
        </ul>
      </div>
    </article>
  `).join("");
}

function credentialLabel(type, content) {
  if (type === "listed") return content.listed;
  if (type === "historical") return content.historical;
  return content.course;
}

function renderCredentials(content) {
  const list = document.querySelector("#credential-list");
  list.innerHTML = content.credentials.cards.map((card) => `
    <article class="credential-card ${card.type === "listed" ? "is-listed" : ""}">
      <p class="credential-type">${credentialLabel(card.type, content.credentials)}</p>
      <h3>${card.title}</h3>
      <p class="credential-issuer">${card.issuer}</p>
      <p>${card.note}</p>
      ${card.file ? `<a class="credential-link" href="${card.file}" target="_blank" rel="noreferrer">${content.credentials.view} <span>↗</span></a>` : `<span class="credential-link">${content.credentials.listed}</span>`}
    </article>
  `).join("");
}

function renderToolkit(content) {
  const list = document.querySelector("#toolkit-list");
  list.innerHTML = content.toolkit.clusters.map((cluster, index) => `
    <article class="toolkit-card">
      <span class="toolkit-index">0${index + 1} /</span>
      <h3>${cluster.title}</h3>
      <ul class="toolkit-items">${cluster.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderTags(content) {
  document.querySelector("#expertise-tags").innerHTML = content.expertise.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function renderLanguages(content) {
  document.querySelector("#language-list").innerHTML = content.details.languages.map(([language, level]) => `
    <div class="language-row"><span>${language}</span><span>${level}</span></div>
  `).join("");
}

function updateLanguage(language, showToast = false) {
  currentLanguage = language;
  const content = translations[language];
  document.documentElement.lang = language;
  localStorage.setItem("portfolio-language", language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getValue(content, node.dataset.i18n);
    if (value !== undefined) node.innerHTML = value;
  });

  renderExperience(content);
  renderCredentials(content);
  renderToolkit(content);
  renderTags(content);
  renderLanguages(content);

  const title = language === "es"
    ? "Gabriel H. Saunero | Líder de Operaciones Tecnológicas"
    : "Gabriel H. Saunero | Technology Operations & Deployment Leader";
  const description = language === "es"
    ? "Portfolio bilingüe de Gabriel H. Saunero, líder de operaciones tecnológicas e implementaciones."
    : "Bilingual portfolio of Gabriel H. Saunero, Technology Operations and Deployment Leader.";
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", description);

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const isActive = button.dataset.setLang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  document.querySelector('.button-ghost').setAttribute("href", language === "es" ? "assets/cv/gabriel-saunero-cv-es.pdf" : "assets/cv/gabriel-saunero-cv-en.pdf");
  document.querySelector('.button-ghost').setAttribute("download", "");
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  if (showToast) showMessage(content.toast);
}

function showMessage(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showMessage.timer);
  showMessage.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.querySelectorAll("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => updateLanguage(button.dataset.setLang, button.dataset.setLang !== currentLanguage));
});

const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  const label = document.querySelector('[data-i18n="menu.open"]');
  if (label) label.textContent = isOpen ? translations[currentLanguage].menu.close : translations[currentLanguage].menu.open;
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

updateLanguage(currentLanguage);
