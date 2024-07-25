document.addEventListener("DOMContentLoaded", function() {
    // Theme toggle button functionality
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Save theme preference in local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    });

    // Scroll effect for sections
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
