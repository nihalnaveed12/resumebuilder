const bars = document.querySelectorAll('.bar') as NodeListOf<HTMLElement>;

bars.forEach(bar => {
  const skillLevel = bar.dataset.skill;
  if (skillLevel) {
    bar.style.width = skillLevel + '%';
  }
});