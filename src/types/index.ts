//IcontextType
export type IcontextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  SetIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

// Represents a navigation link with an image URL, a route, and a label
export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

// Represents an object used to update user information
export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

// Represents a new post object
export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string; // Optional location field
  tags?: string; // Optional tags field
};

// Represents an object used to update a post
export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string; // Optional location field
  tags?: string; // Optional tags field
};

// Represents a user with various properties
export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

// Represents a new user object
export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};
