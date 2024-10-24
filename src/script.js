// Função para salvar o comentário no localStorage
function salvarComentario(videoId) {
    const comentarioTextarea = document.getElementById(`input-comentario-${videoId}`);
    const comentario = comentarioTextarea.value.trim();

    if (comentario) {
        const comentariosSalvos = JSON.parse(localStorage.getItem(`comentarios-${videoId}`)) || [];
        comentariosSalvos.push(comentario);
        localStorage.setItem(`comentarios-${videoId}`, JSON.stringify(comentariosSalvos));

        // Limpa o textarea após salvar
        comentarioTextarea.value = '';

        // Recarrega os comentários
        carregarComentarios(videoId);
    } else {
        alert('Por favor, escreva um comentário antes de salvar.');
    }
}

// Função para carregar os comentários salvos ao abrir a página
function carregarComentarios(videoId) {
    const comentariosDiv = document.getElementById(`comentarios-${videoId}`);
    const comentariosSalvos = JSON.parse(localStorage.getItem(`comentarios-${videoId}`)) || [];

    // Limpa a div antes de adicionar os comentários
    comentariosDiv.innerHTML = '';

    comentariosSalvos.forEach(comentario => {
        // Cria um parágrafo para o comentário
        const comentarioElement = document.createElement('p');
        comentarioElement.textContent = comentario;

        // Adiciona o comentário à div
        comentariosDiv.appendChild(comentarioElement);
    });
}

// Carregar comentários ao abrir a página
window.onload = function() {
    for (let i = 1; i <= 4; i++) {
        carregarComentarios(i);
    }
};

// Função para adicionar comentários
function adicionarComentario(videoId) {
    salvarComentario(videoId);
}
