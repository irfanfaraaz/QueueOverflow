"use server";

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import {
    CreateAnswerParams,
    GetAnswerByIdParams,
    GetAnswersParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function createAnswer(params: CreateAnswerParams) {
    try {
        connectToDatabase();
        const { question, author, content, path } = params;

        const newAnswer = await Answer.create({
            question,
            author,
            content,
        });

        await Question.findByIdAndUpdate(question, {
            $push: { answers: newAnswer._id },
        });
        // todo : Add interaction

        revalidatePath(path);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAnswers(params: GetAnswersParams) {
    try {
        connectToDatabase();
        const { questionId } = params;
        const answers = await Answer.find({ question: questionId })
            .populate("author", "_id clerkId name picture")
            .sort({ createdAt: "desc" });

        return { answers };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
