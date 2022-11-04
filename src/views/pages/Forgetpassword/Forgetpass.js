import React, { useRef, useState } from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../common-section/CommonSection";

const Forgetpassword = () => {
    const [inputs, setInputs] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Helmet title="Login">
                <CommonSection title="Forget Password" />
                <section>
                    <div
                        style={{
                            marginTop: 10,
                        }}
                        className="container"
                    >
                        <div className="row">
                            <div class=" col-lg-4"></div>
                            <div class=" col-lg-4">
                                <div class="card">
                                    <div class="card-header">
                                        {" "}
                                        Forget Password
                                    </div>
                                    <div
                                        style={{
                                            background: "#81C6E8",
                                        }}
                                        class="card-body"
                                    >
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                            }}
                                            class="form-signin"
                                        >
                                            <input
                                                type="text"
                                                value={inputs.name}
                                                class="form-control mb-2"
                                                name="username"
                                                onChange={handleChange}
                                                placeholder="Username"
                                                required
                                            />

                                            <label for="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                value={inputs.email}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                                onChange={handleChange}
                                            ></input>

                                            <button
                                                style={{
                                                    marginLeft: 135,
                                                    marginTop: 10,
                                                }}
                                                class="btn btn-md btn-primary btn-block mb-1"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
                    </div>
                </section>
            </Helmet>
        </>
    );
};

export default Forgetpassword;
