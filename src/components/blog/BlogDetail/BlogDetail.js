import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const {blogId} = useParams();
    // const [Blog, setBlog] = useState({});

    // useEffect( ()=>{

    //    setBlog();
    // }, [])
    return (
        <div>
        <h2>This is Detail about Dosto: {blogId} </h2>
            {/* <div>{BlogId}</div> */}
            <h1>ffff</h1>
        </div>
    );
};

export default BlogDetail;