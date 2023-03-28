const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data) )
}

const displayCountries = (countries) =>{
    const countriesHtml = countries.map(country => getCountries(country));
    // console.log(countriesHtml[0])
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHtml.join(' ');
}
// original------------
// const getCountries = country =>{
//     return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }


//Option - 1 destructuring----------------
// const getCountries = country =>{
//     const {name, flags} = country;
//     return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }

// Option 2; Destructuring with parameter

const getCountries = ({name, flags,region}) =>{
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>${region}</p>
        <img src="${flags.png}">
    </div>
    `
}
loadCountries();