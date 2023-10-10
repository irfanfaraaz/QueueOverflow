import React from "react";
import RenderTag from "../shared/RenderTag";
import Link from "next/link";
import Metric from "../shared/Metric";
import { formatNumber, getTimeStamp } from "@/lib/utils";

interface Props {
    _id: string;
    title: string;
    tags: {
        _id: string;
        name: string;
    }[];
    author: {
        _id: string;
        name: string;
        image: string;
    };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
}

const QuestionCard = ({
    _id,
    title,
    tags,
    author,
    upvotes,
    views,
    answers,
    createdAt,
}: Props) => {
    return (
        <div className="card-wrapper  rounded-[10] border border-slate-300 py-9 shadow dark:border-none sm:px-11">
            <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
                <div>
                    <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
                        {getTimeStamp(createdAt)}
                    </span>
                    <Link href={`/question/${_id}`}>
                        <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                            {title}
                        </h3>
                    </Link>
                </div>
                {/* {if signed in add edit delete} */}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <RenderTag key={tag._id} _id={tag._id} title={tag.name} />
                ))}
            </div>
            <div className="flex-between mt-16 w-full flex-wrap gap-3">
                <Metric
                    imgUrl="/assets/icons/avatar.svg"
                    alt="user"
                    value={author.name}
                    title={`-asked ${getTimeStamp(createdAt)}`}
                    href={`/profile/${author._id}}`}
                    isAuthor
                    textStyles="bodys-medium text-dark400_light700 "
                />
                <Metric
                    imgUrl="/assets/icons/like.svg"
                    alt="Upvotes"
                    value={formatNumber(upvotes)}
                    title=" Votes"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl="/assets/icons/message.svg"
                    alt="message"
                    value={formatNumber(answers.length)}
                    title=" Answers"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl="/assets/icons/eye.svg"
                    alt="eye"
                    value={formatNumber(views)}
                    title=" Views"
                    textStyles="small-medium text-dark400_light800"
                />
            </div>
        </div>
    );
};

export default QuestionCard;
