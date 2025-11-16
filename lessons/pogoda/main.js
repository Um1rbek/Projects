const API_KEY = `c67e3943b1537eb384b2ac2193719538`;
const API = `https://api.openweathermap.org/data/2.5/weather?q=samarqand&units=metric&appid=${API_KEY}`;
const elWrapper = document.querySelector(".wrapper");


function getWeather(url) {
    fetch(url)
        .then((respons) => respons.json())
        .then((weather) => showWeather(weather))
}

getWeather(API)



function showWeather(weather) {
    const item = weather.main.temp;
    const name = weather.name;
    const humidity = weather.main.humidity;
    const wind = weather.wind.speed;

    elWrapper.innerHTML = `

    <div class="weather-conteiner">


    

        <div class="box">
                <h2 class="city-name">${name}</h2>
            <div class="weather-info">
                <div class="temperature">+${item}C</div>
                    <div class="details">
                    <p>Namlik: ${humidity}%</p>
                    <p>Shamol: ${wind} m/s </p>
                </div>
            </div>
        </div>
    </div>
    `
}


const elSearch = document.querySelector(".search");

elSearch.addEventListener("click", () => {
    const elInput = document.querySelector(".input").value.trim();

    console.log(elInput);


    const API = `https://api.openweathermap.org/data/2.5/weather?q=${elInput}&units=metric&appid=${API_KEY}`;

    fetch(API)
        .then((res) => res.json())
        .then((data) => showWeather(data));
});


