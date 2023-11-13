import Form from "./Form";
import supabase from "../client"
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = async (data) => {
        await supabase
            .from('posts')
            .insert(data);
        alert("Post created successfully");
        navigate("/");
    }
    
    const postDefault = {title:'', content:'', imageURL:''};

    return (
        <div className="form-container">
            <Form type='Create Post' onSubmit={handleSubmit} post={postDefault} />
        </div>
        
    )
}

export default CreatePost;