
import { Box } from "@mui/material";
import {Button} from "@mui/material";


const Filter = (props) => {

    const handleNewestClick = () => {
        props.handleFilterClick(true);
    }

    const handleMostPopularClick = () => {
        props.handleFilterClick(false);
    }

    return (
        <Box
            marginTop={2}
            px={30} 
        >
            Order by :
            <Button onClick={handleNewestClick}>Newest</Button>
            <Button onClick={handleMostPopularClick}>Most Popular</Button>
        </Box>
    );
}

export default Filter;