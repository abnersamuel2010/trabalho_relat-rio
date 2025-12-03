const assentosSelecionados = [];
const ingressosSelecionados = [];
const horariosSelecionados = [];
const comidaSelecionados = [];
const bebidaSelecionados = [];
const comboSelecionados = [];
let filmeSelecionado = "Nenhum";

let totalIngressos = 0;
let totalComidas = 0;
let totalBebidas = 0;
let totalCombos = 0;

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
const horario = [
    { id: "11:00", nome: "11:00" },
    { id: "13:30", nome: "13:30" },
    { id: "16:00", nome: "16:00" },
    { id: "18:30", nome: "18:30" },
    { id: "21:00", nome: "21:00" },
]
const categoria = [
    { id: "Nenhum", nome: "Nenhum" },
    { id: "Terror", nome: "Terror👻" },
    { id: "Aventura", nome: "Aventura🗺️" },
    { id: "Romance", nome: "Romance❤️" },
    { id: "Comedia", nome: "Comédia🤣" },
    { id: "Drama", nome: "Drama🌹" },
    { id: "Acao", nome: "Ação🥊" },
]

const Filmesterror = [
    { id: "Terrifier", nome: "Terrifier" },
    { id: "Hora do Pesadelo", nome: "Hora do Pesadelo" },
    { id: "Sextafeira 13", nome: "Sextafeira 13 " },
]

const Filmesaventura = [
    { id: "Jumanji", nome: "Jumanji" },
    { id: "Vingadores", nome: "Vingadores" },
    { id: "Velozes e Furiosos", nome: "Velozes e Furiosos" },
]

const Filmesromance = [
    { id: "Titanic", nome: "Titanic" },
    { id: "Como eu era antes de você", nome: "Como eu era antes de você" },
    { id: "10 coisas que eu odeio você", nome: "10 coisas que eu odeio você" },
]

const Filmescomedia = [
    { id: "Um maluco no golf", nome: "Um maluco no golf" },
    { id: "De repente trinta", nome: "De repente trinta" },
    { id: "Gente grande", nome: "Gente grande" },
]

const Filmesdrama = [
    { id: "Culpa das estrelas", nome: "Culpa das estrelas" },
    { id: "Show de truman", nome: "Show de truman" },
    { id: "Interestelar", nome: "Interestelar" },
]
const Filmesacao = [
    { id: "Formula 1", nome: "Formula 1" },
    { id: "Quarteto Fantástico", nome: "Quarteto Fantástico" },
    { id: "Superman", nome: "Superman" },
]
const comida = [
    { id: "nenhuma", nome: "Nenhuma", preco: 0 },
    { id: "Cachorro Quente", nome: "Cachorro Quente🌭 - 14,99R$", preco: 14.99 },
    { id: "Pipoca Pequena", nome: "Pipoca Pequena🍿 - 9,99R$", preco: 9.99 },
    { id: "Pipoca Média", nome: "Pipoca Média🍿 - 19,99R$", preco: 19.99 },
    { id: "Pipoca Grande", nome: "Pipoca Grande🍿 - 29,99R$", preco: 29.99 },
    { id: "Pipoca Gigante", nome: "Pipoca Gigante🍿 - 39,99R$", preco: 39.99 },
]
const bebida = [
    { id: "nenhuma", nome: "Nenhuma", preco: 0 },
    { id: "Coca-Cola", nome: "Coca-Cola🥤 - 11,99R$", preco: 11.99 },
    { id: "Pepsi", nome: "Pepsi🥤 - 11,99R$", preco: 11.99 },
    { id: "Guaraná", nome: "Guaraná🥤 - 11,99R$", preco: 11.99 },
]

const combo = [
    { id: "nenhuma", nome: "Nenhuma", preco: 0 },
    { id: "Combo Classic", nome: "Pipoca Grande(salgada) + Refrigerante(350ml) - 49,99R$", preco: 49.99 },
    { id: "Combo Classic Duo", nome: "Pipoca Gigante(salgada ou doce) + Refil + 2 Refrigerante - 69,99R$", preco: 69.99 },
    { id: "Combo Classic Prime", nome: "Pipoca Grande(salgada ou doce) + Balde/Copo personalizado(Copo Refil) - 99,99R$", preco: 99.99 },
    { id: "Combo Classic Supremo ", nome: "Balde Gigante personalizado(Refil) (salgada ou doce) + Copo Personalizado - 119,99R$ ", preco: 119.99 },
]
const ingressos = [
    { id: "Inteira", nome: "Inteira - 24,99R$", preco: 24.99 },
    { id: "Meia", nome: "Meia-Entrada - 11,99R$", preco: 11.99 },
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
    const selecthorario = document.getElementById("horario");
    for (let i = 0; i < horario.length; i++) {
        const item = horario[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        selecthorario.appendChild(option);
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
}

function gerarCategoria() {
    const categoriaSelecionada = document.getElementById("categoria").value;
    const categoriaId = document.getElementById("categoria").value;

    if (categoriaSelecionada == "Terror") {
        const categoriaHTML = `
            <select id="Filmesterror"></select>
            <button type="button" onclick="gerarFilme()">Enviar</button><br><br>
        `;
        document.getElementById("mostrarcategoria").innerHTML = categoriaHTML;

        const selectFilmesterror = document.getElementById("Filmesterror");
        for (let i = 0; i < Filmesterror.length; i++) {
            const item = Filmesterror[i];
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nome;
            selectFilmesterror.appendChild(option);
        }
    }
    if (categoriaSelecionada == "Aventura") {
        const categoriaHTML = `
            <select id="Filmesaventura"></select>
            <button type="button" onclick="gerarFilme()">Enviar</button><br><br>
        `;
        document.getElementById("mostrarcategoria").innerHTML = categoriaHTML;

        const selectFilmesaventura = document.getElementById("Filmesaventura");
        for (let i = 0; i < Filmesaventura.length; i++) {
            const item = Filmesaventura[i];
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nome;
            selectFilmesaventura.appendChild(option);
        }
    }
    if (categoriaSelecionada == "Romance") {
        const categoriaHTML = `
            <select id="Filmesromance"></select>
            <button type="button" onclick="gerarFilme()">Enviar</button><br><br>
        `;
        document.getElementById("mostrarcategoria").innerHTML = categoriaHTML;

        const selectFilmesromance = document.getElementById("Filmesromance");
        for (let i = 0; i < Filmesromance.length; i++) {
            const item = Filmesromance[i];
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nome;
            selectFilmesromance.appendChild(option);
        }
    }
    if (categoriaSelecionada == "Comedia") {
        const categoriaHTML = `
            <select id="Filmescomedia"></select>
            <button type="button" onclick="gerarFilme()">Enviar</button><br><br>
        `;
        document.getElementById("mostrarcategoria").innerHTML = categoriaHTML;

        const selectFilmescomedia = document.getElementById("Filmescomedia");
        for (let i = 0; i < Filmescomedia.length; i++) {
            const item = Filmescomedia[i];
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nome;
            selectFilmescomedia.appendChild(option);
        }
    }
    if (categoriaSelecionada == "Drama") {
        const categoriaHTML = `
            <select id="Filmesdrama"></select>
            <button type="button" onclick="gerarFilme()">Enviar</button><br><br>
        `;
        document.getElementById("mostrarcategoria").innerHTML = categoriaHTML;

        const selectFilmesdrama = document.getElementById("Filmesdrama");
        for (let i = 0; i < Filmesdrama.length; i++) {
            const item = Filmesdrama[i];
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nome;
            selectFilmesdrama.appendChild(option);
        }
    }
    if (categoriaSelecionada == "Acao") {
        const categoriaHTML = `
            <select id="Filmesacao"></select>
            <button type="button" onclick="gerarFilme()">Enviar</button><br><br>
        `;
        document.getElementById("mostrarcategoria").innerHTML = categoriaHTML;

        const selectFilmesacao = document.getElementById("Filmesacao");
        for (let i = 0; i < Filmesacao.length; i++) {
            const item = Filmesacao[i];

            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.nome;
            selectFilmesacao.appendChild(option);
        }
    }

    const categoriaHTML = ` ${categoriaId} `;
    document.getElementById("categoriaMostrar").innerHTML = categoriaHTML;
}

function adicionarAssento() {
    const letra = document.getElementById("letras").value;
    const numero = document.getElementById("numeros").value;
    const assento = letra + numero;

    if (!assentosSelecionados.includes(assento)) {
        assentosSelecionados.push(assento);
    }
    const mostragemAssentos = document.getElementById("assentoMostrar");
    if (mostragemAssentos) {
        mostragemAssentos.textContent = assentosSelecionados.join(", ") || "Nenhum";
    }
}

function adicionarIngresso() {
    const ingressoId = document.getElementById("ingressos").value;
    const quantidadeIngressos = parseInt(document.getElementById("quantidadeIngressos").value);

    if (quantidadeIngressos > 0){
        var ingressoObj = procurarPorId(ingressos, ingressoId);
        if (!ingressoObj) {
            alert("Erro: ingresso não encontrado.");
            return;
        }

        const nomeIngresso = ingressoObj.id;
        const ingressoComQtd = nomeIngresso + " (" + quantidadeIngressos + ")";

        if (!ingressosSelecionados.includes(ingressoComQtd)) {
            ingressosSelecionados.push(ingressoComQtd);
        }

        totalIngressos += ingressoObj.preco * quantidadeIngressos;

        const mostragemIngresso = document.getElementById("ingressoMostrar");
        if (mostragemIngresso) {
            mostragemIngresso.textContent = ingressosSelecionados.join(", ") || "Nenhum";
        }
    } else {
        alert("Por favor, insira uma quantidade válida de ingressos.");
    }
}

function adicionarHorario() {
    const horarioId = document.getElementById("horario").value;
    const horarioHTML = ` ${horarioId} `;
    document.getElementById("horarioMostrar").innerHTML = horarioHTML;
}

function adicionarBebida() {
    const bebidaId = document.getElementById("bebida").value;
    const quantidadeBebidas = parseInt(document.getElementById("quantidadeBebida").value);

    if (quantidadeBebidas > 0){
        var bebidaObj = procurarPorId(bebida, bebidaId);
        if (!bebidaObj) {
            alert("Erro: bebida não encontrada.");
            return;
        }

        const nomeBebida = bebidaObj.id;
        const bebidaComQtd = nomeBebida + " (" + quantidadeBebidas + ")";

        if (!bebidaSelecionados.includes(bebidaComQtd)) {
            bebidaSelecionados.push(bebidaComQtd);
        }

        totalBebidas += bebidaObj.preco * quantidadeBebidas;

        const mostragemBebida = document.getElementById("bebidaMostrar");
        if (mostragemBebida) {
            mostragemBebida.textContent = bebidaSelecionados.join(", ") || "Nenhum";
        }
    } else {
        alert("Por favor, insira uma quantidade válida de bebidas.");
    }
}

function adicionarCombo() {
    const comboId = document.getElementById("combo").value;
    const quantidadeCombos = parseInt(document.getElementById("quantidadeCombo").value);

    if (quantidadeCombos > 0){
        var comboObj = procurarPorId(combo, comboId);
        if (!comboObj) {
            alert("Erro: combo não encontrado.");
            return;
        }

        const nomeCombo = comboObj.id;
        const comboComQtd = nomeCombo + " (" + quantidadeCombos + ")";

        if (!comboSelecionados.includes(comboComQtd)) {
            comboSelecionados.push(comboComQtd);
        }

        totalCombos += comboObj.preco * quantidadeCombos;

        const mostragemCombo = document.getElementById("comboMostrar");
        if (mostragemCombo) {
            mostragemCombo.textContent = comboSelecionados.join(", ") || "Nenhum";
        }
    } else {
        alert("Por favor, insira uma quantidade válida de combos.");
    }
}

function adicionarComida() {
    const comidaId = document.getElementById("comida").value;
    const quantidadeComidas = parseInt(document.getElementById("quantidadeComida").value);

    if (quantidadeComidas > 0){
        var comidaObj = procurarPorId(comida, comidaId);
        if (!comidaObj) {
            alert("Erro: comida não encontrada.");
            return;
        }

        const nomeComida = comidaObj.id;
        const comidaComQtd = nomeComida + " (" + quantidadeComidas + ")";

        if (!comidaSelecionados.includes(comidaComQtd)) {
            comidaSelecionados.push(comidaComQtd);
        }

        totalComidas += comidaObj.preco * quantidadeComidas;

        const mostragemComida = document.getElementById("comidaMostrar");
        if (mostragemComida) {
            mostragemComida.textContent = comidaSelecionados.join(", ") || "Nenhum";
        }
    } else {
        alert("Por favor, insira uma quantidade válida de comidas.");
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
function gerarFilme() {
    const categoriaId = document.getElementById("categoria").value;
    let selecionado = "Nenhum";

    if (categoriaId === "Terror" && document.getElementById("Filmesterror")) {
        selecionado = document.getElementById("Filmesterror").value;
    } else if (categoriaId === "Aventura" && document.getElementById("Filmesaventura")) {
        selecionado = document.getElementById("Filmesaventura").value;
    } else if (categoriaId === "Romance" && document.getElementById("Filmesromance")) {
        selecionado = document.getElementById("Filmesromance").value;
    } else if (categoriaId === "Comedia" && document.getElementById("Filmescomedia")) {
        selecionado = document.getElementById("Filmescomedia").value;
    } else if (categoriaId === "Drama" && document.getElementById("Filmesdrama")) {
        selecionado = document.getElementById("Filmesdrama").value;
    } else if (categoriaId === "Acao" && document.getElementById("Filmesacao")) {
        selecionado = document.getElementById("Filmesacao").value;
    }

    filmeSelecionado = selecionado || "Nenhum";
    document.getElementById("filmeMostrar").textContent = filmeSelecionado;
    document.getElementById("categoriaMostrar").textContent = categoriaId || "Nenhum";
}

function total() {
    let totalFinal = totalIngressos + totalComidas + totalBebidas + totalCombos;
    document.getElementById("totalMostrar").textContent =
        "Total: R$ " + totalFinal.toFixed(2).replace(".", ",");
}
