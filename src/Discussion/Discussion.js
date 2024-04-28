// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Discussion/Discussion.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';
import TopicPreview from '../TopicPreview/TopicPreview';
import { useSelector, useDispatch } from 'react-redux';
// import InputFeedback from '../InputFeedback/InputFeedback';
// import Feedback from '../Feedback/Feedback';
import Comment from '../Comment/Comment';
import { Buffer } from 'buffer';
const _ = require('lodash');

const Discussion = (props) => {
    // const dispatch = useDispatch()
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


    let [isOpenLike, setIsOpenLike] = useState(false)

    let [id, setid] = useState('')

    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')
    let [avatar, setavatar] = useState('')
    let [postName, setpostName] = useState('')
    let [postContent, setpostContent] = useState('')
    let [like, setlike] = useState('')
    let [isLike, setisLike] = useState('')
    let [comment, setcomment] = useState('')
    let [time, settime] = useState('')
    let [idPosts, setidPosts] = useState('')
    let [Comment1, setComment1] = useState([])




    let [lastNameUser, setlastNameUser] = useState('')
    let [firstNameUser, setfirstNameUser] = useState('')
    let [avatarUser, setavatarUser] = useState('')
    let [emailUser, setemailUser] = useState('')
    let [idUser, setidUser] = useState('')
    let [content, setcontent] = useState('')





    const topics = [
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        }
    ];




    const handleIsOpenLike = async (data) => {
        setisLike(data)



        if (data === true) {
            // setlike(like + 1)
            dispatch(actions.handleEditPosts({
                idPosts: idPosts,
                like: like + 1,
                idUser: idUser,
                isLike: data

            }))

        } else {
            // setlike(like - 1)
            dispatch(actions.handleEditPosts({
                idPosts: idPosts,
                like: like - 1,
                idUser: idUser,
                isLike: data

            }))

        }

        console.log('gia trị isOpenlike', isLike)






    }




    let [postsInfo, setpostsInfo] = useState([])



    let userInfoRedux = useSelector(state => state.admin.userInfo1)
    let postsInfoRedux = useSelector(state => state.admin.postsInfoById)


    let id1 = props.match.params.id
    let abcd = localStorage.getItem('persist:user');
    let id2 = JSON.parse(abcd).userInfo;
    useEffect(async () => {

        setidUser(id2)



        await dispatch(actions.handleGetPostsById({ id: id1 }))

        // await dispatch(actions.handleGetPosts({ id: id }))

        if (postsInfoRedux !== null) {
            setpostsInfo(postsInfoRedux)
            console.log('postsInfo', postsInfo)
            setpostContent(postsInfoRedux[0].postContent)
            setpostName(postsInfoRedux[0].postName)
            setlastName(postsInfoRedux[0].lastName)
            setfirstName(postsInfoRedux[0].firstName)
            setcomment(postsInfoRedux[0].comment)
            setlike(postsInfoRedux[0].like)
            setidPosts(postsInfoRedux[0]._id)
            setisLike(postsInfoRedux[0].isLike)
        }

        if (userInfoRedux !== null) {
            setlastNameUser(userInfoRedux.lastName)
            setfirstNameUser(userInfoRedux.firstName)
            setemailUser(userInfoRedux.email)
            setidUser(id2)
            console.log('Discussion la ', userInfoRedux)

            let imageBase64 = '';

            if (userInfoRedux.image) {

                imageBase64 = new Buffer(userInfoRedux.image, 'base64').toString('binary')

                if (imageBase64) {


                    setavatarUser(imageBase64)

                }
            }
        }






    }, [])



    useEffect(async () => {


        if (postsInfoRedux !== null) {
            setpostsInfo(postsInfoRedux)

            setpostContent(postsInfoRedux[0].postContent)
            setpostName(postsInfoRedux[0].postName)
            setlastName(postsInfoRedux[0].lastName)
            setfirstName(postsInfoRedux[0].firstName)
            setcomment(postsInfoRedux[0].comment)
            setlike(postsInfoRedux[0].like)
            setComment1(postsInfoRedux[0].Comment1)
            setidPosts(postsInfoRedux[0]._id)
            setisLike(postsInfoRedux[0].isLike)



            let imageBase64 = '';

            if (postsInfoRedux[0].avatar) {

                imageBase64 = new Buffer(postsInfoRedux[0].avatar, 'base64').toString('binary')

                if (imageBase64) {


                    setavatar(imageBase64)

                }
            }



        }

        if (userInfoRedux !== null) {
            setlastNameUser(userInfoRedux.lastName)
            setfirstNameUser(userInfoRedux.firstName)
            setemailUser(userInfoRedux.email)
            setidUser(id2)
            console.log('Discussion la ', userInfoRedux)

            let imageBase64 = '';

            if (userInfoRedux.image) {

                imageBase64 = new Buffer(userInfoRedux.image, 'base64').toString('binary')

                if (imageBase64) {


                    setavatarUser(imageBase64)

                }
            }




        }


        console.log('Discussion la ', userInfoRedux)



    }, [userInfoRedux, postsInfoRedux])

    const handleCreateCommentPosts = async () => {
        console.log('da chay')
        await dispatch(actions.handleCreateComment1({
            idPosts: idPosts,
            lastName: lastNameUser,
            firstName: firstNameUser,
            email: emailUser,
            content: content,
            avatar: avatarUser,
            idUser: idUser

        }))

        setcontent('')
    }

    const onChangeInputContent = (event) => {
        let event1 = event.target.value;
        console.log('họ ', event1)

        setcontent(event1)
    }






    return (
        <div className='Discussion'>
            <div className='Discussion-header'>
                <MenuLogged />
            </div>
            {
                !_.isEmpty(postsInfo) ? <div className='Discussion-content'>
                    <div className='Discussion-content-left'>
                        <div className='Discussion-content-left-name'>
                            <div className='Discussion-content-left-name-image'
                                style={{ backgroundImage: `url(${avatar})`, backgroundSize: 'contain' }}
                            ></div>
                            <div className='Discussion-content-left-name-name'>{firstName} {lastName}</div>
                        </div>
                        <div className='Discussion-content-left-content'>
                            <div className='Discussion-content-left-content-title'>

                                {postName}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: postContent }}>

                            </div>
                        </div>
                        <div className='Discussion-content-left-like'>
                            <div className='Discussion-content-left-like-one'>
                                <div
                                    className={isLike && isLike === true ? 'Discussion-content-left-like-one-like like' :
                                        'Discussion-content-left-like-one-like'

                                    }
                                    onClick={() => { handleIsOpenLike(!isLike) }}
                                >
                                    <i class="far fa-thumbs-up"></i>
                                    <span style={{ marginLeft: '5px' }}>like</span>

                                </div>
                                <div className='Discussion-content-left-like-one-comment'>
                                    <i class="far fa-comment"></i>
                                    <span style={{ marginLeft: '5px' }}>comment</span>
                                </div>
                                <div className='Discussion-content-left-like-one-share'>
                                    <i class="far fa-share-square"></i>
                                    <span style={{ marginLeft: '5px' }}>share</span>
                                </div>
                            </div>
                            <div className='Discussion-content-left-like-two'>
                                <span>{like} like</span>
                                <span style={{ marginLeft: '10px' }}>{comment} comment</span>
                            </div>
                        </div>
                        <div className='Discussion-content-left-input'>
                            <input type='text' placeholder='Comment' className='Discussion-content-left-input-input'
                                onChange={(event) => onChangeInputContent(event)}
                                value={content}
                            />
                            <div
                                onClick={() => { handleCreateCommentPosts() }}
                            > <i class="fas fa-paper-plane"></i></div>

                        </div>

                        <div className='Discussion-content-left-comment-comment'>
                            {
                                Comment1 && Comment1.map((item, index) => {
                                    return (
                                        <Comment key={index} lastName={item.lastName} firstName={item.firstName}
                                            content={item.content} like={item.like} comment={item.comment}
                                            avatar={item.avatar} createdAt={item.createdAt}
                                        />
                                    )

                                })
                            }


                        </div>






                    </div>
                    {/* <div className='Discussiion-content-right'>
                        <div className="card">
                            <div className="card-body">
                                Bài viết khác
                            </div>
                        </div>
                        <div className="list-group">
                            {
                                topics.map((topic, index) => (
                                    <TopicPreview key={index} title={topic.title} time={topic.createdAt} author={topic.author} previewContent={topic.previewContent} />
                                ))
                            }
                        </div>

                    </div> */}
                </div> : <Audio
                    heigth="100"
                    width="100"
                    color='grey'
                    ariaLabel='loading'
                />
            }

            <div className='Discussion-footer'>
                <Footer />
            </div>


        </div >
    );
}

export default Discussion;




