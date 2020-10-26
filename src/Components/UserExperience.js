import React from 'react';
import contentImg from "./../Images/assets/3-content/content-001.png";
function UserExperience() {
    return(
        <div className="container">
            <div className="row align-items-center justify-content-between flex-md-row-reverse">
                <div className="col-12 col-md-6 col-lg-5">
                    <h2 className="blue-text title">We can give you our best user experience to your system</h2>
                    <p className="light-text sub-title">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                    <img src={contentImg} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default UserExperience;