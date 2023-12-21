import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "./Post";


const SearchResults = () => {

    const { searchTerm } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const {data, error} = await supabase
                .from("posts")
                .select()
                .textSearch("title", searchTerm)
                .order("created_at", {ascending: false});
            console.log("error: " + error);
            setPosts(data);
        }
        getPosts();
    }, [searchTerm]);


    return(
        <div>
            {   
                
                (posts.length > 0) ?  posts.map(
                                (post) => {
                                    return(
                                    <Post
                                            key={post.id}
                                            id={post.id}
                                            title={post.title}
                                            upvotes={post.upvotes}
                                            created_at={post.created_at}
                                    />
                                    )
                                }
                            ) : <h1>No results found</h1>

            }
        </div>
    );
}

export default SearchResults;
