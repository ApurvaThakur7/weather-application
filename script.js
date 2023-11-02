const apikey="06964d47f490710bd32cc76e6e32de85";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";

const search=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
async function checkweather(city){
    const response= await fetch(apiUrl + city  + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    var data = await response.json();
    
    
    
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
    
    if(data.weather[0].main == "Clouds"){
         weathericon.src="clouds.png";
    }

   else if(data.weather[0].main == "Clear"){
        weathericon.src="clear.png";
   }
   else if(data.weather[0].main == "Rain"){
    weathericon.src="rain.png";
   }
   else if(data.weather[0].main == "Mist"){
    weathericon.src="mist.png";
   }
   else if(data.weather[0].main == "Snow"){
    weathericon.src="snow.png";
   }
   else  if(data.weather[0].main == "Drizzle"){
    weathericon.src="drizzle.png";
}

document.querySelector(".weather").style.display="block";
}



 searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
 })
