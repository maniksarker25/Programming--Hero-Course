const products = [
    {id:1, name:'walton phone' , price:19000},
    {id:2, name:'iphone', price:190000},
    {id:3, name:'macbook', price:160000},
    {id:4, name:'samsung phone', price:21000},
    {id:5, name:'xiomi Phone', price:19000},
    {id:6, name:'tv', price:11000},
    {id:7, name:'laptop', price:9000},
    {id:8, name:'LED', price:11000}
];
function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products,'Phone');
console.log(result);
/*
output:[
  { id: 1, name: 'walton phone', price: 19000 }, 
  { id: 2, name: 'iphone', price: 190000 },      
  { id: 4, name: 'samsung phone', price: 21000 },
  { id: 5, name: 'xiomi Phone', price: 19000 }   
] 
 */