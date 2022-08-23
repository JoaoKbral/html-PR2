let buttonTheme = document.getElementsByClassName("theme");

function change_tab(id) {
  document.getElementById("page_content").innerHTML = document.getElementById(
    id + "_desc"
  ).innerHTML;

  document.getElementById("page1").className = "notselected btn btn-info";
  document.getElementById("page2").className = "notselected btn btn-info";
  document.getElementById(id).className = "selected";
}

function page_open() {
  document.getElementById("page_content").innerHTML =
    document.getElementById("page1_desc").innerHTML;
}

function color_theme() {
  let element = document.body

  element.classList.toggle('theme');
  
}
