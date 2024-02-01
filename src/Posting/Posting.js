// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Posting/Posting.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';
import { Buffer } from 'buffer';


import { useSelector, useDispatch } from 'react-redux';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';




const Posting = (props) => {
    const dispatch = useDispatch()
    let [id, setid] = useState('')

    let [lastName, setlastName] = useState('')
    let [firstName, setfirstName] = useState('')
    let [email, setemail] = useState('')
    let [avatar, setavatar] = useState('')
    let [postName, setpostName] = useState('')
    let [postContent, setpostContent] = useState('')



    let userInfoRedux = useSelector(state => state.admin.userInfo1)


    let id1 = props.match.params.id
    useEffect(async () => {

        setid(id1)
        if (id) {
            dispatch(actions.handleGetOneUser({ id: id }))
        }




        console.log('gia trị id', id)


        console.log('componentDidmount-infor', userInfoRedux)



    }, [])

    useEffect(async () => {


        if (userInfoRedux !== null) {
            setemail(userInfoRedux.email)
            console.log('componentDidmount-Posting-update-email', userInfoRedux)
            setfirstName(userInfoRedux.firstName)
            setlastName(userInfoRedux.lastName)



            let imageBase64 = '';

            if (userInfoRedux.image) {

                imageBase64 = new Buffer(userInfoRedux.image, 'base64').toString('binary')

                if (imageBase64) {


                    setavatar(imageBase64)

                }
            }



        }





    }, [userInfoRedux])





    const onChangeInputPostName = (event) => {
        let event1 = event.target.value;
        console.log('họ ', event1)

        setpostName(event1)
    }



    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
        setpostContent(html)
    }

    const handleCreateOnePosts = () => {
        dispatch(actions.handleCreatePosts({

            lastName: lastName,
            firstName: firstName,
            email: email,
            avatar: avatar,
            postName: postName,
            postContent: postContent



        }))
    }


    return (
        <div className='Posting'>
            <div className='Posting-header'>
                <MenuLogged />
            </div>
            <div className='Posting-content'>
                <div className='Posting-content-header'>
                    <div className='Posting-content-header-title'>

                        <input type='text' placeholder='tên bài viết' style={{ width: '500px' }}
                            onChange={(event) => onChangeInputPostName(event)}
                        />
                    </div>
                    <div className='Posting-content-header-author'>
                        <input type='text' placeholder='Tên tác giả' style={{ width: '500px' }} />
                    </div>
                </div>
                <div className='Posting-content-markdown'>
                    <MdEditor style={{ height: '100%', width: '100%' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />

                </div>
                <div className='Posting-content-button'>
                    <div className='Posting-content-button-button'>
                        <button type="button" class="btn btn-warning"
                            onClick={() => { handleCreateOnePosts() }}
                        >Đăng bài</button>
                    </div>

                </div>



            </div>
            <div className='Posting-footer'>
                <Footer />
            </div>


        </div>
    );
}

export default Posting;




