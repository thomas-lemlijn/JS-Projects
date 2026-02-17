var btnMinus10 = document.getElementById("container-minus-10");
var btnMinus = document.getElementById("container-minus");
var value = document.getElementById("container-value");
var btnPlus = document.getElementById("container-plus");
var btnPlus10 = document.getElementById("container-plus-10");


let numValue = value.innerHTML

btnMinus10.addEventListener("click", function () {
    numValue -= 10;
    value.innerHTML = numValue;
})
btnMinus.addEventListener("click", function () {
    numValue--;
    value.innerHTML = numValue;
})

btnPlus.addEventListener("click", function () {
    numValue++;
    value.innerHTML = numValue;
})
btnPlus10.addEventListener("click", function () {
    numValue += 10;
    value.innerHTML = numValue;
})