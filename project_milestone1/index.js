var bars = document.querySelectorAll('.bar');
bars.forEach(function (bar) {
    var skillLevel = bar.dataset.skill;
    if (skillLevel) {
        bar.style.width = skillLevel + '%';
    }
});
