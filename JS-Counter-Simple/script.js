var btnPlus = document.getElementById("container-plus");
var value = document.getElementById("container-value");
var btnMinus = document.getElementById("container-minus");

let numValue = value.innerHTML

btnPlus.addEventListener("click", function () {
    numValue++;
    value.innerHTML = numValue;
})
btnMinus.addEventListener("click", function () {
    numValue--;
    value.innerHTML = numValue;
})