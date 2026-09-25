/* ========================================================= MOBILE MENU ========================================================= */ const menuBtn =
  document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const body = document.body;
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
    body.classList.toggle("menu-open");
    const icon = menuBtn.querySelector("i");
    if (navbar.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}
/* ========================================================= CLOSE MOBILE MENU AFTER CLICK ========================================================= */ const navLinks =
  document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    body.classList.remove("menu-open");
    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});
/* ========================================================= HEADER SCROLL EFFECT ========================================================= */ const header =
  document.getElementById("header");
function updateHeader() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", updateHeader);
updateHeader();
/* ========================================================= ACTIVE NAVIGATION ========================================================= */ const sections =
  document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".navbar a");
function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });
  navigationLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", updateActiveLink);
updateActiveLink();
/* ========================================================= FAQ ACCORDION ========================================================= */ const faqItems =
  document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("open");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherAnswer.style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
/* ========================================================= BACK TO TOP ========================================================= */ const backTop =
  document.getElementById("backTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});
backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/* ========================================================= CONTACT FORM -> WHATSAPP ========================================================= */ const contactForm =
  document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();
  if (!name || !phone) {
    alert("من فضلك اكتب الاسم ورقم الجوال.");
    return;
  }
  const whatsappNumber = "966570058596";
  let text =
    `السلام عليكم، أرغب في بيع مكيف مستعمل.%0A%0A` +
    `الاسم: ${name}%0A` +
    `رقم الجوال: ${phone}%0A` +
    `نوع المكيف: ${type || "غير محدد"}%0A` +
    `التفاصيل: ${message || "لا توجد تفاصيل إضافية"}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(whatsappURL, "_blank");
});
/* ========================================================= PHONE NUMBER FORMATTING ========================================================= */ const phoneInput =
  document.getElementById("phone");
phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^\d+]/g, "");
});
/* ========================================================= FOOTER YEAR ========================================================= */ const yearElement =
  document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
/* ========================================================= REVEAL ANIMATION ========================================================= */ const revealElements =
  document.querySelectorAll(
    ".service-card, .type-card, .step, .contact-card, .faq-item",
  );
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealElements.forEach((element, index) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = `opacity 0.6s ease ${index * 0.04}s, transform 0.6s ease ${index * 0.04}s`;
  revealObserver.observe(element);
});
/* ========================================================= SMOOTH INTERNAL LINKS ========================================================= */ document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") {
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
  });
