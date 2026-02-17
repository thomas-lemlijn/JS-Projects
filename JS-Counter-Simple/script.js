var btnMinus = document.getElementById("container-minus");
var value = document.getElementById("container-value");
var btnPlus = document.getElementById("container-plus");

var btnReset = document.getElementById("reset");

let numValue = value.innerHTML
let defaultValue = numValue;

btnMinus.addEventListener("click", function () {
    numValue--;
    value.innerHTML = numValue;
})
btnPlus.addEventListener("click", function () {
    numValue++;
    value.innerHTML = numValue;
})

btnReset.addEventListener("click", function () {
    numValue = defaultValue;
    value.innerHTML = numValue;
})