
// Données simulées pour les vidéos
const videos = [
    { id: 1, title: "Apprendre JavaScript en 1 heure", channel: "Tech Education", views: "100K vues", thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg" },
    { id: 2, title: "10 astuces pour coder plus vite", channel: "CodeMaster", views: "50K vues", thumbnail: "https://img.youtube.com/vi/vLnPwxZdW4Y/hqdefault.jpg" },
    { id: 3, title: "Tutoriel Python pour débutants", channel: "PythonPro", views: "200K vues", thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg" },
    // Ajoutez plus de vidéos ici
];

function createVideoCard(video) {
    return `
        <div class="video-card">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-channel">${video.channel}</div>
                <div class="video-views">${video.views}</div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const videosGrid = document.querySelector('.videos-grid');
    videos.forEach(video => {
        videosGrid.innerHTML += createVideoCard(video);
    });
});
    