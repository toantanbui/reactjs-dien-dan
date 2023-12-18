import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import * as actions from '../store/actions';




const Login = (props) => {

    let [status, setstatus] = useState('')
    let [statusImage, setstatusImage] = useState('')
    let [id, setid] = useState('')
    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')













    return (
        <Modal isOpen={props.isOpen}// tắt mở ModalUser
            toggle={() => { props.toggle() }}
            className={'modal-user-container'}
            size="lg"
        >
            <ModalHeader toggle={() => { props.toggle() }} >Đăng nhập</ModalHeader>
            <ModalBody >

                <form>

                    <div class="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Email"

                        />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Mật khẩu</label>
                        <input type="text" class="form-control" id="inputPassword" placeholder="Mật khẩu"

                        />
                    </div>



                </form>




            </ModalBody>
            <ModalFooter>
                <Button color="primary"
                    className="px-3"
                >Đăng nhập</Button>{' '}
                <Button color="secodaray" className="px-3"
                    onClick={() => { props.toggle() }}>Cancel</Button>
                <div style={{ color: 'red', fontWeight: '600' }}
                ></div>
            </ModalFooter>
        </Modal>
    );
}

export default Login;