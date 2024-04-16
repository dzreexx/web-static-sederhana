// DOM Selection
//getElementById
const judul = document.getElementById('judul');
judul.style.textDecoration = 'underline';
judul.innerHTML = '<em>Hello World</em>';

//getElementByTagName /HtmlCollection

const list = document.getElementsByTagName('li');
for( let i = 0; i < list.length; i++){
    list[i].innerHTML = 'Menu'+[i];
    list[i].style.backgroundColor = 'lightblue'
}

//getElementByClassName /HtmlCollection

const paragrap = document.getElementsByClassName('p1')[0];
paragrap.style.fontWeight = 'bold';

//querySelector

const p2 = document.querySelector('.p2');
p2.style.color = 'blue';

//querrySelectorAll /
const dua = document.getElementById('dua');
const p = dua.querySelectorAll('p')[3];
p.style.backgroundColor = 'red';

//Manipulasi Element

//EVENT LISTENER

judul.addEventListener('mouseenter', function () {
    judul.style.backgroundColor = 'blue';
});

let teksBerubah = false;

function getRandomNumberR() {
    const min = 156;
    const max = 224;
    const randomValue = Math.random(); // Nilai acak antara 0 dan 1
    const randomNumber = min + Math.floor(randomValue * (max - min + 1));
    return randomNumber;
};
function getRandomNumberG() {
    const min = 156;
    const max = 224;
    const randomValue = Math.random(); // Nilai acak antara 0 dan 1
    const randomNumber = min + Math.floor(randomValue * (max - min + 1));
    return randomNumber;
};
function getRandomNumberB() {
    const min = 156;
    const max = 224;
    const randomValue = Math.random(); // Nilai acak antara 0 dan 1
    const randomNumber = min + Math.floor(randomValue * (max - min + 1));
    return randomNumber;
};



const tombolDM = document.querySelector('#dark');
tombolDM.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (teksBerubah) {
        tombolDM.innerHTML = "dark";
        teksBerubah = false;
    } else {
        tombolDM.innerHTML = "light";
        teksBerubah = true;
    }
    const r = getRandomNumberR();
    const g = getRandomNumberG();
    const b = getRandomNumberB();
    p.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});



//Object

let orang = {
    nama : 'Yurika',
    credit : 10,
    kebaikan : function (baik) {
        this.credit = this.credit + baik;
        console.log(`kamu berbuat baik ${this.nama}, credit kamu menjadi ${this.credit},`)
    },
    kejahatan : function (jahat) {
        this.credit = this.credit - jahat;
        console.log(`kamu berbuat jahat ${this.nama}, credit kamu menjadi ${this.credit},`)
        if (this.credit < 0) {
            console.log(`kamu terlalu jahat!!`);
        }
    }
}

//function declaration

function Orang(nama, credit) {
    let orang = {};
    orang.nama = nama;
    orang.credit = credit;

    orang.kebaikan = function (baik) {
        this.credit += baik;
        console.log(`kamu berbuat baik ${this.nama}, credit kamu menjadi ${this.credit},`)
    }
    orang.kejahatan = function (jahat) {
        this.credit -= jahat;
        console.log(`kamu berbuat jahat ${this.nama}, credit kamu menjadi ${this.credit},`);
        if (this.credit < 0 ) {
            console.log(`Kamu Jahat Sekali!!!.....`)
        }
    }
    return orang;
}

let saiful = Orang('saiful', 1);


//constructor function

function Manusia(nama, credit) {
    this.nama = nama;
    this.credit = credit;

    this.kejahatan = function (jahat) {
        this.credit -= jahat;
        console.log(`kamu berbuat jahat credit kamu di kurangi ${jahat}`)
        if (this.credit < 0) {
            console.log(`Kamu terlalu jahat, kamu bisa masuk Neraka!!`)
        }
    }

    this.kebaikan = function (baik) {
        this.credit += baik;
        console.log(`kamu berbuat baik credit kamu ditambahkan ${baik}`)
    }
}

let irfan = new Manusia('irfan', 10);
let gofur = new Manusia('gofur', 10);