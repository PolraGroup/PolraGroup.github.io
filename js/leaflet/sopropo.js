window.addEventListener('load', (event) => {
    // basemaps
    var Stamen_TerrainBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 18,
        ext: 'png'
    }),
        mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox/satellite-v9',
            accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw'
        });

    var map = L.map('sopropo', {
        center: [20, 0],
        zoom: 1.5,
        layers: [mapboxSatellite]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();

    var baseMaps = {
        "Satelliet": mapboxSatellite,
        "Wereldkaart": Stamen_TerrainBackground
    };

    L.control.layers(baseMaps).addTo(map);
});