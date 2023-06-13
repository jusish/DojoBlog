 import BlogList from './BlogList';
import useFetch from '../Components/useFetch';

const Home = () => {
    const { data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="homepage">
            <div className="home">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {blogs && <BlogList moreBlogs = {blogs} title="All Blogs!"/>}
            </div>
        </div>
     );
}
 
export default Home;