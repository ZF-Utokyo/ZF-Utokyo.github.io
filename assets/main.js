const header = document.querySelector("[data-header]");
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setActiveLink() {
  const offset = 140;
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top - offset <= 0 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", isActive);
  });
}

setHeaderState();
setActiveLink();
window.addEventListener("scroll", () => {
  setHeaderState();
  setActiveLink();
}, { passive: true });
