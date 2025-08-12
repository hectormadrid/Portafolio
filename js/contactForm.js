// Validación del formulario de contacto
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  const msgEl = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msgEl.textContent = "Por favor, completa todos los campos.";
    msgEl.className = "text-red-500";
    return;
  }
  msgEl.textContent = "¡Mensaje enviado con éxito!";
  msgEl.className = "text-green-500";
  e.target.reset();
});
