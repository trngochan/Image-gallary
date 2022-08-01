var btnClose = document.querySelector(".close");
var btnprev = document.querySelector(".direction.prev");
var btnnext = document.querySelector(".direction.next");
var gallary = document.querySelector(".gallery");
var images = document.querySelectorAll(".wapper__img img")
var galary__inner =document.querySelector(".gallery__img img");

var currentindex = 0;

function showGalary() {
    if(currentindex<=0) {
        btnprev.classList.add("hide");
    } else {
        btnprev.classList.remove("hide");
    }

    if(currentindex >= images.length-1) {
        btnnext.classList.add("hide");
    } else {
        btnnext.classList.remove("hide");
    }

    gallary.classList.remove("hide");
    galary__inner.src = images[currentindex].src;
}

btnClose.addEventListener('click',function() {
    gallary.classList.add("hide");
})

gallary.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        gallary.classList.add("hide");
    }
})

images.forEach(function(img,index) {
    images[index].addEventListener('click', function() {
        currentindex = index;
        showGalary();
    })
})

btnprev.addEventListener('click', function() {
    currentindex--;
    showGalary();
})

btnnext.addEventListener('click', function() {
    currentindex++;
    showGalary();
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallary.classList.add("hide");
    }
})