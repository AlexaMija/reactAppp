import React from "react"
import { message } from "./messege";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() - 0.5);
return (
  <div className= "end-game">
<div className="message">
<h2>{message[0].title}</h2>
<p>{messeges[0].message}</p>
<button className="btn btn primary" onCLick= {this.handeClick}> Go again
</button>
</div>
  </div>
)
  }
}
export default EndGame;
