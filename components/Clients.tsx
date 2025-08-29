import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <section className="py-20" id="testimonials">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
                Kind words from {" "}
                <span className="text-purple-400"> Satified Clients</span>
            </h1>
            <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {companies.map((company) => (
                    <React.Fragment key={company.id}>
                        <div className="flex md:max-w-60 max-w-32 gap-2">
                            <img
                                src={company.img}
                                alt={company.name}
                                className="md:w-10 w-5"
                            />
                            <img
                                src={company.nameImg}
                                alt={company.name}
                                width={company.id === 4 || company.id === 5 ? 100 : 150}
                                className="md:w-24 w-20"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Clients