import { Box, Typography, Link } from "@mui/material";
import { Link as RouteLink }  from "react-router-dom";
import HoursAgo from "./HoursAgo";

const Post = ({id, title, upvotes, created_at}) => {
    

    return(
        <Box
            border={1}
            borderRadius={3}
            px={5}
            py={2} 
            mx={20}   
            my={4}
            display={"grid"}
            gap={1}             
        >
            <HoursAgo created_at={created_at}/>
            <Link to={`/viewPost/${id}`} component={RouteLink}>
                <Typography variant="h6">{title}</Typography>
            </Link>
            
            <Typography variant="caption" fontSize={13} >upvotes: {upvotes}</Typography>
        </Box>
    );
}

export default Post;