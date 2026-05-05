document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ✅ SCROLL ANIMATION
  // =========================
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (!card.classList.contains("no-animate")) {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = "0.6s ease";
    }
  });

  function showOnScroll() {
    cards.forEach(card => {
      let top = card.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();


  // =========================
  // ✅ TYPING EFFECT (FIXED)
  // =========================
  const typing = document.getElementById("typing");

  if (typing) {
    const roles = [
      "Associate Software Engineer",
      "Manual Tester",
      "Java Developer",
      "Frontend Developer"
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;

    function typeEffect() {
      let currentText = roles[i];

      if (!isDeleting) {
        typing.textContent = currentText.substring(0, j);
        j++;
      } else {
        typing.textContent = currentText.substring(0, j);
        j--;
      }

      // when typing complete
      if (j === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }

      // when deleting complete
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
  }


  // =========================
  // ✅ CONTACT FORM (FIXED)
  // =========================
  const form = document.getElementById("contact-form");

  if (form) {
    const successMsg = document.getElementById("success-message");
    const btn = document.querySelector(".send-btn");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // loading effect
      if (btn) {
        btn.textContent = "Sending...";
        btn.disabled = true;
      }

      setTimeout(() => {

        if (btn) {
          btn.textContent = "Send Message";
          btn.disabled = false;
        }

        if (successMsg) {
          successMsg.style.display = "block";
          successMsg.textContent = "Message sent successfully!";
        }

        form.reset();

        // hide message after 3 sec
        setTimeout(() => {
          if (successMsg) successMsg.style.display = "none";
        }, 3000);

      }, 1500);
    });
  }

  // ===== EDUCATION ACTIVE HIGHLIGHT =====
const eduItems = document.querySelectorAll(".edu-item");

if (eduItems.length > 0) {
  window.addEventListener("scroll", () => {
    eduItems.forEach(item => {
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight / 2 && rect.bottom > 100) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
}
// ===== EXPERIENCE ACTIVE HIGHLIGHT =====
const expItems = document.querySelectorAll(".exp-item");

if (expItems.length > 0) {
  window.addEventListener("scroll", () => {
    expItems.forEach(item => {
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight / 2 && rect.bottom > 100) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
}
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".bar div");

  bars.forEach(bar => {
    let width = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});
});