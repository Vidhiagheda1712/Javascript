class Demo {
    constructor() {
        this.data = [
            {
                No: 1,
                ID: 7535,
                Name: "Krisha",
                Phone: 12345,
            },
            {
                No: 2,
                ID: 2546,
                Name: "Vidhi",
                Phone: 98564,
            },
            {
                No: 3,
                ID: 3789,
                Name: "Ayushi",
                Phone: 22356,
            },

        ]
    }



    details() {
        let tbl = "";
        this.data.map((val, index) => {
            tbl += `
              <tr>
                <td>${val.No}</td>
                <td>${val.ID}</td>
                <td>${val.Name}</td>
                <td>${val.Phone}</td>
                </tr>
           `
        });
        document.getElementById("record").innerHTML = tbl;
    }

    addRecord(data) {
        this.data.push(obj);
        alert(`Data Add Successfully....!`);
        this.details();
    }


}
let obj = new Demo;
obj.details();



const adddata = () => {
    let obj = {
        No: 4,
        ID: 4,
        Name: "Krishna",
        Phone: 125633,
    }
    obj.addRecord();

}

