

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

// Аккордеон
function openAccordeon (btn, activeClass) {
    var button = document.getElementsByClassName(btn);
    console.log(button.parentElement);

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
openAccordeon('section-menu__button', 'section-menu__button--active');




// Slider

$(document).ready(function(){
    $(".section-dark__сarousel").owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});
































