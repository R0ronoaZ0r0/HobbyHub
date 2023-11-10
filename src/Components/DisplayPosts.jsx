import supabase from "../client";
import { useEffect, useState } from "react";
import Post from "./Post";

const DisplayPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            const getPosts = async () => {
                const { data, error } = await supabase
                    .from('posts')
                    .select('id,title,upvotes,created_at')
                    .order('created_at', { ascending: true });
                console.log('error: ' + error);
                setPosts(data);
            }
            getPosts();
        }, []
    );


    return (
        <div>
            {   
                posts && posts.map(
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
                )

            }
        </div>
    )
}

export default DisplayPosts;