function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 45.494896, lng: -73.561081 },
      zoom: 15,

      disableDefaultUI: true,

   });


   var styles = [
      {
         "stylers": [
            {
               "color": "#c0c0c0"
            },
            {
               "visibility": "on"
            }
         ]
      },
      {
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#f5f5f5"
            }
         ]
      },
      {
         "elementType": "geometry.fill",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "elementType": "geometry.stroke",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "elementType": "labels.icon",
         "stylers": [
            {
               "visibility": "off"
            }
         ]
      },
      {
         "elementType": "labels.text",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#616161"
            }
         ]
      },
      {
         "elementType": "labels.text.stroke",
         "stylers": [
            {
               "color": "#f5f5f5"
            }
         ]
      },
      {
         "featureType": "administrative",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "administrative.country",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "administrative.land_parcel",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#bdbdbd"
            }
         ]
      },
      {
         "featureType": "administrative.locality",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "administrative.neighborhood",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#f5f5f5"
            }
         ]
      },
      {
         "featureType": "administrative.province",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "landscape",
         "stylers": [
            {
               "color": "#c0c0c0"
            },
            {
               "lightness": 30
            }
         ]
      },
      {
         "featureType": "landscape.man_made",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "landscape.natural",
         "stylers": [
            {
               "weight": 3.5
            }
         ]
      },
      {
         "featureType": "landscape.natural.landcover",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "landscape.natural.terrain",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#eeeeee"
            }
         ]
      },
      {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#757575"
            }
         ]
      },
      {
         "featureType": "poi.attraction",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "poi.government",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#e5e5e5"
            }
         ]
      },
      {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#9e9e9e"
            }
         ]
      },
      {
         "featureType": "poi.place_of_worship",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "poi.sports_complex",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "road",
         "stylers": [
            {
               "color": "#808080"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#ffffff"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "geometry.fill",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "geometry.stroke",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "labels.text",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "visibility": "on"
            }
         ]
      },
      {
         "featureType": "road",
         "elementType": "labels.text.stroke",
         "stylers": [
            {
               "color": "#f5f5f5"
            }
         ]
      },
      {
         "featureType": "road.arterial",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#000000"
            }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#dadada"
            }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "geometry.fill",
         "stylers": [
            {
               "color": "#808080"
            }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#616161"
            }
         ]
      },
      {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#000000"
            }
         ]
      },
      {
         "featureType": "transit.line",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#e5e5e5"
            }
         ]
      },
      {
         "featureType": "transit.station",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#eeeeee"
            }
         ]
      },
      {
         "featureType": "transit.station.rail",
         "stylers": [
            {
               "color": "#c0c0c0"
            }
         ]
      },
      {
         "featureType": "water",
         "stylers": [
            {
               "color": "#c0c0c0"
            }
         ]
      },
      {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [
            {
               "color": "#c9c9c9"
            }
         ]
      },
      {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [
            {
               "color": "#9e9e9e"
            }
         ]
      }
   ];

   map.setOptions({ styles: styles });


   var marker = new google.maps.Marker({
      position: { lat: 45.494896, lng: -73.561081 },
      map: map,
      icon: '../img/contact/marker.png'
   });
};