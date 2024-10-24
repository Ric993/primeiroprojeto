import React, { useEffect } from 'react';

const VideoSection = () => {
    const videoData = [
        {
            id: 1,
            title: 'Aquele jogo dos boneco maluco!',
            url: 'https://www.youtube.com/embed/07wLxT9Nu3g',
        },
        {
            id: 2,
            title: 'Uma zoeira leve no cod WW2',
            url: 'https://www.youtube.com/embed/lsvc6VlpIy8',
        },
        {
            id: 3,
            title: '2 maluco no GTAV',
            url: 'https://www.youtube.com/embed/y5CkSR6pasQ',
        },
        {
            id: 4,
            title: 'Uma partida no Overwatch',
            url: 'https://www.youtube.com/embed/E-xJyyLm0AQ',
        },
    ];

    const salvarComentario = (videoId) => {
        const comentarioTextarea = document.getElementById(`input-comentario-${videoId}`);
        const comentario = comentarioTextarea.value.trim();

        if (comentario) {
            const comentariosSalvos = JSON.parse(localStorage.getItem(`comentarios-${videoId}`)) || [];
            comentariosSalvos.push(comentario);
            localStorage.setItem(`comentarios-${videoId}`, JSON.stringify(comentariosSalvos));
            comentarioTextarea.value = '';
            carregarComentarios(videoId);
        } else {
            alert('Por favor, escreva um comentário antes de salvar.');
        }
    };

    const carregarComentarios = (videoId) => {
        const comentariosDiv = document.getElementById(`comentarios-${videoId}`);
        const comentariosSalvos = JSON.parse(localStorage.getItem(`comentarios-${videoId}`)) || [];
        comentariosDiv.innerHTML = '';
        comentariosSalvos.forEach(comentario => {
            const comentarioElement = document.createElement('p');
            comentarioElement.textContent = comentario;
            comentariosDiv.appendChild(comentarioElement);
        });
    };

    useEffect(() => {
        for (let i = 1; i <= videoData.length; i++) {
            carregarComentarios(i);
        }
    }, []);

    return (
        <section>
            <h1>Gameplays</h1>
            {videoData.map(video => (
                <div key={video.id}>
                    <h2>{video.title}</h2>
                    <iframe 
                        src={video.url} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                    <div className="comentarios" id={`comentarios-${video.id}`}></div>
                    <textarea rows="4" cols="80" placeholder="Escreva um comentário..." id={`input-comentario-${video.id}`}></textarea>
                    <button onClick={() => salvarComentario(video.id)}>Comentar</button>
                    <hr />
                </div>
            ))}
        </section>
    );
};

export default VideoSection;
