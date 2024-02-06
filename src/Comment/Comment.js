// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
// import '../assets/css/InputFeedback/InputFeedback.css';
import '../assets/css/Comment/Comment.css';
import InputFeedback from '../InputFeedback/InputFeedback';
import Comment1 from '../Comment1/Comment1';
import { Buffer } from 'buffer';

import { useSelector, useDispatch } from 'react-redux';






const Comment = (props) => {
    const dispatch = useDispatch()

    let [isOpenFeedback, setIsOpenFeedback] = useState(false)
    let [isOpenComment1, setIsOpenComment1] = useState(false)

    const handleIsOpenFeedback = () => {
        setIsOpenFeedback(!isOpenFeedback)
    }
    const handleIsOpenComment1 = () => {
        setIsOpenComment1(!isOpenComment1)
    }



    useEffect(async () => {

        setlastName(props.lastName)
        setfirstName(props.firstName)
        setemail(props.email)



        let imageBase64 = '';

        if (props.avatar) {

            imageBase64 = new Buffer(props.avatar, 'base64').toString('binary')

            if (imageBase64) {


                setavatar(imageBase64)

            }
        }

        // console.log('componentDidmount-infor-update', userInfoRedux.email

    }, [])

    useEffect(async () => {

        setlastName(props.lastName)
        setfirstName(props.firstName)
        setemail(props.email)


        let imageBase64 = '';

        if (props.avatar) {

            imageBase64 = new Buffer(props.avatar, 'base64').toString('binary')

            if (imageBase64) {


                setavatar(imageBase64)

            }
        }

        // console.log('componentDidmount-infor-update', userInfoRedux.email

    }, [props.avatar])

    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')
    let [email, setemail] = useState('')
    let [avatar, setavatar] = useState('')

    let [content, setcontent] = useState('')





    return (
        <div className='Comment-content-left-comment'>
            <div className='Comment-content-left-comment-image'
                style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'contain' }}
            ></div>
            <div className='Comment-content-left-comment-infor'>
                <div className='Comment-content-left-comment-infor-1'>
                    <div className='Comment-content-left-comment-infor-1-name'>{props.lastName} {props.firstName}</div>
                    <div className='Comment-content-left-comment-infor-1-time'>{props.createdAt}</div>
                </div>
                <div className='Comment-content-left-comment-infor-2'>
                    {props.content}

                </div>
                <div className='Comment-content-left-comment-infor-3'>
                    <div className='Comment-content-left-comment-infor-3-like'>
                        <i className="far fa-thumbs-up"></i>
                        <span style={{ marginLeft: '5px' }}>{props.like}</span>
                    </div>
                    <div className='Comment-content-left-comment-infor-3-dislike'>
                        <i className="far fa-thumbs-down"></i>
                        <span style={{ marginLeft: '5px' }}>{props.Comment}</span>
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
                        onClick={() => { handleIsOpenComment1() }}
                    >
                        <i class="fas fa-caret-down"></i>
                        <span>{props.Comment} phản hồi</span>
                    </div>
                </div>
                <div className='Comment-content-left-comment-infor-5'>
                    {isOpenComment1 && isOpenComment1 === true ? <Comment1

                    /> : ''}

                </div>
            </div>


        </div>


    );
}

export default Comment;




