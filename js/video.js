
// Données simulées pour la vidéo en cours
const currentVideo = {
    title: "Apprendre JavaScript en 1 heure",
    views: "1 234 567 vues",
    likes: "10K",
    dislikes: "100"
};

// Données simulées pour les commentaires
const comments = [
    { user: "Alice", comment: "Super vidéo, très instructif !", likes: 50 },
    { user: "Bob", comment: "J'ai appris beaucoup, merci !", likes: 30 },
    // Ajoutez plus de commentaires ici
];

// Données simulées pour les vidéos suggérées
const suggestedVideos = [
    { title: "10 astuces pour coder plus vite", channel: "CodeMaster", views: "50K vues", thumbnail: "https://img.youtube.com/vi/vLnPwxZdW4Y/hqdefault.jpg" },
    { title: "Tutoriel Python pour débutants", channel: "PythonPro", views: "200K vues", thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg" },
    // Ajoutez plus de vidéos suggérées ici
];

document.addEventListener('DOMContentLoaded', () => {
    // Mettre à jour les informations de la vidéo
    document.getElementById('video-title').textContent = currentVideo.title;
    document.getElementById('video-views').textContent = currentVideo.views;

    // Ajouter les commentaires
    const commentsSection = document.querySelector('.comments-section');
    comments.forEach(comment => {
        commentsSection.innerHTML += `
            <div class="comment">
                <strong>${comment.user}</strong>
                <p>${comment.comment}</p>
                <span>${comment.likes} likes</span>
            </div>
        `;
    });

    // Ajouter les vidéos suggérées
    const videoSidebar = document.querySelector('.video-sidebar');
    suggestedVideos.forEach(video => {
        videoSidebar.innerHTML += `
            <div class="suggested-video">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div>
                    <h3>${video.title}</h3>
                    <p>${video.channel}</p>
                    <p>${video.views}</p>
                </div>
            </div>
        `;
    });
});
    