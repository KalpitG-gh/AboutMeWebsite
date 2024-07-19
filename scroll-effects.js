document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.container section');
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    });
});
