import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./Styles/main.scss";
import AdminPanel from "./Pages/AdminPanel"
import LoginDashboard from "./Pages/Login/LoginDashboard"
import RegisterDashboard from "./Pages/Register/RegisterDashboard"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <AdminPanel/> */}

        <RegisterDashboard />
        {/* <LoginDashboard /> */}
      </React.Fragment>


    );
  }
}
export default App;
