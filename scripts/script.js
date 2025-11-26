document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();

      if (!name || !email || !message) {
        alert("Por favor preencha todos os campos.");
        return;
      }

      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
