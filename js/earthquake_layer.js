map.on('load', function() {
	map.addSource("earthquakes", {
		type: "geojson",
		data: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
		cluster: true,
		clusterMaxZoom: 12,
		clusterRadius: 25
	});

	map.addLayer({
		id: "cluster",
		type: "circle",
		source: "earthquakes",
		filter: ["has", "point_count"],
		paint: {
			"circle-color": [
				"step", ["get", "point_count"], "#51bbd6", 100, "#f1f075", 750, "#f28cb1"
			],
			"circle-radius": [
				"step", ["get", "point_count"], 20, 100, 30, 750, 40
			]
		}
	});

	map.addLayer({
		id: "cluster-count",
		type: "symbol",
		source: "earthquakes",
		filter: ["has", "point_count"],
		layout: {
			"text-field": "{point_count_abbreviated}",
			"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
			"text-size": 12
		}
	});

	map.addLayer({
		id: "unclustered-point",
		type: "circle",
		source: "earthquakes",
		filter: ["!has", "point_count"],
		paint: {
			"circle-color": "#11b4da",
			"circle-radius": 4,
			"circle-stroke-width": 1,
			"circle-stroke-color": "#fff"
		}
	});


	map.on('mouseenter', 'cluster', function() {
		map.getCanvas().style.cursor = 'pointer';
	});

	map.on('mouseleave', 'cluster', function() {
		map.getCanvas().style.cursor = '';
	});
	map.on('mouseenter', 'cluster-count', function() {
		map.getCanvas().style.cursor = 'pointer';
	});

	map.on('mouseleave', 'cluster-count', function() {
		map.getCanvas().style.cursor = '';
	});
	map.on('mouseenter', 'unclustered-point', function() {
		map.getCanvas().style.cursor = 'pointer';
	});

	map.on('mouseleave', 'unclustered-point', function() {
		map.getCanvas().style.cursor = '';
	});
});
