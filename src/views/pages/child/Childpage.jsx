import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaForward} from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaEyeDropper } from 'react-icons/fa';
import ADA from "../image/ada.jpg";
import './childpage.css';

const Childpage = () => {
    return (
        <>
            <header>
        <div class="container-fluid header_full"> 
        </div>
    </header>
    <section>
        <div class="container-fluid content_part_full">
            <div class="row">
                <div class="col-md-2 sidebar_part">
                  <div class="user_part">
                    <img src= {ADA} alt="avatar"/>
                    <h4>Kanak das</h4>
                    <p><i class="fa fa-circle"></i> Online</p>
                  </div>
                  <div class="menu">
                      <ul>
                        <li><Link ><i class="fa fa-home"></i> Dashboard</Link></li>
                        <li><Link ><i class="fa fa-user-circle"></i> User</Link></li>
                        <li><Link ><i class="fa fa-bandcamp"></i> Banner</Link></li>
                        <li><Link><i class="fa fa-power-off"></i> Logout</Link></li>
                      </ul>
                  </div>
                </div>
                <div class="col-md-10 content_part">
                    <div class="row custom_bread_part">
                        <div class="col-md-12 bread">
                             <ul>
                               <Link><FaForward/>Home</Link>
                             
                             </ul> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 main_content">
                            <div class="card">
                              <div class="card-header">
                                  <div class="row">
                                      <div class="col-md-8">
                                            <h4 class="card_header_title"><i class="fa fa-gg-circle"></i> Table All Data</h4>
                                      </div>
                                      <div class="col-md-4 text-right">
                                          <Link class="btn btn-sm btn-dark card_top_btn" href="#"><i class="fa fa-th"></i> Form</Link>
                                      </div>
                                      <div class="clearfix"></div>
                                  </div>
                              </div>
                              <div class="card-body">
                                  <table class="table table-bordered table-striped table-hover custom_table">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Manage</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Kanak das</td>
                                        <td>01863254004</td>
                                        <td>kanak Das</td>
                                        <td>kanak</td>
                                        <td>
                                        <Link><FaEye/></Link>
                                          <Link><FaRegTrashAlt /></Link>
                                          <Link><FaEyeDropper/></Link>
                                        </td>
                                      </tr>
                                      <tr>
                                      <td>Kanak das</td>
                                        <td>01863254004</td>
                                        <td>kanak Das</td>
                                        <td>kanak</td>
                                        <td>
                                        <Link><FaEye/></Link>
                                          <Link><FaRegTrashAlt /></Link>
                                          <Link><FaEyeDropper/></Link>
                                        </td>
                                      </tr>
                                      <tr>
                                      <td>Kanak das</td>
                                        <td>01863254004</td>
                                        <td>kanak Das</td>
                                        <td>kanak</td>
                                        <td>
                                        <Link><FaEye/></Link>
                                          <Link><FaRegTrashAlt /></Link>
                                          <Link><FaEyeDropper/></Link>
                                        </td>
                                      </tr>
                                      <tr>
                                      <td>Kanak das</td>
                                        <td>01863254004</td>
                                        <td>kanak Das</td>
                                        <td>kanak</td>
                                        <td>
                                          <Link><FaEye/></Link>
                                          <Link><FaRegTrashAlt /></Link>
                                          <Link><FaEyeDropper/></Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                              </div>
                              <div class="card-footer text-center">
                                  .
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container-fluid footer_full">
            
        </div>
    </footer>
        </>
    );
};

export default Childpage;