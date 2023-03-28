// find the cheapest phone in an array
const phones = [
    {name:'samsung', camara:12, storage:'64gb', price:19000, color:'black'},
    {name:'walton', camara:22, storage:'32gb', price:15000, color:'silver'},
    {name:'iphone', camara:10, storage:'128gb', price:55000, color:'white'},
    {name:'redme', camara:24, storage:'64gb', price:17000, color:'black'},
    {name:'realme', camara:54, storage:'128gb', price:22000, color:'gray'},
    {name:'opp', camara:54, storage:'128gb', price:22000, color:'gray'},
    {name:'Nokia', camara:54, storage:'128gb', price:22000, color:'black'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;

        }
       
    }
    return cheapest;

}
const mySelection = cheapestPhone(phones);
console.log(mySelection);
