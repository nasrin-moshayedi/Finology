import React from "react";
import Test from "../../Public/Carousel/Carousel";
import img1 from "./../../../Images/3.jpg"
import img2 from "./../../../Images/14.jpg"
import Content from "../Content";

const data = [
    {
        img: img1,
        title: "T-Bone Steak & Eggs",
        location: "A'la CarteAmericanMain Course",
        time: "4-6 Mins",
        cost: "16.99"
    },
    {
        img: img2,
        title: "Eggs Benedict",
        location: "A'la CarteAmericanMain Course",
        time: "5-7 Mins",
        cost: "13.48"
    },
    {
        img: img1,
        title: "T-Bone Steak & Eggs",
        location: "A'la CarteAmericanMain Course",
        time: "4-6 Mins",
        cost: "16.99"
    },
    {
        img: img1,
        title: "T-Bone Steak & Eggs",
        location: "A'la CarteAmericanMain Course",
        time: "4-6 Mins",
        cost: "16.99"
    }
];
function Appetizer() {
    return(
        <Content title="Appetizer" data={data}/>
    )
}

export default Appetizer;
