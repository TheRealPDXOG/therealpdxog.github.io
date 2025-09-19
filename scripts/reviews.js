let reviews = [];

fetch('data/reviews.json')
  .then(res => res.json())
  .then(data => {
    reviews = data;
    displayReviews(reviews);
  });

function filterReviews() {
  const name = document.getElementById("search-name").value.toLowerCase();
  const strain = document.getElementById("search-strain").value.toLowerCase();
  const grower = document.getElementById("search-grower").value.toLowerCase();
  const dispensary = document.getElementById("search-dispensary").value.toLowerCase();

  const filtered = reviews.filter(r =>
    r.name.toLowerCase().includes(name) &&
    r.strain.toLowerCase().includes(strain) &&
    (r.grower?.toLowerCase().includes(grower) || r["grower/producer"]?.toLowerCase().includes(grower)) &&
    r.dispensary?.toLowerCase().includes(dispensary)
  );

  displayReviews(filtered);
}

function displayReviews(data) {
  const container = document.getElementById("reviews");
  container.innerHTML = "";

  data.forEach(r => {
    container.innerHTML += `
      <div class="review-card">
        <h3>${r.name} (${r.strain})</h3>
        ${r.grower ? `<p><strong>Grower:</strong> ${r.grower}</p>` : ""}
        ${r["grower/producer"] ? `<p><strong>Grower/Producer:</strong> ${r["grower/producer"]}</p>` : ""}
        ${r.packaged ? `<p><strong>Packaged by:</strong> ${r.packaged}</p>` : ""}
        ${r["THC/CBD"] ? `<p><strong>THC/CBD:</strong> ${r["THC/CBD"]}</p>` : ""}
        ${r.batch ? `<p><strong>Batch ID:</strong> ${r.batch}</p>` : ""}
        ${r.dispensary ? `<p><strong>Dispensary:</strong> ${r.dispensary}</p>` : ""}
        <p><strong>Rating:</strong> ${r.rating}</p>
        <p><strong>Notes:</strong> ${r.notes}</p>
      </div>
    `;
  });
}
