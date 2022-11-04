import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import "./header.css";

const Header = () => {
    return (
        <>
            <div className="nav_bar ">
                <div className="nav container">
                    <div className="logo">
                        <Link to="/">
                            <span style={{ color: "#ffff", marginTop: "15px" }}>
                                ADA-CES
                            </span>
                        </Link>
                    </div>
                    <div className="main_menu">
                        <ul className="menu"> 
                        </ul>
                    </div>
                    <div className="resister_account">
                        <span className="user">
                            <Link to="/login">
                            <FaUser/>    
                            </Link>
                        </span>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Header;
