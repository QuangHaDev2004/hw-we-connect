import { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../services/rootApi";
import { Loading } from "../Loading/Loading";
import { PostItem } from "./PostItem";
import type { Post } from "../../types";

export const PostList = () => {
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, isFetching, isSuccess } = useGetPostsQuery({ limit, skip });

  useEffect(() => {
    if (isSuccess) {
      setPosts((prevPosts) => {
        return [...prevPosts, ...data];
      });
    }
  }, [data, isSuccess]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <div>
        {(posts || []).map((post) => (
          <PostItem
            key={post?._id}
            fullName={post.author.fullName}
            createdAt={post.createdAt}
            content={post.content}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </>
  );
};
