// Initialize Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug";

// Detect dark mode and use appropriate map style
const isDarkMode = document.documentElement.classList.contains('dark');
const mapStyle = isDarkMode ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/light-v10";

const map = new mapboxgl.Map({
  container: "map",
  style: mapStyle,
  center: [-98.5795, 39.8283], // Geographic center of US
  zoom: 3.5,
});

// State Management
let allFeatures = window.restaurantData.features;
let filteredFeatures = [...allFeatures];
let currentFilters = {
  state: "",
  city: "",
};

// Helper: Title Case
function toTitleCase(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

// Helper: Escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Apply Filters
function applyFilters() {
  filteredFeatures = allFeatures.filter((feature) => {
    const stateMatch =
      !currentFilters.state || feature.properties.state === currentFilters.state;
    const cityMatch =
      !currentFilters.city || feature.properties.city === currentFilters.city;
    return stateMatch && cityMatch;
  });

  updateMapSource();
  buildLocationList();
  updateMapBounds();
  updateCount();
}

// Update Map Source
function updateMapSource() {
  if (map.getSource("restaurants")) {
    map.getSource("restaurants").setData({
      type: "FeatureCollection",
      features: filteredFeatures,
    });
  }
}

// Build Location List (Sidebar)
function buildLocationList() {
  const listings = document.getElementById("listings");

  if (filteredFeatures.length === 0) {
    listings.innerHTML = `
      <div class="empty-state text-gray-600 dark:text-slate-400">
        <p>No restaurants found with current filters.</p>
        <button onclick="document.getElementById('reset-filters').click()" class="bg-red-700 hover:bg-red-800 text-white dark:bg-red-400 dark:hover:bg-red-500 dark:text-slate-900">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  listings.innerHTML = "";

  filteredFeatures.forEach((restaurant, i) => {
    const prop = restaurant.properties;
    const listing = listings.appendChild(document.createElement("div"));
    listing.id = `listing-${prop.id}`;
    listing.className = "listing-item bg-white dark:bg-slate-900";

    const locationText = prop.state
      ? `${toTitleCase(prop.city)}, ${toTitleCase(prop.state)}`
      : `${toTitleCase(prop.city)}, ${prop.country}`;

    listing.innerHTML = `
      <article>
        <h3 class="text-red-700 dark:text-red-300">${escapeHtml(prop.title)}</h3>
        <p class="location text-red-700 dark:text-red-400 uppercase tracking-wide">${escapeHtml(locationText)}</p>
        <p class="description text-gray-700 dark:text-slate-300">${escapeHtml(prop.description)}</p>
        <div class="tags text-gray-400 dark:text-slate-500">${escapeHtml(prop.tags)}</div>
        <div class="actions">
          <a href="${prop.url}" class="text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">View Review →</a>
          <button class="fly-button" data-index="${i}">
            <span class="sr-only">Zoom to location</span>
            🎯
          </button>
        </div>
      </article>
    `;

    // Add click handler
    listing.addEventListener("click", function (e) {
      // Don't trigger if clicking the link
      if (e.target.tagName === "A") return;

      flyToRestaurant(restaurant);
      createPopup(restaurant);
      setActiveItem(prop.id);
    });
  });
}

// Fly to Restaurant
function flyToRestaurant(feature) {
  map.flyTo({
    center: feature.geometry.coordinates,
    zoom: 13,
    duration: 2000,
  });
}

// Create Popup
function createPopup(feature) {
  // Remove existing popups
  const popups = document.getElementsByClassName("mapboxgl-popup");
  if (popups[0]) popups[0].remove();

  const prop = feature.properties;
  const locationText = prop.state
    ? `${toTitleCase(prop.city)}, ${toTitleCase(prop.state)}`
    : `${toTitleCase(prop.city)}, ${prop.country}`;

  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `
      <div class="popup-content">
        <h3 class="text-red-700 dark:text-red-300">${escapeHtml(prop.title)}</h3>
        <p class="location text-red-700 dark:text-red-400 uppercase tracking-wide">${escapeHtml(locationText)}</p>
        ${prop.address ? `<p class="address text-gray-500 dark:text-slate-500">${escapeHtml(prop.address)}</p>` : ""}
        <p class="description text-gray-700 dark:text-slate-300">${escapeHtml(prop.description)}</p>
        <div class="tags text-gray-400 dark:text-slate-500">${escapeHtml(prop.tags)}</div>
        <a href="${prop.url}" class="view-review bg-red-700 text-white hover:bg-red-800 dark:bg-red-400 dark:text-slate-900 dark:hover:bg-red-500">View Full Review →</a>
      </div>
    `
    )
    .addTo(map);
}

// Set Active Item
function setActiveItem(id) {
  const activeItems = document.getElementsByClassName("active");
  if (activeItems[0]) {
    activeItems[0].classList.remove("active");
  }

  const listing = document.getElementById(`listing-${id}`);
  if (listing) {
    listing.classList.add("active");
    listing.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// Update Map Bounds
function updateMapBounds() {
  if (filteredFeatures.length === 0) return;

  const bounds = new mapboxgl.LngLatBounds();
  filteredFeatures.forEach((feature) => {
    bounds.extend(feature.geometry.coordinates);
  });

  map.fitBounds(bounds, {
    padding: 50,
    maxZoom: 12,
  });
}

// Update Count
function updateCount() {
  const count = document.getElementById("count");
  count.textContent = `Showing ${filteredFeatures.length} restaurant${
    filteredFeatures.length === 1 ? "" : "s"
  }`;
}

// Update City Options (Dynamic)
function updateCityOptions() {
  const cityFilter = document.getElementById("city-filter");
  const state = currentFilters.state;

  if (!state) {
    // Show all cities
    const allCities = [
      ...new Set(allFeatures.map((f) => f.properties.city)),
    ].sort();
    cityFilter.innerHTML =
      '<option value="">All Cities</option>' +
      allCities
        .map(
          (city) =>
            `<option value="${city}">${toTitleCase(city)}</option>`
        )
        .join("");
    return;
  }

  // Filter cities by selected state
  const citiesInState = [
    ...new Set(
      allFeatures
        .filter((f) => f.properties.state === state)
        .map((f) => f.properties.city)
    ),
  ].sort();

  cityFilter.innerHTML =
    '<option value="">All Cities</option>' +
    citiesInState
      .map(
        (city) => `<option value="${city}">${toTitleCase(city)}</option>`
      )
      .join("");
}

// Initialize Map
map.on("load", function () {
  // Add markers layer
  map.addLayer({
    id: "restaurants",
    type: "circle",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: filteredFeatures,
      },
    },
    paint: {
      "circle-radius": 8,
      "circle-color": "#b91c1b", // Red-700
      "circle-stroke-color": "#ffffff",
      "circle-stroke-width": 2,
      "circle-opacity": 0.9,
    },
  });

  // Build initial list
  buildLocationList();

  // Map click handler
  map.on("click", "restaurants", function (e) {
    const feature = e.features[0];
    flyToRestaurant(feature);
    createPopup(feature);
    setActiveItem(feature.properties.id);
  });

  // Hover effects
  map.on("mouseenter", "restaurants", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "restaurants", function () {
    map.getCanvas().style.cursor = "";
  });
});

// Filter Event Listeners
document.getElementById("state-filter").addEventListener("change", function (e) {
  currentFilters.state = e.target.value;

  // Reset city filter if state changes
  if (currentFilters.state) {
    const cityFilter = document.getElementById("city-filter");
    cityFilter.value = "";
    currentFilters.city = "";

    // Update city options based on selected state
    updateCityOptions();
  } else {
    // Reset to all cities
    updateCityOptions();
  }

  applyFilters();
});

document.getElementById("city-filter").addEventListener("change", function (e) {
  currentFilters.city = e.target.value;
  applyFilters();
});

document.getElementById("reset-filters").addEventListener("click", function () {
  document.getElementById("state-filter").value = "";
  document.getElementById("city-filter").value = "";
  currentFilters.state = "";
  currentFilters.city = "";

  // Reset city options to all
  updateCityOptions();

  applyFilters();
});
