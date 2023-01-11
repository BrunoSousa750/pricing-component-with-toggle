const inputCheck = document.querySelector(".header--btn--checkbox--input");
let basicPrice = document.querySelector(".main--basic--price")
let masterPrice = document.querySelector(".main--master--price")
let proPrice = document.querySelector(".main--pro--price")

inputCheck.addEventListener("click", function(){
    if(inputCheck.checked){
        basicPrice.innerHTML = "199.99";
        masterPrice.innerHTML = "249.99";
        proPrice.innerHTML = "399.99"; 
    }else{
        basicPrice.innerHTML = "19.99";
        masterPrice.innerHTML = "24.99";
        proPrice.innerHTML = "39.99";
    }
})