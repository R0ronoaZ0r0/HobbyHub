import Form from "./Form";
import supabase from "../client"

const CreatePost = () => {

    const handleSubmit = async (data) => {
        await supabase
            .from('posts')
            .insert(data);
    }
    
    return (
        <Form onSubmit={handleSubmit} />
    )
}

export default CreatePost;