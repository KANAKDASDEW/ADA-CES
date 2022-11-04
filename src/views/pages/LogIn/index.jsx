import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../common-section/CommonSection";
import "./login.css";
import { useDispatch } from "react-redux";
import { authLogin } from "../../../Redux/Auth/authSlice";
import { LOCAL_STORAGE_AUTH_KEY } from "../../../const/const";
import { useHistory } from "react-router-dom";
const Login = () => {

    let history=useHistory()
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();
    const dispatch=useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(loginNameRef)
        const data={   
              name:loginNameRef.current.value, 
              role:"admin",
              email:"admin@admin.com"
        }

        history.push(`/${data.role}`)

   dispatch(authLogin({data}))
   localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(data))

        
    };




    return (
        <>
            <Helmet title="Login">
                <CommonSection title="Login" />
                <section>
                    <div class="container pt-3 login_main_part">
                        <div class="row justify-content-sm-center">
                            <div class="col-sm-6 col-md-4">
                                <div class="card border-info text-center">
                                    <div class="card-header">
                                        Login in to continue
                                    </div>
                                    <div class="card-body">
                                        <h4 class="text-center">LOGIN</h4>

                                        <form class="form-signin" onSubmit={submitHandler}>
                                            <input
                                                type="text"
                                                class="form-control mb-2"
                                                name="username"
                                                placeholder="Username"
                                                required
                                                ref={loginNameRef}
                                            />
                                            <input
                                                type="password"
                                                class="form-control mb-2"
                                                name="password"
                                                placeholder="Password"
                                                required
                                                ref={loginPasswordRef}
                                            />
                                            
                                            <button style={{marginLeft:135}} class="btn btn-md btn-primary btn-block mb-1" type="submit">Login</button>
                                            <Link style={{marginLeft:65}} to="/Forgetpassword" class="float-right">
                                        Forget Password
                                        </Link>
                                        </form>
                                        <Link to="/signup" class="float-right">
                                        Don't have an account? Create an account
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

export default Login;
