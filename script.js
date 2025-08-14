function exibirValor() {
    const select = document.getElementById("filme");
    const valorSelecionado = select.value;
    document.getElementById('categoria').textContent = 'Categoria: ' + valorSelecionado;
}
const terror = [
    { id: "tr", nome: "Terrifier", preço: 25 },
    { id: "hp", nome: "Hora do pesadelo", preço: 25 },
    { id: "s13", nome: "Sexta-feira 13  ", preço: 25 },
]

const aventura = [
    { id: "jj", nome: "Jumanji", preço: 25 },
    { id: "vg", nome: "Vingadores", preço: 25 },
    { id: "vf", nome: "Velores e Furiosos", preço: 25 },
]

const romance = [
    { id: "tc", nome: "Titanic", preço: 25 },
    { id: "cv", nome: "Como eu era antes de você", preço: 25 },
    { id: "10o", nome: "10 coisas que eu odeio você", preço: 25 },
]

const comedia = [
    { id: "mg", nome: "Um maluco no golf", preço: 25 },
    { id: "dt", nome: "De repente trinta", preço: 25 },
    { id: "gg", nome: "Gente grande", preço: 25 },
]

const drama = [
    { id: "ce", nome: "Culpa das estrelas", preço: 25 },
    { id: "st", nome: "Show de truman", preço: 25 },
    { id: "it", nome: "Interstelar", preço: 25 },
]
