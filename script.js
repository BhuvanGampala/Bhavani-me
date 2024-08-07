document.addEventListener('DOMContentLoaded', () => {
    const months = {
        "January": [ "gruhapravesh.jpg"],
        "February": ["image3.jpg", "image4.jpg"],
        // Add more months and photos as needed
    };

    const monthList = document.getElementById('month-list');
    const slideImage = document.getElementById('slide-image');

    let currentMonth = "January";
    let currentImageIndex = 0;

    function loadMonth(month) {
        currentMonth = month;
        currentImageIndex = 0;
        showImage();
    }

    function showImage() {
        slideImage.src = `images/${months[currentMonth][currentImageIndex]}`;
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
    showImage();

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % months[currentMonth].length;
        showImage();
    }, 3000); // Change image every 3 seconds
});
