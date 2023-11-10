/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

const HoursAgo = (props) => {
    
    const currentTime = new Date();
    const createdAt = new Date(props.created_at);
    const hoursAgo = Math.floor((currentTime - createdAt) / 36e5);
    
    return (
        
        <Typography variant="body1">Posted {hoursAgo} hours ago</Typography>
        
    );
}

export default HoursAgo;