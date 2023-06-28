import Link from "next/link";
import Likes from "./likes";

export default function Header({ imgUrl }) {
    return (
        <div className="w-full border-b-2 border-zinc-500 relative">
            <figure className="w-full overflow-hidden h-96">
                <img src={imgUrl} className="w-full h-full object-cover object-center" />
            </figure>
            <div className="w-full max-w-6xl mx-auto px-2">
                <div className="w-full relative">
                    <Link href="/"
                        className={`
                                absolute -top-6 left-0 rounded-full h-12 w-12 bg-zinc-800 px-3 group
                                text-red-500 border border-zinc-500 flex flex-row justify-center items-center
                            `}
                    >
                        <span className="text-zinc-300 font-bold group-hover:scale-125 duration-200">
                            &larr;
                        </span>
                    </Link>
                    <Likes />
                </div>
            </div>
        </div>
    )
}