const wrapper = document.querySelector(".sliderWrapper");
// wrapper.style.transform = "translateX(-200vw)";

const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "CAMPUS",
    price: "Rs.1500 only",
    colors: [
      {
        code: "blue",
        img: "./img/C1.png",
      },
      {
        code: "black",
        img: "./img/C2.png",
      },
    ],
  },
  {
    id: 2,
    title: "NIKE",
    price: "Rs. 3000 only",
    colors: [
      {
        code: "blue",
        img: "./img/N1.png",
      },
      {
        code: "white",
        img: "./img/N2.png",
      },
    ],
  },
  {
    id: 3,
    title: "ADIDAS",
    price: "Rs. 5000 only",
    colors: [
      {
        code: "gray",
        img: "./img/A1.png",
      },
      {
        code: "white",
        img: "./img/A2.png",
      },
    ],
  },
  {
    id: 4,
    title: "REEBOK",
    price: "Rs. 4000 only",
    colors: [
      {
        code: "black",
        img: "./img/R1.png",
      },
      {
        code: "gray",
        img: "./img/R2.png",
      },
    ],
  },
  {
    id: 5,
    title: "PUMA",
    price: "Rs. 3500 only",
    colors: [
      {
        code: "blue",
        img: "./img/P1.png",
      },
      {
        code: "red",
        img: "./img/P2.png",
      },
    ],
  },
  {
    id: 6,
    title: "OTHER",
    price: "Rs. 1000 only",
    colors: [
      {
        code: "white",
        img: "./img/O1.png",
      },
      {
        code: "green",
        img: "./img/O2.png",
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
    currentProductPrice.textContent =  choosenProduct.price;

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

function myFunction() {
  location.replace("http://127.0.0.1/shoecommerce/index.html");
}

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("item-list");
  // const inputData = document.getElementById("search-item");
  const product = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
    storeitems.style.display = "block";
  }
};
const searchOff = () => {
  const searchbox = document.getElementById("search-item");

  const storeitems = document.getElementById("item-list");
  storeitems.style.display = "none";
  searchbox.value = "";
};
// const removeInput = () => {
//   inputData.innerHTML = "";
// };

// const priceToDisplay = document.getElementsByClassName(".productPrice").value;
// const priceInput = document.getElementById("priceInput").value;
// const submitPrice = ()=>{
//   priceInput == priceToDisplay;
// }
