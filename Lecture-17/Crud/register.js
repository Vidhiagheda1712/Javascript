let users = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("users")) : [];


const registerUser = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;


    let obj = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
        password: password
    }

    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User Register Successfully...")

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";

}