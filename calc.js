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
    temp = document.getElementById('tela').innerHTML.trim();
    if ( temp == "")
    {
        document.getElementById('tela').innerHTML = "0."
    }
    else 
    {
        document.getElementById('tela').innerHTML += "."
    } 
}

function bt0()
{
    if (document.getElementById('tela').innerHTML == "0") {
        document.getElementById('tela').innerHTML = "0"
    }
    else 
    {
    document.getElementById('tela').innerHTML += '0';
    }
}

function bt1()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '1';
    }
    
}

function bt2()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '2';
    }
}

function bt3()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '3';
    }
}

function bt4()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '4';
    }
}

function bt5()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '5';
    }
}

function bt6()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '6';
    }
}

function bt7()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '7';
    }
}

function bt8()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '8';
    }
}

function bt9()
{
    var temp = verificarLenght();
    if (temp == false) {
        document.getElementById('tela').innerHTML += '9';
    }
}

function btsomar() {
    valor1 = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = "";
    operacao = '+';
}

function btsubtrair() {
    valor1 = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = "";
    operacao = '-';
}

function btmultiplicar() {
    valor1 = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = "";
    operacao = '*';
}

function btdividir() {
    valor1 = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = "";
    operacao = '/';
}

function btigual() {
    valor2 = document.getElementById('tela').innerHTML;
    if (operacao == '+') {
        document.getElementById('tela').innerHTML = parseFloat(valor1) + parseFloat(valor2);
    }
    else if (operacao == '-') {
        document.getElementById('tela').innerHTML = parseFloat(valor1) - parseFloat(valor2);
    }
    else if (operacao == '*') {
        document.getElementById('tela').innerHTML = parseFloat(valor1) * parseFloat(valor2);
    }
    else if (operacao == '/') {
        document.getElementById('tela').innerHTML = parseFloat(valor1) / parseFloat(valor2);
    }
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
