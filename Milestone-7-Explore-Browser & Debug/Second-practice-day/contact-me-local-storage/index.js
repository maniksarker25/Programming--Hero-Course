// const name = document.getElementById('name-field').value;
// const email = document.getElementById('email-field').value;
// const message = document.getElementById('message-field').value;

const setName = () => {
    const name = document.getElementById('name-field').value;
    localStorage.setItem('Name', name);
}

const deleteName = () => {
    localStorage.removeItem('Name')
}

const setEmail = () => {
    const email = document.getElementById('email-field').value;
    localStorage.setItem('Email', email);
}
const deleteEmail = () => {
    localStorage.removeItem('Email')
}

const setMessage = () => {
    const message = document.getElementById('message-field').value;
    localStorage.setItem('Message', message)
}
const deleteMessage = () => {
    localStorage.removeItem('Message')
}

const setPersonInformation = () => {
    const name = document.getElementById('name-field').value;
    const email = document.getElementById('email-field').value;
    const message = document.getElementById('message-field').value;
    const person = {
        name: name,
        email: email,
        message: message
    }
    const personStringified = JSON.stringify(person);
    localStorage.setItem('person', personStringified)
}

const showInformation = () => {
    const name = document.getElementById('name-field');
    const email = document.getElementById('email-field');
    const message = document.getElementById('message-field');

    const savedInformation = localStorage.getItem('person');
    const person = JSON.parse(savedInformation);
    console.log(person)
    name.value = person.name;
    email.value = person.email;
    message.innerText = person.message;
}



