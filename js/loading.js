setTimeout(function() {
    const splineContainer = document.getElementById('spline-container');
    splineContainer.style.opacity = '0';
    setTimeout(function() {
        const siteContent = document.querySelector('.site-content');
        siteContent.classList.add('show-site-content');
    }, 2000);
}, 5000);
setTimeout(function() {
    const splineContainer = document.getElementById('spline-container');
    const cacher = document.querySelector('.cacher');
    cacher.style.display = 'none';
    splineContainer.style.display = 'none';
}, 7000)

/*------------------------ le code principale -----------------------------*/

/*------------------ ( haut ) la recherche ----------------*/
const searchInput = document.querySelector('.search-container .search-input');

searchInput.addEventListener('keyup', (i) => {
    if (i.key === 'Enter') {
        const searchText = searchInput.value;
        alert(searchText ? `Vous avez recherché ${searchText}` : 'Veuillez entrer un mot-clé');
        searchInput.value = '';
    }
});

/*------------------ ( gauche ) couleur du menu ----------------*/
let limenu = document.querySelectorAll(".menu .partie1 li");
let icons = document.querySelectorAll(".menu  li a i");
const spans = document.querySelectorAll(".menu-text");

limenu.forEach((item) => {
    item.addEventListener("click", () => {
        limenu.forEach((li) => li.classList.remove("clicked"));
        item.classList.add("clicked");

        const icon = item.querySelector("i");
        icons.forEach((icon) => icon.classList.remove("clicked"));
        icon.classList.add("clicked")

        const spanText = item.querySelector(".menu-text");
        spans.forEach(span=>{span.classList.remove("snap-clicked");});
        spanText.classList.add("snap-clicked");
    });
});
/**** glissement du menu ****/
let fleche_droite = document.querySelector(".toggle-btn");
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
let dashboard = document.querySelector(".dashboard");

fleche_droite.addEventListener("click", () => {
    menu.classList.toggle("grandire");
    dashboard.classList.toggle("translater");
    spans.forEach(span=>{span.classList.toggle("grandire");});
    icon.classList.toggle("expanded");
})
/**** menu mobile ****/

/*---------------------- (centre) effet du typing ---------------------------*/
const texts = [
    "Bienvenue sur AZZAITOUNE 🌿",
    "AZZAITOUNE est une plateforme dédiée à l'apprentissage du français " +
    "pour les élèves de 1re, 2e et 3e année du collège. " +
    "Créé par Lahcen Abouhamou, ce site propose des cours, des exercices et des ressources pédagogiques " +
    "pour aider les collégiens à améliorer leur maîtrise du français de manière simple et efficace.",
    "N’hésitez pas à explorer nos contenus et à commencer votre apprentissage dès maintenant ! 🚀"
];

function autoecrit(idelement, idcurseur, text) {
    let charIndex = 0;
    const cursor = document.getElementById(idcurseur);
    function taper() {
        if (charIndex < text.length) {
            document.getElementById(idelement).innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(taper, 50);
        } else {
            cursor.style.display = 'none';
        }
    }
    cursor.style.display = 'inline-block';
    taper();
}
function ecriture() {
    const delay = 800;

    autoecrit("text1", "cursor1", texts[0]);

    setTimeout(() => {
        autoecrit("text2", "cursor2", texts[1]);
    }, texts[0].length * 50 + delay);

    setTimeout(() => {
        autoecrit("text3", "cursor3", texts[2]);
    }, (texts[0].length + texts[1].length) * 50 + 2.5 * delay);
}

setTimeout(() => {ecriture()},7500)

/*------------------ (droit) le textarea du commentaire ----------------*/
function Commentaire() {
    let commentaire = document.getElementById("comment").value;
    let fenetre= document.querySelector(".window");
    let ok= document.querySelector('.ok');
    let header = document.querySelector('header');
    let siteContent = document.querySelector('.site-content');

    if (commentaire.trim() !== "") {
        document.getElementById("comment").value = "";
        fenetre.classList.remove("none")
        header.classList.add("blurred");
        siteContent.classList.add("blurred");

        ok.addEventListener('click', () =>{
            fenetre.classList.add("none")
            header.classList.remove("blurred");
            siteContent.classList.remove("blurred");
        })

    }
}
/*------------------- contact -----------------------*/
// document.getElementById('menu-toggle').addEventListener('click', function() {
//     document.getElementById('mobile-menu').classList.toggle('show');
// });

// Contact section toggle for mobile
document.getElementById('contact-toggle').addEventListener('click', function() {
    document.getElementById('contact-section').classList.toggle('show-contact');
});
