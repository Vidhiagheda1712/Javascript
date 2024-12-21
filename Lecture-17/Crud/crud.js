let data = [];
const viewRecord = () => {
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
    data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    let tbl = "";
    data.map((val, index) => {
        tbl += `<tr>
               <td>${val.id}</td>
               <td>${val.name}</td>
               <td>${val.phone}</td>
                <td>${val.email}</td>
               <td>${val.password}</td>
               <td>
               <button onclick="deleteUser(${val.id})">Delete</button>
               </td>
               <td>
                 <button onclick="editUser(${val.id})">Edit</button>
               </td>
        </tr>
`
    });
    document.getElementById("record").innerHTML = tbl;

}
viewRecord();
const saveData = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let obj = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        password: password,
    }
    data.push(obj);
    localStorage.setItem("users", JSON.stringify(data));
    alert("Data Add Successfully");
    viewRecord();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

}


const deleteUser = (delid) => {
    let d = data.filter((val) => {
        return val.id != delid;
    })
    localStorage.setItem("users", JSON.stringify(d));
    alert("Record Delete Successfully....");
    viewRecord();
}

const editUser = (id) => {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block";
    let single = data.find((val) => {
        return val.id == id;

    });
    document.getElementById("editid").value = id;
    document.getElementById("name").value = single.name;
    document.getElementById("email").value = single.email;
    document.getElementById("phone").value = single.phone;
    document.getElementById("password").value = single.password;
}



const updateData = () => {
    let editid = document.getElementById("editid").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;


    let update = data.map((val) => {
        if (val.id == editid) {
            val.email = email;
            val.phone = phone;
            val.password = password;
        }
        return val;
    });
    localStorage.setItem("users", JSON.stringify(update));
    alert(`Record Update Successfully...`);
    viewRecord();
    document.getElementById("editid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("phone").value = "";

}


const logoutUser = () => {
    localStorage.removeItem("checkuser");
    alert("Logout Successfully...");
    window.location.href = "./index.html";

}