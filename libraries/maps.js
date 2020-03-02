function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 47.4811282,
            lng: 18.990222
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 47.6694097, lng: 17.5886458 },
        { lat: 47.5308291, lng: 21.520101 },
        { lat: 47.4565836, lng: 18.8936377 },
        { lat: 47.6770391, lng: 18.9979583 },
        { lat: 47.3723772, lng: 18.8631132 },
        { lat: 47.4609537, lng: 18.7915766 },
        { lat: 47.4393937, lng: 18.8757377 },
        { lat: 47.4583551, lng: 18.9837056 },
        { lat: 46.9458717, lng: 18.8780712 },
        { lat: 47.1945132, lng: 18.3712128 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}