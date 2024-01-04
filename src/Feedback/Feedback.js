// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/InputFeedback/InputFeedback.css';

import { useSelector, useDispatch } from 'react-redux';






const Feedback = (props) => {
    const dispatch = useDispatch()

    const handleCancel1 = () => {
        props.handleCancel();

    }



    return (


        <div className='Discussion-content-left-comment'>
            <div className='Discussion-content-left-comment-image'></div>
            <div className='Discussion-content-left-comment-infor'>
                <div className='Discussion-content-left-comment-infor-1'>
                    <div className='Discussion-content-left-comment-infor-1-name'>Nguyễn Văn A</div>
                    <div className='Discussion-content-left-comment-infor-1-time'>2 năm</div>
                </div>
                <div className='Discussion-content-left-comment-infor-2'>
                    Dùng trà xanh để trị răng ê buốt khi uống nước lạnh
                    Theo nhiều nghiên cứu, trong lá trà xanh chứa nhiều chất tốt cho sức khỏe răng miệng như catechin, axit tannic, florua,… Những chất này đều có tác dụng hỗ trợ hình thành lớp protein cứng. Axit tannic có trong trà cũng giúp ngăn ngừa tình trạng hòa tan canxi, giúp răng chắc khỏe hơn.
                    Do biến chứng sau điều trị nha khoa
                    Một số kỹ thuật điều trị nha khoa cần tác động đến răng miệng.
                </div>
                <div className='Discussion-content-left-comment-infor-3'>
                    <div className='Discussion-content-left-comment-infor-3-like'>
                        <i className="far fa-thumbs-up"></i>
                        <span style={{ marginLeft: '5px' }}>1</span>
                    </div>
                    <div className='Discussion-content-left-comment-infor-3-dislike'>
                        <i className="far fa-thumbs-down"></i>
                        <span style={{ marginLeft: '5px' }}>2</span>
                    </div>


                    <div className='Discussion-content-left-comment-infor-3-feedback'
                        onClick={() => { handleCancel1() }}
                    >Phản hồi</div>
                </div>
                <div className='Discussion-content-left-comment-infor-input'>
                    {/* {isOpenFeedback && isOpenFeedback === true ? <InputFeedback
                        handleCancle={handleIsOpenFeedback}
                    /> : ''} */}
                </div>
                {/* <div className='Discussion-content-left-comment-infor-4'>
                    <div className='Discussion-content-left-comment-infor-4-feedback'>
                        <i class="fas fa-caret-down"></i>
                        <span>1 phản hồi</span>
                    </div>
                </div> */}
                <div className='Discussion-content-left-comment-infor-5'>

                </div>
            </div>






        </div>
    );
}

export default Feedback;




