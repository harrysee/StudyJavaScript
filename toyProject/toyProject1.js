'use strict';
const itemsContainer = document.querySelector('.items');

const all_clothes = [
    makeGoods('blue_p','make, large','p','blue'),
    makeGoods('pink_s','make, small','s','pink'),
    makeGoods('blue_s','make, big','s','blue'),
    makeGoods('yellow_p','make, midium','p','yellow'),
    makeGoods('pink_t','make, long','t','pink'),
    makeGoods('blue_s','make, large','s','blue'),
    makeGoods('pink_p','make, big','p','pink'),
    makeGoods('yellow_s','make, midium','s','yellow'),
    makeGoods('yellow_t','make, large','t','yellow'),
    makeGoods('blue_p','make, big','p','blue'),
    makeGoods('pink_s','make, large','s','pink'),
    makeGoods('yellow_p','make, midium','p','yellow'),
];
console.log(all_clothes[0].image);
console.log(itemsContainer);

// object 만들어주는 함수
function makeGoods(src, comment, tps ,color){
    const image = new Image();
    image.className = 'item__img';
    image.src = `imgs/${src}.png`;
    image.alt = `${color}-${tps}`;
    return {
        tps,
        color,
        image,
        comment
    };
}

for (let i = 0; i < all_clothes.length; i++) {
    const item = document.createElement('li');
    item.setAttribute('class','item');
    const span = document.createElement('span');
    span.className ='item__text';
    span.append(all_clothes[i].comment);
    item.appendChild(all_clothes[i].image);
    item.appendChild(span);
    itemsContainer.appendChild(item);
}