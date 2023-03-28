const loadPhones = async (inputValue, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data, dataLimit);
}

const displayData = (phones, dataLimit) => {


    // document.getElementById('search-field').value = '';
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    // display 10 phone
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > dataLimit){
        phones = phones.slice(0,10);
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }
    // display warning message 
    const noPhone = document.getElementById('warning-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }

    // display all phones 
    phones.forEach(phone => {
    console.log(phone);
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="card h-100">
        <img src="${phone.image}" class="card-img-top p-4" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phone-details-model"> Show Details</button>
        </div>
    </div>
    
    `
    phonesContainer.appendChild(phoneDiv);
        
    });
    // stop loader ------
    loadSpinner(false);
}

const processSearch = (dataLimit) => {
    loadSpinner(true);
    const inputValue = document.getElementById('search-field').value;
    loadPhones(inputValue, dataLimit);
}
// handle search button clicked : 
document.getElementById('btn-search').addEventListener('click',function(){
    // start loader ---
    processSearch(5);
    
})
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(5);
    }
});

// function for loader ------
const loadSpinner = (isLoading) =>{
    const loadSection = document.getElementById('loader');
    if(isLoading){
        loadSection.classList.remove('d-none')
    }
    else{
        loadSection.classList.add('d-none')
    }
}

// show all
document.getElementById('btn-show-all').addEventListener('click',function(){
   processSearch();
})

const loadPhoneDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone =>{
    console.log(phone);
    const modalTitle = document.getElementById('phone-details-modelLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
    <p>Release data:${phone.releaseDate? phone.releaseDate : "No release date found"}</p>
    <P>Display Size: ${phone.mainFeatures.displaySize? phone.mainFeatures.displaySize : 'display size not found'} </p>
    <p>Storage: ${phone.mainFeatures.storage? phone.mainFeatures.storage : 'storage not found'}</p>
    
    `

}

loadPhones('apple');