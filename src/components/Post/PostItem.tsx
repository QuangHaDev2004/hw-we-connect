import dayjs from "dayjs";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { MdOutlineModeComment } from "react-icons/md";

type PostItemProps = {
  fullName: string;
  createdAt: string;
  content: string;
  image?: string;
  likes: string[];
  comments: string[];
};

export const PostItem = ({
  fullName,
  createdAt,
  content,
  image,
  likes,
  comments,
}: PostItemProps) => {
  return (
    <div
      className="mb-4 rounded-md bg-white"
      style={{
        boxShadow: "0px 4px 18px 0px #4B465C1A",
      }}
    >
      <div className="px-6 pt-5 pb-[10px]">
        <div className="mb-4 flex items-center gap-4">
          <div
            className="bg-secondary flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white uppercase"
            tabIndex={0}
          >
            {fullName?.[0]}
          </div>
          <div>
            <p className="text-secondary text-[15px] font-medium">{fullName}</p>
            <p className="text-secondary text-[13px] font-normal opacity-50">
              {dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
            </p>
          </div>
        </div>
        <p className="font-400 text-secondary mb-4 text-[15px]">{content}</p>
        {image && (
          <div className="mb-4 aspect-video overflow-hidden">
            <img src={image} className="h-full w-full object-contain" />
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <FaThumbsUp className="text-primary text-[18px]" />
            <p className="text-secondary text-[15px] font-normal">
              {likes.length}
            </p>
          </div>
          <div className="text-secondary text-[15px] font-normal opacity-80">
            {comments.length} comments
          </div>
        </div>
      </div>
      <div className="border-three text-secondary flex items-center justify-center gap-40 border-t px-6 py-[13px]">
        <div className="flex cursor-pointer items-center gap-[6px]">
          <FaRegThumbsUp className="text-[24px]" />
          Like
        </div>
        <div className="flex cursor-pointer items-center gap-[6px]">
          <MdOutlineModeComment className="text-[24px]" />
          Comment
        </div>
      </div>
    </div>
  );
};
