// const arr = [3,7,1,9,2,6,-1,-4,4,-2];

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3) {
//         newArr.push(arr[i])
//     }
    
// }
// console.log(newArr);

// const lateArr = newArr.filter( a => a >=5 );

// console.log(lateArr.sort())

// const final = lateArr.reduce((a,c) => a+c);

// console.log(final)


// const hasil = arr.filter( a => a > 0)
// .map(a => a - 1)
// .reduce((a,c) => a + c);

// console.log(hasil)

const myVideo = Array.from(document.querySelectorAll('[data-duration]'));

let re = myVideo.filter(video => video.textContent.includes('Resident Evil')).map(item => item.dataset.duration).map(time => {
    const parts = time.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
})
.reduce((acc, cur) => acc+cur);

const jam = Math.floor(re / 3600);
re = re - jam * 3600;
const menit = Math.floor(re / 60);
const detik = re - menit * 60;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam}, jam ${menit}, menit ${detik}, detik`;

const jVideo = myVideo.filter(video => video.textContent.includes('Resident Evil')).length
const pVideo = document.querySelector('.jumlah-video');
pVideo.textContent = `${jVideo}, Video`

console.log(jVideo)