import "./App.css";
import Header from "./Components/Header.jsx";
import Entry from "./Components/Entry.jsx";
import Contact from "./Components/Contact.jsx";

export default function App() {
  return (
    <div className="contact">
      <Contact
       img="src/assets/me.jpg"
       name="Rene Youssef"
       phone="+961 89 897 974"
       email="reneYoussef10@gmail.com"
       />
      <Contact 
      img="src/assets/me.jpg"
      name="Elie Youssef"
      phone="+961 79 118 999"
      email="elie10@gmail.com"
      />
      <Contact
      img="src/assets/me.jpg"
      name="Charbel Youssef"
      phone="+961 81 324 974"
      email="CharbelYoussef10@gmail.com"
      />
      <Contact
      img="src/assets/me.jpg"
      name="George Youssef"
      phone="+961 71 332 231"
      email="GeorgeYoussef10@gmail.com"
      />
    </div>
  );
}
