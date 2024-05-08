function optionMenu() {
  const hambugger = document.querySelector(".hambugger-div");
  const opt = document.querySelector(".hambugger-option");
  if (hambugger.addEventListener("click")) {
    opt;
  }
}

let removeCart = document.querySelector(".remove-cart");
let addCart = document.querySelector(".add-cart");
let result = 0;

function myCart(a) {
  result += a;

  document.querySelector(".cart-input").innerHTML = result;
  let notification = document.querySelector(".cart-notifi");

  if (result >= 10) {
    notification.innerHTML = "The cart is full !";
  } else if (result <= 0) {
    notification.innerHTML = "Not enought item in the cart !";
  } else if (result > 0 && result <= 10) {
    notification.innerHTML = "";
  }
}

const productList = [
  {
    image:
      "https://www.essenza.ng/cdn/shop/products/o.voXmbBW726D.jpg?v=1635256437&width=1200",
    name: "Armaf Club De Nuit Women",
    rating: [true, true, true, true, false],
    price: "250",
    discount: "300",
  },
  {
    image:
      "https://www.essenza.ng/cdn/shop/products/1_f166a1e9-a199-4147-a482-842c4f73ec81.jpg?v=1629983162&width=800",
    name: "Armaf Club De Nuit Intense",
    rating: [true, true, true, false, false],
    price: "300",
    discount: "400",
  },
  {
    image:
      "https://www.essenza.ng/cdn/shop/products/GGRESERVEPRIVEEPACKSHOT2100ML_2.jpg?v=1652346167&width=1200",
    name: "Armaf Club De Nuit Sillage",
    rating: [true, true, true, true, false],
    price: "350",
    discount: "400",
  },
  {
    image:
      "https://www.essenza.ng/cdn/shop/products/3665472000001_2.jpg?v=1669887446&width=500",
    name: "Armaf Opus Homme",
    rating: [true, true, true, true, false],
    price: "280",
    discount: "370",
  },
];

const productsRatings = (ratings, starCounts) => {
  ratings.map((rating) => {
    const star = document.createElement("i");
    if (rating == true) {
      star.classList.add("fa-solid");
    } else {
      star.classList.add("fa-regular");
    }
    star.classList.add("fa-star");
    starCounts.appendChild(star);
  });
};

const coming = document.querySelector(".p-product-div");

productList.map((product) => {
  let productCard = document.createElement("div");
  productCard.classList.add("product-card");

  let productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.classList.add("p-product-image");
  productCard.appendChild(productImage);

  let productName = document.createElement("h3");
  productName.innerHTML = product.name;
  productName.classList.add("p-product-name");
  productCard.appendChild(productName);

  const starCounts = document.createElement("div");
  productsRatings(product.rating, starCounts);
  productCard.appendChild(starCounts);

  const productPrice = document.createElement("h4");
  productPrice.innerHTML = `$${product.price}`;
  productPrice.classList.add("p-product-price");
  productCard.appendChild(productPrice);

  const discountPrice = document.createElement("h4");
  discountPrice.innerHTML = `$${product.discount}`;
  discountPrice.classList.add("p-discount-price");
  productCard.appendChild(discountPrice);

  const btn = document.createElement("button");
  btn.innerText = "Buy Now";
  btn.classList.add("p-button");
  productCard.appendChild(btn);

  coming.appendChild(productCard);
});
