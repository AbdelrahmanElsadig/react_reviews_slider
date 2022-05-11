import React, { useEffect, useState } from 'react';
import { review_info } from '../types/types';
import { reviews } from '../data/reviews';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { ArrowButton } from './ArrowButton';
const Slider = () => {
    const [curIndex, setIndex] = useState(0);
    const prevIndex = (curIndex - 1 + reviews.length) % reviews.length;
    const nextIndex = (curIndex + 1) % reviews.length;
    useEffect(() => {
        const timer = setTimeout(() => setIndex(nextIndex), 2500);
        return () => clearTimeout(timer)
    }, [curIndex])
    return (
        <div className='flex gap-0 w-[90%] h-[450px] max-w-[768px] relative overflow-hidden rounded-lg mx-auto bg-neutral-200 p-4'>
            {reviews.map((review, index) => {
                return (
                    <SliderItem key={review.id} details={review} index={index} currentIndex={curIndex} />
                )
            })}
            <ArrowButton clickHandler={() => setIndex(prevIndex)} ArrowSvg={FiChevronLeft} direction='left' />
            <ArrowButton clickHandler={() => setIndex(nextIndex)} ArrowSvg={FiChevronRight} direction='right' />
        </div>
    )
}

function SliderItem({ details, index, currentIndex }:
    { details: review_info, index: number, currentIndex: number }) {
    const prevIndex = (index - 1 + reviews.length) % reviews.length;
    const nextIndex = (index + 1) % reviews.length;
    let style = `min-w-[100%] flex flex-col gap-6 items-center mx-auto transition-all duration-500 ease-out`;
    if (index !== currentIndex) style += ' absolute top-0 opacity-0';
    if ((currentIndex > index && nextIndex !== index) || prevIndex === index)
        style += " translate-x-full";
    if ((currentIndex < index && prevIndex !== index) || nextIndex === index)
        style += " -translate-x-full";
    return (
        <>
            <div className={style}>
                <img className='w-40 h-40 object-cover rounded-full mx-auto border-4 border-solid border-slate-500 ' src={details.image} alt="" />
                <div className="flex-flex-col gap-4 items-center text-center">
                    <h1 className="text-lg font-bold text-amber-800 capitalize">{details.name}</h1>
                    <h1 className="text-lg capitalize font-semibold">{details.job}</h1>
                </div>
                <p className="">{details.text}</p>
                <FaQuoteRight className='fill-amber-800 text-4xl' />
            </div>



        </>
    )
}

export { Slider } 
