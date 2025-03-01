import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs , setBlogs] = useState([
        {title:"New wesite", body:"lorem ipsum...", author:"Mohamed", id: 1 },
        {title:"Welcome party!", body:"lorem ipsum...", author:"Hesham", id: 2},
        {title:"Web dev top tips", body:"lorem ipsum...", author:"Mohamed", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Mohamed")} title="Mohamed's Blogs!"/> */}
        </div>
    );
}

export default Home;
