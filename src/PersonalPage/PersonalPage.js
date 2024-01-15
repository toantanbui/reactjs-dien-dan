// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/PersonalPage/PersonalPage.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';
import Posts from '../Posts/Posts';


import { useSelector, useDispatch } from 'react-redux';






const PersonalPage = () => {
    const dispatch = useDispatch()


    return (
        <div className='PersonalPage'>

            <div className='PersonalPage-header'>
                <MenuLogged />
            </div>
            <div className='PersonalPage-content'>
                <div className='PersonalPage-content-header'>
                    <div className='PersonalPage-content-header-left'>
                        <div className='PersonalPage-content-header-left-image'></div>
                        <div className='PersonalPage-content-header-left-name'>
                            <div className='PersonalPage-content-header-left-name-name'>Họ và tên</div>
                        </div>
                    </div>
                    <div className='PersonalPage-content-header-right'>Nhắn tin</div>
                </div>
                <div className='PersonalPage-content-menu'></div>
                <div className='PersonalPage-content-content'>
                    <div className='PersonalPage-content-content-left'></div>
                    <div className='PersonalPage-content-content-right'>
                        <Posts />
                    </div>
                </div>
            </div>
            <div className='PersonalPage-footer'>
                <Footer />
            </div>

        </div>
    );
}

export default PersonalPage;




