"use server";

import User from "@/models/user";
import { CreateUserParams } from "@/types/shared.types";
import { connectToDatabase } from "../mongoose";

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserById(params: { userId: string }) {
  try {
    connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
}
