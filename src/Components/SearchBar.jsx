import { Box, FormControl, InputAdornment, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import supabase from "../client";     


const SearchBar = () => {
    
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    // const [searchData, setSearchData] = useState("");

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        // const {data, error} = await supabase
        //         .from("posts")
        //         .select()
        //         .textSearch("title", searchTerm);
        // setSearchData(data);
        // console.log("error: " + error);
        // setSearchData(data); 
        navigate(`/searchResults/${searchTerm}`);
    }

    return (
        <Box margin={1} borderRadius={1} bgcolor={"white"} width={500}>          
            <form onSubmit={handleSearchSubmit}>
                <FormControl fullWidth >
                    <TextField
                        variant="outlined"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start" >
                                    <IconButton type="submit">
                                        <Search />
                                    </IconButton>    
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
            </form>         
        </Box>

        
    )
}

export default SearchBar;