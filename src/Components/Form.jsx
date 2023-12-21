

import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        if(props.post){
            setTitle(props.post.title);
            setContent(props.post.content);
            setImageURL(props.post.imageURL);
        }
    }, [props.post]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({title:title, content:content, imageURL:imageURL});
    }

    return(
        <Box 
            marginTop={10} 
            mx={"auto"}
            padding={3}
            border={1}
            borderRadius={3} 
        >
            <form className="form" onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    className="width-400"
                    required 
                    size="small" 
                    type="text" 
                    value={title}  
                    onChange={(e)=>setTitle(e.target.value)} 
                    label="Title"
                    helperText="Please enter a title."
                />
                <TextField 
                    margin="normal"
                    className="width-400"
                    multiline 
                    type="text" 
                    value={content}
                    rows={5}
                    onChange={(e)=>setContent(e.target.value)} 
                    label="Content(optional)"
                    characterlimit={500}
                    helperText="Please enter content."
                />
                <TextField 
                    margin="normal"
                    className="width-400"
                    size="small" 
                    type="url" 
                    value={imageURL}
                    onChange={(e)=>setImageURL(e.target.value)} 
                    label="Image URL(optional)"
                    helperText="Please enter an image URL."
                />
                <Button variant="contained" type="submit"> {props.type} </Button>   
            </form>
        </Box>
        
        
        
    );
}

export default Form;