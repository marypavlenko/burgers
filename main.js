ymaps.ready(init);

var placemarks = [
    {
        letitude: 55.75903557,
        longitude: 37.62551350,
        hintContent: '<div class="map__hint">st. Nikolskaya, 12</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Mr. Burgers. The best natural burgers here',
            'farshburger.ru',
            '8 (495) 258-42-05',
            'Open now:  10AM–12AM',
            '</div>'
        ]
    },

    {
        letitude: 55.73859107,
        longitude: 37.41100450,
        hintContent: '<div class="map__hint">st. Yartsevskaya, 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Mr. Burgers. The best natural burgers here',
            'farshburger.ru',
            '8 (495) 258-42-05',
            'Open now:  10AM–12AM',
            '</div>'
        ]
    },

    {
        letitude: 55.77904857,
        longitude: 37.58860150,
        hintContent: '<div class="map__hint">st. Lesnaya, 9</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Mr. Burgers. The best natural burgers here',
            'farshburger.ru',
            '8 (495) 258-42-05',
            'Open now:  10AM–12AM',
            '</div>'
        ]
    },

    {
        letitude: 55.74079315,
        longitude: 37.85534700,
        hintContent: '<div class="map__hint">Blvd. Enthusiasts, d. 2</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Mr. Burgers. The best natural burgers here',
            'farshburger.ru',
            '8 (495) 258-42-05',
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
            'Mr. Burgers. The best natural burgers here',
            'farshburger.ru',
            '8 (495) 258-42-05',
            'Open now:  10AM–12AM',
            '</div>'
        ]
    }
];

geoObjects = [];


function init () {
    var map = new ymaps.Map("map",{
        center: [55.75399400, 37.62209300],
        zoom: 14,
        controls: ['zoomControl'],
        behavior: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
        {
            hintContent: placemarks[i].hintContent,
            balloonContent: placemarks[i].balloonContent.join('')
        },

        {
            iconLayout: 'default#image',
            iconImageHref: 'image/icon/logo.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons [
            {
                href: 'image/icon/logo.svg',
                size: [100, 100],
                offset: [-50, -50]
            }
        ]
    });

    map.geoObjects.add(clusterer);
    // map.geoObjects.add(placemarks);
    clusterer.add(geoObjects);
}















//Без цикла и перебора

//     var placemark1 = new ymaps.Placemark([55.75903557, 37.62551350],{
//         hintContent: '<div class="map__hint">st. Nikolskaya, 12</div>',
//         balloonContent: [
//             '<div class="map__balloon">',
//             'Mr. Burgers. The best natural burgers here',
//             'farshburger.ru',
//             '8 (495) 258-42-05',
//             'Open now:  10AM–12AM',
//             '</div>'
//         ].join('')
//         },
//
//         {
//             iconLayout: 'default#image',
//             iconImageHref: 'image/icon/logo.svg',
//             iconImageSize: [46, 57],
//             iconImageOffset: [-23, -57]
//         },
//
//     var placemark2 = new ymaps.Placemark([55.73859107, 37.41100450],{
//             hintContent: '<div class="map__hint">st. Yartsevskaya, 19</div>',
//             balloonContent: [
//                 '<div class="map__balloon">',
//                 'Mr. Burgers. The best natural burgers here',
//                 'farshburger.ru',
//                 '8 (495) 259-67-29',
//                 'Open now:  10AM–12AM',
//                 '</div>'
//             ].join('')
//         },
//         {
//             iconLayout: 'default#image',
//             iconImageHref: 'image/icon/logo.svg',
//             iconImageSize: [46, 57],
//             iconImageOffset: [-23, -57]
//         },
//
//     var placemark3 = new ymaps.Placemark([55.77904857, 37.58860150],{
//             hintContent: '<div class="map__hint">st. Lesnaya, 9</div>',
//             balloonContent: [
//                 '<div class="map__balloon">',
//                 'Mr. Burgers. The best natural burgers here',
//                 'farshburger.ru',
//                 '8 (495) 263-87-00',
//                 'Open now:  10AM–12AM',
//                 '</div>'
//             ].join('')
//         },
//         {
//             iconLayout: 'default#image',
//             iconImageHref: 'image/icon/logo.svg',
//             iconImageSize: [46, 57],
//             iconImageOffset: [-23, -57]
//         },
//
//     var placemark4 = new ymaps.Placemark([55.74079315, 37.85534700],{
//             hintContent: '<div class="map__hint">Blvd. Enthusiasts, d. 2</div>',
//             balloonContent: [
//                 '<div class="map__balloon">',
//                 'Mr. Burgers. The best natural burgers here',
//                 'farshburger.ru',
//                 '8 (495) 278-50-24',
//                 'Open now:  10AM–12AM',
//                 '</div>'
//             ].join('')
//         },
//         {
//             iconLayout: 'default#image',
//             iconImageHref: 'image/icon/logo.svg',
//             iconImageSize: [46, 57],
//             iconImageOffset: [-23, -57]
//         },
//
//     var placemark5 = new ymaps.Placemark([55.72903657, 37.62379750],{
//             hintContent: '<div class="map__hint">B. Serpukhovskaya ul., 2</div>',
//             balloonContent: [
//                 '<div class="map__balloon">',
//                 'Mr. Burgers. The best natural burgers here',
//                 'farshburger.ru',
//                 '8 (495) 207-94-81',
//                 'Open now:  10AM–12AM',
//                 '</div>'
//             ].join('')
//         },
//         {
//             iconLayout: 'default#image',
//             iconImageHref: 'image/icon/logo.svg',
//             iconImageSize: [46, 57],
//             iconImageOffset: [-23, -57]
//         });
//
//     map.geoObjects.add(placemark1);
//     map.geoObjects.add(placemark2);
//     map.geoObjects.add(placemark3);
//     map.geoObjects.add(placemark4);
//     map.geoObjects.add(placemark5);
// }