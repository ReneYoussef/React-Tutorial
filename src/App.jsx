import jokesData from "./jokesData.js";
import Joke from "./components/joke.jsx";
export default function App() {
  const jokeElements = jokesData.map((joke) => {
    //we will take the array of regular javascript object and turn them into an array of joke elements
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <>
      <main>{jokeElements}</main>
    </>
  );
}

// const persons = [
//   <h2>Rene</h2>,
//   <h2>Elie</h2>,
//   <h2>Charbel</h2>,
//   <h2>George</h2>,
// ];

/* 
      <Header />
      <main className="container">

        <Entry
        img = {{src: "src/assets/me.jpg", alt: "Mount Fuji"}}
        title="Mount Fuji"
        country="Japan"
        googleMapsUrl="https://www.google.com/maps/place/Japan"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is Japan's highest peak, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. The mountain is a symbol of Japan and is often depicted in art and literature. It is a popular destination for hikers and tourists"
        />
        <Entry
        img = {{src: "src/assets/me2.jpg", alt: "Mount Fuji"}}
        title="Mount Fuji"
        country="Japan"
        googleMapsUrl="https://www.google.com/maps/place/Japan"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is Japan's highest peak, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. The mountain is a symbol of Japan and is often depicted in art and literature. It is a popular destination for hikers and tourists"
        />
        <Entry
        img = {{src: "src/assets/me.jpg", alt: "Mount Fuji"}}
        title="Mount Fuji"
        country="Japan"
        googleMapsUrl="https://www.google.com/maps/place/Japan"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is Japan's highest peak, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. The mountain is a symbol of Japan and is often depicted in art and literature. It is a popular destination for hikers and tourists"
        />

      </main>
       */
/* <main>{persons}</main> */

// <div className="contact">
//   <Contact
//    img="src/assets/me.jpg"
//    name="Rene Youssef"
//    phone="+961 89 897 974"
//    email="reneYoussef10@gmail.com"
//    />
//   <Contact
//   img="src/assets/me.jpg"
//   name="Elie Youssef"
//   phone="+961 79 118 999"
//   email="elie10@gmail.com"
//   />
//   <Contact
//   img="src/assets/me.jpg"
//   name="Charbel Youssef"
//   phone="+961 81 324 974"
//   email="CharbelYoussef10@gmail.com"
//   />
//   <Contact
//   img="src/assets/me.jpg"
//   name="George Youssef"
//   phone="+961 71 332 231"
//   email="GeorgeYoussef10@gmail.com"
//   />
// </div>

// <>
//   <main>
//     <Joke
//       setup="I told my wife she was drawing her eyebrows too high—she looked surprised."
//       punchline="Surprised? More like shocked!"
//       upVotes={10}
//       isPun={true}
//       comment={[
//         { author: "Rene", text: "I love this joke!" },
//         { author: "Elie", text: "I love this joke!" },
//       ]}
//     />
//     <Joke
//       setup="Parallel lines have so much in common—it's a shame they'll never meet."
//       punchline="It’s a tragic tale of unrequited geometry."
//       isPun={true}
//     />
//     <Joke
//       setup="I’m on a seafood diet—I see food and I eat it."
//       punchline="I’m doing it for the 'crab' in me."
//       isPun={true}
//     />
//     <Joke
//       setup="I used to play piano by ear, but now I use my hands."
//       punchline="Guess that’s what happens when you go off the scales."
//       isPun={false}
//     />
//     <Joke
//       setup="I’m reading a book on anti-gravity—it’s impossible to put down."
//       punchline="It’s a real uplifting experience!"
//       isPun={true}
//     />
//     <Joke punchline="It’s a real uplifting experience!" isPun={false} />
//   </main>
// </>
