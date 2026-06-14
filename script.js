const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks) navLinks.classList.remove("show");
  });
});

const modeTabs = document.querySelectorAll(".mode-tab");
const modeTitle = document.getElementById("modeTitle");
const modeText = document.getElementById("modeText");

modeTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    modeTabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");

    if (modeTitle && modeText) {
      modeTitle.textContent = tab.dataset.title;
      modeText.textContent = tab.dataset.text;
    }
  });
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your enquiry has been received. We will contact you soon.");
    contactForm.reset();
  });
}

const revealElements = document.querySelectorAll(
  ".glass-card, .pricing-card, .plan-card, .gallery-card, .image-frame, .contact-info, .contact-form"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
