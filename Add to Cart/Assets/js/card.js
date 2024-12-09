let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem("carts")) : []

const viewCart = () => {
    let tbl = "";
    let sum = 0;
    carts.map((val, i) => {
        sum = sum + val.qty * val.price;
        tbl += `
            <tr>
                <td>${val.id}</td>
                <td style="font-size :18px; font-weight :600;">${val.name}</td>   
                <td><img src="${val.img}" width="200" height="200" object-fit="contain"/></td>   
                <td>₹ ${val.price}</td>   
                <td><input type="number" min="1" id="qty_${val.id}" onchange="editCart(${val.id})" value="${val.qty}"></td>   
                <td>₹ ${val.price * val.qty}</td> 
                 <td><button onclick="deleteCart(${val.id})" name="Delete"><i class="fa-solid fa-trash-can delete" ></i></button></td>  
            </tr>`;
    });

    document.getElementById("carts").innerHTML = tbl;
    document.getElementById("total").innerHTML = `₹ ${sum}`;

}

onclick = "deleteCart"

viewCart()


const editCart = (id) => {

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
    let all = JSON.parse(localStorage.getItem("carts"));

    let deleteCart = all.filter((item) => {
        return item.id != id
    });

    localStorage.setItem("carts", JSON.stringify(deleteCart));
    alert("This Want to Remove....?");

    viewCart();
    // let allcart = JSON.parse(localStorage.getItem('cart'));
    // let ans = allcart.filter((item)=>{
    //     return item.id != id;
    // })
    // localStorage.setItem('cart',JSON.stringify(ans));
    // alert("Cart is delete")
    // viewCart();
};