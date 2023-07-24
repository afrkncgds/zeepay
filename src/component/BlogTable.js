// components/BlogTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogTable = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log("TESTTTTT",setPosts);

    return (
        <div className="table-container">
            <h2>Blog Posts</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
                        <td>{post.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogTable;
