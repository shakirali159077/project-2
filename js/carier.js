// function showParagraph(paragraphId) {
//     var paragraph = document.getElementById(paragraphId);
//     if (paragraph.style.display === "none" || paragraph.style.display === "") {
//         paragraph.style.display = "block";
//     } else {
//         paragraph.style.display = "none";
//     }
// }
let menu = document .querySelector('#menu-icon');
let navbar = document .querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }


 window.onscroll = () => {
   
   menu.classList.remove('bx-x');
   navbar.classList.remove('active');
 }