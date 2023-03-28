/* 7) How will you display
a) habluder adda
b) Beginner 
*/
let data = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

const a = data.data[0].bookDetails.name;
console.log(a);
// output; habluder adda

const b = data.data[1].bookCategory;
console.log(b);
// output; Beginner