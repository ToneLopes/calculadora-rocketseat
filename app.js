function adicionarCaracter(caracter) {
  let valorDisplay = document.querySelector("#displayResult").value;

  valorDisplay = document.querySelector("#displayResult").value =
    valorDisplay + caracter;
}

function DisplayClear() {
  document.querySelector("#displayResult").value = "";
}

function calc() {
  let valorDisplay = document.querySelector("#displayResult").value;
  if (valorDisplay == 0) {
    valorDisplay.textContent = 122;
  } else {
    document.querySelector("#displayResult").value = eval(valorDisplay);
  }
}

document.querySelector(".equals").onclick = function () {
  var valor = document.querySelector("#displayResult");
  if (document.querySelector("#displayResult").value.length == 0) {
    alert("Please Enter the numbers");
  } else {
    document.querySelector("#last-calc").innerHTML =
      document.querySelector("#displayResult").value;
  }

  calc();
};

function DisplayClearAll() {
  document.querySelector("#displayResult").value = "";
  document.querySelector("#last-calc").textContent = "";
}

document.getElementById('invertValor').onclick = function(){
    valorDisplay = document.querySelector("#displayResult").value
    document.querySelector("#displayResult").value = valorDisplay * -1
}