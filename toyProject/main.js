'use strict';
// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json()
        .then(json => json.items))  // 위에서 처리한 promise 값을 json으로 받아와서 그곳에서 items만 배열형식으로 리턴
}

function displayItems(items){
    const container = document.querySelector('.items');
    // 배열 한개한개
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
    // innerHTML : 문자열로 적힌 태그들을 html 위치에 삽입시킨다
}

function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__img" />
        <span class="item__text">${item.gender}, ${item.size}</span>
    </li>   
    `;
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key==null || value == null){
        return;
    }
    displayItems(items.filter(item => item[key]===value)); // item 오브젝트의 key에 해당하는 게 클릭한 값인것만
    console.log(event.target.dataset.key);
}

function setEventListeners(items){
    // 한개한개 따로 이벤트를 넣기보다 컨테이너에 넣어서 클릭했을때 모두 한곳에서 처리되게 하는게 효율적
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.btns');    //컨테이너 가져오기
    logo.addEventListener('click', () => displayItems(items));
    // event : 누가 클릭했는지 클릭한 요소의 data-key 전달
    buttons.addEventListener('click', event=> onButtonClick(event,items));
}

// main : item들을 프로미스로 받아와서 화면에 보여주고, 클릭이벤트 각각주기
loadItems() // data.json을 읽어와서 데이터 프로미스로
.then(items => {
    displayItems(items);
    setEventListeners(items)
})
.catch(console.log);