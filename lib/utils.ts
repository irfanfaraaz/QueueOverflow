import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
    const date = new Date(createdAt);
    const now = new Date();

    const diffMilliseconds = now.getTime() - date.getTime();
    const diffSeconds = Math.round(diffMilliseconds / 1000);
    if (diffSeconds < 60) {
        return `${diffSeconds} seconds ago`;
    }

    const diffMinutes = Math.round(diffSeconds / 60);
    if (diffMinutes < 60) {
        return `${diffMinutes} mins ago`;
    }

    const diffHours = Math.round(diffMinutes / 60);
    if (diffHours < 24) {
        return `${diffHours} hours ago`;
    }

    const diffDays = Math.round(diffHours / 24);

    return `${diffDays} days ago`;
};

export function formatDate(createdAt: Date) {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        createdAt
    );
    return formattedDate;
}

export function formatNumber(number: number): string {
    if (number >= 1000000) {
        const formattedNum = (number / 1000000).toFixed(1);
        return `${formattedNum}M`;
    } else if (number >= 1000) {
        const formattedNum = (number / 1000).toFixed(1);
        return `${formattedNum}K`;
    } else {
        return number.toString();
    }
}

export const getJoinedDate = (date: Date): string => {
    // Extract the month and year from the Date object
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Create the joined date string (e.g., "September 2023")
    const joinedDate = `${month} ${year}`;

    return joinedDate;
};

interface UrlQueryParams {
    params: string;
    key: string;
    value: string | null;
}
export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
    const currentUrl = qs.parse(params);
    currentUrl[key] = value;

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        { skipNull: true }
    );
};

interface RemoveUrlQueryParams {
    params: string;
    keys: string[];
}
export const removeKeysFromQuery = ({ params, keys }: RemoveUrlQueryParams) => {
    const currentUrl = qs.parse(params);
    keys.forEach((key) => {
        delete currentUrl[key];
    });

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        { skipNull: true }
    );
};
