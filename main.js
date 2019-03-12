
// Map
ymaps.ready(init);

var map,
    placemarks = [
        {
            letitude: 55.75903557,
            longitude: 37.62551350,
            hintContent: '<div class="map__hint">st. Nikolskaya, 12</div>',
            balloonContent: [
                '<div class="map__balloon">',
                'Mr. Burgers. The best natural burgers here<br>',
                'Adress: st. Nikolskaya, 12<br>',
                'farshburger.ru<br>',
                '8 (495) 258-42-05<br>',
                'Open now:  10AM–12AM',
                '</div>'
            ]
        },

        {
            letitude: 55.75399400,
            longitude: 37.62209300,
            hintContent: '<div class="map__hint">Myasnitskaya st., 32, p. 1</div>',
            balloonContent: [
                '<div class="map__balloon">',
                'Mr. Burgers. The best natural burgers here<br>',
                'Adress: Myasnitskaya st., 32, p. 1<br>',
                'farshburger.ru<br>',
                '8 (495) 258-42-05<br>',
                'Open now:  10AM–12AM',
                '</div>'
            ]
        },
        {
            letitude: 55.72903657,
            longitude: 37.62379750,
            hintContent: '<div class="map__hint">B. Serpukhovskaya ul., 2</div>',
            balloonContent: [
                '<div class="map__balloon">',
                'Mr. Burgers. The best natural burgers here<br>',
                'Adress: B. Serpukhovskaya ul., 2<br>',
                'farshburger.ru<br>',
                '8 (495) 258-42-05<br>',
                'Open now:  10AM–12AM',
                '</div>'
            ]
        }];

function init() {
    map = new ymaps.Map('map', {
        center: [55.75399400, 37.62209300],
        zoom: 13,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    placemarks.forEach(function(obj) {
        placemark = new ymaps.Placemark([obj.letitude, obj.longitude], {
            hintContent: obj.hintContent,
            balloonContent: obj.balloonContent.join('')
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'image/icons/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });

        map.geoObjects.add(placemark);
    });
}

// Accordeon
function openAccordeon (btn, activeClass) {
    var button = document.getElementsByClassName(btn);

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            if (!(this.classList.contains(activeClass))) {
                for (var j = 0; j < button.length; j++) {
                    button[j].classList.remove(activeClass);
                    this.classList.add(activeClass)
                }
            } else {
                this.classList.remove(activeClass);
            }
        })
    }
}

openAccordeon('section-team__button', 'section-team__button--active');



//Menu items
function openItem (btn, activeClass) {
    var button = document.getElementsByClassName(btn);
    var parentAll = document.querySelectorAll('.section-menu__item');
    
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            var parentBtn = this.closest('.section-menu__item');
            console.log(parentBtn);

            for (var t = 0; t < parentAll.length; t++) {
                if (parentAll[t].classList.contains('section-menu__item--active')) {
                    parentAll[t].classList.remove('section-menu__item--active');
                }
            }

            if (!(this.classList.contains(activeClass))) {
                for (var j = 0; j < button.length; j++) {
                    button[j].classList.remove(activeClass);
                    this.classList.add(activeClass);
                    parentBtn.classList.add('section-menu__item--active');
                }
            } else {
                this.classList.remove(activeClass);
                parentBtn.classList.remove('section-menu__item--active');
            }
        })
    }
}

openItem('section-menu__button', 'section-menu__button--active');

// Slider
function sliderDark (){
    $('.section-dark__сarousel').bxSlider({
        mode: 'horizontal',
        infiniteLoop: true,
        autoControls: false,
        pager: true,
        pagerType: 'full',
        controls: true,
        speed: 500
    });
}

sliderDark();

// Mobile menu
function toggleMenu() {
    var openBtn = $('.nav__menu-burger');
    var closeBtn = $('.nav-mobile__close-btn');
    var menu = $('.nav-mobile');

    openBtn.on('click', function (event) {
        event.preventDefault();
        menu.fadeIn();
        $('body').addClass('scroll-hidden');
    });

    closeBtn.on('click', function (event) {
        event.preventDefault();
        menu.fadeOut();
        $('body').removeClass('scroll-hidden');
    });
}

toggleMenu();

// Dark menu
function darkMenu() {
    var openBtnDark = $('.section-dark__icon-block');
    var closeBtnDark = $('.section-dark__close-menu');
    var menuDark = $('.section-dark__menu');

    openBtnDark.on('click', function (event) {
        event.preventDefault();
        menuDark.fadeIn();
        menuDark.css('display', 'block');
    });

    closeBtnDark.on('click', function (event) {
        event.preventDefault();
        menuDark.fadeOut();
    });
}

darkMenu();

// Popup
function popupSection () {
    var openBtn = $('.section-reviews__button');
    var closeBtn = $('.section-reviews__close-btn');
    var popup = $('.section-reviews__popup');
    var  intElemScrollTop = window.scrollY;

    popup.scrollTop(intElemScrollTop);

    openBtn.on('click', function (event) {
        event.preventDefault();
        var targetBtn = $(event.target);
        var btnParent = targetBtn.parent();
        var title = btnParent.find('.section-reviews__title').text();
        var text = btnParent.find('.section-reviews__text').text();

        $('.section-reviews__popup-title').text(title);
        $('.section-reviews__popup-text').text(text);

        popup.fadeIn();
        popup.css('display', 'flex');
        $('body').addClass('scroll-hidden');
    });

    closeBtn.on('click', function (event) {
        event.preventDefault();
        popup.fadeOut();
        $('body').removeClass('scroll-hidden');
    });
}

popupSection();

function anchorScroll() {
    const links = document.querySelectorAll("[href^='#']");
    const V = 1; // scrolling speed

    for (const iter of links) {
        iter.addEventListener("click", e => {
            e.preventDefault();

        const anchor = document.querySelector(iter.getAttribute("href"));
        const coordAnchor = anchor.getBoundingClientRect().top;
        const windowY = window.pageYOffset;

        let start = null;

        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start;

            let coordY =
                coordAnchor < 0
                    ? Math.max(windowY - progress / V, windowY + coordAnchor)
                    : Math.min(windowY + progress / V, windowY + coordAnchor);

            window.scrollTo(0, coordY);
            if (coordY != windowY + coordAnchor) {
                requestAnimationFrame(step);
            }
        }
    });
    }
}

anchorScroll();