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

    addRecord(add) {
        this.data.push(add); 
        alert(`Data Added Successfully....!`);
        this.details();
    }
}

let obj = new Demo;
obj.details();

const adddata = () => {
    let newRecord = {
        No: 4,
        ID: Date.now(),
        Name: "Krishna",
        Phone: 125633,
    }
    obj.addRecord(newRecord); 
}
