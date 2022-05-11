import React from 'react'
import { Slider } from './Slider'

const Project = () => {
    return (
        <div className='my-16 w-full flex flex-col mx-auto gap-8 items-center'>
            <h1 className="text-4xl font-bold text-center pb-3 relative
            after:absolute after:h-1 after:w-1/2 after:bg-amber-800
            after:left-1/4 after:bottom-0">Our Reviews</h1>
            <Slider />
        </div>
    )
}

export { Project }
