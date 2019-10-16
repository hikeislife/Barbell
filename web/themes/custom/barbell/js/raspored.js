Drupal.behaviors.exampleModule = {
  attach: function (context, settings) {
    
    var td = document.querySelectorAll('td div')
    td = [...td]
    var text = ''
    var icon = ''
    td.forEach(x => {
      if (x.classList[0] === 'raspored-ft') {
        text = 'FUNKCIONALNI TRENING'
        icon = '/barbell/web/themes/custom/barbell/img/fe.webp'
      }
      else if (x.classList[0] === 'raspored-se') {
        text = 'SNAGA I ESTETIKA'
        icon = '/barbell/web/themes/custom/barbell/img/se.webp'
      }
      else if (x.classList[0] === 'raspored-as') {
        text = 'ASICS ŠKOLA TRČANJA'
        icon = '/barbell/web/themes/custom/barbell/img/asics.webp'
      }


      (function fixContent() {
        removeInitialContent()
        createNewContent()
      })()


      function removeInitialContent() {
        console.log(x)
        x.innerHTML = ''
        console.log(x)
      }

      function createNewContent() {
        var imgContainer = document.createElement('div')
        var img = document.createElement('img')
        var titleContainer = document.createElement('div')
        var title = document.createElement('p')

        x.appendChild(imgContainer)
        x.appendChild(titleContainer)
        titleContainer.appendChild(title)
        imgContainer.appendChild(img)

        title.className = "rasporedText"
        imgContainer.className = "rasporedImgWrapper"
        

        title.innerHTML = text
        img.src = icon
      }

      console.log(x)
    })


  }
};

