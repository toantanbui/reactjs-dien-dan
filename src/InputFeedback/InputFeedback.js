// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/InputFeedback/InputFeedback.css';

import { useSelector, useDispatch } from 'react-redux';






const InputFeedback = (props) => {
    const dispatch = useDispatch()
    const handleCancel1 = () => {
        props.handleCancel();
    }


    return (
        <div className='InputFeedback'>


            <input type='text' placeholder='phản hồi' style={{ marginBottom: '10px' }} />
            <div className='button'>
                <div className='button-cancel'
                    onClick={() => { handleCancel1() }}
                >Hủy</div>
                <div className='button-feeback'>Phản hồi</div>
            </div>


        </div>
    );
}

export default InputFeedback;




