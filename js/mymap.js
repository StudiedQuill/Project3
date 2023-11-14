function init(){
	var el = document.getElementById('frame');
	var myLocation = new google.maps.LatLng(41.735724, -88.294513);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'images/chipmunk.jpg'
	});

	var contentString = '<h1>Phillips Park Sunken Garden</h1><p>This is the garden for the Phillips Park Zoo. It includes a wide variety of flowers and multiple statues. Many people come and take pictures for special occasions.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);