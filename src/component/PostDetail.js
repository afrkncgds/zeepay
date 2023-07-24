// components/PostDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
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

                    <tr className="post-detail" key={post.id}>
                        <td>{post.id}</td>
                        <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
                        <td>{post.body}</td>
                    </tr>



        </div>

    );
};

export default PostDetail;
