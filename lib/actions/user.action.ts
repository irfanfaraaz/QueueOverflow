"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
    CreateUserParams,
    DeleteUserParams,
    UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
    try {
        connectToDatabase();

        const userId = params.userId;

        const user = await User.findOne({ clerkId: userId });

        return user;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
export async function createUser(userData: CreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(userData);
        return newUser;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
export async function updateUser(params: UpdateUserParams) {
    try {
        connectToDatabase();
        const { clerkId, updateData, path } = params;
        await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

        revalidatePath(path);
    } catch (e) {
        console.log(e);
        throw e;
    }
}
export async function deleteUser(params: DeleteUserParams) {
    try {
        connectToDatabase();
        const { clerkId } = params;

        const user = await User.findOneAndDelete({ clerkId });

        if (!user) {
            throw new Error("User not found");
        }

        // delete user from all teams

        // get all user question ids
        // eslint-disable-next-line no-unused-vars
        const userQuestionIds = await Question.find({
            author: user._id,
        }).distinct("_id");

        // delete all user questions

        await Question.deleteMany({ author: user._id });

        // todo delete user answers

        const deletedUser = await User.findByIdAndDelete(user._id);

        return deletedUser;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
