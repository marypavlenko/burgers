

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
function openAccordeon (btn) {
    var activeBtn;
    var button = document.getElementsByClassName(btn);
    activeBtn = 'active';

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            if (!(this.classList.contains(activeBtn))) {
                for (var j = 0; j < button.length; j++) {
                    button[j].classList.remove(activeBtn);
                    this.classList.add(activeBtn)
                }
            } else {
                this.classList.remove(activeBtn);
            }
        })
    }
}

openAccordeon('section-team__button');
openAccordeon('section-menu__button');



































