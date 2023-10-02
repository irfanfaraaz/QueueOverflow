"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
    try {
        connectToDatabase();
        const { userId } = params;
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");

        // find interactions of user
        return [
            { _id: "1", name: "tag1" },
            { _id: "2", name: "tag2" },
            { _id: "3", name: "tag3" },
        ];
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function getAllTags(params: GetAllTagsParams) {
    try {
        connectToDatabase();
        const tags = await Tag.find({});
        return { tags };
    } catch (e) {
        console.log(e);
        throw e;
    }
}
