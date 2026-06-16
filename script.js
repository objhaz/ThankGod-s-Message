function createHearts() {
    const heartsContainer = document.getElementById('hearts');

    const heartSymbols = [
        '💜',
        '💖',
        '💕',
        '💗',
        '💝'
    ];

    setInterval(() => {
        const heart = document.createElement('div');

        heart.className = 'heart';

        heart.textContent =
            heartSymbols[
                Math.floor(Math.random() * heartSymbols.length)
            ];

        heart.style.left = Math.random() * 100 + 'vw';

        heart.style.animationDuration =
            (Math.random() * 3 + 2) + 's';

        heart.style.fontSize =
            (Math.random() * 20 + 10) + 'px';

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);
}

function openLetter() {
    document
        .getElementById('envelopeView')
        .classList.add('hidden');

    document
        .getElementById('letterView')
        .classList.add('visible');

    createHearts();
}
