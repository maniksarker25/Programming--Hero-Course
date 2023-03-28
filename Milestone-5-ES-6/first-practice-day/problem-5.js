/* 5) How will you display
a) programming er coddogosti
b) VW
c) Bangladesh
 */
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}

const a = instructor.additionalData.books[1];
console.log(a);
// output: programming er coddogosti

const b = instructor.additionalData.moreDetails.hometown.state;
console.log(b);
// output: VW

const c = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(c);
// output; Bangladesh
