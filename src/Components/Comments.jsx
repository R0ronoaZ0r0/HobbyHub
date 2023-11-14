/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import supabase from "../client";
import AddComment from "./AddComment";


const Comments = (props) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const {data, error} = await supabase
                    .from('comments')
                    .select()
                    .eq('post_id', props.id);
            console.log("error: " + error);
            setComments(data);
        }
        getComments();
    },[props.id, comments]);

    return (
        <Box
            border={1}
            borderRadius={3}
            padding={1}
            margin={2}
        >
            <AddComment id={props.id}/>
            <h4>Comments:</h4> 
            <Box marginTop={-2}>
                {(comments.length > 0) ? comments.map(
                    (comments) => {
                        return (
                            <Box
                                key={comments.id}
                                py={0.5}  
                            >
                                <Typography variant="caption" >{comments.comment}</Typography>

                            </Box>
                        )
                    }
                ) : <Typography variant="caption" >No Comments</Typography> }
            </Box>
            
            
        </Box>
    )
}

export default Comments;