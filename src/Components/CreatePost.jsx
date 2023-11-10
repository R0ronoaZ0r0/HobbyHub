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
    
    return (
        <div className="form-container">
            <Form  onSubmit={handleSubmit} />
        </div>
        
    )
}

export default CreatePost;