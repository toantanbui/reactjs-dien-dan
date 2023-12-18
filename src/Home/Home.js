// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../css/Home/Home.css';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';


import { useSelector, useDispatch } from 'react-redux';




const Home = () => {
    const dispatch = useDispatch()

    let [arrmessage, setarrmessage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,])
    let [arrAllStatus, setarrAllStatus] = useState([])



    return (
        <div className='Home'>
            <div className='Home-header'>
                <Menu />
            </div>
            <div className='Home-content'>
                <div className='Home-content-up'>
                    <div className='Home-content-up-new'>
                        <div class="card">
                            <div class="card-body">
                                Bài viết mới nhất
                            </div>
                        </div>
                        <div class="list-group">

                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 1</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 3</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                        </div>
                    </div>
                    <div className='Home-content-up-like'>
                        <div class="card">
                            <div class="card-body">
                                Bài viết được yêu thích nhất
                            </div>
                        </div>
                        <div class="list-group">

                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">1 like</small>
                                <small class="text-muted">___1    comment</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 3</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='Home-content-down'>
                    <div className='Home-content-down-posts'>
                        <div class="card">
                            <div class="card-body">
                                Bài viết khác
                            </div>
                        </div>
                        <div class="list-group">

                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 1</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Bài viết 2</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Nội dung</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>


                        </div>
                    </div>
                    <div className='Home-content-down-pagination'>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" >1</a></li>
                                <li class="page-item"><a class="page-link" >2</a></li>
                                <li class="page-item"><a class="page-link" >3</a></li>
                                <li class="page-item"><a class="page-link" >4</a></li>
                                <li class="page-item"><a class="page-link" >5</a></li>
                                <li class="page-item"><a class="page-link" >6</a></li>
                                <li class="page-item">
                                    <a class="page-link">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
            <div className='Home-footer'>
                <Footer />
            </div>

        </div>
    );
}

export default Home;




