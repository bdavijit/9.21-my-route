import React from 'react';
import useBlogs from '../../Hooks/useBlogs';

const Home = () => {
    const [blogs, SetBlogs] = useBlogs();
    console.log(blogs);
    return (
        <div>
            <h1>{blogs.length}</h1>
        </div>
    );
};

export default Home;