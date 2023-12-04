import * as z from "zod";

export const QuestionsSchema = z.object({
    title: z.string().min(5).max(135),
    explanation: z.string().min(100),
    tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
    answer: z.string().min(20),
});

export const ProfileSchema = z.object({
    name: z.string().min(3).max(50),
    username: z.string().min(3).max(50),
    portfolioWebsite: z.string().url().optional(),
    bio: z.string().min(10).max(300).optional(),
    location: z.string().min(3).max(50).optional(),
});
