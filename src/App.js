import React from "react";
import "./Styles/main.scss";
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import Test from "./Components/Carousel/Carousel";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu/>
        <div>
            <Header/>
        </div>
          <div >
             <Test/>
              <Test/>
              <Test/>
              <Test/>
          </div>


      </React.Fragment>


    );
  }
}
export default App;
