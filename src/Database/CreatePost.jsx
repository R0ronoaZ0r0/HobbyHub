import supabase from "../client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.from('hobbyhub').insert([{title:title, content:content, imageURL:imageURL}]);   
    }

    return(
        <div >
            <form className="form" onSubmit={handleSubmit}>
                <TextField className="title" required size="small" type="text" value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
                <TextField className="content" multiline type="text" value={content} placeholder="Enter content(optional)" onChange={(e)=>setContent(e.target.value)} />
                <TextField className="url" size="small" type="url" value={imageURL} placeholder="Enter image URL(optional)" onChange={(e)=>setImageURL(e.target.value)} />
                <Button variant="contained" type="submit"> Create Post </Button>   
            </form>
        </div>
    );
}

export default CreatePost;