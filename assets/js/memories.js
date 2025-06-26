document.addEventListener('DOMContentLoaded', function () {
    // Initialize Vanilla Tilt for memory cards
    VanillaTilt.init(document.querySelectorAll('.memories .box.tilt'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5
    });

    // Lightbox functionality
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    lightbox.appendChild(closeBtn);

    const lightboxLinks = document.querySelectorAll('.memory-lightbox');
    lightboxLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            lightboxImg.src = this.href;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});