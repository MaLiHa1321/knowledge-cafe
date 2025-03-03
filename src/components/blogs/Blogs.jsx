import { useEffect, useState } from "react";
import BlogDes from "./BlogDes";


const Blogs = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blog?.map((blog,id) => <BlogDes key={id} blog={blog}></BlogDes>)
            }
            
        </div>
    );
};

export default Blogs;