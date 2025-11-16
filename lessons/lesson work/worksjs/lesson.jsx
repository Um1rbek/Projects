import { useState } from 'react';

function Lesson() {
  const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1);
    };

    const dec = () => {
        count > 0 ? setCount(count - 1) : setCount(0)
    }

    const reset = () => {
        setCount(0);
    }



  return (
    <>
        <div className="container">
            <div className="card">
                <h1 className="title">{count}</h1>

                <div className="btn-card">
                    <button className="btn" onClick={dec} >Dec</button>
                    <button className='btn' onClick={inc} >Inc</button>
                    <button className="btn" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Lesson