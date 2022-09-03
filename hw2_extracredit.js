document.getElementById("num1").onchange = function () {
    myFunction()
};

function myFunction() {

    number1 = document.forms["myform"].elements["num1"].value;
    n1 = parseInt(number1);

    document.getElementById("Euro").textContent = (n1 * .84).toFixed(2);
    document.getElementById("CD").textContent = (n1 * 1.23).toFixed(2);
    document.getElementById("HKD").textContent = (n1 * 7.76).toFixed(2);
    document.getElementById("Yen").textContent = (n1 * 110.80).toFixed(2);
    document.getElementById("Peso").textContent = (n1 * 19.82).toFixed(2);
}