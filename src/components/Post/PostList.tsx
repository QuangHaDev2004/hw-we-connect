import { Loading } from "../Loading/Loading";
import { PostItem } from "./PostItem";
import { useLazyLoadPosts } from "../../hooks/useLazyLoadPosts";

export const PostList = () => {
  const { isFetching, posts } = useLazyLoadPosts();

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
        {isFetching && <Loading />}
      </div>
    </>
  );
};
