/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { useUserInfo } from "../../hooks/useUserInfo";
import { Dialog } from "../Dialog/Dialog";
import { Avatar } from "../Avatar/Avatar";
import { useDropzone } from "react-dropzone";
import { FaXmark } from "react-icons/fa6";
import { useCreatePostMutation } from "../../services/rootApi";
import { toast } from "react-toastify";

export const PostCreation = () => {
  const userInfo = useUserInfo();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState("");

  const [createNewPost, { data, isSuccess, isLoading }] =
    useCreatePostMutation();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
  });

  const handleCreateNewPost = async () => {
    try {
      const formData = new FormData();
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }

      await createNewPost(formData).unwrap();
      setContent("");
      setImage(null);
      setIsOpen(false);
      toast.success("Create Post Successfully!");
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const isValid = Boolean(content || image);

  return (
    <>
      <div
        className="mb-4 flex items-center gap-3 rounded-md bg-white px-6 py-5"
        style={{
          boxShadow: "0px 4px 18px 0px #4B465C1A",
        }}
      >
        <Avatar />
        <input
          type="text"
          placeholder="What is on your mind?"
          className="border-three text-secondary h-10 flex-1 rounded-sm border px-2.5 text-[13px] font-normal"
          onFocus={() => setIsOpen(true)}
        />
        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h3 className="border-three flex items-center justify-between border-b pb-4 text-[16px] font-bold">
            <span>Create Post</span>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-three flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
            >
              <FaXmark className="text-secondary text-[14px]" />
            </button>
          </h3>
          <div className="flex items-center gap-3 py-3">
            <Avatar />
            <div className="">{userInfo.fullName}</div>
          </div>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="border-three h-[150px] w-full resize-none rounded-md border p-4"
          ></textarea>

          <div
            {...getRootProps()}
            className="bg-three mt-2 cursor-pointer rounded-md p-8 text-center"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          {image?.name && (
            <div className="border-three mt-2 flex items-center justify-center gap-4 rounded-md border bg-slate-100 p-2">
              <div className="">{image.name}</div>
              <button
                onClick={() => setImage(null)}
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white"
              >
                <FaXmark className="text-[14px]" />
              </button>
            </div>
          )}

          <button
            disabled={!isValid}
            onClick={handleCreateNewPost}
            className="bg-primary disabled:bg-three disabled:text-secondary mt-4 h-10 w-full cursor-pointer rounded-md text-center text-[14px] font-bold text-white uppercase disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="loading loading-spinner loading-md"></div>
            ) : (
              "POST"
            )}
          </button>
        </Dialog>
      </div>
    </>
  );
};
