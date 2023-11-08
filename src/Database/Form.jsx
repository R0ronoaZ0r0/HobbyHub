/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button, TextField } from "@mui/material";

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({title:title, content:content, imageURL:imageURL});
    }

    return(
        
        <form className="form" onSubmit={handleSubmit}>
            <TextField 
                className="width-60" 
                required size="small" 
                type="text" 
                value={title}  
                onChange={(e)=>setTitle(e.target.value)} 
                label="Title"
                helperText="Please enter a title."
            />
            <TextField 
                className="width-60" 
                multiline 
                type="text" 
                value={content}
                rows={5}
                onChange={(e)=>setContent(e.target.value)} 
                label="Content"
                characterLimit={500}
                helperText="Please enter content."
            />
            <TextField 
                className="width-60" 
                size="small" 
                type="url" 
                value={imageURL}
                onChange={(e)=>setImageURL(e.target.value)} 
                label="Image URL"
                helperText="Please enter an image URL."
            />
            <Button variant="contained" type="submit"> Create Post </Button>   
        </form>
        
    );
}

export default Form;