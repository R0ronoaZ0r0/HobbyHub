/* eslint-disable react/prop-types */
import { Box, TextField, FormControl } from "@mui/material";
import supabase from "../client";
import { useState } from "react";

const AddComment = (props) => {

    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase
                .from('comments')
                .insert([
                    {comment: comment, post_id: props.id}
                ]);
        setComment('');
    }

    return (
        <Box 
            padding={1}
        >
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <TextField
                        label="Add a comment"
                        rows={1}
                        variant="outlined"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </FormControl>
            </form>
            
        </Box>
    );
}

export default AddComment;