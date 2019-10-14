"use strict";
var show_modal = document.getElementById("show-modal");
var show_img = document.getElementById("show-img");
var show_db = document.getElementById("show-db");
var show_list = document.getElementById("show-list");
var show_count = document.getElementById("show-count");
var activeState = "img-active";
var itemClass = ".overview__items";
var images = [];
var activeIdx = 0;

var initmain = function initmain() {
    getImages(show_db.children[0].children);
    loadtoList();
    setImageForCur(0);
    setActiveImage(0);
}

show_db.addEventListener('click', e => {
    getImages(e.target.children);
    loadtoList();
    setImageForCur(0);
    setActiveImage(0);
})

var loadtoList = function loadtoList() {
    show_list.innerHTML = "";
    var img_temp = "";
    images.forEach(function (img, i) {
        img_temp += `<li class="overview__items" data-idx="${i}"><img src="${img}" alt=""></li>`
    });

    show_list.innerHTML = img_temp;
};

show_list.addEventListener("click", function (e) {
    activeIdx = e.target.closest(itemClass).dataset.idx;
    setActiveImage(activeIdx);
    setImageForCur(activeIdx);
});

var setImageForCur = function setImageForCur(idx) {
    var len = images.length;
    var to = idx % len;
    idx >= 0 ? (to = idx % len) : (to = len - 1);
    activeIdx = to;
    show_img.src = images[to];
    setActiveImage(to);
};

var setActiveImage = function setActiveImage(idx) {
    var active = show_list.children;
    console.log(active);
    Array.from(active).forEach(function (list) {
        list.classList.remove(activeState);
    });
    active[idx].classList.add(activeState);
    active[idx].scrollIntoView(false);
};

var getImages = function getImages(node) {
    images = [];
    var db_img = Array.from(node);
    db_img.forEach(function (img) {
        images.push(img.dataset.src);
    });
};


initmain();