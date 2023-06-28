export default function Details({ title, country, description }) {
    return (
        <section className="w-full max-w-6xl mx-auto px-2 pt-12 py-8 px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100">
                {title}
            </h1>
            <p className="text-lg text-zinc-100">
                {country}
            </p>

            <div className="w-full md:w-7/12 mt-4">
                <p
                    className="text-white opacity-50 line-clamp-3"
                >
                    {description}
                </p>
            </div>
        </section>
    )
}