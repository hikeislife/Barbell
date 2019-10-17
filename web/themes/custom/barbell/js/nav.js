Drupal.behaviors.exampleModule = {
  attach: function(context, settings) {
    var langSwitch = document.querySelector("#block-languageswitcher");
    var hamburgerHolder = document.createElement("div");
    var hamburgerImg = document.createElement("img");
    hamburgerImg.src = "/barbell/web/themes/custom/barbell/img/hamburger.png";
    hamburgerHolder.classList.add("hamburgerHolder");
    hamburgerHolder.appendChild(hamburgerImg);
    langSwitch.appendChild(hamburgerHolder);

    var nav = document.querySelector("header div nav");
    var xHolder = document.createElement("div");
    var xPara = document.createElement("p");
    xPara.innerHTML = "X";
    xHolder.appendChild(xPara);
    nav.appendChild(xHolder);
    xHolder.classList.add("xHolder");
    xPara.classList.add("xPara");

    hamburgerHolder.addEventListener("click", function() {
      nav.style.top = "0";
      xHolder.style.display = "block";

      setTimeout(() => {
        xPara.style.fontSize = "43px";
        xPara.style.opacity = "1";
      }, 300);

      setTimeout(() => {
        xHolder.style.border = "1px solid whitesmoke";
      }, 900);

      function closeNav() {
        nav.style.top = "-60vh";
        xHolder.style.display = "none";

        // setTimeout(() => {
        xPara.style.fontSize = "1px";
        xPara.style.opacity = "0";
        // }, 300);

        // setTimeout(() => {
        xHolder.style.border = "none";
        // }, 900);
      }

      var navLinks = document.querySelectorAll(
        "#block-barbell-main-menu ul li"
      );

      navLinks.forEach(link =>
        link.addEventListener("click", function() {
          if (nav.style.top == "0") {
            closeNav();
          }
        })
      );

      xHolder.addEventListener("click", closeNav);
    });

    // TEMPORARY
    // xPara.style.opacity = "0";
    // xHolder.style.opacity = "0";
    // TEMPORARY
  }
};
