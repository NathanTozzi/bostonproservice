function searchEquipment() {
    const query = document.getElementById('searchInput').value;

    fetch(`https://equipment-search-tool.onrender.com/api/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Equipment Specs
    const specs = data.specs;
    const specsHTML = `
        <div class="specs-card">
            <h2>${specs.model}</h2>
            <p><strong>Weight:</strong> ${specs.weight}</p>
            <p><strong>Engine:</strong> ${specs.engine}</p>
            <p><strong>Capacity:</strong> ${specs.operating_capacity}</p>
        </div>
    `;

    // Listings
    const listingsHTML = data.listings.map(listing => `
        <div class="listing-card">
            <a href="${listing.link}" target="_blank">${listing.title}</a>
            <p class="price">${listing.price}</p>
        </div>
    `).join('');

    resultsDiv.innerHTML = specsHTML + listingsHTML;
})
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
