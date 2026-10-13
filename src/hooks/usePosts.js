import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
function usePosts(){
    const [posts, setPosts]=useState([]);
    const [error, setError]=useState("");
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        const controller=new AbortController();

        async function fetchPosts(){
            try{
                const data=await getPosts(controller.signal);
                setPosts(data);
            } catch (err) {
                if (err.name === "AbortError") {
                    return;
                }
                setError(err.message);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchPosts();

        return () => controller.abort();
    },[]);
    return { posts, loading, error};
}
export default usePosts;