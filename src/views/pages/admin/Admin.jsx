import React from "react";
import { Link } from "react-router-dom";
import { FaForward } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaAlgolia } from "react-icons/fa";
import { FaDashcube } from "react-icons/fa";
import ADA from "../image/ada.jpg";

import "./admin.css";

const Admin = () => {
    return (
        <>
            <header>
                <div className="container-fluid header_full ">
                </div>
            </header>
            <section>
                <div className="container-fluid content_part_full">
                    <div className="row">
                        <div className="col-md-2 sidebar_part">
                            <div className="user_part">
                                <img src={ADA} alt="avatar" />
                                <h4>Kanak das</h4>
                                <p>
                                    <i className="fa fa-circle"></i> Online
                                </p>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>
                                    <Link >
                                      <span style={{marginRight: 10}}> < FaDashcube/></span>   
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                      <span style={{marginRight: 10}}> < FaUserAlt/></span>   
                                            User
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                      <span style={{marginRight: 10}}> < FaAlgolia/></span>   
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10 content_part">
                            <div className="row custom_bread_part">
                                <div className="col-md-12 bread">
                                    <ul>
                                        <li>
                                            <Link style={{ margin: 20}}>
                                                Dashboard <FaForward />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 main_content">
                                    Welcome Mr. Xyz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container-fluid footer_full"></div>
            </footer>
        </>
    );
};

export default Admin;
