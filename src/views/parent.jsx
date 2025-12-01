import React from 'react'
import useCounterCustomHook from './Child.jsx'


function Parent() {
    const { count, increment } = useCounterCustomHook()

    return (
        <div>
            <h2>Count:: {count}</h2><br />
            <button 
                onClick={increment}
                className='bg-purple-600 text-white px-4 py-2 rounded'
            >
                INCREMENT
            </button>
        </div>
    )
}
export default Parent