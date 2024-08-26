const input=document.getElementById('input');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const desc =document.querySelector('.desc');
const hum=document.getElementById('hum');
const wind_speed=document.getElementById('wind-speed');
const not_found=document.querySelector('.not-found');
const weather_body=document.querySelector('.weather-body');


 async function checkWeather(city){
    const api_key='e6c000d285ddb3c04244c2f5b72759d6';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod==='404'){
        not_found.style.display='flex';
        weather_body.style.display='none';
        return;
    }
    else{
        weather_body.style.display='flex';
        not_found.style.display='none';
    }

    temperature.innerHTML=`${Math.round(weather_data.main.temp-275.15)}°C`;
    desc.innerHTML=`${weather_data.weather[0].description}`;
    hum.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;

    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(input.value)
});