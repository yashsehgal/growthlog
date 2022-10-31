
export default function Hero() {
    return (
        <section className="hero-section my-12">
            <h2 className="text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              <span className="growthlog-animated-gradient">growthlog</span> 
              <span className="emoji-wrapper ml-2">{"🚀"}</span>
            </h2>
            <p className="hero-section-description text-base font-normal text-gray-600 leading-snug w-fit h-auto flex flex-row items-center justify-start gap-2 mt-6">
                <span className="inner-content">{"Growth from 2021 till "}</span>
                <span className="inner-content date-wrapper flex flex-row items-center justify-start gap-1">
                    <span className="inner-content date_date-wrapper px-2 py-1 rounded-md border border-gray-300 shadow bg-gray-100 text-sm">
                        {"Date: " + new Date().getDate()}
                    </span>
                    <span className="inner-content date_month-wrapper px-2 py-1 rounded-md border border-gray-300 shadow bg-gray-100 text-sm">
                        {"Month: " + new Date().getMonth()}
                    </span>
                    <span className="inner-content date_year-wrapper px-2 py-1 rounded-md border border-gray-300 shadow bg-gray-100 text-sm">
                        {"Year:" + new Date().getFullYear()}
                    </span>
                </span>
            </p>
        </section>
    )
}