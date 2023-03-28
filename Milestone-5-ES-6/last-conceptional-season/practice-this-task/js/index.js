let fetchData = [];
const fetchCatagories = async () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    showCatagories(data.data.news_category);
}

const showCatagories = data =>{
    const catagoriesContainer = document.getElementById('catagories-container');
    data.forEach(newsDetails =>{
        const linkContainer = document.createElement('p');
        linkContainer.innerHTML =  `
        <a class="nav-link" href="#" onclick="fetchAllNews('${newsDetails.category_id}','${newsDetails.category_name}')">${newsDetails.category_name}</a>
        `;
        catagoriesContainer.appendChild(linkContainer);
    })
}

const fetchAllNews = async (category_id,category_name) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    fetchData = data.data;
    showAllNews(data.data,category_name)

}

const showAllNews = (data,category_name)=>{
    
   document.getElementById('news-count').innerText =data.length;
   document.getElementById('catagory-name').innerText = category_name;
    const newsContainer = document.getElementById('all-news');
    newsContainer.innerHTML = '';
    data.forEach(newsDetails =>{
        const {image_url,_id,title,details,author,total_view,rating} = newsDetails;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'mb-3');
        cardDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                 <img src="${image_url}" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8 d-flex flex-column">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${details.slice(0,200)}</p>
                </div>
                <div class="card-footer border-0 d-flex bg-body justify-content-between align-items-center">
                <div class="d-flex gap-2 justify-content-center">
                    <div>
                    <img src="${author.img}" class="img-fluid rounded-circle" width="40" height="40">
                    </div>
                    <div>
                        <p class="m-0 p-0">${author.name? author.name : 'Not available'}</p>
                        <p class="m-0 p-0">${author.published_date? author.published_date : 'not found'}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2 ">
                <i class="fa-solid fa-eye"></i>
                <p class="m-0 p-0">${total_view? total_view : 'not available'}</p>               
                </div>
                <div>
                    <p class="m-0 p-0">${generateStars(rating.number)}</p>
                </div>
                <div>
                <i onclick="fetchNewsDetails('${_id}')" class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </div>
                </div>
            </div>
            
        </div>
        
    `
    newsContainer.appendChild(cardDiv);
    })
}


const fetchNewsDetails = async news_id =>{
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data[0])
    showNewsDetails (data.data[0]);
}

const showNewsDetails = newsDetails =>{
    const {image_url,_id,title,details,author,total_view,rating,others_info} = newsDetails;
    const modelDetails = document.getElementById('modal-details');
    modelDetails.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
            <div class="col-md-12">
                 <img src="${image_url}" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-12 d-flex flex-column">
                <div class="card-body">
                    <h5 class="card-title">${title} <span class="badge text-bg-warning">${others_info.is_trending? "Trending" : ''}</span></h5>
                    <p class="card-text">${details}</p>
                </div>
                <div class="card-footer border-0 d-flex bg-body justify-content-between align-items-center">
                <div class="d-flex gap-2 justify-content-center">
                    <div>
                    <img src="${author.img}" class="img-fluid rounded-circle" width="40" height="40">
                    </div>
                    <div>
                        <p class="m-0 p-0">${author.name}</p>
                        <p class="m-0 p-0">${author.published_date}</p>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2 ">
                <i class="fa-solid fa-eye"></i>
                <p class="m-0 p-0">${total_view}</p>               
                </div>
                <div>
                    <p class="m-0 p-0">${generateStars(rating.number)}</p>
                </div>
                </div>
            </div>
            
        </div>
    </div>
    
    `
}


const showTrending = () =>{
    const trending = fetchData.filter(singleData => singleData.others_info.is_trending === true);
    const category_name = document.getElementById('catagory-name').innerText;
    showAllNews(trending,category_name);
}

// generate star----
const generateStars= rating =>{
    let ratingHTML= '';
    for (let i = 1; i <= Math.floor(rating); i++){
        ratingHTML +=`<i class="fas fa-star"></i>`;
      
    }
    if(rating - Math.floor(rating)>0){
        ratingHTML+=`<i class="fas fa-star-half"></i>`
    }
    return ratingHTML
}