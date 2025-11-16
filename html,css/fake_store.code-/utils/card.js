function fetchData(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
    .catch(err => console.error(err));
}

function showData(data) {
  const box = document.getElementById('box');
  let row = document.createElement('div');
  row.className = 'row';

  // 4 ta column
  const columns = Array.from({ length: 4 }, () => {
    const col = document.createElement('div');
    col.className = 'col-md-3 d-flex flex-column gap-3';
    row.appendChild(col);
    return col;
  });

  data.forEach((item, index) => {
    const shortTitle = item.title.split(" ").slice(0, 2).join(" ");
    const oldPrice = (item.price * 1.2).toFixed(2);

    const cardHTML = `
      <div class="card p-2 border-success h-100">
        <img src="${item.image}" alt="${item.title}" class="card-img-top" style="height: 100px; object-fit: contain;">
        <div class="card-body d-flex flex-column justify-content-between">
          <h6 class="card-title" style="font-size: 16px;">${shortTitle}</h6>
          <div class="d-flex justify-content-between align-items-center">
            <p class="text-uppercase fw-bold m-0">${item.price}$</p>
            <p class="fw-bold text-secondary text-uppercase m-0 text-decoration-line-through">${oldPrice}$</p>
          </div>
          <button class="btn btn-sm btn-success mt-2" onclick="redirectToCart(${item.id})">Add to Cart</button>
        </div>
      </div>
    `;

    const cardWrapper = document.createElement('div');
    cardWrapper.innerHTML = cardHTML;
    columns[index % 4].appendChild(cardWrapper.firstElementChild);
  });

  box.appendChild(row);
}

// Add bosilganda sahifani o'zgartirish
function redirectToCart(id) {
  localStorage.setItem("productId", id);  // id ni saqlaymiz
  window.location.href = '../page/OneCard.html'; // kerakli manzilga moslab o'zgartiring
}

// Bu yerda fetchData funksiya chaqirilmoqda
fetchData('https://fakestoreapi.com/products');

// Next tugmasi
const nextCard = document.querySelector("#next-card");
if (nextCard) {
  nextCard.addEventListener("click", () => {
    window.location.href = '../pages/home.html';
  });
}

