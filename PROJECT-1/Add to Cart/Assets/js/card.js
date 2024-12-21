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
                 <td><button onclick="deleteCart(${val.id})"><i class="fa-solid fa-trash-can delete" ></i></button>
                
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
