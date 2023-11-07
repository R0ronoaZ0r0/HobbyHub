import supabase from "../client";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.from('hobbyhub').insert([{title:title, content:content, imageURL:imageURL}]);   
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" value={content} placeholder="Enter content(optional)" onChange={(e)=>setContent(e.target.value)} />
                <input type="text" value={imageURL} placeholder="Enter image URL(optional)" onChange={(e)=>setImageURL(e.target.value)} />
                <input type="submit"/>   
            </form>
        </div>
    );
}

export default CreatePost;