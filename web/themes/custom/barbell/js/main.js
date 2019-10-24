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
          nav.style.top = "-100vh";
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
    })();

    const removeInlineStyles = (() => {
      //align-right
      //if (document.querySelector(".path-tim")) {
      const regionOfRelevantImages = document.querySelector("main");
      let imgs = regionOfRelevantImages.querySelectorAll("img");
      imgs = [...imgs];
      imgs.forEach(x => {
        if (x.attributes.length - 1) {
          x.attributes.removeNamedItem("width");
          x.attributes.removeNamedItem("height");
          if (x.classList.contains("align-right"))
            x.classList.remove("align-right");
        }
      });
      //}
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

          titleContainer.className = "rasporedTitleHolder";
          title.className = "rasporedText";
          imgContainer.className = "rasporedImgWrapper";

          title.innerHTML = text;
          img.src = icon;
        }
      });
    })();

    function rasporedLegendaIskraceniDani() {
      // skraceni dani
      let days = document.querySelectorAll("thead th");
      days = [...days];
      days.shift();
      days.forEach(it => (it.innerHTML = it.innerHTML.substring(0, 3)));

      // raspored legenda
      let vrstaTreninga = [
        "FUNKCIONALNI TRENING",
        "SNAGA I ESTETIKA",
        "ASICS ŠKOLA TRČANJA"
      ];
      let ikonaTreninga = [
        "/barbell/web/themes/custom/barbell/img/fe.webp",
        "/barbell/web/themes/custom/barbell/img/se.webp",
        "/barbell/web/themes/custom/barbell/img/asics.webp"
      ];
      if (document.querySelector("table")) {
        let rasporedTable = document.querySelector("table");
        var rasporedTableParent = rasporedTable.parentElement;
        let legendaWrapper = document.createElement("div");
        legendaWrapper.className = "legendaWrapper";
        let legendaUl = document.createElement("ul");
        for (let i = 0; i < 3; i++) {
          let legendaLi = document.createElement("li");
          let legendaImg = document.createElement("img");
          let legendaSpan = document.createElement("span");
          legendaImg.src = ikonaTreninga[i];
          legendaSpan.innerHTML = vrstaTreninga[i];
          legendaLi.appendChild(legendaImg);
          legendaLi.appendChild(legendaSpan);
          legendaUl.appendChild(legendaLi);
          legendaWrapper.appendChild(legendaUl);
        }
        rasporedTableParent.appendChild(legendaWrapper);
        rasporedTableParent.classList.add("rasporedAllWrapper");
      }
    }

    if (window.innerWidth <= 768) {
      rasporedLegendaIskraceniDani();
    }

    //SCROLL TO TOP
    // scroll back to top button
    let scrollTopButton = document.querySelector(".scroll-top-button");

    // show / hide button
    showHideButton = () => {
      window.pageYOffset < 150
        ? (scrollTopButton.style.display = "none")
        : (scrollTopButton.style.display = "block");
    };
    document.addEventListener("scroll", showHideButton);

    // scroll to top
    window.addEventListener("load", function() {
      document
        .querySelector(".scroll-top-button")
        .addEventListener("click", function(e) {
          e.preventDefault();
          document
            .querySelector("header")
            .scrollIntoView({ behavior: "smooth" });
        });
    });
  }
};
