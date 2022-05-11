import React from 'react'

const ArrowButton = ({ ArrowSvg, direction, clickHandler }:
    { ArrowSvg: any, direction: 'right' | 'left', clickHandler: () => void }) => {
    return (
        <div>
            <button onClick={() => { clickHandler() }} className={`absolute ${direction === 'right' ? 'left-full' : 'right-full'} top-1/2 
            ${direction === 'right' ? '-translate-x-full' : 'translate-x-full'} -translate-y-1/2
             bg-slate-400 rounded-md hover:bg-slate-600 p-2 duration-200 ease-in-out`}>
                <ArrowSvg className='text-white text-xl w-100 ' />
            </button>

        </div>
    )
}

export { ArrowButton } 
