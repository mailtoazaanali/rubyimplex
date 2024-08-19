// Initialize and add the map
function initMap() {
    // The location of the shop
    const shopLocation = { lat: 13.729549, lng: 100.515172 };
    // The map, centered at the shop
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: shopLocation,
    });
    // The marker, positioned at the shop
    const marker = new google.maps.Marker({
        position: shopLocation,
        map: map,
    });

    // Click event to open Google Maps
    google.maps.event.addListener(marker, 'click', function () {
        window.open('https://www.google.com/maps/place/13%C2%B043%2737.9%22N+100%C2%B030%2754.6%22E/@13.729549,100.5135473,17z', '_blank');
    });
}

// Load the Google Maps script dynamically
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", loadGoogleMaps);
