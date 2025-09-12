export type User = {
  _id: string;
  fullName: string;
};

export type Post = {
  _id: string
  fullName: string;
  author: User;
  createdAt: string;
  content: string;
  image: string;
  likes: string[];
  comments: string[];
};
