/* 3) How will you get the output
a) abc
b) xyz 
*/

let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}

const getAbc = activities.activity1[0].song_list.song_1;
console.log(getAbc);
// output: abc
const getXyz = activities.activity1[1].song_list.song_2;
console.log(getXyz);
// output: xyz