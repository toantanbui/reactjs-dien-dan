// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Menu/Menu.css';

import logoHeader from '../assets/images/logo-header.png';
import { useHistory } from 'react-router-dom';



import { useSelector, useDispatch } from 'react-redux';




const MenuLogged = (props) => {

    let [userInfo, setuserInfo] = useState()
    let [userInfo2, setuserInfo2] = useState({})
    const history = useHistory();



    const dispatch = useDispatch()
    const handleLogout = () => {

        dispatch(actions.handleLogout())
        history.push(`/`);

    }

    const handleClickPosting = () => {
        let abc = localStorage.getItem('persist:user');
        let id = JSON.parse(abc).userInfo;

        history.push(`/posting/${id}`);

    }

    let userInfoRedux = useSelector(state => state.admin.userInfo1)
    useEffect(async () => {
        let abc = localStorage.getItem('persist:user');
        let id = JSON.parse(abc).userInfo;



        dispatch(actions.handleGetOneUser({ id: id }))
        setuserInfo(userInfoRedux)
        console.log('menu-componentDimonut', id, userInfo)
    }, [])

    useEffect(async () => {

        setuserInfo(userInfoRedux)
        console.log('menu-componentUpdate', userInfo, userInfo)
        console.log('menu-componentUpdate2', !userInfo2)
    }, [userInfoRedux])

    const handleClickPersonalPage = () => {
        let abc = localStorage.getItem('persist:user');
        let id = JSON.parse(abc).userInfo;
        history.push(`/personalpage/${id}`);
    }
    const handleClickHome = () => {

        history.push(`/`);
    }


    return (
        <div className='Menu' >
            <div className='Menu-top'>
                <a
                    onClick={() => { handleClickHome() }}>
                    <img className='Menu-top-icon' src={logoHeader} alt='TONY FORUM' />
                </a>
                <div className='Menu-top-search'>
                    <input className="search-input" placeholder='Tìm kiếm' />
                    <i className="fas fa-search search-icon"></i>
                </div>

            </div>
            <div className='Menu-bottom'>
                <div className='Menu-bottom-option'>

                    <button type="button" className="btn btn-light mr-3">Thảo luận</button>
                    <button type="button" className="btn btn-light mr-3"
                        onClick={() => { handleClickHome() }}
                    >Bài viết</button>
                    <button type="button" className="btn btn-light mr-3"
                        onClick={() => { handleClickPosting() }}
                    >Đăng bài</button>
                </div>
                <div className='Menu-bottom-dkdn'>
                    <button type="button" className="btn btn-light mr-3"

                        onClick={() => { handleClickPersonalPage() }}
                    >
                        {userInfo && userInfo.firstName !== false ?

                            userInfo.firstName : 'chưa đăng nhập'}



                    </button>
                    <button type="button" className="btn btn-light"
                        onClick={() => handleLogout()}
                    >Đăng xuất</button>



                </div>
            </div>




        </div>
    );
}

export default MenuLogged;




