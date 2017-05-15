//Job Placement
function initMap() {
    var locations = [
      ['<div id="iw-container"><h3 class="iw-title">Thomson Reuters - FindLaw</h3><div class="iw-content"><p class="role">Front End Developer</p><p class="location">610 Opperman Drive<br/>Eagan, MN 55123</p><p class="employed">2000 - 2014</p></div><p><a class="details" href="#tr">Get Details</a></p></div>', 44.8246841, -93.1146937, 1],
      ['<div id="iw-container"><h3 class="iw-title">Three Deep, Inc.</h3><div class="iw-content"><p class="role">Senior Web Developer</p><p class="location">289 5th St.<br>St. Paul, MN 55101</p><p class="employed">2014 - 2016</p></div><p><a class="details" href="#td">Get Details</a></p></div>', 44.9505788, -93.0878177, 2],
      ['<div id="iw-container"><h3 class="iw-title">The Creative Group</h3><div class="iw-content"><p class="role">Senior Front End Consultant</p><p class="location">Nicollet Mall<br/>Suite 2700<br/>Minneapolis, MN</p><p class="employed">2016 - Present</p></div><p><a class="details" href="#tcg">Get Details</a></p></div>', 44.9753855, -93.2762284, 2],
      ['<div id="iw-container"><h3 class="iw-title">Collegis Education</h3><div class="iw-content"><p class="role">The Creative Group</p><p class="location">8300 Norman Center Drive<br/>#400<br/>Collegis Education</p><p class="employed">2016 - 2017</p></div><p><a class="details" href="#ce">Get Details</a></p></div>', 44.8526801, -93.3552383, 2],
      ['<div id="iw-container"><h3 class="iw-title">MMIC/Constellation</h3><div class="iw-content"><p class="role">The Creative Group</p><p class="location">7701 France Avenue.<br/>#500<br/>Bloomington, MN 55435<br/></p><p class="employed">2017 - Present</p></div><p><a class="details" href="#ce">Get Details</a></p></div>', 44.863653, -93.327256, 2]
    ];
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(44.9235879, -93.1976432),
        zoom: 10,
        scrollwheel: false
    });
    var iconBase = '../images/icon-marker.png';
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: iconBase
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    // *
    // START INFOWINDOW CUSTOMIZE.
    // The google.maps.event.addListener() event expects
    // the creation of the infowindow HTML structure 'domready'
    // and before the opening of the infowindow, defined styles are applied.
    // *
    //google.maps.event.addListener(infowindow, 'domready', function () {

    //    // Reference to the DIV that wraps the bottom of infowindow
    //    var iwOuter = $('.gm-style-iw');

    //    /* Since this div is in a position prior to .gm-div style-iw.
    //     * We use jQuery and create a iwBackground variable,
    //     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    //    */
    //    var iwBackground = iwOuter.prev();

    //    // Removes background shadow DIV
    //    iwBackground.children(':nth-child(2)').css({ 'display': 'none' });

    //    // Removes white background DIV
    //    iwBackground.children(':nth-child(4)').css({ 'display': 'none' });

    //    // Moves the infowindow 115px to the right.
    //    iwOuter.parent().parent().css({ left: '115px' });

    //    // Moves the shadow of the arrow 76px to the left margin.
    //    iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s + 'left: 76px !important;' });

    //    // Moves the arrow 76px to the left margin.
    //    iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s + 'left: 76px !important;' });

    //    // Changes the desired tail shadow color.
    //    iwBackground.children(':nth-child(3)').find('div').children().css({ 'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index': '1' });

    //    // Reference to the div that groups the close button elements.
    //    var iwCloseBtn = iwOuter.next();

    //    // Apply the desired effect to the close button
    //    iwCloseBtn.css({ opacity: '1', right: '38px', top: '3px', border: '2px solid #93C01F', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9' });

    //    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    //    if ($('.iw-content').height() < 140) {
    //        $('.iw-bottom-gradient').css({ display: 'none' });
    //    }

    //    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    //    iwCloseBtn.mouseout(function () {
    //        $(this).css({ opacity: '1' });
    //    });
    //});

    var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
    ];

    map.setOptions({ styles: styles });

}
//This is the fix for the bug for awesome IE
google.maps.event.addDomListener(window, 'load', initMap);

