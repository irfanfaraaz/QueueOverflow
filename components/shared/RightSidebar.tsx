import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
    { _id: "1", title: "How to use React Query?" },
    {
        _id: "2",
        title: "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    { _id: "3", title: "Redux Toolkit Not Updating State as Expected" },
    {
        _id: "4",
        title: "How do I use express as a custom server in NextJS?",
    },
    {
        _id: "5",
        title: "Async/Await Function Not Handling Errors Properly",
    },
];

const popularTags = [
    { _id: "1", title: "React", totalQuestions: 11 },
    { _id: "2", title: "Next.js", totalQuestions: 10 },
    { _id: "3", title: "TypeScript", totalQuestions: 9 },
    { _id: "4", title: "JavaScript", totalQuestions: 8 },
    { _id: "5", title: "React Native", totalQuestions: 7 },
];
const RightSidebar = () => {
    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:border-neutral-900 dark:shadow-none dark:backdrop-blur-[150px] max-xl:hidden">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map((question) => (
                        <Link
                            href={`/questions/${question._id}`}
                            key={question._id}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark500_light700">
                                {question.title}
                            </p>
                            <Image
                                src="assets/icons/chevron-right.svg"
                                alt="chevron"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map((tag) => (
                        <RenderTag
                            key={tag._id}
                            _id={tag._id}
                            title={tag.title}
                            totalQuestions={tag.totalQuestions}
                            showCount={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;
