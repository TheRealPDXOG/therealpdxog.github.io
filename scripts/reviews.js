let reviews = [];

fetch('reviews.json')
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
    r.grower.toLowerCase().includes(grower) &&
    r.dispensary.toLowerCase().includes(dispensary)
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
        <p><strong>Grower:</strong> ${r.grower}</p>
        <p><strong>Dispensary:</strong> ${r.dispensary}</p>
        <p><strong>Rating:</strong><br>
          Joint: ${"🚬".repeat(r.rating.joint)}<br>
          Pipe: ${"🧱".repeat(r.rating.pipe)}<br>
          Bong: ${"💨".repeat(r.rating.bong)}
        </p>
        <p>${r.notes}</p>
      </div>
    `;
  });
}