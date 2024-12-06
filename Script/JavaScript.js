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