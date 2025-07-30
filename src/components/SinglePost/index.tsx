import React from 'react';
import './index.css';

const SinglePost:React.FC = () => {
    return (
        <div className='post--card'>
            <div className="post--header">
                <div className="user--detail">
                    <img src="//picsum.photos/30/30" alt="" />
                    <div className="user--name">
                        <h4 className='m-0'>John Doe</h4>
                        <p>5h Ago <span className='user--status'></span></p>
                    </div>
                </div>
                <a><i className='bi bi-three-dots'></i></a>
            </div>
            <p className='post--notes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut ratione eligendit</p>
            <img src='//picsum.photos/600/300' className='post--pic rounded-[10px]' />
            <div className='post--action'>
                <div className='post--action__like'>
                    <i className='bi bi-hand-thumbs-up hover:hand-thumbs-up-fill'></i>
                    12
                    <span>Likes</span>
                </div>
                <div className='post--action__comment'>
                    <i className='bi bi-chat-left-dots'></i>
                    32
                    <span>Comments</span>
                </div>
                <div className='post--action__share'>
                    <i className='bi bi-share'></i>
                    9
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;