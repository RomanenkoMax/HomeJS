function createTable() {

    let body = document.body;
    let table = document.createElement("table");
    // table.style.border = '1px solid black';
    for (let i = 0; i < 30; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < 30; j++){
            let td = document.createElement('td');
            td.style.width = '15px';
            td.style.height = '15px';
            td.style.border = '1px solid black';
            tr.appendChild(td);
        };
        table.appendChild(tr);
    }
    table.style.borderCollapse = 'collapse';
    body.insertBefore(table, document.getElementsByTagName('script')[0]);
}

createTable();

let myTable = document.getElementsByTagName('table')[0];
myTable.addEventListener('click', function (event) {
    event.target.classList.toggle('active');
    event.stopPropagation();
});

let myBody = document.body;
myBody.addEventListener('click', function (event) {
    if (event.currentTarget !== 'td'){
        myTable.classList.toggle('active');
    };
});