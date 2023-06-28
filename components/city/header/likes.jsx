"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Likes() {
    const [likes, setLikes] = useState(0);
    const [likeClass, setLikeClass] = useState("");

    useEffect(() => {
        if (likes < 1) return;

        setLikeClass("animate-ping");

        setTimeout(() => {
            setLikeClass("");
        }, 600);
    }, [likes]);

    return (
        <button
            className={`
                absolute -top-6 right-0 rounded-full h-12 bg-zinc-800 px-3
                text-red-500 border border-zinc-500 flex flex-row justify-center items-center
            `}
            type="button"
            onClick={() => setLikes(likes + 1)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill={likes < 1 ? "none" : "currentColor"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames("w-8 h-8 mr-2", likeClass)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span className="text-zinc-300 w-16">
                {likes} likes
            </span>
        </button>
    )
}