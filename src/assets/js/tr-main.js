let cross =   document.getElementById('tr-burger-cross');
let menu =    document.getElementById('tr-burger-list');
let arrowUp = document.getElementById('scroll-top');
let advert =  document.getElementById('tr-sidebar');

cross.addEventListener('click', function () {
    menu.classList.toggle('menu-active');
    cross.classList.toggle('cross-active');
})

window.addEventListener('resize', function () {
    if (this.matchMedia('(min-width: 900px)').matches) {
        if (menu.className.includes('menu-active')) {
            menu.classList.remove('menu-active');
        }

        if (cross.className.includes('cross-active')) {
            cross.classList.remove('cross-active');
        }
    }
});

window.addEventListener('scroll', function () {
    if (this.pageYOffset > 550) {
        arrowUp.style.visibility = 'visible';
        arrowUp.style.opacity = '1';
    } else {
        arrowUp.style.visibility = 'hidden';
        arrowUp.style.opacity = '0';
    }

    if (this.pageYOffset > 1050) {
        advert.style.visibility = 'visible';
        advert.style.opacity = '1';
    } else {
        advert.style.visibility = 'hidden';
        advert.style.opacity = '0';
    }
})

arrowUp.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

