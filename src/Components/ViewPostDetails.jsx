import { Box, Typography, IconButton} from "@mui/material";
import { ThumbUpRounded, DeleteForeverRounded, EditRounded } from "@mui/icons-material";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import HoursAgo from "./HoursAgo";
import supabase from "../client";
import Comments from "./Comments";



const ViewPostDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const[post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const {data, error} = await supabase
                    .from('posts')
                    .select()
                    .eq('id', id);
            console.log("error: " + error);
            setPost(data[0]);
        }
        getPost();
    },[id]);

    const handleUpvoteClick = async () => {
        await supabase
                .from('posts')
                .update({upvotes: post.upvotes + 1})
                .eq('id', id);
        setPost({...post, upvotes: post.upvotes + 1});
    }

    const handleDeleteClick = async () => {
        await supabase
                .from('posts')
                .delete()
                .eq('id', id);
        alert("Post deleted successfully");
        navigate("/");
    }

    

    

    return(
        <Box
            border={1}
            borderRadius={3}
            mx={10}
            my={4}
            p={3}
        >
            <HoursAgo created_at={post.created_at}/>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
            <Box textAlign={"center"}>
                {post.imageURL && <img src={post.imageURL} alt="No image" style={{maxWidth:"100%", height:"auto"}} />}
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <IconButton onClick={handleUpvoteClick}>
                        <ThumbUpRounded color="secondary"/>
                    </IconButton>
                    <Typography variant="body2"> {post.upvotes} upvotes </Typography>
                </Box>
                <Box>
                    <IconButton component={RouterLink} to={`/editPost/${id}`}>
                        <EditRounded color="secondary"/>
                    </IconButton>
                    <IconButton onClick={handleDeleteClick}>
                        <DeleteForeverRounded color="error"/>
                    </IconButton>                    
                </Box>
            </Box>
            
            <Comments id={id}/>
            
        </Box>
    );
}

export default ViewPostDetails;

