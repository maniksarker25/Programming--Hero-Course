/* 
book-1 ---- 100 paper
book-2-------200 paper
book-3 --------300 paper

 */
function paperRequirement(book1Quantity,book2Quantity,book3Quantity){
    const book1Paper = 100;
    const book1PaperRequirement = book1Paper * book1Quantity;
    const book2Paper = 200;
    const book2PaperRequirement = book2Paper * book2Quantity;
    const book3Paper = 300;
    const book3PaperRequirement = book3Paper * book3Quantity;
    const totalPaperRequirement  = book1PaperRequirement + book2PaperRequirement + book3PaperRequirement;
    return totalPaperRequirement;

}
const totalPaperRequirement =paperRequirement(1,2,1);
console.log(totalPaperRequirement);

// output: 800