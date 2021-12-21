import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row align-item-center">
                <div className="col-2">
                    <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>
                </div>
                <div className="col-2">
                    <h2>Counter : {count}</h2>
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increase</button>
                </div>
            </div>
        
        </div>
    )
}

export default Counter
