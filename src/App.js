import React  from "react";
import { Route, Switch } from 'react-router-dom';
import "./Styles/main.scss";
import AdminPanel from "./Components/AdminPanel";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AdminPanel/>
      </React.Fragment>


    );
  }
}
export default App;
