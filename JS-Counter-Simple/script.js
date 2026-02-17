var btnMinus = document.getElementById("container-minus");
var value = document.getElementById("container-value");
var btnPlus = document.getElementById("container-plus");


let numValue = value.innerHTML

btnMinus.addEventListener("click", function () {
    numValue--;
    value.innerHTML = numValue;
})
btnPlus.addEventListener("click", function () {
    numValue++;
    value.innerHTML = numValue;
})