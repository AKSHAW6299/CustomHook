import React, { useState } from 'react'


function useCounterCustomHook() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 100)
    }

    return { count, increment }
}
export default useCounterCustomHook;