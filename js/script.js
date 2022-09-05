// loading
const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.style.display = "none";
});

// nav-bar responsive
const bars = document.getElementById("bars");
const navLink = document.getElementById("nav-link");
bars.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

// display coffee item from API
const ResultOfmenu = document.getElementById("result-of-menu");
let coffeeUrl = "https://api.sampleapis.com/coffee/hot";

fetch(coffeeUrl)
  .then((res) => res.json())
  .then((data) => {
    displayAllcoffee(data);
  });

let displayAllcoffee = (coffee) => {
  for (let i = 0; i < 19; i++) {
    let coffeeItem = `
    <div class="coffee-item">
     <img src= "${coffee[i].image}">
     <h2>${coffee[i].title}</h2>
     <h3> Ingredients : ${coffee[i].ingredients} </h3>
     <i class="fa-solid fa-cart-shopping"></i>
    </div>
    `;

    ResultOfmenu.innerHTML += coffeeItem;
  }
};

// click event of add to cart
const toast = document.getElementById("toast");
const bodyOfmodal = document.getElementById("body-of-modal");
ResultOfmenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    // toast popping up
    toast.style.top = `-${toast.offsetHeight}px`;
    setTimeout(() => {
      toast.style.top = `30px`;
    }, 200);
    setTimeout(() => {
      toast.style.top = `-${toast.offsetHeight}px`;
    }, 2000);

    // displaying added item to modal
    let newEl = document.createElement("div");
    newEl.innerHTML = e.target.parentElement.innerHTML;
    newEl.className = "selected";

    let dollar = document.createElement("h2");
    dollar.innerHTML = "4$";

    newEl.append(dollar);

    bodyOfmodal.appendChild(newEl);
  }
});

// cart Btn event
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

// close cart Modal with X
const close = document.getElementsByClassName("fa-x")[0];
close.addEventListener("click", () => {
  cartModal.style.display = "none";
});
