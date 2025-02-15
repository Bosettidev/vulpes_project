document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeIcon.src = "/src/assets/moon.png"; // Ícone de lua
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeIcon.src = "/src/assets/sun.png"; // Ícone de sol
        }
    });
});
