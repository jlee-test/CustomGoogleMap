L.mapbox.accessToken = 'pk.eyJ1IjoiY2psZWVpaSIsImEiOiJjamQ2b3BiMnQwemRqMnlyMnpwbm11djNhIn0.Yh_KksP2zZy3WCuBbO5EGw';

var map = L.mapbox.map('map', 'mapbox.streets', {
	minZoom: 2,
	maxZoom: 20,
	keyboardPanOffset: 100,
	tileLayer: {
		continuousWorld: false,
		noWrap: true
	}
});

map.on('resize', function() {
	map.invalidateSize();
});

map.locate({
	setView: true,
	maximumAge: 50000,
	enableHighAccuracy: true
}).on('locationfound', function(e) {
	L.marker([e.latitude, e.longitude], {
		title: 'You are here!'
	}).addTo(map);
	alert("FOUND YOU");
	console.log("You are probably here: " + e.latitude + ", " + e.longitude);
}).on('locationerror', function(e) {
	alert(":(");
	console.log("User denied location permission");
});

L.mapbox.featureLayer('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').on('ready', function(e) {
	var clusterGroup = new L.MarkerClusterGroup();
	e.target.eachLayer(function(layer) {
		clusterGroup.addLayer(layer);
	});
	map.addLayer(clusterGroup);
});



/*

var gridLayer = L.mapbox.gridLayer('mapbox.light');
map.addLayer(L.mapbox.tileLayer('mapbox.light'));
map.addLayer(gridLayer);
map.addControl(L.mapbox.gridControl(gridLayer));

*/
/*

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.light',
	accessToken: 'pk.eyJ1IjoiY2psZWVpaSIsImEiOiJjamQ2b3BiMnQwemRqMnlyMnpwbm11djNhIn0.Yh_KksP2zZy3WCuBbO5EGw'
}).addTo(map);
*/