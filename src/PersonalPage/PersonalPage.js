// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/PersonalPage/PersonalPage.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';
import Posts from '../Posts/Posts';
import Infor from '../Infor/Infor';
import { useHistory } from 'react-router-dom';
import { Buffer } from 'buffer';

import { useSelector, useDispatch } from 'react-redux';


import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';






const PersonalPage = (props) => {
    const dispatch = useDispatch()

    let [id, setid] = useState('')
    let [postsInfo, setpostsInfo] = useState([])



    let userInfoRedux = useSelector(state => state.admin.userInfo1)
    let postsInfoRedux = useSelector(state => state.admin.postsInfo)


    let id1 = props.match.params.id
    useEffect(async () => {

        setid(id1)

        if (id) {

            await dispatch(actions.handleGetOneUser({ id: id }))

            // await dispatch(actions.handleGetPosts({ id: id }))
        }
        if (postsInfoRedux !== null) {
            setpostsInfo(postsInfoRedux)
            console.log('postsInfoRedux', postsInfoRedux)
        }




        console.log('gia trị id', id)


        console.log('componentDidmount-infor', userInfoRedux)



    }, [])



    useEffect(async () => {


        if (userInfoRedux !== null) {
            setemail(userInfoRedux.email)
            console.log('componentDidmount-infor-update-email', userInfoRedux)
            setfirstName(userInfoRedux.firstName)

            setlastName(userInfoRedux.lastName)
            setaddress(userInfoRedux.address)
            setpassword(userInfoRedux.password)
            setphoneNumber(userInfoRedux.phonenumber)

            let imageBase64 = '';

            if (userInfoRedux.image) {

                imageBase64 = new Buffer(userInfoRedux.image, 'base64').toString('binary')

                if (imageBase64) {


                    setavatar(imageBase64)

                }
            }


            let imageBase641 = '';

            if (userInfoRedux.background) {

                imageBase641 = new Buffer(userInfoRedux.background, 'base64').toString('binary')

                if (imageBase641) {


                    setbackground(imageBase641)

                }
            }
        }

        if (postsInfoRedux !== null) {
            setpostsInfo(postsInfoRedux)
            console.log('postsInfoRedux', postsInfoRedux)
        }



    }, [userInfoRedux, postsInfoRedux])


    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')
    let [email, setemail] = useState('')
    let [phoneNumber, setphoneNumber] = useState('')
    let [password, setpassword] = useState('')
    let [address, setaddress] = useState('')
    let [avatar, setavatar] = useState('')
    let [background, setbackground] = useState('')

    let [postName, setpostName] = useState('')
    let [postContent, setpostContent] = useState('')







    let [isOpenpreviewImage, setisOpenpreviewImage] = useState(false)
    let [isOpenpreviewBackground, setisOpenpreviewBackground] = useState(false)


    const handleOpenpreviewImage = () => {

        setisOpenpreviewImage(true)
    }

    const handleOpenpreviewBackground = () => {

        setisOpenpreviewBackground(true)
    }
    const handleCreateComment11 = (data) => {
        console.log('đa chay')
        dispatch(actions.handleCreateComment1(data))

    }

    const handleEditPostsLike = (data) => {
        console.log('đa chay')
        dispatch(actions.handleEditPosts(data))

    }








    let [isOpenInfor, setisOpenInfor] = useState(false)
    const history = useHistory();

    const handleClickOneUserInfor = () => {
        history.push(`/infor/${props.match.params.id}`);
    }



    const handleToggle = () => {
        setisOpenInfor(false)
    }



    return (
        <div className='PersonalPage'>
            {console.log('personalPage', props.match.params.id)}

            <div className='PersonalPage-header'>
                <MenuLogged />
            </div>
            <div className='PersonalPage-content'>
                <div className='PersonalPage-content-header' style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover', cursor: 'pointer'
                }}
                    onClick={() => { handleOpenpreviewBackground() }}
                >
                    <div className='PersonalPage-content-header-left'>
                        <div className='PersonalPage-content-header-left-image'
                            style={{
                                backgroundImage: `url(${avatar})`,
                                backgroundSize: 'cover', cursor: 'pointer'
                            }}

                            onClick={() => { handleOpenpreviewImage() }}
                        ></div>
                        <div className='PersonalPage-content-header-left-name'
                            style={{ color: 'white' }}
                        >
                            <div className='PersonalPage-content-header-left-name-name'>{firstName} {lastName}</div>
                        </div>
                    </div>
                    <div className='PersonalPage-content-header-right'>Nhắn tin</div>
                </div>
                <div className='PersonalPage-content-menu'>
                    <button type="button" className="btn btn-dark mr-3"
                        onClick={() => { handleClickOneUserInfor() }}

                    >Chỉnh sửa thông tin</button>

                </div>
                <div className='PersonalPage-content-content'>
                    <div className='PersonalPage-content-content-left'></div>
                    <div className='PersonalPage-content-content-right'>
                        {
                            postsInfo && postsInfo.length > 0 && postsInfo.map((item, index) => {
                                return (
                                    <Posts key={index} firstName={item.firstName} lastName={item.lastName}
                                        like={item.like} comment={item.comment}
                                        avatar={item.avatar} postContent={item.postContent}
                                        postName={item.postName} time={item.time} idPosts={item._id}
                                        Comment1={item.Comment1} idUser={item.idUser} isLike={item.isLike}
                                        handleCreateComment1={handleCreateComment11}
                                        handleEditPostsLike={handleEditPostsLike}

                                    />
                                )

                            })
                        }


                    </div>
                </div>
            </div>
            <div className='PersonalPage-footer'>
                <Footer />
            </div>
            {isOpenpreviewImage === true &&
                <Lightbox
                    mainSrc={avatar}
                    onCloseRequest={() => setisOpenpreviewImage(false)} />
            }
            {isOpenpreviewBackground === true &&
                <Lightbox
                    mainSrc={background}
                    onCloseRequest={() => setisOpenpreviewBackground(false)} />
            }

        </div>
    );
}

export default PersonalPage;




