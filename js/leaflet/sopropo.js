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
        zoom: 2,
        layers: [mapboxSatellite]
    });

    map.touchZoom.disable();
    map.scrollWheelZoom.disable();

    var baseMaps = {
        "Satelliet": mapboxSatellite,
        "Wereldkaart": Stamen_TerrainBackground
    };

    // Layers
    var asia = L.geoJson(Asia, {
        style: function (feature) {
            return {
                color: '#286E2F',
                weight: 1,
                opacity: 1,
                fillOpacity: 1
            }
        }
    }).addTo(map).bindPopup("<h2>Zuidoost-Azië"),

        eastafrica = L.geoJson(eastAfrica, {
            style: function (feature) {
                return {
                    color: '#44933F',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Oost Afrika"),

        brazil = L.geoJson(Brazil, {
            style: function (feature) {
                return {
                    color: '#79277B',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Brazilië"),

        caribbean = L.geoJson(Caribbean, {
            style: function (feature) {
                return {
                    color: '#A45CA1',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Caraïben"),
        surinam = L.geoJson(Surinam, {
            style: function (feature) {
                return {
                    color: '#757373',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            }
        }).addTo(map).bindPopup("<h2>Caraïben")
        ;

    var sopropoAreas = L.layerGroup([asia, brazil, caribbean, eastafrica, surinam]).addTo(map);

    var overlayLayers = {
        "Groeigebieden": sopropoAreas
    };

    L.control.layers(baseMaps, overlayLayers).addTo(map);

    var legend = L.control({ position: "bottomleft" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "legenda");
        div.innerHTML += "<h3>Legenda</h3>";
        div.innerHTML += '<i style="background: #286E2F"></i><span>Zuidoost-Azië</span><br>';
        div.innerHTML += '<i style="background: #44933F"></i><span>Oost-Afrika</span><br>';
        div.innerHTML += '<i style="background: #79277B"></i><span>Brazilië</span><br>';
        div.innerHTML += '<i style="background: #A45CA1"></i><span>Caraïben</span><br>';
        div.innerHTML += '<i style="background: #757373"></i><span>Suriname</span><br>';
        return div;
    };

    legend.addTo(map);
});