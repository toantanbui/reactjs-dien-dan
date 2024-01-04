// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import '../assets/css/Discussion/Discussion.css';
import MenuLogged from '../MenuLogged/MenuLogged';
import Footer from '../Footer/Footer';
import TopicPreview from '../TopicPreview/TopicPreview';
import InputFeedback from '../InputFeedback/InputFeedback';
import Feedback from '../Feedback/Feedback';

const Discussion = () => {
    // const dispatch = useDispatch()
    let [Comment, setComment] = useState([
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

    let [isOpenFeedback, setIsOpenFeedback] = useState(false)
    let [isOpenLike, setIsOpenLike] = useState(false)
    let [isOpenFeedback1, setIsOpenFeedback1] = useState(false)


    const topics = [
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        },
        {
            title: "Xe lạ từ Ấn Độ xuất hiện tại Việt Nam",
            author: "Ý Trần",
            createdAt: "Thứ ba, 19/12/2023 13:59",
            previewContent: "TVS Dazz 110 mang thiết kế thể thao và mức giá dễ tiếp cận hơn Honda Vision, tuy nhiên"
        }
    ];

    const handleIsOpenFeedback = () => {
        setIsOpenFeedback(!isOpenFeedback);
    }

    const handleIsOpenLike = () => {
        setIsOpenLike(!isOpenLike)
    }

    const handleIsOpenFeedback1 = () => {
        setIsOpenFeedback1(!isOpenFeedback1);
    }



    return (
        <div className='Discussion'>
            <div className='Discussion-header'>
                <MenuLogged />
            </div>
            <div className='Discussion-content'>
                <div className='Discussion-content-left'>
                    <div className='Discussion-content-left-name'>
                        <div className='Discussion-content-left-name-image'></div>
                        <div className='Discussion-content-left-name-name'>Nguyễn Văn A</div>
                    </div>
                    <div className='Discussion-content-left-content'>
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
                    <div className='Discussion-content-left-like'>
                        <div className='Discussion-content-left-like-one'>
                            <div
                                className={isOpenLike && isOpenLike === true ? 'Discussion-content-left-like-one-like like' :
                                    'Discussion-content-left-like-one-like'

                                }
                                onClick={() => { handleIsOpenLike() }}
                            >
                                <i class="far fa-thumbs-up"></i>
                                <span style={{ marginLeft: '5px' }}>like</span>

                            </div>
                            <div className='Discussion-content-left-like-one-comment'>
                                <i class="far fa-comment"></i>
                                <span style={{ marginLeft: '5px' }}>comment</span>
                            </div>
                            <div className='Discussion-content-left-like-one-share'>
                                <i class="far fa-share-square"></i>
                                <span style={{ marginLeft: '5px' }}>share</span>
                            </div>
                        </div>
                        <div className='Discussion-content-left-like-two'>
                            <span>1 like</span>
                            <span style={{ marginLeft: '10px' }}>1 comment</span>
                        </div>
                    </div>
                    <div className='Discussion-content-left-input'>
                        <input type='text' placeholder='Comment' className='Discussion-content-left-input-input' />
                        <i class="fas fa-paper-plane"></i>
                    </div>


                    {
                        Comment && Comment.length > 0 && Comment.map((item, index) => {

                            return (
                                <div className='Discussion-content-left-comment'>
                                    <div className='Discussion-content-left-comment-image'></div>
                                    <div className='Discussion-content-left-comment-infor'>
                                        <div className='Discussion-content-left-comment-infor-1'>
                                            <div className='Discussion-content-left-comment-infor-1-name'>{item.name}</div>
                                            <div className='Discussion-content-left-comment-infor-1-time'>2 năm</div>
                                        </div>
                                        <div className='Discussion-content-left-comment-infor-2'>
                                            {item.comment}
                                        </div>
                                        <div className='Discussion-content-left-comment-infor-3'>
                                            <div className='Discussion-content-left-comment-infor-3-like'>
                                                <i className="far fa-thumbs-up"></i>
                                                <span style={{ marginLeft: '5px' }}>1</span>
                                            </div>
                                            <div className='Discussion-content-left-comment-infor-3-dislike'>
                                                <i className="far fa-thumbs-down"></i>
                                                <span style={{ marginLeft: '5px' }}>2</span>
                                            </div>


                                            <div className='Discussion-content-left-comment-infor-3-feedback'
                                                onClick={() => { handleIsOpenFeedback() }}
                                            >Phản hồi</div>
                                        </div>
                                        <div className='Discussion-content-left-comment-infor-input'>
                                            {isOpenFeedback && isOpenFeedback === true ? <InputFeedback
                                                handleCancel={handleIsOpenFeedback}
                                            /> : ''}
                                        </div>
                                        <div className='Discussion-content-left-comment-infor-4'>
                                            <div className='Discussion-content-left-comment-infor-4-feedback'
                                                onClick={() => { handleIsOpenFeedback1() }}
                                            >
                                                <i class="fas fa-caret-down"></i>
                                                <span>1 phản hồi</span>
                                            </div>
                                        </div>
                                        <div className='Discussion-content-left-comment-infor-5'>
                                            {isOpenFeedback1 && isOpenFeedback1 === true ? <Feedback
                                                handleCancel={handleIsOpenFeedback}
                                            /> : ''}
                                        </div>
                                    </div>


                                </div>


                            )

                        })
                    }




                </div>
                <div className='Discussiion-content-right'>
                    <div className="card">
                        <div className="card-body">
                            Bài viết khác
                        </div>
                    </div>
                    <div className="list-group">
                        {
                            topics.map((topic, index) => (
                                <TopicPreview key={index} title={topic.title} time={topic.createdAt} author={topic.author} previewContent={topic.previewContent} />
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className='Discussion-footer'>
                <Footer />
            </div>


        </div >
    );
}

export default Discussion;




