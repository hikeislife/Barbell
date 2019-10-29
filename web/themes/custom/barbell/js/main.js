Drupal.behaviors.exampleModule = {
  attach: function(context, settings) {
    //RESPO NAVIGATION
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
    //RESPO NAVIGATION ENDS

    //REMOVING INLINE STYLES
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
    //REMOVING INLINE STYLES ENDS

    //NOVI RASPORED
    let noviRaspored = (function() {
      //novi redovi
      let tbody = document.querySelector("tbody");
      for (let i = 1; i < 3; i++) {
        let tr = tbody.lastElementChild;
        let trClone = tr.cloneNode(true);
        tbody.appendChild(trClone);
      }

      //th-nedelja i kolona nedelja
      let theadTr = document.querySelector("thead tr");
      let nedelja = document.createElement("th");
      nedelja.setAttribute("scope", "col");
      nedelja.innerHTML = "NEDELJA";
      theadTr.appendChild(nedelja);

      //td-ovi u koloni nedelja i novi sati
      let sati = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00"
      ];

      let dani = document.querySelectorAll("thead th");
      dani = [...dani];
      dani.shift();

      //td content wrapper-i
      function okviriZaTermineUtd(x) {
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
      }

      let tbodyTr = document.querySelectorAll("tbody tr");
      tbodyTr = [...tbodyTr];
      tbodyTr.forEach((it, index) => {
        let newTd = document.createElement("td");
        it.appendChild(newTd);
        it.firstElementChild.innerHTML = sati[index];
        let tdInThisRow = it.children;
        tdInThisRow = [...tdInThisRow];
        tdInThisRow.shift();

        //id-jevi za dane po satu (npr za celiju ponedeljak 09:00 - id = PON09)
        tdInThisRow.forEach((it, i) => {
          it.innerHTML = "";
          okviriZaTermineUtd(it);
          if (i == 3) {
            it.id = "CET" + sati[index].substring(0, 2);
          } else {
            it.id =
              dani[i].innerHTML.substring(0, 3) + sati[index].substring(0, 2);
          }
        });
      });
    })();

    let vrstaTreninga = [
      "FUNKCIONALNI TRENING",
      "SNAGA I ESTETIKA",
      "HIP HOP ČASOVI"
    ];

    let ikonaTreninga = [
      "/barbell/web/themes/custom/barbell/img/fe.webp",
      "/barbell/web/themes/custom/barbell/img/se.webp",
      "/barbell/web/themes/custom/barbell/img/hh.webp"
    ];

    function raspored([...ftTermini], [...seTermini], [...hhTermini]) {
      ftTermini = [...ftTermini];
      seTermini = [...seTermini];
      hhTermini = [...hhTermini];

      ftTermini.forEach((it, i) => {
        let termin = document.getElementById(it);
        termin.style.background = "#E3E3E3";
        termin.firstElementChild.firstElementChild.src = ikonaTreninga[0];
        termin.lastElementChild.firstElementChild.innerHTML = vrstaTreninga[0];
      });

      seTermini.forEach((it, i) => {
        let termin = document.getElementById(it);
        termin.style.background = "#E3E3E3";
        termin.firstElementChild.firstElementChild.src = ikonaTreninga[1];
        termin.lastElementChild.firstElementChild.innerHTML = vrstaTreninga[1];
      });

      hhTermini.forEach((it, i) => {
        let termin = document.getElementById(it);
        termin.style.background = "#E3E3E3";
        termin.firstElementChild.firstElementChild.src = ikonaTreninga[2];
        termin.lastElementChild.firstElementChild.innerHTML = vrstaTreninga[2];
      });
    }

    //SETOVANJE TERMINA, redom:
    //Funkcionalni trening,
    //Snaga i estetika,
    //Hiphop casovi
    //UNOSI SE ID TD-a u niz
    raspored(
      [
        "PON09",
        "PON18",
        "PON19",
        "PON20",
        "UTO18",
        "UTO19",
        "SRE09",
        "SRE18",
        "SRE19",
        "SRE20",
        "CET18",
        "CET19",
        "PET09",
        "PET18",
        "PET19",
        "PET20",
        "SUB10",
        "SUB11"
      ],
      ["UTO20", "CET20", "SUB12"],
      ["SUB16", "NED16"]
    );

    function rasporedLegendaIskraceniDani() {
      // skraceni dani
      let days = document.querySelectorAll("thead th");
      days = [...days];
      days.shift();
      days.forEach(it => (it.innerHTML = it.innerHTML.substring(0, 3)));

      // raspored legenda
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
    //RASPORED ENDS

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
    // /SCROLL TO TOP ENDS /

    //FIXED FOOTER
    let fixedFooter = (function() {
      let layoutContainer = document.querySelector(".layout-container");
      let footer = document.querySelector("footer");

      if (layoutContainer.offsetHeight < window.innerHeight) {
        layoutContainer.style.height = window.innerHeight + "px";
        footer.style.position = "fixed";
        footer.style.bottom = "0";
      }
    })();
    //FIXED FOOTER ENDS /
  }
};
