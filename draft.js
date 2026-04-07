const categorias = [
    { id: '1', nome: '/ Goleiros \\' },
    { id: '2', nome: '/ Sentimentos e Vontades \\' },
    { id: '3', nome: '/ Locais, Objetos e Veículos \\' },
    { id: '4', nome: '/ Políticos e Impacto \\' },
    { id: '5', nome: '/ Pensadores \\' },
    { id: '6', nome: '/ Monstros e Deuses \\' },
    { id: '7', nome: '/ Animais \\' },
    { id: '8', nome: '/ Esportes \\' },
    { id: '9', nome: '/ Cultura Pop \\' },
    { id: '10', nome: '/ Animes e Heróis \\' },
    { id: '11', nome: '/ Séries e Filmes \\' },
    { id: '12', nome: '/ Games \\' },
    { id: '13', nome: '/ Piadas Internas \\' }
];
const times = {
    'livre': { nome: '*', classe: '' },
    'pleiades': { nome: 'Plêiades', classe: 'time-rambiassa' },
    'rambiassu': { nome: 'Rambiassu', classe: 'time-rambiassu' },
    'itapuri': { nome: 'Acafri', classe: 'time-itapuri' }
};

const nomesJogadores = {
    '1': ["Cronos", "Endo", "Galvão Bueno", "Prudence", "Boneco de Posto", "Leviatã", "Terêncio", "Mulher Elástica", "Canarinho Tranquilo", "Omnitraxos Prime", "Município de São Paulo", "Palpatine", "Aurélio Sol", "Cássio Queixo rubro", "Napoleão Hill"],
    '2': ["O Conceito de Fusão", "A Vontade de Esfolar uma Buceta", "Reprodução Assexuada", "O Crescimento Comicamente Rápido", "O Curso", "O Amor Platônico de forma tão saudável quanto pode ser", "Caos", "O Amor Não Recíproco", "O Medo Constante do Fracasso", "O conceito de ser bobo", "A Morena", "Depressão2", "A ordem dada pela cônjuge", "O verso Perfeito", "Um arrombamento"],
    '3': ["Disjuntor", "Barragem de lil brumado", "Excalibur", "Muralha da China", "Wifi", "Avião do Mercado Livre", "Uno com Escadas jogando uno em uma escada", "Computador Quântico", "Mac do Carros", "Município de Ouvidor", "Ilha de Pelé Transmigrada de Vanuatu para o Uruguai com um vulcão ativo", "Uma Cadeira", "Um Ônibus estacionado", "Um gol em sobreposição quântica entre ser bolinha ou quadrado", "Constantinopla"],
    '4': ["Hun Manet", "Pol Pot", "Benito Mussolini", "Trump", "Gen. Costa e Silva", "Qin Shi", "Bolsonaro", "Ousama Bilanden", "Rainha Elizabeth", "Enéias", "Joana d'Arc", "Dr. Zacharias Kalil", "Lula", "Collor", "Angela Merkel"],
    '5': ["Van Gogh", "Filósofo Píton", "Charles Darwin", "Newton", "Schrödinger", "Nietzsche", "Platão", "Sócrates", "Aristóteles", "Søren Kierkegaard", "Paulo Freire", "Louis Pasteur", "Freud", "René Descartes", "Nicolau Copérnico"], 
    '6': ["Chtullhu", "Saci Pererê", "Dionisio", "Noé", "Hermes", "Papai Noel", "Gilgamesh", "Tanatos", "Anubis", "Moisés", "Adão", "Zéfiro", "Tupã", "Wukong", "Gherman Sparrow"],
    '7': ["Espinosauro", "Gorila", "Rinoceronte", "Papa Léguas", "Gato a Jato", "Pelé (O animal)", "Avestruz", "Boto Cor de Rosa", "Tina T-Rex", "Máximo (Eu sou o máximo)", "Tilápia", "Jake (Hora de Aventura)", "Dwarg", "Sheldon", "Dwolf"], 
    '8': ["Daronco", "Popó", "Ramon Dino", "Wilton Pereira Sampaio", "Pep Guardiola", "Yusuf Dikec", "Airtonmar", "Lukaku", "Emiliano Sala", "George Best", "Chay", "Neymar Hipotético", "Vitor Sexo Rodrigues", "Dragolino", "PAI ADSON BATISTA"],
    '9': ["P.diddy", "Kid Bengala", "Cariane Walter White", "Alexandre Frota", "Terry Crews", "Luva de Pedreiro", "Michael Jackson", "Celso Portiolli", "Elvis Presley", "Thais Carla de biquíni", "Belle Velhinha", "Ariano Suassuna", "Eike Batista", "Jorge Paulo Lemman e seu patrimônio", "JazzGhost"], 
    '10': ["Batman", "Inumaki", "Acnologia", "Magneto", "Jin Mori", "Naruto Uzandocraki", "Mutano", "Madara", "Takezo", "Reinhard", "Mística", "Gelado", "O Dragão Supremo de Olhos Azuis", "Roniejo", "Hulk"], 
    '11': ["Homerzila", "Bonequinha do Round 6", "Sugilite", "Tamatoa", "Chapolin Colorado", "Djin Djarin", "Barbie", "Johnny Bravo", "Sharkboy", "Anakin Skywalker", "Darth Jar Jar", "Jogador 456", "Chaves", "Penny Fitzgerald", "Titio Avô"],
    '12': ["Reptile", "Blanka", "E-Honda", "Donkey Kong", "El Primo", "Mineirinho", "Steve", "Enderman", "Herobrine", "Doodieman", "CR7 de FACÃO", "Messi Careca", "AMOGUS", "O Guarda do Subway Surfers", "Kratos"],
    '13': ["Eterna", "Mikaio", "Zuletinha", "Alfa Omega", "Cecilho Jamal", "Al Fodão", "El Merdinha", "Mini dio Brando", "Suzana", "O mascote da Atlética", "O conceito de ir trancar essa Porra! ", "O PIB da Zâmbia Bruto", "Anti-Palestino", "O Carlos", "A Homossexualidade dentro do CEPI"]
};

const estadoDraft = {};
categorias.forEach(cat => {
    estadoDraft[cat.id] = [];
    for(let i = 0; i < 15; i++) {
        estadoDraft[cat.id].push({ nome: nomesJogadores[cat.id][i], time: 'livre' });
    }
});

let indiceCategoriaAtual = 0;

const tituloCategoria = document.getElementById('nome-categoria');
const gradeDraft = document.getElementById('grade-draft');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

function renderizarGrade() {
    const categoriaAtual = categorias[indiceCategoriaAtual];
    tituloCategoria.textContent = categoriaAtual.nome;
    gradeDraft.innerHTML = '';

    const jogadores = estadoDraft[categoriaAtual.id];

    jogadores.forEach((jogador, index) => {
        const celula = document.createElement('div');
        celula.className = `celula-jogador ${times[jogador.time].classe}`;
        celula.textContent = jogador.nome;

        const menu = document.createElement('div');
        menu.className = 'menu-opcoes';

        Object.keys(times).forEach(timeKey => {
            const opcao = document.createElement('div');
            opcao.className = 'opcao-time';
            opcao.textContent = times[timeKey].nome;
            
            opcao.addEventListener('click', (e) => {
                e.stopPropagation(); 
                selecionarTime(categoriaAtual.id, index, timeKey);
            });
            menu.appendChild(opcao);
        });

        celula.appendChild(menu);

        celula.addEventListener('click', () => {
            document.querySelectorAll('.celula-jogador').forEach(c => {
                if(c !== celula) c.classList.remove('ativo');
            });
            celula.classList.toggle('ativo');
        });

        gradeDraft.appendChild(celula);
    });
}

function selecionarTime(idCategoria, indexJogador, novoTime) {
    const jogadoresCategoria = estadoDraft[idCategoria];
    
    if(novoTime !== 'livre') {
        let contagemTime = 0;
        jogadoresCategoria.forEach(j => {
            if(j.time === novoTime) contagemTime++;
        });

        if(contagemTime >= 2) {
            alert(`Atenção: O time ${times[novoTime].nome} já possui 2 jogadores na categoria ${categorias.find(c => c.id === idCategoria).nome.replace(/[\/\\]/g, '').trim()}!`);
            document.querySelectorAll('.celula-jogador').forEach(c => c.classList.remove('ativo'));
            return;
        }
    }

    jogadoresCategoria[indexJogador].time = novoTime;
    renderizarGrade(); 
}

btnAnterior.addEventListener('click', () => {
    indiceCategoriaAtual = (indiceCategoriaAtual - 1 + categorias.length) % categorias.length;
    renderizarGrade();
});

btnProximo.addEventListener('click', () => {
    indiceCategoriaAtual = (indiceCategoriaAtual + 1) % categorias.length;
    renderizarGrade();
});

document.addEventListener('click', (e) => {
    if(!e.target.closest('.celula-jogador')) {
        document.querySelectorAll('.celula-jogador').forEach(c => c.classList.remove('ativo'));
    }
});

renderizarGrade();
