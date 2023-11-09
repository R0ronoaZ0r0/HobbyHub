import { Box, Typography } from "@mui/material";

const Post = () => {
    return(
        <Box
            border={1}
            borderRadius={3}
            px={5}
            py={2} 
            mx={20}   
            my={5}
            display={"grid"}
            gap={1}              
        >
            <Typography variant="body1">Posted time</Typography>
            <Typography variant="h6">Title</Typography>
            <Typography variant="caption" fontSize={13} >upvote</Typography>
        </Box>
    );
}

export default Post;