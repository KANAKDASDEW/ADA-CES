
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../common-section/CommonSection";

const Signup = () => {
    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Helmet title="Login">
                <CommonSection title="Sigin" />
                <section>
                    <div class="container pt-3 login_main_part">
                        <div class="row justify-content-sm-center">
                            <div class="col-sm-6 col-md-4">
                                <div class="card border-info text-center">
                                    <div class="card-header">
                                        SigIn in to continue
                                    </div>
                                    <div class="card-body">
                                        <h4 class="text-center">SigIn</h4>

                                        <form class="form-signin" onSubmit={submitHandler}>
                                            <input
                                                type="text"
                                                class="form-control mb-2"
                                                name="username"
                                                placeholder="Username"
                                                required
                                                ref={signupNameRef}
                                            />
                                            <input
                                                type="email"
                                                class="form-control mb-2"
                                                name="email"
                                                placeholder="Email"
                                                required
                                                ref={signupEmailRef}
                                            />
                                            <input
                                                type="password"
                                                class="form-control mb-2"
                                                name="password"
                                                placeholder="Password"
                                                required
                                                ref={signupPasswordRef}
                                            />

                                            <button
                                                class="btn btn-md btn-primary btn-block mb-1"
                                                type="submit"
                                            >
                                                SigIn
                                            </button>
                                        </form>
                                        <Link to="/login">
                                            Already have an account? Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Helmet>
        </>
    );
};

export default Signup;