// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Menu/Menu.css';
import Login from '../Login/Login';
import logoHeader from '../assets/images/logo-header.png';
import Signup from '../Signup/Signup';
import { useHistory } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';




const Menu = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    let [isOpenLogin, setisOpenLogin] = useState(false)
    let [isOpenSignup, setisOpenSignup] = useState(false)
    let [key, setkey] = useState('')

    const handleIsOpenLogin = () => {
        setisOpenLogin(true)
    }

    const handleToggle = () => {
        setisOpenLogin(false)
    }

    const handleIsOpenSignup = () => {
        setisOpenSignup(true)
    }

    const handleToggleSignup = () => {
        setisOpenSignup(false)
    }

    const handleSearchKey = async () => {
        await dispatch(actions.handleSearchKey({
            text: key

        }))
        history.push(`/searchkey`);
    }

    const onChangeInputKey = (event) => {
        let event1 = event.target.value;
        console.log('Gia trị là ', event)


        setkey(event1)

    }

    const handleClickHome = () => {

        history.push(`/`);
    }
    return (
        <div className='Menu' >
            <div className='Menu-top'>
                <a
                    onClick={() => { handleClickHome() }}
                >
                    <img className='Menu-top-icon' src={logoHeader} alt='TONY FORUM' />
                </a>
                <div className='Menu-top-search'>
                    <input className="search-input" placeholder='Tìm kiếm'
                        onChange={(event) => onChangeInputKey(event)}
                    />
                    <div
                        onClick={() => { handleSearchKey() }}
                    >
                        <i className="fas fa-search search-icon"></i>
                    </div>

                </div>

            </div>
            <div className='Menu-bottom'>
                <div className='Menu-bottom-option'>
                    <Login
                        isOpen={isOpenLogin}
                        toggle={handleToggle}

                    />
                    <Signup
                        isOpen={isOpenSignup}
                        toggle={handleToggleSignup}
                    />
                    <button type="button" className="btn btn-light mr-3">Thảo luận</button>
                    <button type="button" className="btn btn-light mr-3"
                        onClick={() => { handleClickHome() }}
                    >Bài viết</button>
                    <button type="button" className="btn btn-light mr-3">Đăng bài</button>
                </div>
                <div className='Menu-bottom-dkdn'>
                    <button type="button" className="btn btn-light mr-3"
                        onClick={() => { handleIsOpenLogin() }}

                    >Đăng nhập</button>
                    <button type="button" className="btn btn-light"
                        onClick={() => { handleIsOpenSignup() }}
                    >Đăng kí</button>

                </div>
            </div>




        </div>
    );
}

export default Menu;




