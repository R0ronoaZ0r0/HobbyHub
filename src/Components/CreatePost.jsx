import Form from "./Form";
import supabase from "../client"

const CreatePost = () => {

    const handleSubmit = async (data) => {
        await supabase
            .from('posts')
            .insert(data);
    }
    
    return (
        <div className="form-container">
            <Form  onSubmit={handleSubmit} />
        </div>
        
    )
}

export default CreatePost;