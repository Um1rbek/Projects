const api = `https://jsonplaceholder.typicode.com/photos`;
const elList = document.querySelector(".wrapper");
const request = new XMLHttpRequest();
const elLoading = document.querySelector(".lds-spinner");

// request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);

//         const result = data.slice(0, 50);
//         result.map((item, index) => {
//             console.log(item);
//             elLoading.classList.add("hidden");
//             elList.innerHTML += `
//             <div class = "card">
//             <span>${item.id}</span>
            
//                 <img loading ="lizy" src="https://picsum.photos/200/300";
//                 <div class="card-conteiner">
//                     <h3>${item.title}</h3>
//                     <a href="https://via.placeholder.com/600/92c952" target="_blank">
//                         korish
//                     </a>
//                 </div>
//             </div>
//             `

//         })
//     }
// })



fetch(api)

    .then((response) => response.json())
    .then((data) => console.log(data));