export default function Entry(props) {
  return (

    <article class="journal-entry">
    <div class="main-img-container">
      <img class="main-img" src= {props.img.src} alt={props.img.alt}/>
    </div>

    <div class="info-container">
      <div class="location-row">
        <img src="src/assets/location.png" class="entry-location" />
        <span class="country">{props.country}</span>
        <a href={props.googleMapsUrl} class="entry-map">View on Google Maps</a>
      </div>

      <h2 class="entry-title">{props.title}</h2>
      <p class="entry-date">{props.dates}</p>
      <p class="entry-text">{props.description}</p>
    </div>
  </article>
        
 
  );
}