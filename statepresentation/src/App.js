import './App.css';
import React from 'react';
import NewComp from "./Components/NewComp"


class App extends React.Component {

  styles={
    fontStyle: "bold",
    color: "teal"
  };
  render() {
    return (
    <div className = "App">
      <h1 style={this.styles}> Bird Therapist </h1>
      <NewComp />
      <NewComp />
      </div>
    );
  }
}
export default App;
