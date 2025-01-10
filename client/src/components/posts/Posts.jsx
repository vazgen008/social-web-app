import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userid }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest
      .get(`/api/posts?userid=${userid}`, { withCredentials: true }) 
      .then((res) => res.data)
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "Loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
