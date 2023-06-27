const URL = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'f3036cd195msh0049b8e16531f3bp139222jsn8673bc667cf9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
cityName.innerHTML = city

    fetch(URL + city , options)
    .then(response => response.json())
    .then( response => {

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    
    })
    .catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather()




const delhiWeather=(url ,city, cb)=>{
    fetch(url + city , options)
    .then(response => response.json())
    .then(cb)
    .catch(err => console.log(err));
  
}
delhiWeather(URL , "delhi", response => {
    cloud_pct_delhi.innerHTML = response.cloud_pct
    temp_delhi.innerHTML = response.temp
    feels_like_delhi.innerHTML = response.feels_like
    humidity_delhi.innerHTML = response.humidity
    min_temp_delhi.innerHTML = response.min_temp
    max_temp_delhi.innerHTML = response.max_temp
    wind_speed_delhi.innerHTML = response.wind_speed
    wind_degrees_delhi.innerHTML = response.wind_degrees
    sunrise_delhi.innerHTML = response.sunrise
    sunset_delhi.innerHTML = response.sunset

})
 



const mumbaiWeather = (url, city, cb)=>{
    fetch(url + city , options)
    .then(response => response.json())
    .then(cb)
    .catch(err => console.log(err));
    
}
mumbaiWeather(URL , "mumbai", response => {
    cloud_pct_mumbai.innerHTML = response.cloud_pct
    temp_mumbai.innerHTML = response.temp
    feels_like_mumbai.innerHTML = response.feels_like
    humidity_mumbai.innerHTML = response.humidity
    min_temp_mumbai.innerHTML = response.min_temp
    max_temp_mumbai.innerHTML = response.max_temp
    wind_speed_mumbai.innerHTML = response.wind_speed
    wind_degrees_mumbai.innerHTML = response.wind_degrees
    sunrise_mumbai.innerHTML = response.sunrise
    sunset_mumbai.innerHTML = response.sunset
    });


    

const kolkataWeather = (url, city, cb)=>{
    fetch(url + city , options)
    .then(response => response.json())
    .then(cb)
    .catch(err => console.log(err));
}
kolkataWeather(URL ,"kolkata", response => {
    cloud_pct_kolkata.innerHTML = response.cloud_pct
    temp_kolkata.innerHTML = response.temp
    feels_like_kolkata.innerHTML = response.feels_like
    humidity_kolkata.innerHTML = response.humidity
    min_temp_kolkata.innerHTML = response.min_temp
    max_temp_kolkata.innerHTML = response.max_temp
    wind_speed_kolkata.innerHTML = response.wind_speed
    wind_degrees_kolkata.innerHTML = response.wind_degrees
    sunrise_kolkata.innerHTML = response.sunrise
    sunset_kolkata.innerHTML = response.sunset
   
    });




const jamnagarWeather = (url ,city, cb)=>{
    fetch(url + city , options)
    .then(response => response.json())
    .then(cb)
    .catch(err => console.log(err));
}

jamnagarWeather(URL , "jamnagar", response => {
    cloud_pct_Jamnagar.innerHTML = response.cloud_pct
    temp_Jamnagar.innerHTML = response.temp
    feels_like_Jamnagar.innerHTML = response.feels_like
    humidity_Jamnagar.innerHTML = response.humidity
    min_temp_Jamnagar.innerHTML = response.min_temp
    max_temp_Jamnagar.innerHTML = response.max_temp
    wind_speed_Jamnagar.innerHTML = response.wind_speed
    wind_degrees_Jamnagar.innerHTML = response.wind_degrees
    sunrise_Jamnagar.innerHTML = response.sunrise
    sunset_Jamnagar.innerHTML = response.sunset
   
    });