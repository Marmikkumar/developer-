const enddate="12 April 2023 10:00 PM";

document.getElementById("end-date").innerText=enddate;

const inputs=document.querySelectorAll("input")


function clock(){
    const end=new Date(enddate);
    const now=new Date();

    const diff=(end-now)/1000;
    
    if(diff<0)  return;

    inputs[0].value=Math.floor(diff / 3600/ 24);
    inputs[1].value=Math.floor(diff / 3600) %24;
    inputs[2].value=Math.floor(diff / 60) %60;
    inputs[3].value=Math.floor(diff) %60;
}

clock();

setInterval(
    () => {
        clock()
    },
    1000
)


// const endDate = "12 April 2023 10:00 PM"

// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input")
    

// function clock() {
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) / 1000;

//     if (diff < 0) return;

//     // convert into days;
//     inputs[0].value = Math.floor(diff / 3600 / 24);
//     inputs[1].value = Math.floor(diff / 3600) % 24;
//     inputs[2].value = Math.floor(diff / 60) % 60;
//     inputs[3].value = Math.floor(diff) % 60;
// }

// // initial call
// clock()

// /**
//  *  1 day = 24 hrs
//  *  1 hr = 60 mins
//  *  60 min = 3600 sec
//  */

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )