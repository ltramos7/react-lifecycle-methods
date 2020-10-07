import React from "react";
import ReactDOM from "react-dom";
import SquareComponent from "./Components/SquareComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <SquareComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
