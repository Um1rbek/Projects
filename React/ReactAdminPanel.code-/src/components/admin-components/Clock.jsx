// // import React, { useState, useEffect } from "react";

// // export default function Clock() {
// //   const [time, setTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTime(new Date());
// //     }, 1000);

// //     // Komponent unmount bo'lganda intervalni tozalash
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <div>
// //       <h1>{time.toLocaleTimeString()}</h1>
// //     </div>
// //   );
// // }


// // import React, {useState, useEffect} from "react"

// // export default function Clock() {
// //   const [time , setTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTime(new Date());

// //     }, 1000)
// //   }, []);

// //   return (
// //     <div>
// //       <h1>{time.toLocaleTimeString()}</h1>
// //     </div>
// //   )

// // }


// // import React, {useState, useEffect} from "react"

// // export default function Clock() {
// //   const [time , setTime] = useState(new Date())

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTime(new Date());

// //     }, 1000)
// //   }, []);


// //   return (
// //     <div>
// //       <h1>{time.toLocaleTimeString()}</h1>
// //     </div>
// //   )
// // }





// // import React, {useState, useEffect} from "react"

// // export default function Clock() {
// //   const [time, setTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTime(new Date());
// //     }, 1000);
// //   }, []);

// //   return (
// //     <div>
// //       <h1>{time.toLocaleTimeString()}</h1>
// //     </div>
// //   )

// // }









// // import React, {useState, useEffect } from "react"

// // export default function Clock() {

// //   const [time, setTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //         setTime(new Date());
// //     }, 1000)
// //   }, [])


// //   return (
// //     <div>
// //       <h1>{time.toLocaleTimeString()}</h1>
// //     </div>
// //   )
 
// // }




// import React , {useState , useEffect} from "react"

 
// export default function Clock() {
//   const []
// }













// // export default function Clock() {
// //   const [time, setTime] = useState(new Date());

// //   useEffect(() => {
// //     const timer = setInterval( () => {
// //       setTime(new Date())
// //     }, 1000);
// //   }, []);


// //   return (
// //     <div>
// //       <h1>{time.toLocaleTimeString()}</h1>
// //     </div>
// //   )
// // }



// import React , {useState , useEffect} from "react"


// export default function Clock() {
//     const [time , setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date())
//         }, 1000)
//     }, []);


//     return (
//         <div>
//             <h1>{time.toLocaleTimeString()}</h1>
//         </div>
//     )

// }


// import React, {useState , useEffect} from "react"


// export default function Clock() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date())
//         }, 1000)
//     }, []);

//     return (
//         <div>
//             <h1>{time.toLocaleTimeString()}</h1>
//         </div>
//     )
// }



// import React, { useState } from "react";

// const Child = React.memo(({ count }) => {
//   console.log("Child render!");
//   return <h2>Count: {count}</h2>;
// });

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <Child count={count} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const Child = React.memo(({ count }) => {
    console.log("Render");

    return <h2>Count : {count}</h2>
    
});

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <Child count={count} />
            <button onClick={() => setCount(count + 1)}>inc</button>
            <button onClick={() => setCount(count - 1)}>dec</button>
        </div>
    )
};

export defult App;