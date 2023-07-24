// components/PostDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(async() => {
       await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-container">
            <h2>{post.title}</h2>
            <div className="post">
                {post.body}
            </div>
        </div>
    );
};

export default PostDetail;
