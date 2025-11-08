// Efecto de escritura en el Hero
export function initTypingEffect() {
  const phrases = ["Ingeniero Informático", "Desarrollador Web", "Soporte TI"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 1500;
  const pauseBeforeType = 500;
  const typingTextElement = document.getElementById("typingText");

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pausar al final de la frase antes de borrar
      setTimeout(() => { isDeleting = true; }, pauseBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      // Pausar antes de escribir la siguiente frase
      setTimeout(() => {}, pauseBeforeType);
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, currentSpeed);
  }

  if (typingTextElement) {
    type();
  }
}