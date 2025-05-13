import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  console.log(isShown);
  return (
    <>
      {/* /* if we need to check if all fields are available
  we show them if one is not available  we only 
show the available ones */}

      {props.setup && <p>setup: {props.setup}</p>}
      {isShown ? <p>punchline: {props.punchline}</p> : null}

      <button onClick={toggleShown}>{isShown ?"Hide" :"show"}</button>

      <hr />
    </>
  );
}
