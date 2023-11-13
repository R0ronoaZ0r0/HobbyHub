import DisplayPosts from "./DisplayPosts";
import Filter from "./Filter";
import { useState } from "react";

const Home = () => {

    const [filterNewest, setFilterNewest] = useState(true);

    const handleFilterClick = (data) => {
        setFilterNewest(data);
    }

    return (
        <div >
            <Filter handleFilterClick={handleFilterClick}/>
            <DisplayPosts filterNewest={filterNewest}/>
        </div>
    )
}

export default Home;