document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue'
    }
})

// center the third
document.getElementById('center-third').addEventListener('click',function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

// add new friend 
document.getElementById('add-new').addEventListener('click',function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3>New friend</h3>
    <p>something new added</p>
    `
    friendContainer.appendChild(friend);
})