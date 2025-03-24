
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

const LiMenuPhone=document.querySelectorAll(".menu-phone .changeBG li");
const IconsMenuPhone=document.querySelectorAll(".menu-phone .changeBG li a i");
const SpansMenuPhone=document.querySelectorAll(".menu-phone .changeBG li a span");
LiMenuPhone.forEach((item) => {
    item.addEventListener("click", () => {
        LiMenuPhone.forEach((li) => li.classList.remove("clicked"));
        item.classList.add("clicked");

        const icon = item.querySelector("i");
        IconsMenuPhone.forEach((icon) => icon.classList.remove("clicked"));
        icon.classList.add("clicked")

        // const spanText = item.querySelector(".menu-text");
        // SpansMenuPhone.forEach(span=>{span.classList.remove("snap-clicked");});
        // spanText.classList.add("snap-clicked");
    });
});
/**** glissement du menu mobile ****/
const flecheHautPhone=document.getElementById("flecheHaut");
const IconflecheHautPhone = document.querySelector(".IconHautPhone");
const MenuPhone=document.querySelector(".menu-phone");
const dashboardPhone=document.querySelector(".dashboard");

flecheHautPhone.addEventListener("click", () => {
    MenuPhone.classList.toggle("monter");
    IconflecheHautPhone.classList.toggle("tourner");
    dashboardPhone.classList.toggle("non-touchable");
})
/**** contenu cours menu mobile ****/
const LiMenuPhoneCours = document.querySelectorAll(".span-menu-mobile .cours .list");
const IconsMenuPhoneCours = document.querySelectorAll(".span-menu-mobile .cours li a i");
const SpansMenuPhoneCours = document.querySelectorAll(".span-menu-mobile .cours li a span");
const SvgMenuPhoneCours = document.querySelectorAll("svg");

LiMenuPhoneCours.forEach((item) => {
    item.addEventListener("click", () => {
        const Active = item.classList.contains("clickedPhone");

        LiMenuPhoneCours.forEach(li => li.classList.remove("clickedPhone"));
        IconsMenuPhoneCours.forEach(icon => icon.classList.remove("snap-clickedPhone"));
        SpansMenuPhoneCours.forEach(span => span.classList.remove("snap-clickedPhone"));
        SvgMenuPhoneCours.forEach(svg => svg.classList.remove("svgPhone"));

        if (!Active) {
            item.classList.add("clickedPhone");
            item.querySelector("i").classList.add("snap-clickedPhone");
            item.querySelector("span").classList.add("snap-clickedPhone");
            item.querySelector("svg").classList.add("svgPhone");
        }
    });
});


/*------------ gérer affichage des menus cours --------------*/
const S1 = document.querySelector('.S1');
const S2 = document.querySelector('.S2');
const courS1 = document.querySelector('.courS1');
const courS2 = document.querySelector('.courS2');

// Fonction pour basculer l'affichage d'un élément
function toggleDisplay(element1, element2) {
    if (element1.style.display === "none" || element1.style.display === "") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
    }
}
// Gestion des clics
S1.addEventListener('click', () => {
    toggleDisplay(courS1, courS2);
});

S2.addEventListener('click', () => {
    toggleDisplay(courS2, courS1);
});
/*------------ gérer affichage des menus des titre des cours --------------*/

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        const svgTitre=item.querySelector("svg");
        svgTitre.classList.toggle("svgFill");

        const submenu = item.nextElementSibling;

        // Basculer l'affichage du sous-menu
        if (submenu.style.display === "none" || submenu.style.display === "") {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
    });
});


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

// Contact section toggle for mobile
document.getElementById('contact-toggle').addEventListener('click', function() {
    document.getElementById('contact-section').classList.toggle('show-contact');
});