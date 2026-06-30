const navLinks = Array.from(document.querySelectorAll(".section-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setActiveLink() {
  const offset = 80;
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top - offset <= 0 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", isActive);
  });
}

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
