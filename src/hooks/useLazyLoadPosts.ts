/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { useGetPostsQuery } from "../services/rootApi";
import type { Post } from "../types";
import { useInfiniteScroll } from "./useInfiniteScroll";

export const useLazyLoadPosts = () => {
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

  const loadMore = () => {
    setOffset(offset + limit);
  };

  useInfiniteScroll({
    hasMore,
    loadMore,
    isFetching,
  });

  return { hasMore, loadMore, isFetching, posts };
};
