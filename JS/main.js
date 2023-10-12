let allLinks = document.querySelectorAll(".mainlinks li  a");
let btn = document.querySelector("nav .btn");
let navLinks = document.querySelector("nav .navlinks");
allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    this.classList.add("active");
    btn.classList.remove("changeme");
    navLinks.classList.remove("openit");
  });
});

btn.addEventListener("click", () => {
  btn.classList.contains("changeme")
    ? btn.classList.remove("changeme")
    : btn.classList.add("changeme");
  navLinks.classList.toggle("openit");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
    navLinks.classList.remove("openit");
    btn.classList.remove("changeme");
  }
});
let placesInfo = [
  {
    name: "Indonesia",
    description:
      "Travel to Indonesia and enjoy the islands, nature, seas and mountains.",
    image: "IMGS/indon.webp",
  },
  {
    name: "Thailand",
    description:
      "Thailand is a country of natural magic, a country of beauty, golden sands and blue waters.",
    image: "IMGS/thiyland.webp",
  },
  {
    name: "Egypt",
    description:
      "Pack your bags and head to Egypt, where the pharaohs and ancient ancient buildings are.",
    image: "IMGS/egypt.webp",
  },
  {
    name: "Maldives",
    description:
      "Rest your eyes on the natural beauty of the Maldives amid the sand, seas and blue waters.",
    image: "IMGS/maldives.webp",
  },
  {
    name: "Italy",
    description:
      "Here there is beauty and romance, in Italy on the mountains magic is born, just come to that charming city.",
    image: "IMGS/italy.webp",
  },
];

let slide = document.querySelectorAll(".slide");

placesInfo.forEach((value) => {
  let item = document.createElement("div");
  item.className = "item";
  item.style.backgroundImage = `url(${value.image})`;
  let info = document.createElement("div");
  info.className = "info";
  let name = document.createElement("h2");
  name.innerText = value.name;
  let desc = document.createElement("p");
  desc.innerText = value.description;
  info.appendChild(name);
  info.appendChild(desc);
  item.appendChild(info);
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  item.appendChild(overlay);
  slide.forEach((slideElement) => {
    slideElement.appendChild(item);
  });
});

document.querySelector(".next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(lists[0]);
};

document.querySelector(".prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(lists[lists.length - 1]);
};

let Places = [
  {
    id: 1,
    title: "Maldives",
    image: "../IMGS/maldives-1.webp",
    price: 800,
  },
  {
    id: 2,
    title: "Egypt",
    image: "../IMGS/egypt-1.webp",
    price: 450,
  },
  {
    id: 3,
    title: "Italy",
    image: "../IMGS/italy-1.webp",
    price: 350,
  },
  {
    id: 4,
    title: "Indonesia",
    image: "../IMGS/indones-1.webp",
    price: 600,
  },
  {
    id: 5,
    title: "Chian",
    image: "../IMGS/china.webp",
    price: 810,
  },
  {
    id: 6,
    title: "India",
    image: "../IMGS/india.webp",
    price: 530,
  },
  {
    id: 7,
    title: "Australia",
    image: "../IMGS/australia.webp",
    price: 920,
  },
  {
    id: 8,
    title: "France",
    image: "../IMGS/france.webp",
    price: 350,
  },
];
let butns = document.querySelectorAll(".btn-slider");
let sliderDiv = document.querySelector(".slider");
let ulCards = document.createElement("ul");
let body = document.querySelector("body");
let firstCardWidth;

function getPlaces() {
  Places.forEach((value) => {
    let licard = document.createElement("li");
    licard.className = "card";
    ulCards.className = "carousel";
    ulCards.appendChild(licard);
    licard.innerHTML = `
    <div class='info'>
    <div class="img-container">
    <img src="IMGS/${value.image}" alt="${value.title}"/>
    </div>
      <div class="sub-info">
      <div class="text">
      <h3>${value.title}</h3>
      <i onclick="changeIcon(this)"class="fa-regular fa-heart"></i>
      </div>
      <div class="main">
      <span>$${value.price}</span>
      <ul>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      <li><i class="fa-solid fa-star"></i></li>
      </ul>
      </div>
      <button class="bookit" aria-label="Book Now">Book Now</button>
      </div>
    </div>
    `;
    sliderDiv.appendChild(ulCards);
    if (!firstCardWidth) {
      firstCardWidth = licard.offsetWidth;
    }
  });
}
butns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ulCards.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});
getPlaces();
function changeIcon(icon) {
  if (icon.classList.contains("activeit")) {
    icon.classList.remove("activeit");
    icon.classList.remove("fas");
    let popup = document.createElement("div");
    popup.className = "popup-Message";
    popup.innerText = "Removed From Favorites";
    document.body.appendChild(popup);
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000);
  } else {
    icon.classList.add("activeit");
    icon.classList.add("fas");
    let popup = document.createElement("div");
    popup.className = "popup-Message";
    popup.innerText = "Added To Favorites";
    document.body.appendChild(popup);

    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000);
  }
}

// Slice Func
// let myString = "Mohamed Atef Mohamed Hosseny";
// function sliceString(string, maxLength) {
//   if (string.length <= maxLength) {
//     console.log(string);
//   } else {
//     console.log(string.slice(0, maxLength - 3) + "...");
//   }
// }
// sliceString(myString, 20);
