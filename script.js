const letras = [
    { id: "A", nome: "A" },
    { id: "B", nome: "B" },
    { id: "C", nome: "C" },
    { id: "D", nome: "D" },
    { id: "E", nome: "E" },
    { id: "F", nome: "F" },
    { id: "G", nome: "G" },
    { id: "H", nome: "H" },
]
const numeros = [
    { id: "1", nome: "1" },
    { id: "2", nome: "2" },
    { id: "3", nome: "3" },
    { id: "4", nome: "4" },
    { id: "5", nome: "5" },
    { id: "6", nome: "6" },
    { id: "7", nome: "7" },
    { id: "8", nome: "8" },
    { id: "9", nome: "9" },
]
const categoria = [
    { id: "Terror", nome: "Terror👻" },
    { id: "Aventura", nome: "Aventura🗺️" },
    { id: "Romance", nome: "Romance❤️" },
    { id: "Comedia", nome: "Comédia🤣" },
    { id: "Drama", nome: "Drama🌹" },
    { id: "Acao", nome: "Ação🥊" },
]

const Filmesterror = [
    { id: "tr", nome: "Terrifier" },
    { id: "hp", nome: "Hora do pesadelo" },
    { id: "s13", nome: "Sextafeira 13 " },
] 

const Filmesaventura = [
    { id: "jj", nome: "Jumanji" },
    { id: "vg", nome: "Vingadores" },
    { id: "vf", nome: "Velores e Furiosos" },
]

const Filmesromance = [
    { id: "tc", nome: "Titanic" },
    { id: "cv", nome: "Como eu era antes de você" },
    { id: "10o", nome: "10 coisas que eu odeio você" },
]

const Filmescomedia = [
    { id: "mg", nome: "Um maluco no golf" },
    { id: "dt", nome: "De repente trinta" },
    { id: "gg", nome: "Gente grande" },
]

const Filmesdrama = [
    { id: "ce", nome: "Culpa das estrelas" },
    { id: "st", nome: "Show de truman" },
    { id: "it", nome: "Interestelar" },
]
const Filmesacao = [
    { id: "f1", nome: "Formula 1" },
    { id: "qf", nome: "Quarteto Fantástico" },
    { id: "sp", nome: "Superman" },
]
const comida = [
{ id: "nenhuma", nome: "Nenhuma", preco: 0 },
{ id: "cb", nome: "Cachorro Quente🌭 - 15R$", preco: 15 },
{ id: "pp", nome: "Pipoca Pequena🍿 - 10R$", preco: 10 },
{ id: "pm", nome: "Pipoca Média🍿 - 20R$", preco: 20 },
{ id: "pg", nome: "Pipoca Grande🍿 - 30R$", preco: 30 },
{ id: "pgg", nome: "Pipoca Gigante🍿 - 40R$", preco: 40 },
]
const adicionais = [
{ id: "nenhum", nome: "Nenhum", preco: 0 },
{ id: "fn", nome: "Fini - 8R$ - 90g", preco: 8 },
{ id: "pc", nome: "Chocolate - 15R$", preco: 15 },
{ id: "pd", nome: "Caramelo - 15R$", preco: 15 },
{ id: "pa", nome: "Amor - 20R$", preco: 20 },
]
const bebida = [
{ id: "nenhuma", nome: "Nenhuma", preco: 0 },
{ id: "cc", nome: "Coca-Cola🥤 - 12R$", preco: 12 },
{ id: "pp", nome: "Pepsi🥤 - 12R$", preco: 12 },
{ id: "gr", nome: "Guaraná🥤 - 12R$", preco: 12 },
]

const combo = [
{ id: "nenhuma", nome: "Nenhuma",  preco: 0 },
{ id: "Combo Classic", nome: "Combo Classic : Pipoca Grande (salgada) + Refrigerante Lata (350ml) + Fini(90g) - 40R$", preco: 40 },
{ id: "Combo classic Duo", nome: "Pipoca Gigante / (salgada e doce) + (Refil) + 2 Refrigerante Lata + M&M (140g) ou 2 fini 60R$", preco: 60 },
{ id: "Combo Classic Prime", nome: "Pipoca Grande (ealgada e doce) + (Balde ou copo personalizado) copo (500ML) Refil + 1 Unidade de Ingresso 80R$", preco:80 },
{ id: "Combo Classic Supremo ", nome: "Balde Grande personalizado (Refil) (salgada e doce) + Copo Personalizado (500ML) + Copo de açai (350ML) + (KItKat e 1 fini) + 1 Unidade de Ingresso 120R$ ", preco: 120 },
]
const ingressos = [
{ id: "inteira", nome: "Inteira", preco: 25 },
{ id: "meia", nome: "Meia-Entrada", preco: 12 },
]

function preencherOpcoes() {
const selectingressos = document.getElementById("ingressos");
for (let i = 0; i < ingressos.length; i++) {
const item = ingressos[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectingressos.appendChild(option);
}
const selectnumeros = document.getElementById("numeros");
for (let i = 0; i < numeros.length; i++) {
const item = numeros[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectnumeros.appendChild(option);
}
const selectletras = document.getElementById("letras");
for (let i = 0; i < letras.length; i++) {
const item = letras[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectletras.appendChild(option);
}
const selectcategoria = document.getElementById("categoria");
for (let i = 0; i < categoria.length; i++) {
const item = categoria[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectcategoria.appendChild(option);
}
const selectcomida = document.getElementById("comida");
for (let i = 0; i < comida.length; i++) {
const item = comida[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectcomida.appendChild(option);
}
const selectbebida = document.getElementById("bebida");
for (let i = 0; i < bebida.length; i++) {
const item = bebida[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectbebida.appendChild(option);
}
const selectcombo = document.getElementById("combo");
for (let i = 0; i < combo.length; i++) {
const item = combo[i];
const option = document.createElement("option");
option.value = item.id;
option.textContent = item.nome;
selectcombo.appendChild(option);
}

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
function gerarCategoria() {

    const categoriaHTML = `  
        <select id="Terror">
            <option value="Terrifier"></option>
            <option value="Hora do pesadelo"></option>
            <option value="Sextafeira 13"></option>
        </select>
        
        `;
    document.getElementById("terror").innerHTML = categoriaHTML;

}


function gerarRelatorio() {

const letras = document.getElementById("letras").value;
const numeros = document.getElementById("numeros").value;
const categoria = document.getElementById("categoria").value;
const ingressosId = document.getElementById("ingressos").value;
const comidaId = document.getElementById("comida").value;
const bebidaId = document.getElementById("bebida").value;
const comboId = document.getElementById("combo").value;
const quantidadeIngressos = parseInt(document.getElementById("quantidadeIngressos").value);
const quantidadeComida = parseInt(document.getElementById("quantidadeComida").value);
const quantidadeBebida = parseInt(document.getElementById("quantidadeBebida").value);
const quantidadeCombo = parseInt(document.getElementById("quantidadeCombo").value);

var ingressosSelecionada = procurarPorId(ingressos, ingressosId);
var comidaSelecionada = procurarPorId(comida, comidaId);
var bebidaSelecionada = procurarPorId(bebida, bebidaId);
var comboSelecionado = procurarPorId(combo, comboId);

const valorIngresso = ingressosSelecionada.preco * quantidadeIngressos
const valorComida = comidaSelecionada.preco * quantidadeComida;
const valorBebida = bebidaSelecionada.preco * quantidadeBebida;
const valorCombo = comboSelecionado.preco * quantidadeCombo;
const total = valorIngresso + valorComida + valorBebida + valorCombo;
const assentos = letras + numeros;


const relatorioHTML = `
    <h2>Relatório</h2>
    <p><strong>Categoria:</strong> ${categoria}</p>
    <p><strong>Tipos de Ingressos:</strong> ${ingressosSelecionada.nome}</p>
    <p><strong>Quantidade de ingressos:</strong> ${quantidadeIngressos}</p>
    <p><strong>Assento(s) Escolhido(s):</strong> ${assentos}</p>
    <p><strong>Comida:</strong> ${comidaSelecionada.nome} (${quantidadeComida})</p>
    <p><strong>Bebida:</strong> ${bebidaSelecionada.nome} (${quantidadeBebida})</p>
    <p><strong>Combo:</strong> ${comboSelecionado.nome} (${quantidadeCombo})</p>
    <p><strong>Total a pagar:</strong> R$ ${total.toFixed(2)}</p>
    <p><strong>Obrigado por comprar conosco!</strong></p>
    <img class="terrifier" src="img/terrifier.jpg" alt="terrifier">
    `;
document.getElementById("relatorio").innerHTML = relatorioHTML;
}