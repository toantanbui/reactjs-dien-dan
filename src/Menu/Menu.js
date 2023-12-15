// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../css/Menu/Menu.css';




import { useSelector, useDispatch } from 'react-redux';




const Menu = () => {

    return (
        <div className='Menu'>
            <div className='Menu-top'>
                <div className='Menu-top-icon'></div>
                <div className='Menu-top-search'></div>

            </div>
            <div className='Menu-bottom'>
                <div className='Menu-bottom-option'>

                    <button type="button" class="btn btn-light">Diễn đàn</button>
                    <button type="button" class="btn btn-light">Đăng bài</button>
                    <button type="button" class="btn btn-light">Story</button>
                </div>
                <div className='Menu-bottom-dkdn'>
                    <button type="button" class="btn btn-light">Đăng nhập</button>
                    <button type="button" class="btn btn-light">Đăng kí</button>

                </div>
            </div>




        </div>
    );
}

export default Menu;




