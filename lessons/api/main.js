const request = new XMLHttpRequest();

const Elcard = `




`;


request.addEventListener("readystatechange", () => {
    if(request.status === 200 && request.readyState === 4){
        const data = JSON.parse(request.responseText);


        data.map((item, index) => {
            const elCards = document.querySelector(".cards");
            elCards.innerHTML += `    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.id}</p>
          <a href="#" class="btn btn-primary">${item.completed}</a>
        </div>
      </div>`
        } )
    }
});

request.open("GET" , "https://jsonplaceholder.typicode.com/todos");

request.send();