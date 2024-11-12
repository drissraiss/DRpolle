function initMap() {
    const location = { lat: 49.464187096924114, lng: 1.1123339134947057 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 10,
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "950 Rue de la Haie, Bois-Guillaume, France",
    });
}