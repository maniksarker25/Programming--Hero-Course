// if ticket numbers is less than 100, per ticket price : 100tk 
// if ticket numbers is more than 100 and less than 200 , first 100  ticket price  will be 100/per and rest ticket will be 90tk/per
// first 100 = 100tk
// rest = 90tk


// if purchase more than 200 ticker
// first 100 ticket price = 100
// 100-200 ticket price = 90;
// 200+ ticket price = 70tk

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;

    }
}
const price = ticketPrice(202);
console.log(price);

// output: 19140