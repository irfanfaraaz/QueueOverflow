"use client";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const query = searchParams.get("q");

    const [search, setSearch] = useState(query || "");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "q",
                    value: search,
                });
                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === route) {
                    const newUrl = removeKeysFromQuery({
                        params: searchParams.toString(),
                        keys: ["q"],
                    });
                    router.push(newUrl, { scroll: false });
                }
            }
        }, 300);
        return () => clearTimeout(delayDebounceFn);
    }, [search, route, pathname, router, searchParams]);
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
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
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
