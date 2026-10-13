import usePosts from "../hooks/usePosts";
function Posts(){
    const { posts, loading, error } = usePosts();

    return(
        <main className="mx-auto max-w-3xl p-6 space-y-4">
            <h1 className="text-3xl font-bold text-blue-600">
                API Posts
            </h1>
            {loading && <p>Loading posts...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !error && posts.map((post) =>(
                <article key={post.id} className="rounded-lg p-4 border border-gray-200 shadow-md">
                    <h2 className="font-semibold">{post.title}</h2>
                    <p className="mt-2 text-gray-600">
                        {post.body}
                    </p>
                </article>
            ))}
        </main>
    )
}
export default Posts;