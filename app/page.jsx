import Image from "next/image";
import cities from "@/data/cities";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full min-h-screen bg-zinc-900">
			<section className="w-full">
				<div className="w-full max-w-6xl mx-auto px-4 py-10">
					<h1 className="text-6xl font-bold text-center text-zinc-100">
						Cityscape Guide 🌆
					</h1>
				</div>
			</section>
			<div className="w-full grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4 gap-4 py-10">
				{cities.map(city => (
					<Link
						className="relative w-full"
						href={`/city/${city.id}`}
					>
						<figure className="w-full aspect-[3/2] overflow-hidden group cursor-pointer relative">
							<Image
								src={city.imgUrl}
								priority
								className="rounded-lg border-4 border-zinc-700 group-hover:blur-sm duration-200 cursor-pointer"
								fill={true}
							/>
							<div className="absolute bottom-0 left-0 w-full pb-4 px-4 text-2xl font-medium text-white opacity-0 group-hover:opacity-100 duration-300 -translate-x-5 group-hover:translate-x-0">
								<p>{city.title}</p>
								<p className="text-sm font-base opacity-70">{city.country}</p>
							</div>
						</figure>
					</Link>
				))}
			</div>
			<footer className="w-full">
				<div className="w-full max-w-6xl mx-auto px-4">
					<p className="text-center text-zinc-400 text-xs border-t border-t-zinc-400 py-10">
						Built for the SuperHi Plus "Intro to Next.js" course 👋
					</p>	
				</div>
			</footer>
		</main>
	);
}
