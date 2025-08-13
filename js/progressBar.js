export function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-progress') + '%';
        bar.style.width = targetWidth;
        bar.style.transition = 'width 1.5s ease';
        progressObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    bar.style.width = '0%';
    progressObserver.observe(bar);
  });
}
