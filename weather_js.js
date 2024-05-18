const apikey = 'e9bb00c1f13850bacaada7758f0ea0d0';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=';
async function checkweather(city){
        // const city = document.querySelector('.search input').value;
        const response = await fetch(apiurl + city + '&appid=e9bb00c1f13850bacaada7758f0ea0d0');
        if(response.status == 404){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.inner_box').style.display = 'none';
        }
        else{
            let api = await response.json();
        console.log(api);
        document.querySelector('.temperature').innerHTML = parseInt(Number(api.main.temp)-273) + '°C';
        document.querySelector('.city').innerHTML = api.name;
        document.querySelector('.wind').innerHTML = api.wind.speed + ' km/h';
        document.querySelector('.humidity').innerHTML = api.main.humidity + ' %';
        const weather = api.weather[0].main;
        if(weather == 'Clear' || weather == 'Clouds' || weather == 'Drizzle' || weather == 'Mist' || weather == 'Rain' || weather == 'Snow')
        document.querySelector('.weather-icon').src = 'images/' + weather +'.png';
        document.querySelector('.inner_box').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        }

}
const button = document.querySelector('.search button');
const city = document.querySelector('.search input');
button.addEventListener('click', () => {
    checkweather(city.value);
});
