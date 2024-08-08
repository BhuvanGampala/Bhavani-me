document.addEventListener('DOMContentLoaded', () => {
    const greetingContainer = document.getElementById('greeting-container');

    // Show the greeting for 5 seconds, then fade it out
    setTimeout(() => {
        greetingContainer.style.opacity = '0';
        setTimeout(() => {
            greetingContainer.style.display = 'none';
        }, 1000); // Wait for the fade-out transition to complete
    }, 5000); // Display the greeting for 5 seconds

    const months = {
        "June 2023": ["gruhapravesh.jpg"],
        "July": ["july23.jpg"],
        "August": ["aug23.jpg"],
        "September": ["sep1.jpg", "sep2.jpg"],
        "October": ["oct1.jpg", "oct2.jpg","oct3.jpg"],
        "November": ["nov1.jpg", "nov2.jpg","nov3.jpg", "nov4.jpg"],
        "December": ["dec1.jpg", "dec2.jpg","dec3.jpg", "dec4.jpg"],
        "January 2024": ["jan1.jpg", "jan2.jpg"],
        "February": ["feb1.jpg", "feb2.jpg","feb3.jpg", "feb4.jpg","feb5.jpg", "feb6.jpg"],
        "March": ["mar1.jpg", "mar2.jpg"],
        "April": ["apr1.jpg", "apr2.jpg","apr3.jpg", "apr4.jpg","apr5.jpg", "apr6.jpg","apr7"],
        "May": ["may1.jpg","may2.jpg"],
        "June": ["jun1.jpg", "jun2.jpg"],
        "July": ["jul1.jpg"],
        "August": ["aug1.jpg"],
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
