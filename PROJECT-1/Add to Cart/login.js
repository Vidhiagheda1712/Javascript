const loginUser = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let record = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    let check = record.filter((val) => {
        return val.email == email && val.password == password;
    });

    if (check.length == 0) {
        alert("Invalid Email or Password... Please Check...");
    }

    else {
        localStorage.setItem("checkuser", JSON.stringify(check[0]));
        window.location.href = "./product.html"
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}