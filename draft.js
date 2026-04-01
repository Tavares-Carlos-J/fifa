// Dados iniciais e times disponíveis
const categorias = [
    { id: 'goleiros', nome: '/ Goleiros \\' },
    { id: 'defensores', nome: '/ Defensores \\' },
    { id: 'meias', nome: '/ Meias \\' },
    { id: 'atacantes', nome: '/ Atacantes \\' }
];

const times = {
    'livre': { nome: '*', classe: '' },
    'pleiades': { nome: 'Plêiades', classe: 'time-pleiades' },
    'rambiassu': { nome: 'Rambiassu', classe: 'time-rambiassu' },
    'itapuri': { nome: 'Itapuri', classe: 'time-itapuri' }
};

// Gera 15 jogadores para cada categoria e guarda as escolhas (Estado)
const estadoDraft = {};
categorias.forEach(cat => {
    estadoDraft[cat.id] = [];
    for(let i = 0; i < 15; i++) {
        estadoDraft[cat.id].push({ nome: `Jogador ${i + 1}`, time: 'livre' });
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
        // Cria a célula
        const celula = document.createElement('div');
        celula.className = `celula-jogador ${times[jogador.time].classe}`;
        celula.textContent = jogador.nome;

        // Cria o menu de dropdown
        const menu = document.createElement('div');
        menu.className = 'menu-opcoes';

        Object.keys(times).forEach(timeKey => {
            const opcao = document.createElement('div');
            opcao.className = 'opcao-time';
            opcao.textContent = times[timeKey].nome;
            
            opcao.addEventListener('click', (e) => {
                e.stopPropagation(); // Impede que feche na hora de clicar
                selecionarTime(categoriaAtual.id, index, timeKey);
            });
            menu.appendChild(opcao);
        });

        celula.appendChild(menu);

        // Abre/Fecha o menu ao clicar
        celula.addEventListener('click', () => {
            // Fecha todos os outros antes de abrir
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
    
    // Se for tirar o jogador de um time, permite sempre
    if(novoTime !== 'livre') {
        // Verifica o limite de 2 jogadores
        let contagemTime = 0;
        jogadoresCategoria.forEach(j => {
            if(j.time === novoTime) contagemTime++;
        });

        if(contagemTime >= 2) {
            alert(`Regra da Federação: O time ${times[novoTime].nome} já possui 2 jogadores nesta categoria!`);
            document.querySelectorAll('.celula-jogador').forEach(c => c.classList.remove('ativo'));
            return;
        }
    }

    jogadoresCategoria[indexJogador].time = novoTime;
    renderizarGrade(); // Recarrega a grade para atualizar cores
}

// Navegação entre categorias
btnAnterior.addEventListener('click', () => {
    indiceCategoriaAtual = (indiceCategoriaAtual - 1 + categorias.length) % categorias.length;
    renderizarGrade();
});

btnProximo.addEventListener('click', () => {
    indiceCategoriaAtual = (indiceCategoriaAtual + 1) % categorias.length;
    renderizarGrade();
});

// Fechar menus se clicar fora
document.addEventListener('click', (e) => {
    if(!e.target.closest('.celula-jogador')) {
        document.querySelectorAll('.celula-jogador').forEach(c => c.classList.remove('ativo'));
    }
});

// Inicia a aplicação
renderizarGrade();
