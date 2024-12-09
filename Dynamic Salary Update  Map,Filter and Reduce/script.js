let tr = document.querySelectorAll("tr")
console.log(tr)

let result = [...tr].slice(1)
console.log(result)

let arr = result.map((e) => {
    let row = e.querySelectorAll("td")
    return {
        "S.no": row[0].textContent,
        "Name": row[1].textContent,
        "Location": row[2].textContent,
        "Salary": Number(row[3].textContent) + 200
    }
})

console.log(arr)


let table = document.createElement("table");
document.body.append(table);




console.log(table);

let thead = document.createElement("thead");
table.appendChild(thead);

let row = document.createElement("tr");
thead.appendChild(row);

let heading = document.createElement("th");
row.appendChild(heading).textContent = "S.no";



let heading1 = document.createElement("th");
row.appendChild(heading1).textContent = "EmpName";


let heading2 = document.createElement("th");
row.appendChild(heading2).textContent = "Location";


let heading3 = document.createElement("th");
row.appendChild(heading3).textContent = "Update Salary";




let tbody = document.createElement("tbody");
table.appendChild(tbody);



arr.forEach((element) => {
    let tr1 = document.createElement("tr");


    for (let i in element) {
        let td1 = document.createElement("td");
        td1.textContent = element[i];
        tr1.appendChild(td1);
    }

    tbody.appendChild(tr1);
});




let t = document.createElement("table");
document.body.append(t);




// console.log(table);

let th1 = document.createElement("thead");
t.appendChild(th1);

let trow = document.createElement("tr");
th1.appendChild(trow);

let h1 = document.createElement("th");
trow.appendChild(h1).textContent = "S.no";



let h2 = document.createElement("th");
trow.appendChild(h2).textContent = "EmpName";


let h3 = document.createElement("th");
trow.appendChild(h3).textContent = "Location";


let h4 = document.createElement("th");
trow.appendChild(h4).textContent = "Update Salary";




let tb = document.createElement("tbody");
t.appendChild(tb);



let fil = arr.filter((e, index, ord) => {

    return e.Salary > 3000
})
console.log(fil)



fil.forEach((element) => {
    let tr1 = document.createElement("tr");


    for (let i in element) {
        let td1 = document.createElement("td");
        td1.textContent = element[i];
        tr1.appendChild(td1);
    }

    tb.appendChild(tr1);
});


let red = arr.reduce((acc, e) => {
    return acc + e.Salary
}, 0)

let h123 = document.createElement("h1")
document.body.append(h123)
h123.textContent = `The sum of salary :${red}`


