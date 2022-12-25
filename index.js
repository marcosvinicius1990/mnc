const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 1;

function carrosel() {
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 211}px)`;
}

setInterval(carrosel, 1500);