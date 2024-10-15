// Latitude and longitude for Bredeweg 235, Roermond
const lat = 51.1944784;
const lon = 6.0038146;

// Initialize the map
const map = L.map('map').setView([lat, lon], 18); // Zoom level set to 18 for closer view

// Set up the OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add marker to the map
L.marker([lat, lon]).addTo(map)
    .bindPopup('Bredeweg 235, Roermond')
    .openPopup();
