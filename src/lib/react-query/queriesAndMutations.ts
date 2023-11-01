import { INewUser } from "@/types";

import {
  createUSerAccount,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import {
  useQuery,
  useInfiniteQuery,
  useQueryClient,
  useMutation,
} from "@tanstack/react-query";
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
