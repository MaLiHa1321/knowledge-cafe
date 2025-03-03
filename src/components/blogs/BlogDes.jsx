

const BlogDes = ({blog}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex ">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-4">
                        <h2>{author}</h2>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div>
                    <h2>{reading_time}</h2>
                    <button>bookmark</button>
                </div>
            </div>
           <h2>{title}</h2>
           <p>
            {
                hashtags?.map(hash => <span> <a href="#">#{hash}</a></span>)
            }
           </p>

            
        </div>
    );
};

export default BlogDes;