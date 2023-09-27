import HomeFilters from "@/components/Home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
    {
        _id: 1,
        title: "How to use React Query?",
        tags: [
            { _id: 1, title: "React", totalQuestions: 11 },
            { _id: 2, title: "Next.js", totalQuestions: 10 },
        ],
        author: {
            _id: 1,
            name: "John Doe",
            image: "/assets/images/profile.jpg",
        },
        upvotes: 10,
        views: 100,
        answers: [],
        createdAt: new Date("2021-09-01T12:00:00.000Z"),
    },
    {
        _id: 2,
        title: "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
        tags: [
            { _id: 1, title: "React" },
            { _id: 2, title: "Next.js" },
        ],
        author: {
            _id: 2,
            name: "John Doe 2",
            image: "/assets/images/profile.jpg",
        },
        upvotes: 1,
        views: 150,
        answers: [],
        createdAt: new Date("2021-08-01T12:00:00.000Z"),
    },
    {
        _id: 3,
        title: "How to use   Query?",
        tags: [
            { _id: 1, title: "T", totalQuestions: 11 },
            { _id: 2, title: "Next.js", totalQuestions: 10 },
        ],
        author: {
            _id: 3,
            name: "John Doe 3",
            image: "/assets/images/profile.jpg",
        },
        upvotes: 0,
        views: 120,
        answers: [],
        createdAt: new Date("2023-07-01T12:00:00.000Z"),
    },
];
export default function Home() {
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Link
                    href="/ask-question"
                    className="flex justify-end max-sm:w-full"
                >
                    <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
                        Ask a Question
                    </Button>
                </Link>
            </div>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchBar
                    route="/"
                    iconPosition="left"
                    igmSrc="/assets/icons/search.svg"
                    placeholder="Search Questions"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={HomePageFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                    containerClasses="hidden max-md:flex"
                />
            </div>
            <HomeFilters />
            <div className="mt-10 flex w-full flex-col gap-6">
                {questions.length > 0 ? (
                    questions.map((question) => (
                        <QuestionCard
                            key={question._id}
                            _id={question._id}
                            title={question.title}
                            tags={question.tags}
                            author={question.author}
                            upvotes={question.upvotes}
                            views={question.views}
                            answers={question.answers}
                            createdAt={question.createdAt}
                        />
                    ))
                ) : (
                    <NoResult
                        title="There&rsquo;s no question to show"
                        description="Be the first one to ask a question or change the filter to see more questions"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />
                )}
            </div>
        </>
    );
}
