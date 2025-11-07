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
    { id: "cb", nome: "Cachorro Quente🌭 - 14,99R$", preco: 14.99 },
    { id: "pp", nome: "Pipoca Pequena🍿 - 9,99R$", preco: 9.99 },
    { id: "pm", nome: "Pipoca Média🍿 - 19,99R$", preco: 19.99 },
    { id: "pg", nome: "Pipoca Grande🍿 - 29,99R$", preco: 29.99 },
    { id: "pgg", nome: "Pipoca Gigante🍿 - 39,99R$", preco: 39.99 },
]
const bebida = [
    { id: "nenhuma", nome: "Nenhuma", preco: 0 },
    { id: "cc", nome: "Coca-Cola🥤 - 11,99R$", preco: 11.99 },
    { id: "pp", nome: "Pepsi🥤 - 11,99R$", preco: 11.99 },
    { id: "gr", nome: "Guaraná🥤 - 11,99R$", preco: 11.99 },
]

const combo = [
    { id: "nenhuma", nome: "Nenhuma", preco: 0 },
    { id: "Combo Classic", nome: "Pipoca Grande(salgada) + Refrigerante(350ml) - 49,99R$", preco: 49.99 },
    { id: "Combo classic Duo", nome: "Pipoca Gigante(salgada ou doce) + Refil + 2 Refrigerante - 69,99R$", preco: 69.99 },
    { id: "Combo Classic Prime", nome: "Pipoca Grande(salgada ou doce) + Balde/Copo personalizado(Copo Refil) - 99,99R$", preco: 99.99 },
    { id: "Combo Classic Supremo ", nome: "Balde Gigante personalizado(Refil) (salgada ou doce) + Copo Personalizado - 119,99R$ ", preco: 119.99 },
]
const ingressos = [
    { id: "inteira", nome: "Inteira - 24,99R$", preco: 24.99 },
    { id: "meia", nome: "Meia-Entrada - 11,99R$", preco: 11.99 },
]

function preencherOpcoes() {//é chamada na linha 473
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
            <div class="blocoFilme">
                <div class="sinopseFilme">
                    <p>Enquanto cuida de duas crianças no halloween, uma babá encontra uma antiga fita VHS no saco de doces. O filme apresenta três contos de terror, todos ligados entre si por um palhaço assassino. Ao longo da noite, coisas estranhas começam a acontecer na casa e a presença do palhaço parece cada vez mais real.</p>
                </div>
            </div>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Hora do Pesadelo") {
            const filmeHTML = `
            <img src="img/ahoradopesadelo.jpg" alt="horadopesadelo" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Um grupo de adolescentes tem pesadelos horríveis, em que são atacados por um homem deformado com garras de aço. Ele apenas aparece durante o sono e, para escapar, é preciso acordar. Os crimes vão ocorrendo seguidamente, até que se descobre que o ser misterioso é na verdade Freddy Krueger, um homem que molestou crianças na rua Elm e que foi queimado vivo pela vizinhança. Agora, Krueger pode ter retornado para se vingar daqueles que o mataram, através do sono.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Sextafeira 13") {
            const filmeHTML = `
            <img src="img/sextafeira13.jpg" alt="sextafeira13" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>O filme "Sexta-Feira 13" é um clássico do terror slasher lançado em 1980, dirigido por Sean S. Cunningham e escrito por Victor Miller. A trama se desenrola em torno de um grupo de jovens monitores que são brutalmente assassinados enquanto trabalham em um acampamento abandonado, o Crystal Lake, que está sendo reaberto. O filme é conhecido por sua violência gráfica e por estabelecer um padrão para o gênero slasher, sendo a origem do icônico assassino Jason Voorhees, apesar de sua mãe ser a assassina principal no primeiro filme.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Aventura") {
        const filmeSelecionado = document.getElementById("Filmesaventura").value;
        if (filmeSelecionado == "Jumanji") {
            const filmeHTML = `
            <img src="img/jumanji.jpg" alt="jumanji" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Quatro adolescentes encontram um videogame cuja ação se passa em uma floresta tropical. Empolgados com o jogo, eles escolhem seus avatares para o desafio, mas um evento inesperado faz com que eles sejam transportados para dentro do universo fictício, transformando-os nos personagens da aventura.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Vingadores") {
            const filmeHTML = `
            <img src="img/vingadores.jpg" alt="vingadores" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Velozes e Furiosos") {
            const filmeHTML = `
            <img src="img/velozesefuriosos.jpg" alt="velozesefuriosos" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Velozes e Furiosos é uma franquia de mídia e Universo Compartilhado centrado em uma série de filmes de ação que estão amplamente preocupados com corridas de rua, assaltos, espiões e família. A franquia também inclui curtas-metragens, uma série de televisão, videogames e atrações de parques temáticos.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Romance") {
        const filmeSelecionado = document.getElementById("Filmesromance").value;
        if (filmeSelecionado == "Titanic") {
            const filmeHTML = `
            <img src="img/titanic.jpg" alt="titanic" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Como eu era antes de você") {
            const filmeHTML = `
            <img src="img/comoeueraantesdevoce.jpg" alt="comoeueraantesdevoce" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "10 coisas que eu odeio você") {
            const filmeHTML = `
            <img src="img/10coisaodeio.jpg" alt="10coisaseueodio" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Bianca Stratford é bonita e popular, mas não pode namorar antes que sua irmã mais velha encontre um namorado primeiro. O problema é que nenhum garoto consegue chegar perto da irmã, Kat Stratford. Para resolver a situação, um rapaz interessado em Bianca suborna um amigo com passado misterioso para sair com Kat e, quem sabe, tentar conquistá-la.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Comedia") {
        const filmeSelecionado = document.getElementById("Filmescomedia").value;
        if (filmeSelecionado == "Um maluco no golf") {
            const filmeHTML = `
            <img src="img/malucogolf.jpg" alt="ummaluconogolf" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Happy Gilmore quer ser um jogador profissional de hóquei, mas acaba descobrindo que tem um talento muito especial para jogar golfe. O satírico e desbocado atleta acaba ganhando dinheiro suficiente para poder ajudar a sua avó, que está prestes a perder a casa por falta de pagamento de impostos. O problema é que esse maluco se torna um herói improvável para o esporte, o que desagrada bastante os golfistas, tão educados e elegantes.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "De repente trinta") {
            const filmeHTML = `
            <img src="img/derepentetrinta.jpg" alt="derepentetinta" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Jenna Rink é uma garota que está descontente com sua própria idade. Em seu 13º aniversário, ela faz um pedido: virar adulta. O pedido milagrosamente se torna realidade e, no dia seguinte, Jenna acorda com 30 anos de idade.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Gente grande") {
            const filmeHTML = `
            <img src="img/gentegrande.jpg" alt="gentegande" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>A morte do treinador de basquete de infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Drama") {
        const filmeSelecionado = document.getElementById("Filmesdrama").value;
        if (filmeSelecionado == "Culpa das estrelas") {
            const filmeHTML = `
            <img src="img/culpadasestrelas.jpg" alt="culpadasestrelas" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Hazel Grace Lancaster e Augustus Waters são dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer. Por causa da doença, Hazel sempre descartou a ideia de se envolver amorosamente, mas acaba cedendo ao se apaixonar por Augustus. Juntos, eles viajam para Amsterdã, onde embarcam em uma jornada inesquecível. </p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Show de truman") {
            const filmeHTML = `
            <img src="img/truman.jpg" alt="showdetruman" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>O produtor executivo Christof organiza um reality show baseado na vida de um homem comum, Truman Burbank. Mas Truman não sabe que todos os seus movimentos estão sendo captados por câmeras. Após conhecer Lauren, Truman decide mudar de vida.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Interestelar") {
            const filmeHTML = `
            <img src="img/interestelar.jpg" alt="interestelar" class="tamanhoFilme">
           <center>
            <div class="sinopseFilme">
                <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
    }
    if (categoriaSelecionada == "Acao") {
        const filmeSelecionado = document.getElementById("Filmesacao").value;
        if (filmeSelecionado == "Formula 1") {
            const filmeHTML = `
            <img src="img/formula1.jpg" alt="formula1" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Na década de 1990, Sonny Hayes era o piloto mais promissor da Fórmula 1 até que um acidente na pista quase encerrou sua carreira. Trinta anos depois, o proprietário de uma equipe de Fórmula 1 em dificuldades convence Sonny a voltar a correr e se tornar o melhor do mundo.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Quarteto Fantástico") {
            const filmeHTML = `
            <img src="img/quartetofantastico.jpg" alt="quartetofantastico" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Um grupo de astronautas passa por uma tempestade cósmica durante seu voo experimental. Ao retornar à Terra, os tripulantes descobrem que possuem novas e bizarras habilidades. Reed Richards pode esticar seu corpo. Sua noiva, Susan Storm, ganha a habilidade de se tornar invisível. Seu irmão mais novo, Johnny Storm, adquiriu o poder de controlar o fogo e voar. Já o piloto Ben Grimm foi transformado em um monstro rochoso. Ao tentar compreender seus poderes, eles têm que lidar com novas ameaças.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
        if (filmeSelecionado == "Superman") {
            const filmeHTML = `
            <img src="img/superman.jpg" alt="superman" class="tamanhoFilme">
            <center>
            <div class="sinopseFilme">
                <p>Superman embarca em uma jornada para reconciliar sua herança kryptoniana com sua criação humana.</p>
            </div>
            </center>
            `;
            document.getElementById("mostrarfilme").innerHTML = filmeHTML;
        }
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

    let filmeSelecionado = "Nenhum";

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
        <p><strong>Tipo(s) de Ingresso(s):</strong> ${ingressosSelecionada.id}</p>
        <p><strong>Quantidade de ingresso(s):</strong> ${quantidadeIngressos}</p>
        <p><strong>Assento(s) Escolhido(s):</strong> ${assentos}</p>
        <p><strong>Comida:</strong> ${comidaSelecionada.nome} (${quantidadeComida})</p>
        <p><strong>Bebida:</strong> ${bebidaSelecionada.nome} (${quantidadeBebida})</p>
        <p><strong>Combo:</strong> ${comboSelecionado.nome} (${quantidadeCombo})</p>
        <p><strong>Total a pagar:</strong> R$ ${total.toFixed(2)}</p>
        <p><strong>Obrigado por comprar conosco!</strong></p>

`;
    document.getElementById("relatorio").innerHTML = relatorioHTML;
}
