const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Toggle

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});

// !Open and close on click
// if (search.className == 'active')

// btn.addEventListener('click', () => {
//     if (search.classList.contains("active")) {
//         search.classList.remove("active")
//     }
//     else {
//         search.classList.add("active")
//         input.focus()
//     }
// });

// ! Only open: if (search.className == 'active')

// btn.addEventListener('click', () => {
//     search.classList.add("active")
//     input.focus()
// });
