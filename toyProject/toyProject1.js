'use strict';
// 선언부
const itemsContainer = document.querySelector('.items');
const all_clothes = [
    makeGoods('blue_p', 'make, large', 'p', 'blue'),
    makeGoods('pink_s', 'make, small', 's', 'pink'),
    makeGoods('blue_s', 'make, big', 's', 'blue'),
    makeGoods('yellow_p', 'make, midium', 'p', 'yellow'),
    makeGoods('pink_t', 'make, long', 't', 'pink'),
    makeGoods('blue_s', 'make, large', 's', 'blue'),
    makeGoods('pink_p', 'make, big', 'p', 'pink'),
    makeGoods('yellow_s', 'make, midium', 's', 'yellow'),
    makeGoods('yellow_t', 'make, large', 't', 'yellow'),
    makeGoods('blue_p', 'make, big', 'p', 'blue'),
    makeGoods('pink_s', 'make, large', 's', 'pink'),
    makeGoods('yellow_p', 'make, midium', 'p', 'yellow'),
];
// object 만들어주는 함수
function makeGoods(src, comment, tps, color) {
    const image = new Image()
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
// 처음 값 설정
function reset(){
    removeAll();
    for (let i = 0; i < all_clothes.length; i++) {
        const item = createNode(all_clothes[i].comment, all_clothes[i].image);
        itemsContainer.appendChild(item);
    }
}
const createNode = (comment, image) => {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'item__text';
    span.append(comment);
    item.setAttribute('class', 'item');
    item.appendChild(image);
    item.appendChild(span);
    return item;
}
reset();
function removeAll() {
    while (itemsContainer.hasChildNodes()) {
        itemsContainer.removeChild(itemsContainer.firstChild);
    }
}

function colorView(color) {
    console.log(color);
    removeAll();
    const c_Collection = all_clothes.filter(clothe => clothe.color === color);
    c_Collection.forEach(c => itemsContainer.appendChild(createNode(c.comment, c.image)));
}

function shapeView(shape) {
    console.log(shape);
    removeAll();
    const s_Collection = all_clothes.filter(clothe => clothe.tps === shape);
    s_Collection.forEach(s => itemsContainer.appendChild(createNode(s.comment, s.image)));
}

//document.getElementsByClassName('logo').onclick = reset;