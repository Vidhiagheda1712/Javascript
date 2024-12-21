let product = [
    {
        id: 1,
        img: "Assets/img/img1.jpeg",
        name: "Mobile Phone",
        price: 100,
        qty: 1,

    },
    {
        id: 2,
        img: "Assets/img/img2.jpeg",
        name: "NoteBook",
        price: 299,
        qty: 1,

    },
    {
        id: 3,
        img: "Assets/img/img3.jpeg",
        name: "Mobile Lite",
        price: 125,
        qty: 1,

    },
    {
        id: 4,
        img: "Assets/img/img4.jpeg",
        name: "Wrist Watch",
        price: 85,
        qty: 1,

    },
   
];
function viewProduct() {
    let tbl = "";
    product.map((val, i) => {
        tbl += `
         <div class = "col-md-3 col-sm-6">
              <div class="card mb-4 p-2" style=" border-color:gray">
                 <div class ="imgs m-3"><img src="${val.img}" class="card-img-top" style="width: 100%; height: 220px; object-fit:contain;></div>
                 <div class="card-body">
                      <h5 class="card-title" style="font-size :17px">${val.name}</h5>
                    <p class="card-text mb-2" style="font-size :15px; font-weight :600">RS : ${val.price}</p>
                      <p class="card-text mb-2"  style="font-size :15px; font-weight :600">QTY : ${val.qty}</p>
                      <a onclick = "addToCart(${val.id})" class="btn btn-success">Add to Cart</a>
                  </div>
              </div>
          </div> 
      `;
    });
    document.getElementById("product").innerHTML = tbl;
}

viewProduct();

const viewCart = () => {
    let carts = JSON.parse(localStorage.getItem('carts'));
    let tbl = "";
    let sum = 0;
    carts.map((val) => {
        sum = sum + val.qty * val.price;
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td style="font-size :18px; font-weight :600;">${val.name}</td>   
                <td><img src="${val.img}" width="200" height="200" object-fit="contain"/></td>   
                <td>₹ ${val.price}</td>   
                <td><input type="number" min="1" id="qty_${val.id}" onchange="editCart(${val.id})" value="${val.qty}" class="qty"></td>   
                <td>₹ ${val.price * val.qty}</td> 
                 <td><button onclick="deleteCart(${val.id})" class="btn-success" style="padding:5px 20px;border:none; border-radius:5px" class="btn btn-success">Remove</button>
             </td>  
            </tr>`;
    });

    document.getElementById("cart").innerHTML = tbl;
    document.getElementById("total").innerHTML = `₹ ${sum}`;

}
viewCart();
const editCart = (id) => {
    let carts = JSON.parse(localStorage.getItem('carts'));
    let qty = document.getElementById(`qty_${id}`).value;

    let up = carts.map((val, i) => {
        if (val.id == id) {
            val.qty = qty;
        }
        return val;
    });
    console.log(up);
    localStorage.setItem("carts", JSON.stringify(up));
    alert("Cart Updated");
    viewCart();
}
const deleteCart = (id) => {
    let allRecord = JSON.parse(localStorage.getItem("carts"));

    let deleteRecord = allRecord.filter((item) => item.id != id);

    localStorage.setItem("carts", JSON.stringify(deleteRecord));
    alert("Item has been removed from the cart.");
    viewCart();

}
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
    viewCart();
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