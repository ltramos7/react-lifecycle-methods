import React from "react";
import SquareComponent from "./Components/SquareComponent";

class App extends React.Component {

  render() {
    console.log("App render() method invoked")
    return (
      <div>
        <button onClick={this.mountSquare} disabled={this.state.mount}>Mount Square</button>
        <button onClick={this.unmountSquare} disabled={!this.state.mount}>Unmount Square</button>
        {this.state.mount? <SquareComponent/> : null}
      </div>
    );
  }

  constructor(){
    console.log("App constructor method invoked")
    super()
    this.state = {
      mount: false
    }
  }

  mountSquare = () => this.setState({mount: true})
  unmountSquare = () => this.setState({mount: false})
 
}

export default App;


