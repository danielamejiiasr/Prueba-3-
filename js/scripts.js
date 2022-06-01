/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const datos = [
    {
        picsum: "https://picsum.photos/id/180/900/600",
        title: "Creacion de infografias varias.",
        text: "Infografias informativas sobre el acoso escolar.",
    },
    {
        picsum: "https://picsum.photos/id/20/900/600",
        title: "Manual de marca.",
        text: "Creación y diagramacion de manuales de marca.",
    },
    {
        picsum: "https://picsum.photos/id/1062/900/600",
        title: "Proyecto: abrigos para mascotas.",
        text: "Proyecto que buscaba encontrar telas mas amables al pelaje de las mascotas en épocas de frio extremo.",
    },
    {
        picsum: "https://picsum.photos/id/212/900/600",
        title: "Bolsos para bicicletas.",
        text: "Diseño de Bolsos para llevar mercadería en bicicletas.",
    },
    {
        picsum: "https://picsum.photos/id/1073/900/600",
        title: "Serie de libros ilustrados",
        text: "Proyecto de libros ilustrados para publico infantil, busca potenciar el autoestima y confianza de los niños.",
    },
    {
        picsum: "https://picsum.photos/id/30/900/600",
        title: "Ilustración para tazas.",
        text: "Ilustraciónes varias para tazones con mensajes positivos.",
    }
];
/*
lo intente, no me funciono :c

datos.forEach((d,i) => {
    if (i % 2 == 0) {
      // par
      document.getElementById('trabajos').innerHTML += '<div class="row gx-0"><div class="col-lg-6"><a class="portfolio-item" href="#!"><div class="caption"><div class="caption-content"><div class="h2">'+d.title+'</div><p class="mb-0">'+d.text+'</p></div></div><img class="img-fluid" src="'+d.picsum+'" alt="..." /></a></div></div>'
    } else {
      // impar
      document.querySelector('#trabajos').innerHTML += '<div class="row gx-0"><div class="col-lg-6"><a class="portfolio-item" href="#!"><div class="caption"><div class="caption-content"><div class="h2">'+d.title+'</div><p class="mb-0">'+d.text+'</p></div></div><img class="img-fluid" src="'+d.picsum+'" alt="..." /></a></div></div>'
    }
});

+/
/*
<div class="col-lg-6"><a class="portfolio-item" href="#!"><div class="caption"><div class="caption-content"><div class="h2">Stationary</div><p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p></div></div><img class="img-fluid" src="'+d.picsum+'" alt="..." /></a></div>

*/
