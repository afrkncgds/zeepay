// src/App.js
import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import BlogTable from './component/BlogTable';
import PostDetail from './component/PostDetail';
import './App.css';

const App = () => {
    return (
        <div>


                    <Routes>
        <Route path="/" element={<BlogTable />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>


        </div>
    );
};

export default App;
