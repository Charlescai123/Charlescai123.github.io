document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("theme-btn").addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"))
    })
});
