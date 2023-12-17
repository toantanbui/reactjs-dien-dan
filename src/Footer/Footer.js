// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../css/Footer/Footer.css';




import { useSelector, useDispatch } from 'react-redux';




const Footer = () => {

    return (
        <div className='Footer'>
            <div className='Footer-abc'>
                <div className='Footer-abc-title'>Về chúng tôi</div>
                <div className='Footer-abc-content'>Hcm</div>
            </div>
            <div className='Footer-abc'>
                <div className='Footer-abc-title'>Điều hướng nhanh</div>
                <div className='Footer-abc-content'>Liên hệ</div>
            </div>
            <div className='Footer-abc'>
                <div className='Footer-abc-title'>Menu thành viên</div>
                <div className='Footer-abc-content'>Login</div>
            </div>




        </div>
    );
}

export default Footer;




