Drupal.behaviors.exampleModule = {
  attach: function(context, settings) {
    let navigacija = (function() {
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

        setTimeout(() => {
          xHolder.style.display = "block";
        }, 200);

        setTimeout(() => {
          xPara.style.fontSize = "35px";
          xPara.style.opacity = "1";
        }, 230);

        setTimeout(() => {
          xHolder.style.border = "1px solid whitesmoke";
        }, 550);

        function closeNav() {
          nav.style.top = "-70vh";
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
    })();

    let raspored = (function() {
      let td = document.querySelectorAll("td div");
      td = [...td];
      let text = "";
      let icon = "";

      td.forEach(x => {
        if (x.classList[0] === "raspored-ft") {
          text = "FUNKCIONALNI TRENING";
          icon = "/barbell/web/themes/custom/barbell/img/fe.webp";
        } else if (x.classList[0] === "raspored-se") {
          text = "SNAGA I ESTETIKA";
          icon = "/barbell/web/themes/custom/barbell/img/se.webp";
        } else if (x.classList[0] === "raspored-as") {
          text = "ASICS ŠKOLA TRČANJA";
          icon = "/barbell/web/themes/custom/barbell/img/asics.webp";
        }

        (function fixContent() {
          removeInitialContent();
          createNewContent();
        })();

        function removeInitialContent() {
          x.innerHTML = "";
        }

        function createNewContent() {
          const imgContainer = document.createElement("div");
          const img = document.createElement("img");
          const titleContainer = document.createElement("div");
          const title = document.createElement("p");

          x.appendChild(imgContainer);
          x.appendChild(titleContainer);
          titleContainer.appendChild(title);
          imgContainer.appendChild(img);

          title.className = "rasporedText";
          imgContainer.className = "rasporedImgWrapper";

          title.innerHTML = text;
          img.src = icon;
        }
      });
    })();
  }
};
