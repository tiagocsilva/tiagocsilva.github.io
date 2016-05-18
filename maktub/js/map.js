function initMap() {

	var styleArray = [
	{
		featureType: "all",
	    stylers: [
	    	{ saturation: -80 }
	    ]
	},{
		featureType: "road.arterial",
	    elementType: "geometry",
	    stylers: [
	        { hue: "#00ffee" },
	        { saturation: 50 }
	      ]
	    },{
	      featureType: "poi.business",
	      elementType: "labels",
	      stylers: [
	        { visibility: "off" }
	      ]
	    }
	  ];

	var myLatLng = {lat: -22.8506984, lng: -47.2311702};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
	    scrollwheel: false,
	    styles: styleArray,
	    zoom: 15
	  });

	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: myLatLng,
	    title: 'We Are Here!'
	  });
}