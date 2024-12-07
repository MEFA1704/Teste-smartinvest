// Seleciona todos os dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Adiciona um evento de clique para cada dropdown
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        // Alterna a classe "show" no dropdown clicado
        dropdown.classList.toggle('show');
    });
});

// Fecha o menu dropdown ao clicar fora
window.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});


// Função para abrir/fechar o menu lateral
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('active');
}

//Tabela de pontação
document.getElementById('calcular-media').addEventListener('click', () => {
    const notas = document.querySelectorAll('.nota');
    let soma = 0;
    notas.forEach(nota => {
        const valor = parseFloat(nota.textContent);
        soma += valor;

        // Destaque para notas abaixo de 7
        if (valor < 7) {
            nota.classList.add('nota-baixa');
        } else {
            nota.classList.remove('nota-baixa');
        }
    });

    const media = soma / notas.length;
    document.getElementById('media').textContent = `Média da turma: ${media.toFixed(2)}`;
});

//Comunidade
document.getElementById('nova-discussao').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;

    if (titulo && conteudo) {
        const topicos = document.getElementById('topicos');
        const novoTopico = document.createElement('li');

        novoTopico.innerHTML = `
            <h3>${titulo}</h3>
            <p>${conteudo}</p>
        `;

        topicos.appendChild(novoTopico);

        // Limpar formulário
        document.getElementById('titulo').value = '';
        document.getElementById('conteudo').value = '';
    }
});

//Contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Obrigado pelo seu contato, ' + name + '! Nós responderemos o mais breve possível.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

//Criação
// Função para mostrar mais informações sobre o criador ao clicar na foto
document.querySelectorAll('.polaroid').forEach(item => {
    item.addEventListener('click', function() {
        // Pega as informações armazenadas no atributo 'data-info'
        const extraInfo = this.getAttribute('data-info');
        
        // Exibe as informações em um alerta ou em outro lugar
        alert(extraInfo);
    });
});
