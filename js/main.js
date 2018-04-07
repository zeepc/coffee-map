
  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.707, lng: -74.006},
          zoom: 15,
          mapTypeControl:false
        });
// Add a style-selector control to the map.
      var styleControl = document.getElementById('style-selector-control');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        // Set the map's style to the initial value of the selector.
      var styleSelector = document.getElementById('style-selector');
        map.setOptions({styles: styles[styleSelector.value]});

        // Apply new JSON when the user selects a different style.
        styleSelector.addEventListener('change', function() {
          map.setOptions({styles: styles[styleSelector.value]});
        });
      }