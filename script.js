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
    { id: "Velores e Furiosos", nome: "Velores e Furiosos" },
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
    { id: "nenhuma", nome: "Nenhuma", preco: 0 },
    { id: "Combo Classic", nome: "Pipoca Grande(salgada) + Refrigerante(350ml) - 40R$", preco: 40 },
    { id: "Combo classic Duo", nome: "Pipoca Gigante(salgada ou doce) + Refil + 2 Refrigerante - 60R$", preco: 60 },
    { id: "Combo Classic Prime", nome: "Pipoca Grande(salgada ou doce) + Balde/Copo personalizado(Copo Refil) - 80R$", preco: 80 },
    { id: "Combo Classic Supremo ", nome: "Balde Grande personalizado(Refil) (salgada ou doce) + Copo Personalizado - 120R$ ", preco: 120 },
]
const ingressos = [
    { id: "inteira", nome: "Inteira", preco: 25 },
    { id: "meia", nome: "Meia-Entrada", preco: 12 },
]
const assentosSelecionados = []

function preencherOpcoes() {//é chamada na linha 407
    const selectingressos = document.getElementById("ingressos");
    for (let i = 0; i < ingressos.length; i++) {//repete o que esta dentro dos parenteses ate o final da lista
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
}

function gerarCategoria() {

    const categoriaSelecionada = document.getElementById("categoria").value;

    if (categoriaSelecionada == "Terror") {
        const categoriaHTML = `
            <label>Terror:
            <select id="Filmesterror"></select>
            </label>
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
            <label>Aventura:
            <select id="Filmesaventura"></select>
            </label>
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
            <label>Romance:
            <select id="Filmesromance"></select>
            </label>
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
            <label>Comédia:
            <select id="Filmescomedia"></select>
            </label>
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
            <label>Drama:
            <select id="Filmesdrama"></select>
            </label>
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
            <label>Ação:
            <select id="Filmesacao"></select>
            </label>
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
}


function gerarFilme() {
    const categoriaSelecionada = document.getElementById("categoria").value;
    if (categoriaSelecionada == "Terror") {
        const filmeSelecionado = document.getElementById("Filmesterror").value;
        if (filmeSelecionado == "Terrifier") {
            const filmeHTML = `
            <img src="img/terrifier.jpg" alt="terrifier" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Hora do Pesadelo") {
            const filmeHTML = `
            <img src="img/ahoradopesadelo.jpg" alt="horadopesadelo" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Sextafeira 13") {
            const filmeHTML = `
            <img src="img/sextafeira13.jpg" alt="sextafeira13" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Aventura") {
        const filmeSelecionado = document.getElementById("Filmesaventura").value;
        if (filmeSelecionado == "Jumanji") {
            const filmeHTML = `
            <img src="img/jumanji.jpg" alt="jumanji" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Vingadores") {
            const filmeHTML = `
            <img src="img/vingadores.jpg" alt="vingadores" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Velores e Furiosos") {
            const filmeHTML = `
            <img src="img/velozesefuriosos.jpg" alt="velozesefuriosos" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Romance") {
        const filmeSelecionado = document.getElementById("Filmesromance").value;
        if (filmeSelecionado == "Titanic") {
            const filmeHTML = `
            <img src="img/titanic.jpg" alt="titanic" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Como eu era antes de você") {
            const filmeHTML = `
            <img src="img/comoeueraantesdevoce.jpg" alt="comoeueraantesdevoce" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "10 coisas que eu odeio você") {
            const filmeHTML = `
            <img src="img/10coisaodeio.jpg" alt="10coisaseueodio" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Comedia") {
        const filmeSelecionado = document.getElementById("Filmescomedia").value;
        if (filmeSelecionado == "Um maluco no golf") {
            const filmeHTML = `
            <img src="img/malucogolf.jpg" alt="ummaluconogolf" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "De repente trinta") {
            const filmeHTML = `
            <img src="img/derepentetrinta.jpg" alt="derepentetinta" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Gente grande") {
            const filmeHTML = `
            <img src="img/gentegrande.jpg" alt="gentegande" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Drama") {
        const filmeSelecionado = document.getElementById("Filmesdrama").value;
        if (filmeSelecionado == "Culpa das estrelas") {
            const filmeHTML = `
            <img src="img/culpadasestrelas.jpg" alt="culpadasestrelas" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Show de truman") {
            const filmeHTML = `
            <img src="img/truman.jpg" alt="showdetruman" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Interestelar") {
            const filmeHTML = `
            <img src="img/interestelar.jpg" alt="interestelar" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Acao") {
        const filmeSelecionado = document.getElementById("Filmesacao").value;
        if (filmeSelecionado == "Formula 1") {
            const filmeHTML = `
            <img src="img/formula1.jpg" alt="formula1" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Quarteto Fantástico") {
            const filmeHTML = `
            <img src="img/quartetofantastico.jpg" alt="quartetofantastico" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Superman") {
            const filmeHTML = `
            <img src="img/superman.jpg" alt="superman" class="tamanhoFilme">
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
}

function adicionarAssento() {

    const letras = document.getElementById("letras").value;
    const numeros = document.getElementById("numeros").value;
    const relatorioDiv = document.getElementById("relatorio");


    const assento = letras + numeros;

    if ( assentosAtualizado.includes(assento) ){
        alert(" Este assento já foi selecionado!");
        return;
    }
    assentosAtualizado.push(assento);

    

    document.getElementById("letras").selectedIndex = 0;
    document.getElementById("numeros").selectedIndex = 0;
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

    const letras = document.getElementById("letras").value;
    const numeros = document.getElementById("numeros").value;
    const categoria = document.getElementById("categoria").value;
    const ingressosId = document.getElementById("ingressos").value;
    const comidaId = document.getElementById("comida").value;
    const bebidaId = document.getElementById("bebida").value;
    const comboId = document.getElementById("combo").value;
    const assentosAtualizado = document.getElementById("assentosAtualizado").value;
    const quantidadeIngressos = parseInt(document.getElementById("quantidadeIngressos").value);
    const quantidadeComida = parseInt(document.getElementById("quantidadeComida").value);
    const quantidadeBebida = parseInt(document.getElementById("quantidadeBebida").value);
    const quantidadeCombo = parseInt(document.getElementById("quantidadeCombo").value);

    let filmeSelecionado = "Nenhum filme selecionado";

    if (categoria == "Terror") {
        if (document.getElementById("Filmesterror")) {
            filmeSelecionado = document.getElementById("Filmesterror").value;
        }
    } else if (categoria == "Aventura") {
        if (document.getElementById("Filmesaventura")) {
            filmeSelecionado = document.getElementById("Filmesaventura").value;
        }
    } else if (categoria == "Romance") {
        if (document.getElementById("Filmesromance")) {
            filmeSelecionado = document.getElementById("Filmesromance").value;
        }
    } else if (categoria == "Comedia") {
        if (document.getElementById("Filmescomedia")) {
            filmeSelecionado = document.getElementById("Filmescomedia").value;
        }
    } else if (categoria == "Drama") {
        if (document.getElementById("Filmesdrama")) {
            filmeSelecionado = document.getElementById("Filmesdrama").value;
        }
    } else if (categoria == "Acao") {
        if (document.getElementById("Filmesacao")) {
            filmeSelecionado = document.getElementById("Filmesacao").value;
        }
    }
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
    <p><strong>Filme:</strong> ${filmeSelecionado}</p>
    <p><strong>Tipos de Ingressos:</strong> ${ingressosSelecionada.nome}</p>
    <p><strong>Quantidade de ingressos:</strong> ${quantidadeIngressos}</p>
    <p><strong>Assento(s) Escolhido(s):</strong> ${assentos} ${assentosAtualizado} </p>
    <p><strong>Comida:</strong> ${comidaSelecionada.nome} (${quantidadeComida})</p>
    <p><strong>Bebida:</strong> ${bebidaSelecionada.nome} (${quantidadeBebida})</p>
    <p><strong>Combo:</strong> ${comboSelecionado.nome} (${quantidadeCombo})</p>
    <p><strong>Total a pagar:</strong> R$ ${total.toFixed(2)}</p>
    <p><strong>Obrigado por comprar conosco!</strong></p>
    `;
    document.getElementById("relatorio").innerHTML = relatorioHTML;
}
