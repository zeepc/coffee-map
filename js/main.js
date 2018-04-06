 

// // Call map on location to display on page
// let map;
// let initMap = () => {
//     map = new google.maps.Map(document.getElementById('map'), 
//     {center: {lat: -34.397, lng: 150.644}, zoom: 8
//     });
// }
  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15
        });
      }