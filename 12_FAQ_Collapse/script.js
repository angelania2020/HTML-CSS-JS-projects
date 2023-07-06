const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
}
);

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', function () {
//         toggleActiveBtn(toggle);
//     }, false);
// });
// function toggleActiveBtn(toggle) {
//     toggle.parentNode.classList.toggle('active');
// }
