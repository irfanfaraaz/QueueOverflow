import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
    _id: string;
    title: string;
    totalQuestions?: number;
    showCount?: boolean;
}
const RenderTag = ({ _id, title, totalQuestions, showCount }: Props) => {
    return (
        <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
            <Badge className="subtle-medium text-light400_light500 rounded-md border-none bg-gray-200 px-4 py-2 uppercase dark:bg-dark-300">
                {title}
            </Badge>

            {showCount && (
                <p className="small-medium text-dark500_light700">
                    {totalQuestions}
                </p>
            )}
        </Link>
    );
};

export default RenderTag;
