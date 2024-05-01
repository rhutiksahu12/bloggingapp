import Link from 'next/link';

const BlogList = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">By {post.author}</span>
                        <Link className="text-blue-500 hover:text-blue-700" href={`/posts/${post.id}`}>
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;