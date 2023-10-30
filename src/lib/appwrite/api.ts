import { INewUser } from "@/types";
import { ID, Query } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";
import { error } from "console";

// Function to create a new user account
export async function createUSerAccount(user: INewUser) {
  try {
    // Create a new account with Appwrite
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    // Generate an avatar URL for the user
    const avatarUrl = avatars.getInitials(user.name);

    // Save user information to the database
    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// Function to save user information to the database
export async function saveUserToDB(user: {
  email: string;
  name: string;
  accountId: string;
  imageUrl: URL;
  username: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

// Function to sign in with an email and password
export async function signInAccount(user: { email: string; password: string }) {
  try {
    // Create a session for the user
    const session = await account.createEmailSession(user.email, user.password);
    return session;
  } catch (error) {
    console.log(error);
  }
}

// Function to get the current user's information
export async function getCurrentUser() {
  try {
    // Get the current account information from Appwrite
    const currentAccount = await account.get();

    if (!currentAccount) throw error;

    // Query the database for the user's information using the account ID
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}
