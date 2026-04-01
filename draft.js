const categorias = [
    { id: '1', nome: '/ Goleiros \\' },
    { id: '2', nome: '/ Defensores \\' },
    { id: '3', nome: '/ Meias \\' },
    { id: '4', nome: '/ Atacantes \\' },
    { id: '5', nome: '/ Treinadores \\' },
    { id: '6', nome: '/ Arbitragem \\' },
    { id: '7', nome: '/ Estádios \\' },
    { id: '8', nome: '/ Torcidas \\' },
    { id: '9', nome: '/ Troféus \\' },
    { id: '10', nome: '/ Categorias de Base \\' }
];

const times = {
    'livre': { nome: '*', classe: '' },
    'pleiades': { nome: 'Plêiades', classe: 'time-rambiassa' },
    'rambiassu': { nome: 'Rambiassu', classe: 'time-rambiassu' },
    'itapuri': { nome: 'Itapuri', classe: 'time-itapuri' }
};

const nomesJogadores = {
    '1': ["Muralha", "Paredão", "Luva", "Reflexo", "Aranha", "Gato", "Defesa", "Mão de Ferro", "Bloqueio", "Escudo", "Guardião", "Voador", "Elástico", "Cássio", "Fortaleza"],
    '2': ["Chandão", "Xerife", "Zagueiro 3", "Rocha", "Trator", "Cadeado", "Segurança", "Zagueiro 8", "Zagueiro 9", "Zagueiro 10", "Zagueiro 11", "Zagueiro 12", "Zagueiro 13", "Zagueiro 14", "Zagueiro 15"],
    '3': ["Sháylon", "Maestro", "Motor", "Bússola", "Meia 5", "Meia 6", "Meia 7", "Meia 8", "Meia 9", "Meia 10", "Meia 11", "Meia 12", "Meia 13", "Meia 14", "Meia 15"],
    '4': ["Muralha", "Paredão", "Luva", "Reflexo", "Aranha", "Gato", "Defesa", "Mão de Ferro", "Bloqueio", "Escudo", "Guardião", "Voador", "Elástico", "Cássio", "Fortaleza"],
    '5': ["Carlos", "Artilheiro", "Flecha", "Matador", "Atacante 5", "Atacante 6", "Atacante 7", "Atacante 8", "Atacante 9", "Atacante 10", "Atacante 11", "Atacante 12", "Atacante 13", "Atacante 14", "Atacante 15"]
    '1': ["Muralha", "Paredão", "Luva", "Reflexo", "Aranha", "Gato", "Defesa", "Mão de Ferro", "Bloqueio", "Escudo", "Guardião", "Voador", "Elástico", "Cássio", "Fortaleza"],
    '2': ["Chandão", "Xerife", "Zagueiro 3", "Rocha", "Trator", "Cadeado", "Segurança", "Zagueiro 8", "Zagueiro 9", "Zagueiro 10", "Zagueiro 11", "Zagueiro 12", "Zagueiro 13", "Zagueiro 14", "Zagueiro 15"],
    '3': ["Sháylon", "Maestro", "Motor", "Bússola", "Meia 5", "Meia 6", "Meia 7", "Meia 8", "Meia 9", "Meia 10", "Meia 11", "Meia 12", "Meia 13", "Meia 14", "Meia 15"],
    '4': ["Muralha", "Paredão", "Luva", "Reflexo", "Aranha", "Gato", "Defesa", "Mão de Ferro", "Bloqueio", "Escudo", "Guardião", "Voador", "Elástico", "Cássio", "Fortaleza"],
    '5': ["Carlos", "Artilheiro", "Flecha", "Matador", "Atacante 5", "Atacante 6", "Atacante 7", "Atacante 8", "Atacante 9", "Atacante 10", "Atacante 11", "Atacante 12", "Atacante 13", "Atacante 14", "Atacante 15"]
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
