import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { QuestionFilters } from "@/constants/filters";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";

export default async function Collection() {
    const { userId } = auth();
    if (!userId) {
        return null;
    }

    const result = await getSavedQuestions({
        clerkId: userId,
    });
    console.log(result.questions);

    return (
        <>
            <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchBar
                    route="/"
                    iconPosition="left"
                    igmSrc="/assets/icons/search.svg"
                    placeholder="Search Questions"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={QuestionFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                />
            </div>
            <div className="mt-10 flex w-full flex-col gap-6">
                {result.questions.length > 0 ? (
                    result.questions.map((question) => (
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
                        title="There&rsquo;s no saved question to show"
                        description="Be the first one to ask a question or change the filter to see more questions"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />
                )}
            </div>
        </>
    );
}