window.addEventListener("scroll", function () {
  const header = this.document.getElementById("header");

  if (this.window.scrollY > header.clientHeight) {
    header.classList.add("bg-header--scrolling");
  } else {
    header.classList.remove("bg-header--scrolling");
  }
});
