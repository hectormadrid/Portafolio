export function initCertificados(){
    document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden-element");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-element");
        observer.unobserve(entry.target); // para que no se vuelva a animar
      }
    });
  }, { threshold: 0.2 });

  hiddenElements.forEach(el => observer.observe(el));
});
}
