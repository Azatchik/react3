import React from 'react';
import './Post.css'

const NewsPost = ({data, title, body, postIndex}) => {
    return (
        <div className={'post' + postIndex}>
            <p className='postData'>{data}</p>
            <div>
                <p className='postTitle'>{title}</p>
                <p className='postBody'>{body}</p>
            </div>
        </div>
    );
};

export default NewsPost;