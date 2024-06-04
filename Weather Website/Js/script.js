const apikey="787ac53fbc6ce6bebf2d6a626c8f8476";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404 ){
        document.querySelector(".error").style.display="block";
    }



    var data=await response.json();


    console.log(data)
     
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
     document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
     document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src= "../Assets/Icons/clouds.png";
    }
   
    else if(data.weather[0].main == "Clear"){
        weathericon.src= "../Assets/Icons/clear.png";
    }
    
    else if(data.weather[0].main == "Rain"){
        weathericon.src= "../Assets/Icons/rain.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        weathericon.src= "../Assets/Icons/drizzle.png";
    }

    else if(data.weather[0].main == "Mist"){
        weathericon.src= "../Assets/Icons/mist.png";
    }



} 

searchbtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);

})