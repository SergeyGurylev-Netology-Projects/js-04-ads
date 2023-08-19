let rotatorCase = document.querySelector('.rotator__case_active');
if (!rotatorCase) rotatorCase = document.querySelector('.rotator__case');
if (rotatorCase) activeRotator(null, rotatorCase);

function activeRotator(prev, current) {
    current.style.color = current.dataset.color;
    current.classList.add('rotator__case_active');

    if (prev) prev.classList.remove('rotator__case_active');
    prev = current;

    let next = prev.nextElementSibling;
    if (!next) next = prev.closest('.rotator').querySelector('.rotator__case');

    setTimeout(
        () => activeRotator(prev, next),
        current.dataset.speed);
}
