mapboxgl.accessToken = 'pk.eyJ1IjoiY2psZWVpaSIsImEiOiJjamQ2b3BiMnQwemRqMnlyMnpwbm11djNhIn0.Yh_KksP2zZy3WCuBbO5EGw';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v9',
	minZoom: 2,
	maxZoom: 20,
});

map.addControl(new mapboxgl.GeolocateControl({
	positionOptions: {
		enableHighAccuracy: true
	}
}));

map.addControl(new mapboxgl.NavigationControl, 'bottom-right');
