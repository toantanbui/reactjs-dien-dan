// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Home/Home.css';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import TopicPreview from '../TopicPreview/TopicPreview'

import { useSelector, useDispatch } from 'react-redux';
import MenuLogged from '../MenuLogged/MenuLogged';
import { useHistory } from 'react-router-dom';
const _ = require('lodash');






const Home = () => {


    const dispatch = useDispatch()
    const history = useHistory();
    const latestTopics = [
        {
            title: "Cận cảnh nhà ga T3 Tân Sơn Nhất sau 3 tháng khởi công",
            author: "Toàn Bùi",
            createdAt: "2 giờ trước",
            previewContent: "Sau 3 tháng thi công, dự án xây dựng ga hành khách T3 của Cảng Hàng không Tân Sơn Nhất đang dần thành hình"
        },
        {
            title: "Cận cảnh nhà ga T3 Tân Sơn Nhất sau 3 tháng khởi công",
            author: "Toàn Bùi",
            createdAt: "2 giờ trước",
            previewContent: "Sau 3 tháng thi công, dự án xây dựng ga hành khách T3 của Cảng Hàng không Tân Sơn Nhất đang dần thành hình"
        },
        {
            title: "Cận cảnh nhà ga T3 Tân Sơn Nhất sau 3 tháng khởi công",
            author: "Toàn Bùi",
            createdAt: "2 giờ trước",
            previewContent: "Sau 3 tháng thi công, dự án xây dựng ga hành khách T3 của Cảng Hàng không Tân Sơn Nhất đang dần thành hình"
        }
    ];

    const hotTopics = [
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        }
    ];

    const topics = [
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        }
    ];

    let [isLoggedIn, setisLoggedIn] = useState(false)
    let [allPosts, setallPosts] = useState([])
    let [allPostsLike, setallPostsLike] = useState([])

    let isLoggedInRedux = useSelector(state => state.user.isLoggedIn)
    let allPostsRedux = useSelector(state => state.admin.allPosts)
    let allPostsLikeRedux = useSelector(state => state.admin.allPostsLike)


    useEffect(() => {
        dispatch(actions.handleGetAllPosts({}))
        if (allPostsRedux !== null) {
            setallPosts(allPostsRedux)
            console.log('Home update la ', allPostsRedux)
        }
        if (allPostsLikeRedux !== null) {
            setallPostsLike(allPostsLikeRedux)
        }
        setisLoggedIn(isLoggedInRedux)
        // setallPosts(allPostsRedux)
        console.log('Home la ', allPostsRedux)
        console.log('Home like la ', allPostsLikeRedux)
    }, [])

    useEffect(() => {
        if (allPostsRedux !== null) {
            setallPosts(allPostsRedux)
            console.log('Home update la ', allPostsRedux)
        }
        if (allPostsLikeRedux !== null) {
            setallPostsLike(allPostsLikeRedux)
        }

        setisLoggedIn(isLoggedInRedux)
        //setallPosts(allPostsRedux)

    }, [allPostsRedux, isLoggedInRedux, allPostsLikeRedux])


    const handleClickDiscussion = (data) => {

        history.push(`/discussion/${data}`);
    }








    return (
        <div className='Home'>
            <div className='Home-header'>
                {isLoggedIn && isLoggedIn === true ?

                    <MenuLogged /> : <Menu />}


            </div>
            <div className='Home-content'>
                <div className='Home-content-up'>
                    <div className='Home-content-up-new'>
                        <div className="card">
                            <div className="card-body">
                                Bài viết mới nhất
                            </div>
                        </div>
                        <div className="list-group">
                            {!_.isEmpty(allPostsLike) ?
                                allPostsLike.length > 0 && allPostsLike.map((topic, index) => (
                                    <TopicPreview key={index} title={topic.postName} time={topic.time} author={topic.firstName} id={topic._id}
                                        handleClickDiscussion={handleClickDiscussion} lastName={topic.lastName}
                                    />
                                )) : <Audio
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />

                            }
                        </div>
                    </div>
                    <div className='Home-content-up-like'>
                        <div className="card">
                            <div className="card-body">
                                Bài viết được yêu thích nhất
                            </div>
                        </div>
                        <div className="list-group">
                            {!_.isEmpty(allPosts) ?
                                allPosts.length > 0 && allPosts.map((topic, index) => (
                                    <TopicPreview key={index} title={topic.postName} time={topic.time} author={topic.firstName} id={topic._id}
                                        handleClickDiscussion={handleClickDiscussion} lastName={topic.lastName}
                                    />
                                )) : <Audio
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className='Home-content-down'>
                    <div className='Home-content-down-posts'>
                        <div className="card">
                            <div className="card-body">
                                Bài viết khác
                            </div>
                        </div>
                        <div className="list-group">
                            {!_.isEmpty(allPosts) ?
                                allPosts.length > 0 && allPosts.map((topic, index) => (
                                    <TopicPreview key={index} title={topic.postName} time={topic.time} author={topic.firstName} id={topic._id}
                                        handleClickDiscussion={handleClickDiscussion} lastName={topic.lastName}
                                    />
                                )) : <Audio
                                    heigth="100"
                                    width="100"
                                    color='grey'
                                    ariaLabel='loading'
                                />
                            }
                        </div>
                    </div>
                    <div className='Home-content-down-pagination'>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" >1</a></li>
                                <li className="page-item"><a className="page-link" >2</a></li>
                                <li className="page-item"><a className="page-link" >3</a></li>
                                <li className="page-item"><a className="page-link" >4</a></li>
                                <li className="page-item"><a className="page-link" >5</a></li>
                                <li className="page-item"><a className="page-link" >6</a></li>
                                <li className="page-item">
                                    <a className="page-link">Next</a>
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




