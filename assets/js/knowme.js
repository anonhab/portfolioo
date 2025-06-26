document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionality
    const carouselInner = document.querySelector('.knowme .carousel-inner');
    const carouselItems = document.querySelectorAll('.knowme .carousel-item');
    const prevBtn = document.querySelector('.knowme .carousel-control.prev');
    const nextBtn = document.querySelector('.knowme .carousel-control.next');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function showSlide(index) {
        if (index >= totalItems) index = 0;
        if (index < 0) index = totalItems - 1;
        currentIndex = index;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[currentIndex].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Auto-slide every 5 seconds
    let autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 8000);

    // Pause auto-slide on hover
    carouselInner.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    carouselInner.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    });

    // Lightbox functionality
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '×';
    lightbox.appendChild(closeBtn);

    const lightboxLinks = document.querySelectorAll('.knowme-lightbox');
    lightboxLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
            clearInterval(autoSlide); // Pause carousel when lightbox is open
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
        // Resume auto-slide
        autoSlide = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            // Resume auto-slide
            autoSlide = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 5000);
        }
    });
});