import { useState } from 'react'

function Example() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Laravel + React</h1>

            <h2>Example component</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default Example
