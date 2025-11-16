function getSingleProduct() {
    const id = localStorage.getItem("productId");

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            renderSingleProduct(data);
        })
       
}

getSingleProduct();  

const box = document.querySelector("#onepro");

function renderSingleProduct(data) {
    box.innerHTML = `
        <section class="container d-flex mt-5 align-items-center justify-content-between gap-5 ">
            <div>
                <img src="${data.image}" alt="${data.title}" class="w-50">
            </div>
            <div>
                <h2 class="text-capitalize fw-bold fs-2 w-100">${data.title}</h2>
                <h1 class="fs-1 fw-bold text-uppercase">${data.price} $</h1>
                <p class="fs-5 fw-bold w-100">${data.description}</p>
            </div>
        </section>`;
}


