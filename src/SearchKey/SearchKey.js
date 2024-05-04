// import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/SearchKey/SearchKey.css';
import Footer from '../Footer/Footer';





import { useSelector, useDispatch } from 'react-redux';
import Menu from '../Menu/Menu';
import MenuLogged from '../MenuLogged/MenuLogged';

import { useHistory } from 'react-router-dom';
import TopicPreview from '../TopicPreview/TopicPreview';

const _ = require('lodash');






const SearchKey = () => {


    const dispatch = useDispatch()
    const history = useHistory();
    let [key, setkey] = useState(null)
    let [isLoading, setisLoading] = useState(false)
    let [isLoggedIn, setisLoggedIn] = useState(false)

    let dataSearchKeyRedux = useSelector(state => state.admin.dataSearchKey)
    let isLoggedInRedux = useSelector(state => state.user.isLoggedIn)




    useEffect(async () => {

        // if (dataSearchKeyRedux !== null) {
        //     setkey(dataSearchKeyRedux)
        // }
        setkey(dataSearchKeyRedux)
        setisLoggedIn(isLoggedInRedux)


    }, [dataSearchKeyRedux])





    let [isClick, setisClick] = useState(false)





    const movie = [
        {
            name: 'Thạch Cảm Đan',
            time: 'tập 3',
            en: 'Thuyết minh'
        },
        {
            name: 'An Hùng Xạ Điêu',
            time: 'tập 4',
            en: 'Thuyết minh'
        },
        {
            name: 'Tam Quốc Diễn Nghĩa',
            time: 'tập 5',
            en: 'Thuyết minh'
        },
        {
            name: 'Thạch Cảm Đan',
            time: 'tập 3',
            en: 'Thuyết minh'
        },
        {
            name: 'An Hùng Xạ Điêu',
            time: 'tập 4',
            en: 'Thuyết minh'
        },
        {
            name: 'Tam Quốc Diễn Nghĩa',
            time: 'tập 5',
            en: 'Thuyết minh'
        },
        {
            name: 'Thạch Cảm Đan',
            time: 'tập 3',
            en: 'Thuyết minh'
        },
        {
            name: 'An Hùng Xạ Điêu',
            time: 'tập 4',
            en: 'Thuyết minh'
        },
        {
            name: 'Tam Quốc Diễn Nghĩa',
            time: 'tập 5',
            en: 'Thuyết minh'
        },

    ]


    const handlePageClick = (event) => {
        console.log('event', event.selected)
    }




    const handleClickDiscussion = (data) => {

        history.push(`/discussion/${data}`);
    }



    return (
        <div className='SearchKey'>
            {console.log('gia tri key', key)}
            <div className='SearchKey-header'>
                {isLoggedIn && isLoggedIn === true ?

                    <MenuLogged /> : <Menu />}

            </div>


            <div className='SearchKey-content'>

                <div className='SearchKey-content-top'>
                    <span className='SearchKey-content-top-title'>
                        Có {!_.isEmpty(key) === true ? key && key.length : '0'} kết quả tìm kiếm
                    </span>
                </div>
                <div className='SearchKey-content-bottom'>
                    {
                        key && key.map((topic, index) => (

                            <TopicPreview key={index} title={topic.postName} time={topic.time} author={topic.firstName} id={topic._id}
                                handleClickDiscussion={handleClickDiscussion}
                            />
                        ))
                    }
                </div>


            </div>
            <div className='SearchKey-footer'>
                <Footer />
            </div>

        </div >
    );
}

export default SearchKey;