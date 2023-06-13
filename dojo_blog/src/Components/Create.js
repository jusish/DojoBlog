import { useState } from "react";
import{ useNavigate} from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const newBlog =  { title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog)
        }).then(() => {
            console.log('new blog added');
            setIsLoading(false);
            navigate('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label htmlFor="body">Blog body</label>
                <textarea 
                    type="text"
                    required 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="author"></label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Justin">Justin</option>
                    <option value="Prince">Prince</option>
                </select>
                { !isLoading && <button>Add blog</button>}
                { isLoading && <button disabled>Adding blog....</button>}
            </form>
        </div>
     );
}
 
export default Create;