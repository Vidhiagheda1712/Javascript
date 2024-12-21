let product = [
    {
        id: 1,
        img: "Assets/img/img1.WEBP",
        name: "Aloe Vera Face Wash with Built in Brush - 150 ML",
        highlights: "Hydrates & Calms Skin | Aids in Deep Cleansing | Purifies Pores",
        price: 339,
        qty: 1,

    },
    {
        id: 2,
        img: "Assets/img/img2.WEBP",
        name: "Ubtan Foaming Face Wash For Glowing Skin - 150 ml",
        highlights: "Boost Skin Radiance | Gives Radiant Skin | Removes Dead Skin Layers",
        price: 299,
        qty: 1,

    },
    {
        id: 3,
        img: "Assets/img/img3.WEBP",
        name: "100% Pure Castor Oil for strong hair - 200 ml",
        highlights: "Improves Hair Texture | Nourishes Skin | Delays Sign of Aging",
        price: 299,
        qty: 1,

    },
    {
        id: 4,
        img: "Assets/img/img4.WEBP",
        name: "Oceanic Waves - Aqua Eau De Parfum - 20 ML",
        highlights: "Aqua Fragrance | Long Lasting | Controls Body Odor",
        price: 299,
        qty: 1,

    },
    {
        id: 5,
        img: "Assets/img/img5.WEBP",
        name: "Sunscreen Gel - 100 ML",
        highlights: "UVA & UVB Protection | Prevents Dark Spots | Prevents Sun Damage to Skin",
        price: 299,
        qty: 1,

    },
    {
        id: 6,
        img: "Assets/img/img6.WEBP",
        name: "Himalayan Rose Water and Super Lite Gel - 150 ML",
        highlights: "Hydrates & Skin Toning | Refreshes Skin ",
        price: 387,
        qty: 1,

    },
    {
        id: 7,
        img: "Assets/img/img7.WEBP",
        name: "Rose Kahwa Lip Balm - 4 g",
        highlights: "Softens Lips | Soothes & Moisturizes | Long-Lasting Hydration",
        price: 199,
        qty: 1,

    },
    {
        id: 8,
        img: "Assets/img/img8.WEBP",
        name: "Retinol Face Cream - 50 ml",
        highlights: "Moisturizes Skin | Restores Damaged Skin | For all skin type",
        price: 443,
        qty: 1,

    },
    {
        id: 9,
        img: "Assets/img/img9.WEBP",
        name: "Lavender & Rose No Parabens & Sulphate Skin - 200 ml",
        highlights: "Soothe, Tone & Brighten Skin Tone | Hydrate and Protect Soft Skin",
        price: 499,
        qty: 1,

    },
    {
        id: 10,
        img: "Assets/img/img10.WEBP",
        name: "Eau De Parfum - Luxury Perfume Kit For Him - 80 ml",
        highlights: "Long-Lasting Aroma | Travel-Friendly Size | Intense Fragrance",
        price: 649,
        qty: 1,

    },
    {
        id: 11,
        img: "Assets/img/img11.WEBP",
        name: "Smoky Black 90% Natural Kajal For Long-Lasting Look - 0.70 g",
        highlights: "Toxin Free | Smudge Proof & Water Proof | For all skin type",
        price: 431,
        qty: 1,

    },
    {
        id: 12,
        img: "Assets/img/img12.WEBP",
        name: "Anti Acne Face Serum for long hair- 30 ml",
        highlights: "Controls Acne Breakout | Purifies & Minimizes Pores ",
        price: 599,
        qty: 1,

    },
];


function viewProduct() {
    let tbl = "";
    product.map((val, i) => {
        tbl += `
         <div class = "col-md-3 col-sm-6">
              <div class="card mb-4 " style=" border-color:#c4aa5378">
                 <div class ="imgs m-3"><img src="${val.img}" class="card-img-top" style="width: 100%; height: 220px; object-fit:contain;></div>
                 <div class="card-body">
                      <h5 class="card-title" style="font-size :17px">${val.name}</h5>
                      <p class="card-text mb-2" style="font-size :13px">${val.highlights}</p>
                      <p class="card-text mb-2" style="font-size :15px; font-weight :600">RS : ${val.price}</p>
                      <p class="card-text mb-2"  style="font-size :15px; font-weight :600">QTY : ${val.qty}</p>
                      <a onclick = "addToCart(${val.id})" class="btn btn-secondary">Add to Cart</a>
                  </div>
              </div>
          </div> 
      `;
    });
    document.getElementById("product").innerHTML = tbl;
}

viewProduct();

let carts = [];

function addToCart(id) {
    let allcart = JSON.parse(localStorage.getItem("carts")) || [];
    let found = false;

    for (let i = 0; i < allcart.length; i++) {
        if (allcart[i].id == id) {
            allcart[i].qty++;
            found = true;
            break;
        }
    }
    if (!found) {
        let productToAdd = product.find((item) => item.id === id);
        if (productToAdd) {
            productToAdd.qty = 1;
            allcart.push(productToAdd);
        } 
        else {
            document.getElementById("carditem").innerHTML = "Your Cart is Empty";
            return;
        }
    }
    localStorage.setItem("carts", JSON.stringify(allcart));
    alert("Added to Cart");
}

const logoutUser = () => {
    localStorage.removeItem("checkuser");
    alert("Logout Successfully...");
    window.location.href = "./login.html";

}

let checkuser = JSON.parse(localStorage.getItem("checkuser"));

if (!checkuser) {
    alert("Please login...");
    window.location.href = "./login.html"
}