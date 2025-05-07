export default function Contact(props) {
   

  
    return (
     
        <article className="contact-card">
          <img src={props.img} alt="my image" />
          <h3>{props.name}</h3>
          <div className="info-group">
            <img src="src/assets/react.svg" alt="phone icon" />
            <p>{props.phone}</p>
          </div>
          <div className="info-group">
            <img src="src/assets/location.png" alt="mail icon" />
            <p>{props.email}</p>
          </div>
        </article>
     
    );
  }
  