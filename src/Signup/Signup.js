import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import * as actions from '../store/actions';




const Signup = (props) => {

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
            <ModalHeader toggle={() => { props.toggle() }} >Đăng kí</ModalHeader>
            <ModalBody >

                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputAddress">Họ</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Họ" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputAddress2">Tên</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Tên" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4">Số điện thoại</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Số điện thoại" />
                    </div>
                    <div class="form-group">
                        <label for="inputPassword4">Mật khẩu</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Mật khẩu" />
                    </div>



                </form>




            </ModalBody>
            <ModalFooter>
                <Button color="primary"
                    className="px-3"
                >Đăng kí</Button>{' '}
                <Button color="secodaray" className="px-3"
                    onClick={() => { props.toggle() }}>Cancel</Button>
                <div style={{ color: 'red', fontWeight: '600' }}
                ></div>
            </ModalFooter>
        </Modal>
    );
}

export default Signup;