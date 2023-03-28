
const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerText = user.results[0].gender;
    const nameTag = document.getElementById('name');
    nameTag.innerText = user.results[0].name.title + ' '  + user.results[0].name.first + ' ' + user.results[0].name.last;
    const city = document.getElementById('city');
    city.innerText = user.results[0].location.city;
    const state = document.getElementById('state');
    state.innerText = user.results[0].location.state;
    const picture = document.getElementById('img');
    picture.innerHTML = `
    <img src='${user.results[0].picture.large}'>
    `
}
loadUser();