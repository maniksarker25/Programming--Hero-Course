 const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
 }

 const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries)
    // for of 
    // for(const country of countries){
    //     console.log(country);
    // }
    // for each 
    countries.forEach(country => {
        console.log(country.cca2)
        const divCountry = document.createElement('div');
        divCountry.classList.add('country');
        divCountry.innerHTML = `
        <h3>Name:${country.name.common} </h3>
        <p>Capital:${country.capital ? country.capital[0] : 'No capital'} </p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(divCountry);
    })
 }

 const loadCountryDetails = code => {

    // code from REST countries code
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]))

    
 }

 const showCountryDetail = country => {
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src='${country.flags.png}'>
    `

 }
 loadCountries();