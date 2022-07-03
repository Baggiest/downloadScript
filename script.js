/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import download from 'download';
import fs, { link } from 'fs'


// exact input https://student.iedl.ir/Four_Corners/Four_Corners_2nd/FC2B/Four%20Corners%202%20-%20Audio/Level%202%20Unit%205%20Track%2061.mp3
// simplified example input https://blahblah.ir/blah/book/blahblah/Level%202%20Unit%205Track%2061

//core algorithm 
//lets say Unit is j and Track is i
//and my aunt said she needs only unit 5 to 8

let arr = [] // need this for the output later
let links = [] // also need this for the output.... of the outputs, its cleaner this way just trust me

async function index() {

    let j; // Units 5 to 8
    let i; // Tracks 61 to 116

    // Unit 5 is track 61 to 74
    // Unit 6 is track 75 to 87
    // Unit 7 is track 88 to 101
    // Unit 8 is track 102 to 116

    for (j = 5; j <= 8; j++) {

        let start;
        let end;

        switch (j) {

            case 5: {
                start = 61
                end = 74
                break;
            }
            case 6: {
                start = 75
                end = 87
                break;
            }
            case 7: {
                start = 88
                end = 101
                break;
            }
            case 8: {
                start = 102
                end = 116
                break;
            }
        }

        for (i = start; i <= end; i++) {
            //console.log(`Unit ${j} and Track ${i}`)
            // works beautifully *chefs kiss*

            // now for the output 
            arr.push({ j, i })
        }
    }
}

index().then(async () => {
    // once we get all the units in this form 
    // we can get to work
    //console.log(arr)

    let z; // first loop
    let x; // second loop for download

    console.log(arr.length)

    for (z = 0; z < arr.length; z++) {
        //console.log(arr[z])
        //console.log(`https://blahblah.ir/blah/book/blahblah/Level%202%20Unit%20${arr[z].j}Track%20${arr[z].i}.mp3`) //simplified example
        links.push(`https://student.iedl.ir/Four_Corners/Four_Corners_2nd/FC2B/Four%20Corners%202%20-%20Audio/Level%202%20Unit%20${arr[z].j}%20Track%20${arr[z].i}.mp3`)
    }

    // now for the downloading part we use fs and download libraries

    for (x = 0; x < links.length; x++) {
        fs.writeFileSync(`./files/Unit-${arr[x].j}_Track${arr[x].i}.mp3`, await download(links[x]))
    }
})