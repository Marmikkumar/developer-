const option=[{
    'que': "1. Which of the following is a client site language?",
        'a': "Java",
        'b': "C",
        'c': "Python",
        'd': "JavaScript",
        'correct': "d",
    },
    {
        'que': "2. What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'que': "3. What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "4. What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }
]

let index=0;
let total=option.length;
let right=0;
let wrong=0
const quesdata=document.getElementById("ques1");
const q=document.querySelectorAll('.options');

const load = ()=>{
    if(index===total){
        console.log("3");
        return endquiz();
    }
    reset();
    const data=option[index];
    // console.log(data);
    quesdata.innerText=data.que;
    q[0].nextElementSibling.innerText=data.a;
    q[1].nextElementSibling.innerText=data.b;
    q[2].nextElementSibling.innerText=data.c;
    q[3].nextElementSibling.innerText=data.d;
}

const submitquiz=()=>{
    
    const data=option[index];
    let ans = getanswer();

    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }

    index++;
    load();
    return;
}

const getanswer=()=>{
    let ans;
    q.forEach(
        (inpute)=>{
            if(inpute.checked){
                ans= inpute.value;
            }
        }
    )
    return ans;
}

const reset=()=>{
    q.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endquiz=()=>{
    document.getElementsByClassName("inner")[0].innerHTML=`
        <h3>thankyou for playing the quiz</h3>
        <p>${right}/${total} are correct. </p>
    `
}

load();