const API_URL="https://jsonplaceholder.typicode.com/posts";
export async function getPosts(){
    const response=await fetch(API_URL);
    if(!response.ok){
        throw new Error("Failed to fetch posts.");
    }
    const data=await response.json();
    return data.slice(0,10);
}