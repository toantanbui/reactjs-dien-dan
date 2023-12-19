// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Footer.css';




import { useSelector, useDispatch } from 'react-redux';




const Footer = () => {

    return (<>
        <div className='Footer'>
            <div className='Footer-abc'>
                <div className='Footer-abc-title'>Về chúng tôi</div>
                <a className='Footer-abc-content'>Tony Forum</a>
            </div>
            <div className='Footer-abc'>
                <div className='Footer-abc-title'>Điều hướng nhanh</div>
                <a className='Footer-abc-content'>Bài viết mới</a>
            </div>
            <div className='Footer-abc'>
                <div className='Footer-abc-title'>Đóng góp</div>
                <a className='Footer-abc-content'>Phản hồi</a>
            </div>
        </div>
        <div className='Footer-copyright'>
            <p>Copyright © 2024</p>
        </div>
    </>
    );
}

export default Footer;




