import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Button component={Link} className="title" to="/" > 
                HistoryHub
            </Button>
            <div className="search-bar">
                Search
            </div>
            <div className="links">
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