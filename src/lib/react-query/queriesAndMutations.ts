import { INewPost, INewUser } from "@/types";

import {
  createPost,
  createUSerAccount,
  getRecentPosts,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import {
  useQuery,
  useInfiniteQuery,
  useQueryClient,
  useMutation,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "./querykeys";
// used for data fetching,caching,infinite scroll etc

export const userCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUSerAccount(user),
  });
};

export const userSigninAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const userSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      });
    },
  });
};

export const useGetRecentPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: getRecentPosts,
  });
};
