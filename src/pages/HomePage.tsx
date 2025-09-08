import { FriendRequests } from "../components/Friend/FriendRequests";
import { PostCreation } from "../components/Post/PostCreation";
import { PostList } from "../components/Post/PostList";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const HomePage = () => {
  return (
    <>
      <div className="px-6 pt-6 flex gap-4">
        <Sidebar />
        <div className="flex-1">
          <PostCreation />
          <PostList />
        </div>
        <FriendRequests />
      </div>
    </>
  );
};
