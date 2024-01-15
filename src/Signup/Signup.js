import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import * as actions from '../store/actions';




const Signup = (props) => {

    const dispatch = useDispatch()

    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')
    let [email, setemail] = useState('')
    let [phoneNumber, setphoneNumber] = useState('')
    let [password, setpassword] = useState('')

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

    const handleSignup1 = () => {

        dispatch(actions.handleSignup({
            lastName: lastName,
            firstName: firstName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }))
    }


    let errMessage = useSelector(state => state.admin.errMessage)






    return (
        <Modal isOpen={props.isOpen}// tắt mở ModalUser
            toggle={() => { props.toggle() }}
            className={'modal-user-container'}
            size="lg"
        >
            <ModalHeader toggle={() => { props.toggle() }} >Đăng kí</ModalHeader>
            <ModalBody >

                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress">Họ</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Họ"
                                onChange={(event) => onChangeInputLastName(event)}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Tên</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Tên"
                                onChange={(event) => onChangeInputFirstName(event)}
                            />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
                            onChange={(event) => onChangeInputEmail(event)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4">Số điện thoại</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Số điện thoại"
                            onChange={(event) => onChangeInputPhoneNumber(event)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4">Mật khẩu</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Mật khẩu"
                            onChange={(event) => onChangeInputPassword(event)}
                        />
                    </div>



                </form>




            </ModalBody>
            <ModalFooter>
                <Button color="primary"
                    className="px-3"
                    onClick={() => handleSignup1()}
                >Đăng kí</Button>{' '}
                <Button color="secodaray" className="px-3"
                    onClick={() => { props.toggle() }}>Cancel</Button>
                <div style={{ color: 'red', fontWeight: '600' }}
                >{errMessage}</div>
            </ModalFooter>
        </Modal>
    );
}

export default Signup;