const wrapper = document.querySelector(".sliderWrapper");
// wrapper.style.transform = "translateX(-200vw)";

const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "TITLE_1",
    price: 19,
    colors: [
      {
        code: "black",
        img: "./img/PP1.png",
      },
      {
        code: "blue",
        img: "./img/PP3.png",
      },
    ],
  },
  {
    id: 2,
    title: "TITLE_2",
    price: 19,
    colors: [
      {
        code: "red",
        img: "./img/PP2.png",
      },
      {
        code: "pink",
        img: "./img/PP4.png",
      },
    ],
  },
  {
    id: 3,
    title: "TITLE_3",
    price: 19,
    colors: [
      {
        code: "green",
        img: "./img/PP3.png",
      },
      {
        code: "orange",
        img: "./img/PP5.png",
      },
    ],
  },
  {
    id: 4,
    title: "TITLE_4",
    price: 19,
    colors: [
      {
        code: "gold",
        img: "./img/PP2.png",
      },
      {
        code: "silver",
        img: "./img/PP1.png",
      },
    ],
  },
  {
    id: 5,
    title: "TITLE_5",
    price: 19,
    colors: [
      {
        code: "gray",
        img: "./img/PP3.png",
      },
      {
        code: "purple",
        img: "./img/PP2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the choosen Product
    choosenProduct = products[index];
    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;

    currentProductImg.src = choosenProduct.colors[0].img;
    //asigning new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
