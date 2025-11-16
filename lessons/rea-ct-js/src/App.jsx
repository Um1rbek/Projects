
import React, {useEffect, useState} from "react";
import './App.css'

const App = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="text-center text-9xl">Todo List</h1>
      <h1 className="text-center text-5xl my-4">{count}</h1>
      <div className="flex justify-center gap-4 mb-10">
        <button className="w-[100px] h-[100px] bg-amber-400 text-3xl" onClick={inc}>
          +
        </button>
        <button className="w-[100px] h-[100px] bg-amber-400 text-3xl" onClick={dec}>
          -
        </button>
      </div>

      <div className="flex flex-wrap gap-[20px] w-[1200px] m-auto justify-center">
        {data.length > 0 ? (
          data.slice(0, 12).map((item, index) => (
            <div
              key={index}
              className="card w-[200px] h-[150px] bg-amber-200 border-2 flex items-center justify-center text-center p-4"
            >
              <h1 className="text-md font-medium">{item.title}</h1>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};


export default App
