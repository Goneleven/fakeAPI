const json1 = '{"nome1": "Goularte", "idade1": "21","desde1": "2019?","sexo1": "Masculino"}'
const json2 = '{"nome2": "AlanZoka", "idade2": "32","desde2": "2016","sexo2": "Masculino"}'
const json3 = '{"nome3": "CapJoga", "idade3": "27","desde3": "2018?","sexo3": "Masculino"}'
const json4 = '{"nome4": "Felps", "idade4": "24","desde4": "2016?","sexo4": "Masculino"}'
const json5 = '{"nome5": "Calango", "idade5": "19","desde5": "2015?","sexo5": "Masculino"}'

const valor1 = JSON.parse(json1);
const valor2 = JSON.parse(json2);
const valor3 = JSON.parse(json3);
const valor4 = JSON.parse(json4);
const valor5 = JSON.parse(json5);

console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);

//PESSOA 1:
function carregarConteudo1() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor1.nome1);
    document.getElementById('idade').innerHTML = ("Idade: " + valor1.idade1);
    document.getElementById('desde').innerHTML = ("Desde: " + valor1.desde1);
    document.getElementById('sexo').innerHTML = ("Sexo: " + valor1.sexo1);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/goularte.png' width = '100px' >";

}

//PESSOA 2:
function carregarConteudo2() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor2.nome2);
    document.getElementById('idade').innerHTML = ("Idade: " + valor2.idade2);
    document.getElementById('desde').innerHTML = ("Desde: " + valor2.desde2);
    document.getElementById('sexo').innerHTML = ("Sexo: " + valor2.sexo2);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/alanZoka.png' width = '100px' >";

}

//PESSOA 3:
function carregarConteudo3() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor3.nome3);
    document.getElementById('idade').innerHTML = ("Idade: " + valor3.idade3);
    document.getElementById('desde').innerHTML = ("Desde: " + valor3.desde3);
    document.getElementById('sexo').innerHTML = ("Sexo: " + valor3.sexo3);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/capjoga.png' width = '100px' >";
}

//PESSOA 4:
function carregarConteudo4() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor4.nome4);
    document.getElementById('idade').innerHTML = ("Idade: " + valor4.idade4);
    document.getElementById('desde').innerHTML = ("Desde: " + valor4.desde4);
    document.getElementById('sexo').innerHTML = ("Sexo: " + valor4.sexo4);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/felps.png' width = '100px' >";
}

//PESSOA 5:
function carregarConteudo5() {
    document.getElementById('nome').innerHTML = ("Nome: " + valor5.nome5);
    document.getElementById('idade').innerHTML = ("Idade: " + valor5.idade5);
    document.getElementById('desde').innerHTML = ("Desde: " + valor5.desde5);
    document.getElementById('sexo').innerHTML = ("Sexo: " + valor5.sexo5);
    document.getElementById('imagem').innerHTML = "<img src = 'imagens/calango.png' width = '100px' >";
}