const categoria = [
    { id: "Nenhuma", nome: "Nenhuma"},
    { id: "Terror", nome: "Terror" },
    { id: "Aventura", nome: "Aventura" },
    { id: "Romance", nome: "Romance" },
    { id: "Comedia", nome: "Comédia" },
    { id: "Drama", nome: "Drama" },
    { id: "Acao", nome: "Ação" },
]
const terror = [
    { id: "tr", nome: "Terrifier" },
    { id: "hp", nome: "Hora do pesadelo" },
    { id: "s13", nome: "Sextafeira 13 " },
]

const aventura = [
    { id: "jj", nome: "Jumanji" },
    { id: "vg", nome: "Vingadores" },
    { id: "vf", nome: "Velores e Furiosos" },
]

const romance = [
    { id: "tc", nome: "Titanic" },
    { id: "cv", nome: "Como eu era antes de você" },
    { id: "10o", nome: "10 coisas que eu odeio você" },
]

const comedia = [
    { id: "mg", nome: "Um maluco no golf" },
    { id: "dt", nome: "De repente trinta" },
    { id: "gg", nome: "Gente grande" },
]

const drama = [
    { id: "ce", nome: "Culpa das estrelas" },
    { id: "st", nome: "Show de truman" },
    { id: "it", nome: "Interstelar" },
]
const acao = [
    { id: "f1", nome: "Formula 1" },
    { id: "qf", nome: "Quarteto Fantástico" },
    { id: "sp", nome: "Superman" },
]
const comida = [
    { id: "n", nome: "Nenhuma", preco: 0 },
    { id: "cb", nome: "Cachorro Quente", preco: 15 },
    { id: "pp", nome: "Pipoca Pequena", preco: 10 },
    { id: "pm", nome: "Pipoca Média", preco: 20 },
    { id: "pg", nome: "Pipoca Grande", preco: 30 },
]
const bebida = [
    { id: "n", nome: "Nenhuma", preco: 'Nenhuma' },
    { id: "cc", nome: "Coca Cola", preco: 10 },
    { id: "pp", nome: "Pepsi", preco: 10 },
    { id: "gr", nome: "Guaraná", preco: 10 },
]
const preco = [
    {id: "ingfilmes", nome: "Filmes", preco: 25 },
]

function preencherOpcoes() {

    const selectcategoria = document.getElementById("categoria");
    for (let i = 0; i < comida.length; i++) {
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

function gerarRelatorio() {
  
  const categoria = document.getElementById("categoria").value;
  const ingressos = parseInt(document.getElementById("ingressos").value);
  const comidaId = document.getElementById("comida").value;
  const bebidaId = document.getElementById("bebida").value;
  const quantidadeComida = parseInt(document.getElementById("quantidadeComida").value);
  const quantidadeBebida = parseInt(document.getElementById("quantidadeBebida").value);

  
  const comidaSelecionada = procurarPorId(comida, comidaId);
  const bebidaSelecionada = procurarPorId(bebida, bebidaId);
  const precoIngresso = preco[0].preco;
  const valorComida = comidaSelecionada.preco * quantidadeComida ;
  const valorBebida = bebidaSelecionada.preco * quantidadeBebida ;
  const total = (ingressos * precoIngresso) + valorComida + valorBebida;


  const relatorioHTML = `
    <h2>Relatório</h2>
    <p><strong>Categoria:</strong> ${categoria}</p>
    <p><strong>Quantidade de ingressos:</strong> ${ingressos}</p>
    <p><strong>Comida:</strong> ${comidaSelecionada.nome} (${quantidadeComida})</p>
    <p><strong>Bebida:</strong> ${bebidaSelecionada.nome} (${quantidadeBebida})</p>
    <p><strong>Total a pagar:</strong> R$ ${total.toFixed(2)}</p>
  `;
  document.getElementById("relatorio").innerHTML = relatorioHTML;
}