/* eslint-disable react/prop-types */
import supabase from "../client";
import { useEffect, useState } from "react";
import Post from "./Post";

const DisplayPosts = (props) => {
    const [posts, setPosts] = useState([]);
   
    useEffect(
        () => {
            let filter = (props.filterNewest ? 'created_at' : 'upvotes');
            const getPosts = async () => {
                const { data, error } = await supabase
                    .from('posts')
                    .select('id,title,upvotes,created_at')
                    .order(filter, { ascending: false })
                console.log('error: ' + error);
                setPosts(data);
            }
            getPosts();
        }, [props.filterNewest]
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