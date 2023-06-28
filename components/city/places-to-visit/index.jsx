import PlaceItem from "./place-item";

export default function PlacesToVisit({ places = [] }) {
    return (
        <section className="w-full max-w-6xl mx-auto px-2 py-4 flex flex-col px-4">
            <h3 className="text-3xl font-semibold text-zinc-100 mb-2">
                Places to visit
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                {places.map(place => (
                    <PlaceItem place={place} key={place.id} />
                ))}
            </div>
        </section>
    )
}