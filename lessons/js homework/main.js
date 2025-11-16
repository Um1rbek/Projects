const elForm = document.querySelector(".login-form"),
elPassword = document.querySelector("#password"),
elUsername = document.querySelector("#username"),
elBtn = document.querySelector(".login-btn");

elBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const passwordValue = elPassword.value.trim();
    const userValue = elUsername.value.trim();
    window.location.href = 'https://chatgpt.com/'

    if (passwordValue.length && userValue.length){
        console.log("Success");
        console.log("passwordValue, userValue");
    } else{
        alert("maydonni toldirin");
    }
});