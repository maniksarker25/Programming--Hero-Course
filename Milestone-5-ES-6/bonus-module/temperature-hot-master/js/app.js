// Do not show api key on your js file -------
const apiKey = `78342705a67c89923f712d57acc4640e`;

const loadTemperature = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    showTemperature(data);
}

const showTemperature = async (data) =>{
    setInnerTextById('temperature',data.main.temp);
    setInnerTextById('condition',data.weather[0].main)
    console.log(data)
}

const setInnerTextById = (id,text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}


document.getElementById('search-btn').addEventListener('click',function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;
    // set city name; 
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
loadTemperature('dhaka');