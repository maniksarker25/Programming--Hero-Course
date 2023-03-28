// alert, confirm, prompt-----------------------


// alert('How are you baby?')
const showAlert = () =>{
    alert("How are you baby?")
}

const lendMoney = () =>{
    const result = confirm("Will you lend me 500 taka?");
    console.log(result);
    if(result === true){
        alert("Tui amr jan ar dosto!!")
    }
    else{
        alert("Dura gia mor !!!")
    }
}

const getInfo = () =>{
    const result = prompt("What's your name?")
    console.log(result)
    if(result === null || result === ''){
        alert("Name na dila kam nai !! jah foot")
    }
    else{
        alert("Welcome to this world")
    }
}
