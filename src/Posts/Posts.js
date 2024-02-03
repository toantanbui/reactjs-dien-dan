// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Posts/Posts.css';
import Comment from '../Comment/Comment';
import { Buffer } from 'buffer';



import { useSelector, useDispatch } from 'react-redux';





const Posts = (props) => {
    const dispatch = useDispatch()
    let [abc, setAbc] = useState([
        { name: 'Nguyen Van A', comment: 'Dùng trà xanh để trị răng ê buốt khi uống nước lạnh Cách khắc phục Dùng trà xanh để trị răng ê buốt khi uống nước lạnh Cách khắc phục tình trạng răng bị ê buốt khi uống nước lạnh tại nhà' },
        { name: 'Nguyen Van B', comment: 'Bài viết hay' },
        { name: 'Nguyen Van C', comment: 'Bài viết cũng không hay lắm' },
        { name: 'Nguyen Van D', comment: 'Bài viết dở tệ' },
        { name: 'Nguyen Van E', comment: 'Bài viết tạm ổn' },
        { name: 'Nguyen Van nguyên văn nguyen ', comment: 'Bài viết này...' },
        { name: 'Nguyen Van C', comment: 'xin chao' },
        { name: 'Nguyen Van D', comment: 'xin chao' },
        { name: 'Nguyen Van E', comment: 'xin chao' },
        { name: 'Nguyen Van F', comment: 'xin chao' }
    ])

    let [comment1, setcomment1] = useState([])
    useEffect(async () => {

        setlastName(props.lastName)
        setfirstName(props.firstName)
        setemail(props.email)
        setidPosts(props.idPosts)
        setcomment1(props.Comment1)
        setidUser(props.idUser)


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
        setidPosts(props.idPosts)
        setcomment1(props.Comment1)
        setidUser(props.idUser)

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
    let [idPosts, setidPosts] = useState('')
    let [content, setcontent] = useState('')
    let [idUser, setidUser] = useState('')

    const onChangeInputContent = (event) => {
        let event1 = event.target.value;
        console.log('họ ', event1)

        setcontent(event1)
    }




    let [isOpenLike, setIsOpenLike] = useState(false)
    let [isOpenComment, setIsOpenComment] = useState(false)

    const handleIsOpenLike = () => {
        setIsOpenLike(!isOpenLike)
    }
    const handleIsOpenComment = () => {
        setIsOpenComment(!isOpenComment)
    }

    const handleCreateCommentPosts = async () => {
        console.log('da chay')
        await props.handleCreateComment1({
            idPosts: idPosts,
            lastName: lastName,
            firstName: firstName,
            email: email,
            content: content,
            avatar: avatar,
            idUser: idUser


        })

        setcontent('')
    }





    return (
        <div className='Posts'>

            <div className='Posts-content-left'>
                <div className='Posts-content-left-name'>
                    <div className='Posts-content-left-name-image'
                        style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'contain' }}
                    ></div>
                    <div className='Posts-content-left-name-name'>{props.lastName} {props.firstName}</div>
                </div>
                <div className='Posts-content-left-content'

                >
                    <div className='Posts-content-left-content-title'>

                        {props.postName}
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: props.postContent }}>

                    </div>

                </div>
                <div className='Posts-content-left-like'>
                    <div className='Posts-content-left-like-one'>
                        <div
                            className={isOpenLike && isOpenLike === true ? 'Posts-content-left-like-one-like like' :
                                'Posts-content-left-like-one-like'

                            }
                            onClick={() => { handleIsOpenLike() }}
                        >
                            <i class="far fa-thumbs-up"></i>
                            <span style={{ marginLeft: '5px' }}>like</span>

                        </div>
                        <div className='Posts-content-left-like-one-comment'
                            onClick={() => { handleIsOpenComment() }}
                        >
                            <i class="far fa-comment"></i>
                            <span style={{ marginLeft: '5px' }}>comment</span>
                        </div>
                        <div className='Posts-content-left-like-one-share'>
                            <i class="far fa-share-square"></i>
                            <span style={{ marginLeft: '5px' }}>share</span>
                        </div>
                    </div>
                    <div className='Posts-content-left-like-two'>
                        <span>{props.like} like</span>
                        <span style={{ marginLeft: '10px' }}>{props.comment} comment</span>
                    </div>
                </div>
                <div className='Posts-content-left-input'>
                    <input type='text' placeholder='Comment' className='Posts-content-left-input-input'
                        onChange={(event) => onChangeInputContent(event)}
                        value={content}

                    />
                    <div
                        onClick={() => { handleCreateCommentPosts() }}
                    >
                        <i class="fas fa-paper-plane"></i>
                    </div>


                </div>

                <div className='Posts-content-left-comment-comment'>
                    {
                        isOpenComment && isOpenComment === true ?
                            comment1.length > 0 && comment1.map((item, index) => {
                                return (

                                    <Comment key={index} lastName={item.lastName} firstName={item.firstName}
                                        content={item.content} like={item.like} comment={item.comment}
                                        avatar={item.avatar} createdAt={item.createdAt}
                                    />
                                )

                            })
                            : 'Nhấn comment để xem bình luận'
                    }


                </div>






            </div>
        </div>
    );
}

export default Posts;




