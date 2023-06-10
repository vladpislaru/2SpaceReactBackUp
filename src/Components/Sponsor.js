import React from "react";
import "../static/css/sponsors.css"

const Sponsor = ({name, description, image}) => {
    return(
        <>
            <div className="super-box">
                <div className="container">
                    <div className="box" data-content={description}>
                    <div className="icon_bg"></div>
                    </div>

                    <div className="icon bg-transparent">

                    <img src={image}/>
                    </div>

                </div>

                <div className="text">
                    <p className="title">
                    {name}
                    </p>

                </div>
            </div>

        </>
    )
}

export default Sponsor;