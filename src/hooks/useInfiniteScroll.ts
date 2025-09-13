import { useCallback, useEffect } from "react";

type InfiniteScrollProps = {
  hasMore: boolean;
  loadMore: () => void;
  isFetching: boolean;
};

export const useInfiniteScroll = ({
  hasMore,
  loadMore,
  isFetching,
}: InfiniteScrollProps) => {
  const handleScroll = useCallback(() => {
    if (!hasMore) return;

    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (clientHeight + scrollTop + 50 >= scrollHeight && !isFetching) {
      loadMore();
    }
  }, [hasMore, isFetching, loadMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};
