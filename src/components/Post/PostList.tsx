import { useGetPostsQuery } from "../../services/rootApi";
import { PostItem } from "./PostItem";

export const PostList = () => {
  const { data } = useGetPostsQuery();

  return (
    <>
      <div>
        {(data || []).map((post) => (
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
