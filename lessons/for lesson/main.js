const psRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{}|;:,.<>?]).{10,}$/

// const paregex = /^[A-Za-z0-9]/;
const green = document.querySelector(".green__text");
const yellow = document.querySelector(".yellow__text");
const red = document.querySelector(".red__text");
const ps = document.querySelector(".ps")
const btn = document.querySelector(".button")



ps.addEventListener("input", (e) => {
    e.preventDefault();
    var pasword = e.target.value;



    if (psRegex.test(pasword)) {
        green.classList.add('green__texts')
        green.textContent = 'Hammasi joyida'
    } else if (psRegex.test(pasword) || pasword.length < 8) {
        green.classList.add('yellow__texts')
        green.textContent = 'kamida 8ta belgi'
    } else {
        green.classList.add('red__texts')
        green.textContent = 'Xato'
    }
})










