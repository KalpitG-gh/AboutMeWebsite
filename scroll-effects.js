document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save the current theme to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
