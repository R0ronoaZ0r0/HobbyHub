import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../client";
import Form from "./Form";

const EditPost = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const[post, setPost] = useState('');
    useEffect(() => {
        const getPost = async () => {
            const {data, error} = await supabase
                    .from('posts')
                    .select()
                    .eq('id', id);
            console.log("error: " + error);
            setPost(data[0]);
        }
        getPost();
    }, [id]);

    const handleSubmit = async (data) => {
        await supabase.from('posts').update({...data, latest_update:'now()'}).eq('id', id);
        alert("Post updated successfully");
        navigate("/");
    }

    return (
        <div>
            <Form post={post} type='Update Post' onSubmit={handleSubmit}/>
        </div>
    )
}

export default EditPost;