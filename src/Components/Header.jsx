import React from "react";
import LOGO from "../Assets/logo.png"
const Header = () => {
    return (
        <ul className="nav justify-content-center bg-dark navbar">
            <img src={LOGO} alt="" style={{ width: "22px", height: "22px" }} className="m-1" />
            <div className="navbar-brand text-light">
                FaceLogin
            </div>
        </ul>
    );
};

export default Header;
