// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../css/Home/Home.css';
import Menu from '../Menu/Menu';


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
                <Menu />
            </div>
            <div className='Home-content'>
                <div className='Home-content-up'>
                    <div className='Home-content-up-new'></div>
                    <div className='Home-content-up-like'></div>
                </div>
                <div className='Home-content-down'></div>
            </div>
            <div className='Home-footer'></div>

        </div>
    );
}

export default Home;




