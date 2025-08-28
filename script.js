function exibirValor() {
const select = document.getElementById("filme");
const categoria = select.value;
document.getElementById('categoria').textContent = 'categoria: ' + categoria;
}

const terror = [
{ id: "tr", nome: "Terrifier", preco: 25  },
{ id: "hp", nome: "Hora do pesadelo", preco: 25 },
{ id: "s13", nome: "Sextafeira 13 ", preco: 25 },
]

const aventura = [
{ id: "jj", nome: "Jumanji", preco: 25 },
{ id: "vg", nome: "Vingadores", preco: 25 },
{ id: "vf", nome: "Velores e Furiosos", preco: 25 },
]

const romance = [
{ id: "tc", nome: "Titanic", preco: 25 },
{ id: "cv", nome: "Como eu era antes de você", preco: 25 },
{ id: "10o", nome: "10 coisas que eu odeio você", preco: 25 },
]

const comedia = [
{ id: "mg", nome: "Um maluco no golf", preco: 25 },
{ id: "dt", nome: "De repente trinta", preco: 25 },
{ id: "gg", nome: "Gente grande", preco: 25 },
]

const drama = [
{ id: "ce", nome: "Culpa das estrelas", preco: 25 },
{ id: "st", nome: "Show de truman", preco: 25 },
{ id: "it", nome: "Interstelar", preco: 25 },
]
const acao = [
{ id: "f1", nome: "Formula 1", preco: 25 },
{ id: "qf", nome: "Quarteto Fantástico", preco: 25 },
{ id: "sp", nome: "Superman", preco: 25 },
]

function preencherOpcoes() {

    const selectterror = document.getElementById("terror");
    for (let i = 0; i < terror.length; i++) {
        const item = terror[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selectterror.appendChild(option);
    }
        const selectaventura = document.getElementById("aventura");
    for (let i = 0; i < aventura.length; i++) {
        const item = aventura[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selectaventura.appendChild(option);
    }
        const selectromance = document.getElementById("romance");
    for (let i = 0; i < romance.length; i++) {
        const item = romance[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selectromance.appendChild(option);
    }
        const selectcomedia = document.getElementById("comedia");
    for (let i = 0; i < comedia.length; i++) {
        const item = comedia[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selectcomedia.appendChild(option);
    }
        const selectdrama = document.getElementById("drama");
    for (let i = 0; i < drama.length; i++) {
        const item = drama[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selectdrama.appendChild(option);
    }
        const selectacao = document.getElementById("acao");
    for (let i = 0; i < acao.length; i++) {
        const item = acao[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selectacao.appendChild(option);
    }
    
}
preencherOpcoes();

function procurarPorId(lista, idProcurado) {
    for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === idProcurado) {
    return lista[i];
    }
    }
    return null;
}

function gerarRelatorio(){
        const nome = document.getElementById("nome").value;
        const preco = parceInt(document.getElementById("preco").value);
        const terrorId = document.getElementById("terror").value;
        const aventuraId = document.getElementById("aventura").value;
        const romanceId = document.getElementById("romance").value;
        const comediaId = document.getElementById("comedia").value;
        const dramaId = document.getElementById("drama").value;
        const acaoId = document.getElementById("acao").value;

        var terror = procurarPorId(terror, terrorId);
}
alert (terror);
