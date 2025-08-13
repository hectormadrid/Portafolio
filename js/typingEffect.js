// Efecto de escritura en el Hero
export function initTypingEffect(){
  const text = "Ingeniero Informatico";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typingText").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

}
