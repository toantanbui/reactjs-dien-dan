// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Posts/Posts.css';
import Comment from '../Comment/Comment';



import { useSelector, useDispatch } from 'react-redux';





const Posts = () => {
    const dispatch = useDispatch()
    let [abc, setAbc] = useState([
        { name: 'Nguyen Van A', comment: 'Dùng trà xanh để trị răng ê buốt khi uống nước lạnh Cách khắc phục Dùng trà xanh để trị răng ê buốt khi uống nước lạnh Cách khắc phục tình trạng răng bị ê buốt khi uống nước lạnh tại nhà' },
        { name: 'Nguyen Van B', comment: 'Bài viết hay' },
        { name: 'Nguyen Van C', comment: 'Bài viết cũng không hay lắm' },
        { name: 'Nguyen Van D', comment: 'Bài viết dở tệ' },
        { name: 'Nguyen Van E', comment: 'Bài viết tạm ổn' },
        { name: 'Nguyen Van nguyên văn nguyen ', comment: 'Bài viết này...' },
        { name: 'Nguyen Van C', comment: 'xin chao' },
        { name: 'Nguyen Van D', comment: 'xin chao' },
        { name: 'Nguyen Van E', comment: 'xin chao' },
        { name: 'Nguyen Van F', comment: 'xin chao' }
    ])


    let [isOpenLike, setIsOpenLike] = useState(false)
    let [isOpenComment, setIsOpenComment] = useState(false)

    const handleIsOpenLike = () => {
        setIsOpenLike(!isOpenLike)
    }
    const handleIsOpenComment = () => {
        setIsOpenComment(!isOpenComment)
    }



    return (
        <div className='Posts'>

            <div className='Posts-content-left'>
                <div className='Posts-content-left-name'>
                    <div className='Posts-content-left-name-image'></div>
                    <div className='Posts-content-left-name-name'>Nguyễn Văn A</div>
                </div>
                <div className='Posts-content-left-content'>
                    Do biến chứng sau điều trị nha khoa
                    Một số kỹ thuật điều trị nha khoa cần tác động đến răng miệng. Nếu bác sĩ không thực hiện đúng quy trình, cũng như không đảm bảo các yếu tố an toàn sẽ gây ảnh hưởng đến răng và các mô mềm bên trong khoang miệng. Điển hình như men răng bị bào mòn, lộ ngà răng. Điều đó không chỉ khiến răng nhạy cảm hơn mà còn làm sức khỏe răng miệng bị suy giảm nghiêm trọng. Đây cũng là một trong những nguyên nhân khiến răng bị ê buốt khi uống nước, ăn đồ lạnh.

                    Cách khắc phục tình trạng răng bị ê buốt khi uống nước lạnh tại nhà
                    Tình trạng răng bị ê buốt khi uống nước lạnh xảy ra khá phổ biến. Dưới đây là một số phương pháp khắc phục tình trạng này ngay tại nhà mà bạn có thể tham khảo:

                    Dùng trà xanh để trị răng ê buốt khi uống nước lạnh
                    Theo nhiều nghiên cứu, trong lá trà xanh chứa nhiều chất tốt cho sức khỏe răng miệng như catechin, axit tannic, florua,… Những chất này đều có tác dụng hỗ trợ hình thành lớp protein cứng. Axit tannic có trong trà cũng giúp ngăn ngừa tình trạng hòa tan canxi, giúp răng chắc khỏe hơn.
                    Do biến chứng sau điều trị nha khoa
                    Một số kỹ thuật điều trị nha khoa cần tác động đến răng miệng. Nếu bác sĩ không thực hiện đúng quy trình, cũng như không đảm bảo các yếu tố an toàn sẽ gây ảnh hưởng đến răng và các mô mềm bên trong khoang miệng. Điển hình như men răng bị bào mòn, lộ ngà răng. Điều đó không chỉ khiến răng nhạy cảm hơn mà còn làm sức khỏe răng miệng bị suy giảm nghiêm trọng. Đây cũng là một trong những nguyên nhân khiến răng bị ê buốt khi uống nước, ăn đồ lạnh.

                    Cách khắc phục tình trạng răng bị ê buốt khi uống nước lạnh tại nhà
                    Tình trạng răng bị ê buốt khi uống nước lạnh xảy ra khá phổ biến. Dưới đây là một số phương pháp khắc phục tình trạng này ngay tại nhà mà bạn có thể tham khảo:

                    Dùng trà xanh để trị răng ê buốt khi uống nước lạnh
                    Theo nhiều nghiên cứu, trong lá trà xanh chứa nhiều chất tốt cho sức khỏe răng miệng như catechin, axit tannic, florua,… Những chất này đều có tác dụng hỗ trợ hình thành lớp protein cứng. Axit tannic có trong trà cũng giúp ngăn ngừa tình trạng hòa tan canxi, giúp răng chắc khỏe hơn.
                </div>
                <div className='Posts-content-left-like'>
                    <div className='Posts-content-left-like-one'>
                        <div
                            className={isOpenLike && isOpenLike === true ? 'Posts-content-left-like-one-like like' :
                                'Posts-content-left-like-one-like'

                            }
                            onClick={() => { handleIsOpenLike() }}
                        >
                            <i class="far fa-thumbs-up"></i>
                            <span style={{ marginLeft: '5px' }}>like</span>

                        </div>
                        <div className='Posts-content-left-like-one-comment'
                            onClick={() => { handleIsOpenComment() }}
                        >
                            <i class="far fa-comment"></i>
                            <span style={{ marginLeft: '5px' }}>comment</span>
                        </div>
                        <div className='Posts-content-left-like-one-share'>
                            <i class="far fa-share-square"></i>
                            <span style={{ marginLeft: '5px' }}>share</span>
                        </div>
                    </div>
                    <div className='Posts-content-left-like-two'>
                        <span>1 like</span>
                        <span style={{ marginLeft: '10px' }}>1 comment</span>
                    </div>
                </div>
                <div className='Posts-content-left-input'>
                    <input type='text' placeholder='Comment' className='Posts-content-left-input-input' />
                    <i class="fas fa-paper-plane"></i>
                </div>

                <div className='Posts-content-left-comment-comment'>
                    {
                        isOpenComment && isOpenComment === true ?
                            abc.map((item, index) => {
                                return (

                                    <Comment key={index} name={item.name} comment={item.comment} />
                                )

                            })
                            : 'Nhấn comment để xem bình luận'
                    }


                </div>






            </div>
        </div>
    );
}

export default Posts;




