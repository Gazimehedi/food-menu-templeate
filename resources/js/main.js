function menu() {
    var x = document.getElementById("mainmenu");
    if (x.style.transform === "scaleX(0)") {
      x.style.transform = "scaleX(1)";
    } else {
        x.style.transform = "scaleX(0)";
    }
  }