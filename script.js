document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const mainFvHeight = document.querySelector('.main-fv').offsetHeight;

    window.addEventListener('scroll', () => {
        // This will check if the page is scrolled down beyond the main-fv section
        if (window.pageYOffset > mainFvHeight) {
            header.classList.add('sticky');
            header.classList.remove('non-sticky');
        } else {
            header.classList.add('non-sticky');
            header.classList.remove('sticky');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Set opacity to fully visible
                entry.target.style.transform = 'translateY(0)'; // Reset position
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, {
        threshold: 0.1 // Threshold can be adjusted based on when you want the elements to start animating
    });

    // Observe the title
    document.querySelectorAll('.news-title').forEach(el => observer.observe(el));

    // Observe each individual content item
    document.querySelectorAll('.news-content').forEach(el => observer.observe(el));
    document.querySelectorAll('.dark-btn').forEach(el => observer.observe(el));
});
