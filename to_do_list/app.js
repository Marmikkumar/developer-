const item= document.querySelector(".item");
const text=document.querySelector("#title");

text.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            console.log(this.value);
            addlist(this.value);
            this.value="";
        }
    }

)

const addlist = (text)=>{
    const listitem=document.createElement("li");
    listitem.innerHTML=`
        ${text}
        <i id="icon" class="fas fa-times" ></i>
    `;

    listitem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function() {
            listitem.remove()
        }
    )
    item.appendChild(listitem)

}

