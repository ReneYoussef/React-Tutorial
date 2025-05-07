export default function Entry() {
  return (

    <article class="journal-entry">
    <div class="main-img-container">
      <img class="main-img" src="src/assets/me.jpg" alt="Mount Fuji" />
    </div>

    <div class="info-container">
      <div class="location-row">
        <img src="src/assets/location.png" class="entry-location" />
        <span class="country">JAPAN</span>
        <a href="https://www.google.com/maps/place/Japan" class="entry-map">View on Google Maps</a>
      </div>

      <h2 class="entry-title">Mount Fuji</h2>
      <p class="entry-date">12 Jan, 2021 - 24 Jan, 2021</p>
      <p class="entry-text">
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
      </p>
    </div>
  </article>
        
 
  );
}