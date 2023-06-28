import Details from "@/components/city/details";
import Header from "@/components/city/header";
import PlacesToEat from "@/components/city/places-to-eat";
import PlacesToVisit from "@/components/city/places-to-visit";
import cities from "@/data/cities"

export default function CityPage({ children, params }) {
    const city = cities.find(city => city.id === params.cityId);

    return (
        <div className="w-full bg-zinc-900">
            <Header
                imgUrl={city.imgUrl}
            />
            <Details
                title={city.title}
                country={city.country}
                description={city.description}
            />
            <PlacesToVisit
                places={city.places.map(place => ({ ...place, city: city.title, country: city.country }))}
            />
            <PlacesToEat
                restaurants={city.restaurants.map(restaurant => ({ ...restaurant, city: city.title, country: city.country }))}
            />
            {children}
        </div>
    )
} 