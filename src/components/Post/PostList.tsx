/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "../../services/rootApi";
import { Loading } from "../Loading/Loading";
import { PostItem } from "./PostItem";
import type { Post } from "../../types";

export const PostList = () => {
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, isFetching, isSuccess } = useGetPostsQuery({ limit, offset });
  const previousDataRef = useRef<any>(null);

  useEffect(() => {
    if (isSuccess && data && previousDataRef.current !== data) {
      if (data.length == 0) {
        setHasMore(false);
        return;
      }
      previousDataRef.current = data;
      setPosts((prevPosts) => {
        return [...prevPosts, ...data];
      });
    }
  }, [data, isSuccess]);

  const handleScroll = useCallback(() => {
    if (!hasMore) return;

    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (clientHeight + scrollTop + 50 >= scrollHeight && !isFetching) {
      setOffset(offset + limit);
    }
  }, [hasMore, isFetching, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
