// Efecto de escritura en el Hero
const text = "Desarrollador Web | Diseñador | Creativo";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typingText").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();
