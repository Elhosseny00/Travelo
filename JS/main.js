let allLinks = document.querySelectorAll(".mainlinks li  a");
let btn = document.querySelector("nav .btn");
let navLinks = document.querySelector("nav .navlinks");
console.log(navLinks);
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
    image: "IMGS/indon.jpg",
  },
  {
    name: "Thailand",
    description:
      "Thailand is a country of natural magic, a country of beauty, golden sands and blue waters.",
    image: "IMGS/thiyland.jpg",
  },
  {
    name: "Egypt",
    description:
      "Pack your bags and head to Egypt, where the pharaohs and ancient ancient buildings are.",
    image: "IMGS/egypt.jpg",
  },
  {
    name: "Maldives",
    description:
      "Rest your eyes on the natural beauty of the Maldives amid the sand, seas and blue waters.",
    image: "IMGS/maldives.jpg",
  },
  {
    name: "Italy",
    description:
      "Here there is beauty and romance, in Italy on the mountains magic is born, just come to that charming city.",
    image: "IMGS/italy.jpg",
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
  let a = document.createElement("a");
  let aText = document.createTextNode("See More");
  a.appendChild(aText);
  a.href = "#";
  // info.appendChild(a);
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
