import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
    return (
        <div className="py-20" id='projects'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
                Kind words from
                <span className="text-purple-400"> Satified Clients</span>
            </h1>
            <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Clients