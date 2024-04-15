// DOM Selection
//getElementById
const judul = document.getElementById('judul');
judul.style.textDecoration = 'underline';
judul.innerText = 'yaway';

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