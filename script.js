document.addEventListener('DOMContentLoaded', () => {
    const months = {
        "January": ["gruhapravesh.jpg", "image2.jpg"],
        "February": ["image3.jpg", "image4.jpg"],
        // Add more months and photos as needed
    };

    const monthList = document.getElementById('month-list');
    const swiperWrapper = document.getElementById('swiper-wrapper');

    function loadMonth(month) {
        swiperWrapper.innerHTML = '';
        months[month].forEach(image => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            const img = document.createElement('img');
            img.src = `images/${image}`;
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        });
        // Reinitialize Swiper
        swiper.update();
    }

    function createMonthLinks() {
        Object.keys(months).forEach(month => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = month;
            a.addEventListener('click', () => {
                loadMonth(month);
            });
            li.appendChild(a);
            monthList.appendChild(li);
        });
    }

    createMonthLinks();
    loadMonth(Object.keys(months)[0]);

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
