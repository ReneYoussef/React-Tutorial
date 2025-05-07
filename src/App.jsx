import "./App.css";
import Header from "./Components/Header.jsx";
import Entry from "./Components/Entry.jsx";
import Contact from "./Components/Contact.jsx";
import Joke from "./Components/joke.jsx";
export default function App() {
  return (
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

    <>
      <main>
        <Joke 
        setup ="I told my wife she was drawing her eyebrows too high—she looked surprised." 
        punchline="Surprised? More like shocked!"
        upVotes={10}
        isPun={true}
      comment={[
        {author:"Rene", text:"I love this joke!"},
        {author:"Elie", text:"I love this joke!"}
      ]}
         />
        <Joke 
        setup ="Parallel lines have so much in common—it's a shame they'll never meet." 
        punchline="It’s a tragic tale of unrequited geometry."
        isPun={true}
         />
        <Joke 
        setup ="I’m on a seafood diet—I see food and I eat it." 
        punchline="I’m doing it for the 'crab' in me."
        isPun={true}
         />
        <Joke
         setup ="I used to play piano by ear, but now I use my hands." 
         punchline="Guess that’s what happens when you go off the scales."
         isPun={false}
          />
        <Joke 
        setup ="I’m reading a book on anti-gravity—it’s impossible to put down." 
        punchline="It’s a real uplifting experience!"
        isPun={true}
         />
         <Joke 
        punchline="It’s a real uplifting experience!"
        isPun={false}
         />
      </main>
    </>
  );
}
