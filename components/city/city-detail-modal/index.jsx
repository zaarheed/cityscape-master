import Map from "@/components/city/map";

export default function CityDetailModal({ item }) {
    return (
        <div className="bg-zinc-900 w-full h-full flex flex-col">
            <figure className="w-full h-44 sm:h-96 rounded-t-xl rounded-b-none overflow-hidden shrink-0">
                <img src={item.imgUrl} className="w-full h-full object-cover object-bottom" />
            </figure>
            <div className="w-full h-full px-4 py-8">
                <p className="text-2xl sm:text-4xl font-semibold text-zinc-100">
                    {item.title}
                </p>
                <p className="text-md font-medium text-zinc-400">
                    {item.city}
                </p>

                <p className="text-zinc-100 mt-4 text-xs sm:text-base">
                    {item.description}
                </p>

                <div className="relative mt-4 rounded overflow-hidden flex flex-col items-center justify-center bg-zinc-800 h-32 sm:h-64 text-zinc-300">
                    <Map locations={[{ lat: item.latitude, lng: item.longitude }]} />
                </div>
            </div>
        </div>
    )
}