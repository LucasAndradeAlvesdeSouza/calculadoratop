document.getElementById('calculate-button').onclick = function() {

    let num1 = parseInt(document.getElementById('elem-1').value);
    let num2 = parseInt(document.getElementById('elem-2').value);

    if(isNaN(num1)) {

        alert('Não conseguimos calcular pois ficou faltando um número!');
        document.getElementById('elem-1').focus();
    } else if(isNaN(num2)) {

        alert('Não conseguimos calcular pois ficou faltando um número!');
        document.getElementById('elem-2').focus();
    } else {

        let choice = document.querySelector('input[name="operation"]:checked');
        let operation = choice.value;


        let result = getResult(num1, num2, operation);
        document.getElementById('result').innerHTML = result;
    }
}


function getResult(num1, num2, symbol) {
    if(symbol === '+') {
        return num1 + num2;
    } else if (symbol === '-') {
        return num1 - num2;
    } else if (symbol === '*') {
        return num1 * num2;
    } else if (symbol === '/') {
        return num1 / num2;
    }
}
