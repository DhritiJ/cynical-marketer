const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const tiltCards = document.querySelectorAll(".tilt");
tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) * 2 - 1) * 6;
    const rotateX = ((y / rect.height) * 2 - 1) * -6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  });
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Thanks - your enquiry is ready. Connect this form to email next.";
  form.reset();
});
