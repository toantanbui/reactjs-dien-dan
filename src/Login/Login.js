import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import * as actions from '../store/actions';




const Login = (props) => {

    const dispatch = useDispatch()

    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')

    const onChangeInputEmail = (event) => {
        let event1 = event.target.value;
        console.log('event1 là', event1)

        setemail(event1)
    }
    const onChangeInputPasword = (event) => {
        let event1 = event.target.value;
        console.log('password là', event1)
        setpassword(event1)

    }

    const handleLogin1 = () => {

        dispatch(actions.handleLogin({
            email: email,
            password: password
        }))

        setemail('')
        setpassword('')
    }

    let errMessage = useSelector(state => state.user.errMessage)












    return (
        <Modal isOpen={props.isOpen}// tắt mở ModalUser
            toggle={() => { props.toggle() }}
            className={'modal-user-container'}
            size="lg"
        >
            <ModalHeader toggle={() => { props.toggle() }} >Đăng nhập</ModalHeader>
            <ModalBody >

                <form>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Email</label>
                        <input type="text" className="form-control" placeholder="Email"
                            onChange={(event) => onChangeInputEmail(event)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Mật khẩu</label>
                        <input type="text" className="form-control" id="inputPassword" placeholder="Mật khẩu"
                            onChange={(event) => onChangeInputPasword(event)}
                        />
                    </div>



                </form>




            </ModalBody>
            <ModalFooter>
                <Button color="primary"
                    className="px-3"
                    onClick={() => handleLogin1()}
                >Đăng nhập</Button>
                <Button color="secodaray" className="px-3"
                    onClick={() => { props.toggle() }}>Cancel</Button>
                <div style={{ color: 'red', fontWeight: '600' }}
                >{errMessage}</div>
            </ModalFooter>
        </Modal>
    );
}

export default Login;