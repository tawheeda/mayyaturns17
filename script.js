document.addEventListener("DOMContentLoaded", () => {
  const changingNumber = document.getElementById("changingNumber");
  const celebrateBtn = document.getElementById("celebrateBtn");
  const confettiContainer = document.getElementById("confettiContainer");
  const songBtn = document.getElementById("songBtn");
  const birthdaySong = document.getElementById("birthdaySong");

  if (changingNumber) {
    setTimeout(() => {
      changingNumber.classList.add("flip");

      setTimeout(() => {
        changingNumber.textContent = "7";
        changingNumber.classList.remove("flip");
        createConfetti();
      }, 550);
    }, 1600);
  }

  function createConfetti() {
    if (!confettiContainer) return;

    const colors = ["#ff4da6", "#ffc107", "#ffffff", "#d63384", "#ff8cc6"];

    for (let i = 0; i < 120; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }
  }

  if (celebrateBtn) {
    celebrateBtn.addEventListener("click", () => {
      createConfetti();
      createFloatingText();
    });
  }

  if (songBtn && birthdaySong) {
    songBtn.addEventListener("click", () => {
      if (birthdaySong.paused) {
        birthdaySong.play();
        songBtn.textContent = "Pause Birthday Song ⏸️";
        createConfetti();
      } else {
        birthdaySong.pause();
        songBtn.textContent = "Play Birthday Song 🎵";
      }
    });

    birthdaySong.addEventListener("ended", () => {
      songBtn.textContent = "Play Birthday Song 🎵";
    });
  }

  function createFloatingText() {
    const text = document.createElement("div");
    text.textContent = "Happy 17th Mayya 💗";
    text.style.position = "fixed";
    text.style.left = "50%";
    text.style.top = "50%";
    text.style.transform = "translate(-50%, -50%)";
    text.style.fontSize = "clamp(2rem, 6vw, 5rem)";
    text.style.fontWeight = "900";
    text.style.color = "#d63384";
    text.style.background = "white";
    text.style.padding = "25px 35px";
    text.style.borderRadius = "30px";
    text.style.boxShadow = "0 20px 50px rgba(0,0,0,0.2)";
    text.style.zIndex = "2000";
    text.style.textAlign = "center";

    document.body.appendChild(text);

    setTimeout(() => {
      text.remove();
    }, 1800);
  }

  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.textContent = Math.random() > 0.5 ? "✨" : "💗";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 6000);
  }

  setInterval(createSparkle, 450);

  const revealElements = document.querySelectorAll(".section, .final-section");

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  function revealOnScroll() {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    document.querySelectorAll(".memory-wall img").forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
      lightboxImg.src = "";
    });
  }
});