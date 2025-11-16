import React from 'react'
import './App.css'

const App = () => {

  // function oo6() {
  //         const a =  prompt("Enter the number: ..")

  //             console.log(a+a+a+a+a+a)
  //       console.log(a+"    "+a)
  //       console.log(a+"    "+a)
  //       console.log(a+a+a+a+a+a)

  // }

  // function oo7() {
   const a = Number(prompt("Enter the number: "));  //30

    if (a >= 1 && a <= 31) {   
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let result = "";

      for ( let i = 0   ; i < 7   ; i++ ) { 
        let day = a + i; // 30 + 1

        if (day > 31) {
          day = day - 31; 
        }
        result = `${weekdays[i]} → ${day}`; 
        console.log(result);
      }

    } else {
      console.log("Bu son oyda yoq");
    }
  // }



  return (
    <h1>pRB</h1>
  )
}

export default App