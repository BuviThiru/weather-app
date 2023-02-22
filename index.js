const form = document.querySelector("form")
const search = document.querySelector(".city-input")
const weatherReport = document.querySelector("#weatherReport")


form.addEventListener("submit", function (event) {
    event.preventDefault()
    getWeather(search.value)  

})

async function getWeather(city) {
    weatherReport.innerHTML = `<div class ="icon-img">Loading..................</div>`
    const key = '0a09dcac4a6b5aee4475f60f845a578f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    showReport(data)

}

const showReport =(data) =>{
 console.log("DATA",data)
    weatherReport.innerHTML = `
    <div>
    <div class ="icon-img">
      <img  src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png " alt="Weather Icon" />
    </div>
    <div>
      <h2 class="degree">${data.main.temp}</h2>
      <h2 class="weather-desc">${data.weather[0].main}</h2>  
      </div>  
  </div>`

}





