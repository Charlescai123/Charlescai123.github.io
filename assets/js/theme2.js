document.addEventListener("DOMContentLoaded", function() {
  render();
  document.getElementById("toggle").addEventListener("click", function() {
    console.log("Button clicked!");
    var theme = localStorage.getItem("theme");
    var body = document.querySelector('body');
    console.log(theme);
    console.log(body.style);
    // this.classList.toggle('fa-moon');
    if(theme == 'light'){
      body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '0.2s';
      localStorage.setItem('theme', 'dark');
    }else{
      body.style.background = 'rgb(28, 28, 29)';
      body.style.color = 'white';
      body.style.transition = '0.2s';
      localStorage.setItem('theme', 'light');
    }
    this.classList.toggle('fa-sun');
    this.classList.toggle('fa-moon');
    console.log(this.classList);
    /*toggleTheme(localStorage.getItem("theme"));*/
  })
});

let render = ()=>{
  var theme = localStorage.getItem('theme');
  var body = document.querySelector('body');
  if(theme == 'light'){
    body.style.background = 'rgb(28, 28, 29)';
    body.style.color = 'white';
    body.style.transition = '0.2s';
  }else{
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '0.2s';
  }
}

let initTheme = e=>{
  if (null == e || "null" == e) {
      const t = window.matchMedia;
      t && t("(prefers-color-scheme: dark)").matches && (e = "dark")
  }
  // localStorage.setItem('theme', 'light');
}

//initTheme(localStorage.getItem("theme"));