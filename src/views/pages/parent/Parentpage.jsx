import React, { useRef } from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../common-section/CommonSection";

const Parentpage = () => {
    return (
        <>
            <Helmet title="Login">
                <CommonSection title="Parent page" />
                <section>
                    <table class="table">
                        <thead className="TableHead">
                            <tr>
                                <th scope="col">Job Title</th>
                                <th scope="col">Job Code</th>
                                <th scope="col">Program</th>
                                <th scope="col">Applicant</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"> Senior App Developer</th>
                                <td>677639</td>
                                <td>React</td>
                                <td>7</td>
                                <td>Onging</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">Jonior App Developer</th>
                                <td>677640</td>
                                <td>React</td>
                                <td>10</td>
                                <td>Onging</td>
                            </tr>
                            <tr>
                                <th scope="row">Finance Manager</th>
                                <td>677641</td>
                                <td>React</td>
                                <td>3</td>
                                <td>Onging</td>
                            
                            
                            </tr>
                            <tr>
                                <th scope="row">Designer</th>
                                <td>677642</td>
                                <td>React</td>
                                <td>8</td>
                                <td>Onging</td>
                              
                            
                            </tr>
                            <tr>
                                <th scope="row">HR</th>
                                <td>677643</td>
                                <td>React</td>
                                <td>3</td>
                                <td>Onging</td>
                            
                            </tr>
                        </tbody>
                    </table>
                </section>
            </Helmet>
        </>
    );
};

export default Parentpage;
