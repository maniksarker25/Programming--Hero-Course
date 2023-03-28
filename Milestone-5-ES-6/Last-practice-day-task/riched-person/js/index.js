const dataLoad = async () =>{
    const url = `https://forbes400.onrender.com/api/forbes400/`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data); 
}

const displayData = (data) =>{
    data.slice(0,20).forEach(singleData =>{
        console.log(singleData)
        const cardContainer = document.getElementById('card-container');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card h-100">
                <img src="${singleData.squareImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${singleData.person.name}</h5>
                <p class="card-text">${singleData.bios[0,3]}</p>
            </div>
        </div>
        `
        cardContainer.appendChild(cardDiv);
    })
}
dataLoad();