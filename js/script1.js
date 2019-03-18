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
    $('body > script').before(table);
}

createTable();

let myTable = document.getElementsByTagName('table')[0];
myTable.addEventListener('click', function (event) {
    $(event.target).css('background-color', function (index, oldValue) {

        if (oldValue == 'rgb(255, 255, 255)') {
            return 'black';
        } else {
            return 'white';
        }
    });
    event.stopPropagation();
});

let myBody = document.body;
myBody.addEventListener('click', function (event) {
    $('table *').css('background-color', function (index, oldVal) {
        if (oldVal == 'rgb(255, 255, 255)') {
            return 'black';
        } else {
            return 'white';
        }
    });
});

// $('body').on('click', 'table', function (e) {
//
//    $(e.target).css('background-color', function (index, oldValue) {
//
//        if (oldValue == 'rgb(255, 255, 255)') {
//            return 'black';
//        } else {
//            return 'white';
//        }
//    });
//    e.stopPropagation();
// });

// $('body').on('click', 'body', function (e) {
//     $('table').css('background-color', function (index, oldVal) {
//         if (oldValue == 'rgb(255, 255, 255)') {
//             return 'black';
//         } else {
//             return 'white';
//         }
//     })
// });

// let myTable = document.getElementsByTagName('table')[0];
// myTable.addEventListener('click', function (event) {
//     event.target.classList.toggle('active');
//     event.stopPropagation();
// });
