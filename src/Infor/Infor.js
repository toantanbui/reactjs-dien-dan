import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CommonUtil from '../CommonUtil/CommonUtil';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Buffer } from 'buffer';
import * as actions from '../store/actions';
import '../assets/css/Infor/Infor.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';
const _ = require('lodash');




const Infor = (props) => {

    const dispatch = useDispatch()
    let [id, setid] = useState('')
    let [mang, setmang] = useState([])



    let userInfoRedux = useSelector(state => state.admin.userInfo1)
    let errEditOneUser = useSelector(state => state.admin.errMessageEditOneUser)


    let id1 = props.match.params.id
    useEffect(async () => {

        setid(id1)
        if (id) {
            dispatch(actions.handleGetOneUser({ id: id }))
        }

        setmang(userInfoRedux)


        console.log('gia trị id', id)


        console.log('componentDidmount-infor', userInfoRedux)
        // setemail(userInfoRedux.email)
        // setfirstName(userInfoRedux.firstName)
        // setavatar(userInfoRedux.image)
        // setlastName(userInfoRedux.lastName)
        // setaddress(userInfoRedux.address)
        // setpassword(userInfoRedux.password)
        // setphoneNumber(userInfoRedux.phoneNumber)


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
            setmang(userInfoRedux)

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


        // console.log('componentDidmount-infor-update', userInfoRedux.email)


    }, [userInfoRedux])


    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')
    let [email, setemail] = useState('')
    let [phoneNumber, setphoneNumber] = useState('')
    let [password, setpassword] = useState('')
    let [address, setaddress] = useState('')
    let [avatar, setavatar] = useState('')
    let [background, setbackground] = useState('')

    let [isOpenpreviewImage, setisOpenpreviewImage] = useState(false)
    let [isOpenpreviewBackground, setisOpenpreviewBackground] = useState(false)









    const onChangeInputLastName = (event) => {
        let event1 = event.target.value;
        console.log('họ ', event1)

        setlastName(event1)
    }

    const onChangeInputFirstName = (event) => {
        let event1 = event.target.value;
        console.log('ten ', event1)

        setfirstName(event1)
    }


    const onChangeInputEmail = (event) => {
        let event1 = event.target.value;
        console.log('email ', event1)

        setemail(event1)
    }

    const onChangeInputPhoneNumber = (event) => {
        let event1 = event.target.value;
        console.log('số điện thoại ', event1)

        setphoneNumber(event1)
    }


    const onChangeInputPassword = (event) => {
        let event1 = event.target.value;
        console.log('password là', event1)
        setpassword(event1)

    }

    const onChangeInputAdress = (event) => {
        let event1 = event.target.value;
        console.log('password là', event1)
        setaddress(event1)

    }

    // const handleSignup1 = () => {

    //     dispatch(actions.handleSignup({
    //         lastName: lastName,
    //         firstName: firstName,
    //         email: email,
    //         phoneNumber: phoneNumber,
    //         password: password,
    //         image: avatar,
    //         background: background
    //     }))
    // }


    let errMessage = useSelector(state => state.admin.errMessage)

    const onChangeInputImage = async (event) => {
        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64 = await CommonUtil.getbase64(file);
            let Url = URL.createObjectURL(file);

            setavatar(base64)
            // this.setState({
            //     UrlImage: Url,
            //     image: base64
            // })
        }

    }
    const onChangeInputbackground = async (event) => {
        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64 = await CommonUtil.getbase64(file);
            let Url = URL.createObjectURL(file);

            setbackground(base64)
            // this.setState({
            //     UrlImage: Url,
            //     image: base64
            // })
        }

    }

    const handleOpenpreviewImage = () => {

        setisOpenpreviewImage(true)
    }

    const handleOpenpreviewBackground = () => {

        setisOpenpreviewBackground(true)
    }


    const handleEditOneUser = () => {
        dispatch(actions.handleEditOneUser({
            id: id,
            lastName: lastName,
            firstName: firstName,
            email: email,
            phonenumber: phoneNumber,
            password: password,
            address: address,
            image: avatar,
            background: background

        }))
    }




    return (
        <div className='Infor'>

            <div className='Infor-header'>
                <MenuLogged />
            </div>
            <div className='Infor-content'>
                <div className='Infor-content-title'>
                    <span >
                        Thông tin cá nhân
                    </span>
                </div>
                <div className='Infor-content-content'>
                    {
                        !_.isEmpty(mang) ?
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Họ</label>
                                        <input type="text" class="form-control" placeholder="Họ"
                                            onChange={(event) => onChangeInputLastName(event)}
                                            value={lastName}
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress2">Tên</label>
                                        <input type="text" class="form-control" placeholder="Tên"
                                            onChange={(event) => onChangeInputFirstName(event)}
                                            value={firstName}
                                        />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" placeholder="Email"
                                        onChange={(event) => onChangeInputEmail(event)}
                                        value={email}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword4">Số điện thoại</label>
                                    <input type="text" class="form-control" placeholder="Số điện thoại"
                                        onChange={(event) => onChangeInputPhoneNumber(event)}
                                        value={phoneNumber}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword4">Mật khẩu</label>
                                    <input type="text" class="form-control" placeholder="Mật khẩu"
                                        onChange={(event) => onChangeInputPassword(event)}
                                        value={password}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword4">Địa chỉ</label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Địa chỉ"
                                        onChange={(event) => onChangeInputAdress(event)}
                                        value={address}
                                    />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Ảnh đại diện</label>
                                        <input type="file"

                                            // value={image}
                                            onChange={(event) => { onChangeInputImage(event) }}

                                        />
                                    </div>
                                    <div style={{
                                        height: '100px', width: '100px', borderStyle: 'solid', borderColor: 'black',
                                        marginLeft: '50px', backgroundImage: `url(${avatar})`, backgroundSize: 'contain',
                                        cursor: 'pointer'
                                    }}

                                        onClick={() => { handleOpenpreviewImage() }}
                                    >

                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Ảnh nền</label>
                                        <input type="file"


                                            // value={image}
                                            onChange={(event) => { onChangeInputbackground(event) }}
                                        />
                                    </div>
                                    <div style={{
                                        height: '100px', width: '100px', borderStyle: 'solid', borderColor: 'black',
                                        marginLeft: '50px', backgroundImage: `url(${background})`, backgroundSize: 'contain',
                                        cursor: 'pointer'
                                    }}

                                        onClick={() => { handleOpenpreviewBackground() }}
                                    >

                                    </div>

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





                            </form> : <Audio
                                heigth="100"
                                width="100"
                                color='grey'
                                ariaLabel='loading'
                            />
                    }

                </div>

                <div className='Infor-content-send'
                    onClick={() => { handleEditOneUser() }}
                >
                    {/* <span style={{ backgroundColor: 'yellow', cursor: 'pointer' }}
                    >update</span> */}
                    <button type="button" className="btn btn-dark mr-3">Update</button>
                    <span style={{ margin: '8px', color: 'red' }}>{errEditOneUser}</span>

                </div>

            </div>
            <div className='Infor-footer'></div>

            <Footer />


        </div>


    );
}

export default Infor;