import React from "react";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import UserExperience from "../Components/UserExperience";
import EasyAccess from "../Components/EasyAccess";
import Example from "../Components/Comments";
import Peoples from "../Components/Peoples";
import ContactUs from "../Components/ContactUs";


const MainPage = () => {
    return(
        <React.Fragment>
            <Menu/>
            <Header/>
            <UserExperience/>
            <EasyAccess/>
            <Example/>
            <Peoples/>
            <ContactUs/>
        </React.Fragment>
    )
};

export default MainPage;