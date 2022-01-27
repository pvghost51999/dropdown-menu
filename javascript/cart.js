let d=document.querySelector("#drop");

let c=0;
d.addEventListener('click',()=>{
    
    if (c%2===0){
    d.src="images/icons8-collapse-arrow-50.png";
    c+=1
    }
    else{
        d.src="images/icons8-expand-arrow-50.png";
        c+=1
    }
    console.log(c)

})