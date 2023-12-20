// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Menu/Menu.css';
import Login from '../Login/Login';
import logoHeader from '../assets/images/logo-header.png';



import { useSelector, useDispatch } from 'react-redux';




const Menu = () => {

    let [isOpenLogin, setisOpenLogin] = useState(false)

    const handleIsOpenLogin = () => {
        setisOpenLogin(true)
    }

    const handleToggle = () => {
        setisOpenLogin(false)
    }
    return (
        <div className='Menu' >
            <div className='Menu-top'>
                <a href='#'>
                    <img className='Menu-top-icon' src={logoHeader} alt='TONY FORUM' />
                </a>
                <div className='Menu-top-search'>
                    <input className="search-input" placeholder='Tìm kiếm' />
                    <i className="fas fa-search search-icon"></i>
                </div>

            </div>
            <div className='Menu-bottom'>
                <div className='Menu-bottom-option'>
                    <Login
                        isOpen={isOpenLogin}
                        toggle={handleToggle}

                    />
                    <button type="button" className="btn btn-light mr-3">Thảo luận</button>
                    <button type="button" className="btn btn-light mr-3">Bài viết</button>
                    <button type="button" className="btn btn-light mr-3">Đăng bài</button>
                </div>
                <div className='Menu-bottom-dkdn'>
                    <button type="button" className="btn btn-light mr-3"
                        onClick={() => { handleIsOpenLogin() }}

                    >Đăng nhập</button>
                    <button type="button" className="btn btn-light">Đăng kí</button>

                </div>
            </div>




        </div>
    );
}

export default Menu;




