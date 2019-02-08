function logIn() {

    alert('Считать с помощью модельного окна браузера данные пользователя: имя и возраст.');

    let name;

    do {
        name = prompt("Enter your name", "user");
    } while (name === 'user');
    let age;

    do {
        age = parseInt(prompt("Enter your age", age));
    } while (isNaN(age) || age < 0 || age > 110);

    if (age > 22) {
        alert("Welcome  " + name);
    }
    else if (age <= 22 && age >= 18) {
        let ans = confirm("Are you sure you want to continue?");
        if (ans) {
            alert("Welcome  " + name);
        } else {
            alert("You are not allowed to visit this website");
        }
    }
    else {
        alert("You are not allowed to visit this website");
    }
};

let butt1 = document.getElementById('home1');
butt1.onclick = logIn;

let butt2 = document.getElementById('home2');
butt2.addEventListener("click", addButtons);

let butt3 = document.getElementById('home3');
butt3.addEventListener("click", home3);

function addButtons() {

    alert('Реализовать программу на Javascript, которая будет находить все простые числа в заданном диапазоне.');

    let frag = document.createDocumentFragment();
    let butt_time1 = document.createElement('button');
    let butt_time2 = document.createElement('button');
    butt_time1.innerHTML = 'simply numbers from 2 to n';
    butt_time2.innerHTML = 'simply numbers from n to m';
    frag.appendChild(butt_time1);
    frag.appendChild(butt_time2);
    document.body.insertBefore(frag, document.body.lastChild);

    butt_time1.addEventListener("click", simplyNumbers1);
    butt_time2.addEventListener("click", simplyNumbers2);

}

function simplyNumbers2() {

    let num1, num2;

    do {
        if (isNaN(num1)) num1 = 'your number';
        num1 = parseFloat(prompt("Enter number from", num1));
    } while (isNaN(num1) || !((num1 ^ 0) === num1) || num1 <= 1);

    do {
        if (isNaN(num2)) num2 = 'your number';
        num2 = parseFloat(prompt("Enter number to", num2));
    } while (isNaN(num2) || !((num2 ^ 0) === num2) || num2 <= 1);

    if (num1 > num2) num2 = [num1, num1 = num2][0];

    let result = findNumbers(num2);
    let str = '';
    result.forEach((value,index) => {if (value && index >= num1) str += index + ' '});
    alert(str);
    window.location.reload(true);

}

function simplyNumbers1() {

    let number;

    do {
        if (isNaN(number)) number = 'your number';
        number = parseFloat(prompt("Enter number", number));
    } while (isNaN(number) || !((number ^ 0) === number) || number <= 1);


    let result = findNumbers(number);
    let str = '';
    result.forEach((value,index) => {if (value) str += index + ' '});
    alert(str);
    window.location.reload(true);
}

function findNumbers(number) {

    let arr = [number];

    for (let j = 0; j < 2; j++){
        arr[j] = false;
    }

    for (let i = 2; i <= number; i++) {
        arr[i] = true;
    }

    for (let x = 2; x*x <= number; x++){
        if (arr[x] === true){
            for (let y = x*x; y <= number; y+=x){
                arr[y] = false;
            }
        } 
    }

    return arr;

}

function factorial(num) {
    return (num != 1) ? num * factorial(num - 1) : 1;
}

function home3() {

    alert('Реализовать функцию подсчета факториала числа.');

    let number;

    do {
        if (isNaN(number)) number = 'your number';
        number = parseFloat(prompt("Enter number", number));
    } while (isNaN(number) || !((number ^ 0) === number) || number < 1);

    alert('Факториал числа ' + number + ' : ' + factorial(number));
}