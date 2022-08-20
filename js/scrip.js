function change_tab(id) {
  document.getElementById("page_content").innerHTML = document.getElementById(
    id + "_desc"
  ).innerHTML;
  document.getElementById("page1").className = "notselected btn btn-info";
  document.getElementById("page2").className = "notselected btn btn-info";
  document.getElementById(id).className = "selected btn btn-info";
}
