

const validateBtn = document.querySelector('.btn');
const name = document.querySelector('.name');
const mobile = document.querySelector('.mobile');
const email = document.querySelector('.email');
const area = document.querySelector('.area');

validateBtn.addEventListener('click', function (e) {
   e.preventDefault();
   console.log('clicked on validate');

   console.log(`name: ${name.value}`);
   console.log(`mobile: ${mobile.value}`);
   console.log(`email: ${email.value}`);
   console.log(`area: ${area.value}`);
   validateForm(name.value, mobile.value, email.value, area.value)
});

function clearForm() {
   name.value = "";
   mobile.value = "";
   email.value = "";
   area.value = "";
}

function validateForm(nameVal, mobileVal, emailVal, areaVal) {
   let namePattern = /^[a-z A-Z]{1,20}$/;
   let mobilePattern = /^\+\d{12}$/;
   let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let areaPattern = /^(?!\s*$).+/;

   let isNameValid = namePattern.test(nameVal);
   let isMobileValid = mobilePattern.test(mobileVal);
   let isEmailValid = emailPattern.test(emailVal);
   let isAreaValid = areaPattern.test(areaVal);

   if (isNameValid) {
      name.classList.remove('invalid')
   } else {
      name.classList.add('invalid')
   }

   if (isMobileValid) {
      mobile.classList.remove('invalid')
   } else {
      mobile.classList.add('invalid')
   }

   if (isEmailValid) {
      email.classList.remove('invalid')
   } else {
      email.classList.add('invalid')
   }

   if (isAreaValid) {
      area.classList.remove('invalid')
   } else {
      area.classList.add('invalid')
   }
   if (isNameValid && isMobileValid && isEmailValid && isAreaValid) {
      document.querySelector('.contact__valide').style.visibility = "visible";
      clearForm();
   }

}
;
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
};;
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      });
   });
};;
let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScrol);
   function animOnScrol(params) {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScrol();
   }, 300);
};



