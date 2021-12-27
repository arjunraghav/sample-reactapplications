import React, {useState} from 'react'

const Counter = () => {
    const [counterData, setCounter] = useState(0)
    return (
        <>
            <div>
                {counterData}
                <button onClick={()=>{setCounter(counterData + 1)}}>
                    Add
                </button>
                <button onClick={()=>{setCounter(0)}}>
                    reset
                </button>
            </div>
        </>
    )
}

export default Counter
