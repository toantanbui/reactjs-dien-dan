// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Posting/Posting.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';


import { useSelector, useDispatch } from 'react-redux';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';




const Posting = () => {
    const dispatch = useDispatch()

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    }

    return (
        <div className='Posting'>
            <div className='Posting-header'>
                <MenuLogged />
            </div>
            <div className='Posting-content'>
                <div className='Posting-content-markdown'>
                    <MdEditor style={{ height: '100%', width: '100%' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />

                </div>
                <div className='Posting-content-button'>
                    <div className='Posting-content-button-button'>
                        <button type="button" class="btn btn-warning">Đăng bài</button>
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




