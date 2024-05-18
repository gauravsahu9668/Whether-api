const apikey="e0f49d2c60547712f71b3c7a2f3eb61b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var data;
const weatherimage=document.getElementsByClassName(".weather-icon");
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkweather(city){
    const response =await fetch(apiurl + city +`&appid=${apikey}`);
     data = await response.json();
    console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
if(data.weather[0].main=="Clouds"){
    weatherimage.src='1.png';
}
}
searchBtn.addEventListener('click',()=>{
    checkweather(searchBox.value);
})