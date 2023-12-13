// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../css/Home/Home.css'


import { useSelector, useDispatch } from 'react-redux';




const Home = () => {
    const dispatch = useDispatch()
    // let userInfo = useSelector(state => state.user.userInfo)
    // let arrAllStatusRedux = useSelector(state => state.admin.arrAllStatusRedux)

    // let [Todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 7])
    let [arrmessage, setarrmessage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,])
    let [arrAllStatus, setarrAllStatus] = useState([])

    useEffect(async () => {
        // dispatch(actions.getArrStatus({
        //     type: '2'
        // }))
        // setarrAllStatus(arrAllStatusRedux)


    }, [])

    // useEffect(async () => {

    //     setarrAllStatus(arrAllStatusRedux)

    // }, [arrAllStatusRedux])





    return (
        <div className='Home'>
            <div className='Home-header'>


            </div>
            <div className='Home-content'>
                <div className='Home-content-group'> Hi xin chào</div>
                <div className='Home-content-content'>






                </div>
                <div className='Home-content-message'>
                    <div className='Home-content-message-qc'></div>
                    <div className='Home-content-message-message'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;




