const loadPhones = async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data =await res.json();
    displayPhones(data.data, dataLimit);

}

const displayPhones = (phones, dataLimit) => {
    document.getElementById('search-field').value = '';
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    // display 10 phones only ----------
    // show and hide show all button------------
    const showAll = document.getElementById('show-all');
    if( dataLimit && phones.length > 10){
        phones = phones.slice(0, 10); 
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none')
    }
    // display no phones found
    const noPhone = document.getElementById('warning-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none')
    }

    // display all phones 
    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top p-3" alt="...">
             <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);
    })

    // stop spinner ---------
    toggleSpinner(false);
}

// function for process search 
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

document.getElementById('btn-search').addEventListener('click',function(){
    // start spinner ---------------
    processSearch(10);
})

// function for control spinner or loader
const toggleSpinner = isLoading =>{
    const loadSection = document.getElementById('loader');
    if(isLoading){
        loadSection.classList.remove('d-none');
    }
    else(
        loadSection.classList.add('d-none')
    )
}

// not the best way to load the show all-----------
document.getElementById('btn-show-all').addEventListener('click',function(){
    processSearch();
})

// loadPhones();