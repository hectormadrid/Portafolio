export function initScrollAnimations(){
  const elements = document.querySelectorAll('.hidden-element');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-element');
    }
  });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));
}
