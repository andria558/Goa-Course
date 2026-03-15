window.addEventListener("scroll", function () {
  var header = document.getElementById("MainHeader");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var logo = document.getElementById("FullyRawLogo");
  if (window.scrollY > 50) {
    logo.classList.add("imgwrap");
  } else {
    logo.classList.remove("imgwrap");
  }
});
