import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="header">
            <Button component={Link} className="title" to="/" > 
                One Piece Hub
            </Button>
            <SearchBar/>
            <div className="links" style={{display:"flex"}} >
                <Button component={Link} to="/" > 
                    Home
                </Button>
                <Button component={Link} to="/createPost" > 
                    Create New Post
                </Button>
            </div>
        </div>
    )
}

export default Header;