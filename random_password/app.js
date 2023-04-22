let upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerset="abcdefghijklmnopqrstuvwxyz";
let numberset="1234567890";
let symbolset="!@#$%^&*()_?><";

let passcode=document.getElementById("pass-box");
let totallength=document.getElementById("num");
let upperword=document.getElementById("opt1");
let lowerword=document.getElementById("opt2");
let numberword=document.getElementById("opt3");
let symbolword=document.getElementById("opt4");


const getrandom = (dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)];
}

const generateword = (word="")=>{
    if(upperword.checked){
        word+=getrandom(upperset);
    }

    if(lowerword.checked){
        word+=getrandom(lowerset);
    }

    if(numberword.checked){
        word+=getrandom(numberset);
    }

    if(symbolword.checked){
        word+=getrandom(symbolset);
    }

    if(word.length < totallength.value){
        return generateword(word);
    }
    
    passcode.innerText= truncateString(word,totallength.value);
    
}

generateword();

document.getElementById("btn1").addEventListener(
    "click",
    function(){
        generateword();
    }

)


function truncateString(str ,len){
    if(str.length>len){
        let s1=str.substring(0,len);
        return s1;
    }
    else{
        return str;
    }
}