import { useCallback, useState } from "react";
import { useUserInfo } from "../../hooks/useUserInfo";
import { Dialog } from "../Dialog/Dialog";
import { Avatar } from "../Avatar/Avatar";
import { useDropzone } from "react-dropzone";

export const PostCreation = () => {
  const userInfo = useUserInfo();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files

    console.log(acceptedFiles);
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
          <h3 className="border-three border-b pb-4 text-[16px] font-bold">
            Create Post
          </h3>
          <div className="flex items-center gap-3 py-3">
            <Avatar />
            <div className="">{userInfo.fullName}</div>
          </div>
          <textarea className="border-three h-[150px] w-full resize-none rounded-md border p-4"></textarea>

          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          <p>{image?.name}</p>

          <div className="mt-4 w-full text-right">
            <button className="bg-primary h-10 w-20 cursor-pointer rounded-md text-center text-[14px] font-bold text-white uppercase">
              POST
            </button>
          </div>
        </Dialog>
      </div>
    </>
  );
};
