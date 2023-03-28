const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '5px';
    section.style.backgroundColor = 'lightgray';
}
const places = document.getElementById('places-container');
places.style.backgroundColor  = 'yellow';

const hobbyContainer = document.getElementById('hobby-container');
hobbyContainer.classList.add('text-center');
hobbyContainer.classList.remove('large-text')