function updateMap() {
		var select = document.getElementById("address-select");
		var mapSrc = "https://maps.google.com/maps?q=" + select.value + "&output=embed";
		var map = document.getElementById("map");
		map.src = mapSrc;
}

