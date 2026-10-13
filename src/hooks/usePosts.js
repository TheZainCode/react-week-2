import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
function usePosts(){
    const [posts, setPosts]=useState([]);
    const [error, setError]=useState("");
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        async function fetchPosts(){
            try{
                const data=await getPosts();
                setPosts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchPosts();
    },[]);
    return { posts, loading, error};
}
export default usePosts;