let valor1 = "";
let valor2 = "";
let operacao = "";

function btLimparTela() 
{
    valor1 = "";
    valor2 = "";
    document.getElementById('tela').innerHTML = "";
}

function btponto()
{
    debugger
    let temp = document.getElementById('tela').innerHTML.trim();
    if ( temp == "")
    {
        document.getElementById('tela').innerHTML = "0."
    }
    else 
    {
        document.getElementById('tela').innerHTML += "."
    } 
}

function btnum(numero)
{
    let lenghtEstaNoLimite = verificarLenght();
    if (document.getElementById('tela').innerHTML == "0") {
        document.getElementById('tela').innerHTML = numero
    }
    else if (lenghtEstaNoLimite == false)
    {
    document.getElementById('tela').innerHTML += numero;
    }
}

function btoperacao(operacaoParam) {
    valor1 = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = "";
    operacao = operacaoParam;
}

function btigual() {
    valor2 = document.getElementById('tela').innerHTML;
    let resultado;

    if (operacao == '+') {
        resultado = parseFloat(valor1) + parseFloat(valor2);
    }
    else if (operacao == '-') {
        resultado = parseFloat(valor1) - parseFloat(valor2);
    }
    else if (operacao == '*') {
        resultado = parseFloat(valor1) * parseFloat(valor2);
    }
    else if (operacao == '/') {
        resultado = parseFloat(valor1) / parseFloat(valor2);
    }
    
    document.getElementById('tela').innerHTML = resultado;
}

function verificarLenght()
{
    if (document.getElementById('tela').innerHTML.length > 13) {
        return true;
    }
    else {
        return false;
    }
}
