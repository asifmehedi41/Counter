let counter = 0;

let incbtn = document.getElementById("increament");
let decbtn = document.getElementById("decreament");

let counterbtn = document.getElementById("counterincreament");

incbtn.addEventListener("click",myInc);
decbtn.addEventListener("click",myDec);

function myInc() {
    if(counter<10){
        counter+=1;
        counterbtn.innerText = counter;
    }
}
function myDec() {
    if(counter>0){
        counter-=1;
        counterbtn.innerText = counter;
    }
    }