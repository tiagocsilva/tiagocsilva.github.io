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

	var myLatLng = {lat: -22.8240531, lng: -47.2634305};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
	    scrollwheel: false,
	    styles: styleArray,
	    zoom: 15
	  });

	  var marker = new google.maps.Marker({
	    map: map,
	    position: myLatLng
	  });
}