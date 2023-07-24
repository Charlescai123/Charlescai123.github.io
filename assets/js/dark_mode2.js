document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toggle").addEventListener("click", function() {
    console.log("Button clicked!");
    var theme = localStorage.getItem("theme");
    var body = document.querySelector('body');
    // this.classList.toggle('fa-moon');
    if(theme == 'light'){
      console.log(theme);
      body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '1s';
      localStorage.setItem('theme', 'dark');
    }else{
      body.style.background = 'rgb(0, 0, 0)';
      body.style.color = 'white';
      body.style.transition = '1s';
      localStorage.setItem('theme', 'light');
      console.log(theme);
      console.log(body.style.background);
      console.log(body.style.color);
    }
    this.classList.toggle('fa-sun');
    this.classList.toggle('fa-moon');
    /*toggleTheme(localStorage.getItem("theme"));*/
  })
});

let initTheme = e=>{
  if (null == e || "null" == e) {
      const t = window.matchMedia;
      t && t("(prefers-color-scheme: dark)").matches && (e = "dark")
  }
  localStorage.setItem('theme', 'light');
}

initTheme(localStorage.getItem("theme"));