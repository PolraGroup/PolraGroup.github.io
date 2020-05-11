window.addEventListener('load', (event) => {
    // basemaps
    var Stamen_TerrainBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 2,
        maxZoom: 2,
        ext: 'png'
    }),
        mapboxSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            minZoom: 2,
            maxZoom: 3,
            id: 'mapbox/satellite-v9',
            accessToken: 'pk.eyJ1Ijoiam9yYW52ZHVpbiIsImEiOiJjam53d2k5a3EwZzdhM3FucTByaDRrMzQwIn0.sCAmQZysagzU2t82TJiRkw'
        });

    var map = L.map('sopropo', {
        // center: [20, 0],
        center: [-2, 0],
        zoom: 2,
        layers: [Stamen_TerrainBackground]
    });

    map.touchZoom.enable();
    map.scrollWheelZoom.disable();
    map.removeControl(map.zoomControl);
    map.dragging.disable();

    var baseMaps = {
        "Wereldkaart": Stamen_TerrainBackground,
        "Satelliet": mapboxSatellite,
    };

    // Layers
    var asia = L.geoJson(Asia, {
        style: function (feature) {
            return {
                color: '#E86252',
                weight: 1,
                opacity: 1,
                fillOpacity: 1
            }
        }
    }).addTo(map).bindPopup("<h2>Zuidoost-Azië"),

        eastafrica = L.geoJson(eastAfrica, {
            style: function (feature) {
                return {
                    color: '#E86252',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Oost Afrika"),

        brazil = L.geoJson(Brazil, {
            style: function (feature) {
                return {
                    color: '#E86252',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Brazilië"),
        surinam = L.geoJson(Surinam, {
            style: function (feature) {
                return {
                    color: '#E86252',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Suriname")
        ;

    var sopropoAreas = L.layerGroup([asia, brazil, eastafrica, surinam]).addTo(map);

    var overlayLayers = {
        "Groeigebieden": sopropoAreas
    };

    L.control.layers(baseMaps, overlayLayers).addTo(map);
});