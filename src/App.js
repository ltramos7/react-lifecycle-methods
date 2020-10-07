import React from "react";
import SquareComponent from "./Components/SquareComponent";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      mount: false
    }
  }

  mountSquare = () => this.setState({mount: true})
  unmountSquare = () => this.setState({mount: false})
 
  render() {
    return (
      <div>
        <button onClick={this.mountSquare} disabled={this.state.mount}>Mount Square</button>
        <button onClick={this.unmountSquare} disabled={!this.state.mount}>Unmount Square</button>
        {this.state.mount? <SquareComponent/> : null}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
