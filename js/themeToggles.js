// Alternar modo oscuro/claro
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("bg-gray-900", "text-white");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("bg-gray-900", "text-white");
    themeToggle.textContent = "🌙";
  }
});
