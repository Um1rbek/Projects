// const elBtn1 = document.querySelector(".btn1");
// const elBtn2 = document.querySelector(".btn2");
// const elBtn3 = document.querySelector(".btn3");


// elBtn1.addEventListener("click" , ()=> {
//     elBtn1.textContent = "BOsildi!"

  
// })

// elBtn2.addEventListener("click" , ()=> {

//     elBtn2.textContent = "BOsildi!"
    
// })


// elBtn3.addEventListener("click" , ()=> {
//         elBtn3.textContent = "BOsildi!"
// })



// //2
// const elText = document.querySelector(".text")


// window.addEventListener("keydown" , (e) => {
//     if(e.key === "Backspace"){
//         elText.textContent = "";
//     }else{
//         console.log(e);
//         elText.textContent = e.key;
//     }
// })



// //3
// const elCard1 = document.querySelector(".card1")
// const elCard2 = document.querySelector(".card2")

// elCard1.addEventListener("mouseover" , () => {
//     elCard1.style.backgroundColor = "green";
//     elCard1.textContent = "bosildi"
// })

// elCard2.addEventListener("mouseout" , () => {
//     elCard2.style.backgroundColor = "red";
//     elCard2.textContent = "bosilgan "
// })



// //4
// const elBox = document.querySelector(".box")

// elBox.addEventListener("mouseover" , (e) => {
//     elBox.innerHTML= `<img src="./Снимок экрана 2024-11-21 181901.png" alt="">`
// })


// elBox.addEventListener("mouseout" , (e) => {
//     elBox.innerHTML= `<img src="./Снимок экрана 2024-08-24 095714.png" alt="">
//     `
// })


// // 5

// const elBox = document.querySelector(".box")

// window.addEventListener("mousmove" , (e) =>{
//     const randomX = Math.random(Math.random() * 1000);
//     const randomY = Math.random(Math.random() * 1000);
//     console.log(randomX,randomY);

//     elBox.style.position = "absolute";
//     elBox.style.top = `${randomX}px`;
//     elBox.style.left = `${randomY}px`;
// });


//6


// //7

// const elPlus = document.querySelector(".plus")
// const elMinus = document.querySelector(".minus")
// const elCount = document.querySelector(".count")
// const elResert = document.querySelector(".resert")

// let count = 0;

// elPlus.addEventListener("click" , () => {
//     count++;
//     elCount.innerHTML = count;
// })

// elMinus.addEventListener("click" ,() => {
//     if(count > 0){
//         count-- ;
//         elCount.innerHTML = count;
//     }
// })

// elResert.addEventListener("dbckick" , () => {
//    const boolean = confirm("Are you sure ?")
//    if( booleam == true){
//     elCount.innerHTML = 0;
//    }
// })