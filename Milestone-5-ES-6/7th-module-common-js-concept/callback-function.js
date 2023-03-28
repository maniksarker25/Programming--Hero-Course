function greeting(greetingHandler,name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good morning', name)
}
function greetEvening(name){
    console.log('Good evening', name)
}
greeting(greetingHandler, 'Tom Hanks')
// output; Good morning Tom Hanks
greeting(greetingHandler,'Tom Brady')
// output: Good morning Tom Brady

greeting(greetEvening, 'Solaiman');
// output: Good evening Solaiman
