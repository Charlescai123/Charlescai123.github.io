document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("theme-toggle").addEventListener("click", function() {
      toggleTheme(localStorage.getItem("theme"))
  })
});
