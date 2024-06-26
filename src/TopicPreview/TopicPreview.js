// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'

import '../assets/css/TopicPreview.css';


import { useSelector, useDispatch } from 'react-redux';


const TopicPreview = (props) => {
    let date = new Date(props.time);

    const handleClick = () => {
        props.handleClickDiscussion(props.id)

    }

    return (<a className="list-group-item list-group-item-action"
        onClick={() => { handleClick() }}
    >
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.title}</h5>
            <small className="text-muted">{date.toLocaleString()}</small>
        </div>
        <p className="mb-1">{props.author} {props.lastName}</p>
        <small className="text-muted">{props.previewContent}...</small>
    </a>
    );
}

export default TopicPreview;




