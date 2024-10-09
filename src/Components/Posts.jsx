import { deletePost, getPost } from "../API/PostApi";
import { useEffect, useState } from "react";
import Forms from "./Forms";

function Posts() {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // for delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPost = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPost);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section>
        <Forms data={data} setData={setData} />
      </section>
      <section className="w-full max-w-6xl mx-auto my-6 px-4">
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0,3).map((curVal) => {
            const { id, title, body } = curVal;
            return (
              <li
                key={id}
                className="bg-gray-800 p-4 rounded-md border-l-2 border-white flex flex-col justify-between"
              >
                <div className="flex-grow mb-4">
                  <span className="text-white">{id}.</span>
                  <h3 className="mb-2 text-white">Title: {title}</h3>
                  <p className="text-white">Body: {body}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none">
                    Edit
                  </button>
                  <button
                    className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white focus:outline-none"
                    onClick={() => handleDeletePost(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default Posts;
