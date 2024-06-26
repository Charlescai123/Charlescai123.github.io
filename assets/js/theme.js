let toggleTheme = e=>{
  setTheme("dark" == e ? "light" : "dark");
}
, setTheme = e=>{
  setToggle(e),
  transTheme(),
  //setHighlight(e),
  e ? document.documentElement.setAttribute("data-theme", e) : document.documentElement.removeAttribute("data-theme"),
  localStorage.setItem("theme", e)
  /*,
  "undefined" != typeof medium_zoom && medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee"
  })*/
}
, setHighlight = e=>{
  "dark" == e ? (document.getElementById("highlight_theme_light").media = "none",
  document.getElementById("highlight_theme_dark").media = "") : (document.getElementById("highlight_theme_dark").media = "none",
  document.getElementById("highlight_theme_light").media = "")
}
, transTheme = ()=>{
  document.documentElement.classList.add("transition"),
  window.setTimeout(()=>{
      document.documentElement.classList.remove("transition")
  }
  , 500)
}
, initTheme = e=>{
  if (null == e || "null" == e) {
      //e = "light";
      const t = window.matchMedia;
      t && t("(prefers-color-scheme: dark)").matches && (e = "light")
  }
  setTheme(e)
}
, setToggle = e=>{
  var toggle = document.getElementById("toggle");
  if(toggle == null){
    return;
  }
  if(e == "dark"){
    toggle.classList.remove('fa-moon');
    toggle.classList.add('fa-sun');
  }
  else{
    toggle.classList.remove('fa-sun');
    toggle.classList.add('fa-moon');
  }
}

initTheme(localStorage.getItem("theme"));

