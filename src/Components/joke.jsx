export default function Joke(props) {
    
return(
<>
{/* /* if we need to check if all fields are available
  we show them if one is not available  we only 
show the available ones */}

{props.setup && <p>setup: {props.setup}</p>}
{props.punchline && <p>punchline: {props.punchline}</p>}
{props.upVotes && <p>upVotes: {props.upVotes}</p>}
<hr/>


</>

)
}