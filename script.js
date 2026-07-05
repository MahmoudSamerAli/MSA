/* ============================================
   CONFIG — edit these lines for your business
   ============================================ */
const WHATSAPP_NUMBER = "+201027993246";
const INSTAGRAM_USERNAME = "MahmoudSamerAli";
const MESSENGER_PAGE_ID = "61591803773296";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61591803773296";

/* ============================================
   Contact modal — choose platform
   ============================================ */
const modal = document.getElementById("contactModal");
const modalClose = document.getElementById("modalClose");
let pendingMessage = "";

document.querySelectorAll(".js-open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    pendingMessage = btn.getAttribute("data-wa-msg") || "Hi MSA! I'd like to know more about your design services.";
    modal.hidden = false;
  });
});

modalClose.addEventListener("click", () => { modal.hidden = true; });
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.hidden = true;
});

document.querySelectorAll(".platform-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const platform = btn.dataset.platform;
    const text = encodeURIComponent(pendingMessage);
    let url = "";
    if (platform === "whatsapp") {
      url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    } else if (platform === "instagram") {
      url = `https://ig.me/m/${INSTAGRAM_USERNAME}`;
    } else if (platform === "messenger") {
      url = `https://m.me/${MESSENGER_PAGE_ID}`;
    }
    modal.hidden = true;
    if (url) window.open(url, "_blank", "noopener");
  });
});

/* ============================================
   Mobile nav toggle
   ============================================ */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================
   Footer year
   ============================================ */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
