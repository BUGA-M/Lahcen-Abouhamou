// Gestion des clics sur les éléments de sous-menu
document.querySelectorAll('.submenu li').forEach(item => {
    item.addEventListener('click', function () {
        showContent(this.textContent.trim()); // Enlève les espaces inutiles
    });
});

// Données du contenu
const contentData = {
    "Unité 1 : Prêt pour un petit effort ?": [
        {
            type: 'gallery',
            images: [
                { src: '/pic/img1ere_unt1/s1.jpg', title: 'Séance 1' },
                { src: '/pic/img1ere_unt1/s2_3.jpg', title: 'Séance 2 et 3' },
                { src: '/pic/img1ere_unt1/s4.jpg', title: 'Séance 4' },
                { src: '/pic/img1ere_unt1/s5.jpg', title: 'Séance 5' },
                { src: '/pic/img1ere_unt1/s6.jpg', title: 'Séance 6' },
                { src: '/pic/img1ere_unt1/s7.jpg', title: 'Séance 7' }
            ],
            text: ''
        }
    ],
    "Unité 2 : Propre et sain": [
        {
            type: 'gallery',
            images: [
                { src: '/pic/img1ere_unt2/s1.jpg', title: 'Séance 1' },
                { src: '/pic/img1ere_unt2/s1_1.jpg', title: 'La suite de la séance 1' },
                { src: '/pic/img1ere_unt2/s2_3.jpg', title: 'Séance 2 et 3' },
                { src: '/pic/img1ere_unt2/s4.jpg', title: 'Séance 4' },
                { src: '/pic/img1ere_unt2/s5.jpg', title: 'Séance 5' },
                { src: '/pic/img1ere_unt2/s6.jpg', title: 'Séance 6' },
                { src: '/pic/img1ere_unt2/s7.jpg', title: 'Séance 7' }
            ],
            text: ''
        }
    ],
    "Unité 3 : Achats en ligne": [
        {
            type: 'gallery',
            images: [
                { src: '/pic/img1ere_unt3/s1.jpg', title: 'Séance 1' },
                { src: '/pic/img1ere_unt3/s1_1.jpg', title: 'La suite de la séance 1' },
                { src: '/pic/img1ere_unt3/s2-3.jpeg', title: 'Séance 2 et 3' },
                { src: '/pic/img1ere_unt3/s4.jpeg', title: 'Séance 4' },
                { src: '/pic/img1ere_unt3/s5.png', title: 'Séance 5' },
                { src: '/pic/img1ere_unt3/s6.jpeg', title: 'Séance 6' },
                { src: '/pic/img1ere_unt3/s7.png', title: 'Séance 7' }
            ],
            text: ''
        }
    ],
    "Unité 4 : Gérer son argent": [
        {
            type: 'gallery',
            images: [
                { src: '/pic/img1ere_unt4/s1.png', title: 'Séance 1' },
                { src: '/pic/img1ere_unt4/s1_1.png', title: 'La suite de la séance 1' },
                { src: '/pic/img1ere_unt4/s1_2.png', title: 'La suite de la séance 1' }
            ],
            text: ''
        }
    ],
};

// Fonction pour afficher le contenu sélectionné
function showContent(title) {
    const presentation = document.querySelector('.presentation');
    presentation.innerHTML = `<h2 class="content-title">${title}</h2>`;

    const contentGrid = document.createElement('div');
    contentGrid.className = 'content-grid';

    if (contentData[title]) {
        contentData[title].forEach(item => {
            const card = document.createElement('div');
            card.className = 'content-card';

            let contentHTML = '';

            if (item.type === 'gallery' && item.images) {
                contentHTML += '<div class="image-gallery">';
                item.images.forEach(image => {
                    contentHTML += `
                        <div class="image-container">
                            <img src="${image.src}" alt="${image.title}" title="${image.title}">
                            <div class="image-caption">${image.title}</div>
                        </div>
                    `;
                });
                contentHTML += '</div>';
            }

            if (item.text) {
                contentHTML += `<div class="text-content"><p>${item.text}</p></div>`;
            }

            card.innerHTML = contentHTML;
            contentGrid.appendChild(card);
        });
    } else {
        contentGrid.innerHTML = `
            <div class="content-card">
                <div class="text-content">
                    <p>Contenu en préparation 🔨</p>
                </div>
            </div>
        `;
    }

    presentation.appendChild(contentGrid);

    // Ajouter la gestion du plein écran après le chargement des images
    activateFullscreenFeature();
}

// Chargement initial avec vérification du contenu
const defaultTitle = "Unité 1 : Prêt pour un petit effort ?";
if (contentData[defaultTitle]) {
    showContent(defaultTitle);
}

// Fonction pour activer le plein écran sur les images
function activateFullscreenFeature() {
    const imgs = document.querySelectorAll('.image-gallery img');

    imgs.forEach(img => {
        img.addEventListener('click', (event) => {
            document.body.classList.add("fullscreen-active");

            const fullscreenContainer = document.createElement("div");
            fullscreenContainer.classList.add("fullscreen-container");

            const fullscreenImg = document.createElement("img");
            fullscreenImg.src = event.target.src;
            fullscreenImg.alt = event.target.alt;

            fullscreenContainer.appendChild(fullscreenImg);
            document.body.appendChild(fullscreenContainer);

            document.querySelector(".presentation").classList.add("blur-background");

            fullscreenContainer.addEventListener("click", () => {
                fullscreenContainer.remove();
                document.body.classList.remove("fullscreen-active");
                document.querySelector(".presentation").classList.remove("blur-background");
            });
        });
    });
}
