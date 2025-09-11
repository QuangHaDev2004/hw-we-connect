import dayjs from "dayjs";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { MdOutlineModeComment } from "react-icons/md";

export const PostItem = ({
  fullName,
  createAt,
  content,
  image = "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  likes,
  comments,
}) => {
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
            <p className="text-secondary text-[15px] font-medium">
              {/* {fullName} */}
              Le Van A
            </p>
            <p className="text-secondary text-[13px] font-normal opacity-50">
              {/* {dayjs(createAt).format("DD/MM/YYYY")} */}9 hours ago
            </p>
          </div>
        </div>
        <p className="font-400 text-secondary mb-4 text-[15px]">
          {content}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          facilis a vero vel, eligendi optio iure sint velit quam magni
          molestiae commodi ipsum esse excepturi voluptate ratione blanditiis,
          deleniti iusto?
        </p>
        {image && (
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            className="mb-4 w-full"
          />
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <FaThumbsUp className="text-primary text-[18px]" />
            <p className="text-secondary text-[15px] font-normal">30</p>
          </div>
          <div className="text-secondary text-[15px] font-normal opacity-80">
            9 comments
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
