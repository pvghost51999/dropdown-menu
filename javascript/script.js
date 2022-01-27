// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value<10){
//         value++;
//             document.getElementById('number').value = value;
//     }
// }
// function decrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value>1){
//         value--;
//             document.getElementById('number').value = value;
//     }

// }
// function incrementValue1()
// {
//     var value = parseInt(document.getElementById('number1').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value<10){
//         value++;
//             document.getElementById('number1').value = value;
//     }
// }
// function decrementValue1()
// {
//     var value = parseInt(document.getElementById('number1').value, 10);
//     value = isNaN(value) ? 0 : value;
//     if(value>1){
//         value--;
//             document.getElementById('number1').value = value;
//     }

// }
let s = document.querySelector("#sub");
let d = document.querySelector("#dis");
let a = document.querySelector("#add");
let r=document.querySelector("#rupe");
d.value = 1;
let c=0;
a.addEventListener('click', () => {
    if (parseInt(d.value) < 5) {
        d.value = parseInt(d.value) + 1;
        r.innerHTML=`$${16*d.value}`;
    }
    else if (parseInt(d.value) === 5 && c!==1) {
        d.style.backgroundColor = "red";
       c=1;
    }
    else if(c==1)
    {
        alert("only five piece can be selected ");
    }

    
        
})

s.addEventListener('click', () => {
    if (parseInt(d.value) > 1) {
        d.value = parseInt(d.value) - 1;
        r.innerHTML=`$${16*d.value}`;
        d.style.backgroundColor = "";
        c=0
    }
    else {
        alert("Select atleast one");
    }
})

let cal=document.querySelector("#calcv");

cal.addEventListener('click',()=>{

    alert(parseInt(d.value)*43);
})

