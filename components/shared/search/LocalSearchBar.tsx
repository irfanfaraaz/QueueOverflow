"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
    route: string;
    iconPosition: "left" | "right";
    igmSrc: string;
    placeholder: string;
    otherClasses?: string;
}
const LocalSearchBar = ({
    route,
    iconPosition,
    igmSrc,
    placeholder,
    otherClasses,
}: CustomInputProps) => {
    return (
        <div className="relative w-full max-w-[600px] ">
            <div
                className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}
            >
                {iconPosition === "left" && (
                    <Image
                        src={igmSrc}
                        alt="search"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                )}
                <Input
                    type="text"
                    placeholder={placeholder}
                    value=""
                    onChange={() => {}}
                    className="paragraph-regular no-focus placeholder background-light800_darkgradient border border-slate-200 shadow-none outline-none dark:border-none"
                />
                {iconPosition === "right" && (
                    <Image
                        src={igmSrc}
                        alt="search"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                )}
            </div>
        </div>
    );
};

export default LocalSearchBar;
