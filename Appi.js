// SCROLL-PROGRESS

window.addEventListener("scroll", function (){
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollBar = Math.round((scrollTop / scrollHeight) * 100);
  let bar = document.getElementById("scroll-bar");

  bar.style.width =   scrollBar + "%";
})
// ============================
// 🟣 1. MENU BURGER
// ============================
const burger = document.querySelector(".burger i");
const navMenu = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  // Animation du burger
  burger.classList.toggle("fa-xmark");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    burger.classList.remove("fa-xmark");
  });
});


// // ============================
// // 🟡 2. CARROUSEL AUTOMATIQUE
// // ============================
// // Sélectionne tous les carrousels
// const carousels = document.querySelectorAll(".new .carousel");

// carousels.forEach(carousel => {
//   let scrollPosition = 0;

//   // Défilement automatique toutes les 3 secondes
//   setInterval(() => {
//     const maxScroll = carousel.scrollWidth - carousel.clientWidth;
//     scrollPosition += carousel.clientWidth / 2; // Vitesse du défilement

//     if (scrollPosition >= maxScroll) {
//       scrollPosition = 0; // Repart du début
//     }

//     carousel.scrollTo({
//       left: scrollPosition,
//       behavior: "smooth"
//     });
//   }, 3000);
// });


// 
  //MY OWN CAROUSEL
//
// const cards = document.getElementById("cards");
// const nextBtn = document.getElementById("right-btn");
// const prevBtn = document.getElementById("left-btn");

// let index = 0;
// const totalcards = document.querySelectorAll(".card-article").length;
// const cardwith = 310;
// console.log(totalcards);

// nextBtn.addEventListener("click", () => {
//   if (index < totalcards - 1){
//     index++;
//     updateCarousel()
//   }
// });
// prevBtn.addEventListener("click", () => {
//   if (index > 0){
//     index--;
//     updateCarousel()
//   }
// });
// function updateCarousel() {
//   cards.style.transform = `translateX(-${index * cardwith}px)`
// }

// ============================
// ❤️ 3. BOUTON LIKE INTERACTIF (avec texte dynamique)
// ============================
const likeButtons = document.querySelectorAll(".card-content-like");

// Charger les likes sauvegardés
const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

likeButtons.forEach((btn, index) => {
  const heartIcon = btn.querySelector(".fa-heart");

  // Vérifie si l'élément est déjà liké
  if (likedItems.includes(index)) {
    heartIcon.style.color = "rgb(226, 33, 98)";
    btn.setAttribute("data-like", "Aimé");
  } else {
    btn.setAttribute("data-like", "Ajouter un cœur");
  }

  // Gestion du clic sur le cœur
  btn.addEventListener("click", () => {
    heartIcon.classList.add("active");
    heartIcon.style.transition = "transform 0.3s ease";
    heartIcon.style.transform = "scale(1.3)";

    setTimeout(() => {
      heartIcon.style.transform = "scale(1)";
    }, 300);

    // Si déjà liké → on retire le like
    if (likedItems.includes(index)) {
      likedItems.splice(likedItems.indexOf(index), 1);
      heartIcon.style.color = "white";
      btn.setAttribute("data-like", "Ajouter un cœur");
    } 
    // Sinon → on ajoute le like
    else {
      likedItems.push(index);
      heartIcon.style.color = "rgb(226, 33, 98)";
      btn.setAttribute("data-like", "Aimé");
    }

    // Sauvegarde dans le localStorage
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  });
});
