import RestaurantItem from "./restaurant-item";

export default function PlacesToEat({ restaurants }) {
    return (
        <section className="w-full max-w-6xl mx-auto px-2 py-8 flex flex-col px-4">
            <h3 className="text-3xl font-semibold text-zinc-100 mb-2">
                Places to eat
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                {restaurants.map(restaurant => (
                    <RestaurantItem restaurant={restaurant} key={restaurant.id} />
                ))}
            </div>
        </section>
    );
}