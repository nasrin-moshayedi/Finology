import React from "react";
import "./Styles/main.scss";
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu/>
        <Header/>
      </React.Fragment>


    );
  }
}
export default App;
