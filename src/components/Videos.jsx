// src/pages/Videos.jsx
import React from 'react';

const Videos = () => {
    const videos = [
        {
            id: 1,
            title: "Aquele jogo dos boneco maluco!",
            url: "https://www.youtube.com/embed/07wLxT9Nu3g",
        },
        {
            id: 2,
            title: "Uma zoeira leve no cod WW2",
            url: "https://www.youtube.com/embed/lsvc6VlpIy8",
        },
        {
            id: 3,
            title: "2 maluco no GTAV",
            url: "https://www.youtube.com/embed/y5CkSR6pasQ",
        },
        {
            id: 4,
            title: "Uma partida no Overwatch",
            url: "https://www.youtube.com/embed/E-xJyyLm0AQ",
        },
    ];

    return (
        <main>
            <section>
                <h1>Gameplays</h1>
                {videos.map((video) => (
                    <div key={video.id}>
                        <h2>{video.title}</h2>
                        <iframe
                            src={video.url}
                            title={`YouTube video player ${video.title}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <div className="comentarios" id={`comentarios-${video.id}`}></div>
                        <textarea rows="4" cols="80" placeholder="Escreva um comentário..." id={`input-comentario-${video.id}`}></textarea>
                        <button onClick={() => adicionarComentario(video.id)}>Comentar</button>
                        <hr />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Videos;
