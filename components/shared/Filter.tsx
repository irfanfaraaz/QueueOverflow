"use client";

import React from "react";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    filters: {
        name: string;
        value: string;
    }[];
    otherClasses?: string;
    containerClasses?: string;
}
const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const paramFilter = searchParams.get("filter");
    const handleUpdateParams = (value: string) => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "filter",
            value,
        });
        router.push(newUrl, { scroll: true });
    };
    return (
        <div className={`relative ${containerClasses}`}>
            <Select
                onValueChange={handleUpdateParams}
                defaultValue={paramFilter || undefined}
            >
                <SelectTrigger
                    className={`${otherClasses} body-regular light-border text-dark500_light700 border bg-gray-200  px-5 py-2.5 dark:bg-dark-300`}
                >
                    <div className="line-clamp-1 flex-1">
                        <SelectValue placeholder="Select a Filter" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="text-dark500_light700 border">
                        {filters.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Filter;
