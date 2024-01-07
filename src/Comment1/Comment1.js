// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
// import '../assets/css/InputFeedback/InputFeedback.css';
import '../assets/css/Comment/Comment.css';
import InputFeedback from '../InputFeedback/InputFeedback';

import { useSelector, useDispatch } from 'react-redux';






const Comment1 = (props) => {
    const dispatch = useDispatch()

    let [isOpenFeedback, setIsOpenFeedback] = useState(false)

    const handleIsOpenFeedback = () => {
        setIsOpenFeedback(!isOpenFeedback)
    }



    return (
        <div className='Comment-content-left-comment'>
            <div className='Comment-content-left-comment-image'></div>
            <div className='Comment-content-left-comment-infor'>
                <div className='Comment-content-left-comment-infor-1'>
                    <div className='Comment-content-left-comment-infor-1-name'>phan hoi</div>
                    <div className='Comment-content-left-comment-infor-1-time'>2 năm</div>
                </div>
                <div className='Comment-content-left-comment-infor-2'>
                    comment

                </div>
                <div className='Comment-content-left-comment-infor-3'>
                    <div className='Comment-content-left-comment-infor-3-like'>
                        <i className="far fa-thumbs-up"></i>
                        <span style={{ marginLeft: '5px' }}>1</span>
                    </div>
                    <div className='Comment-content-left-comment-infor-3-dislike'>
                        <i className="far fa-thumbs-down"></i>
                        <span style={{ marginLeft: '5px' }}>2</span>
                    </div>


                    <div className='Comment-content-left-comment-infor-3-feedback'
                        onClick={() => { handleIsOpenFeedback() }}
                    >Phản hồi</div>
                </div>
                <div className='Comment-content-left-comment-infor-input'>
                    {isOpenFeedback && isOpenFeedback === true ? <InputFeedback

                    /> : ''}

                </div>
                <div className='Comment-content-left-comment-infor-4'>
                    <div className='Comment-content-left-comment-infor-4-feedback'

                    >
                        <i class="fas fa-caret-down"></i>
                        <span>1 phản hồi</span>
                    </div>
                </div>
                <div className='Comment-content-left-comment-infor-5'>

                </div>
            </div>


        </div>


    );
}

export default Comment1;




