
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'SEASHELL KEYCHAIN',
        image : 'seashell.jpg',
        price: 7
    },
    {
        id: 2,
        name: 'SURFBOARD KEYCHAIN',
        image: 'keychain.jpg',
        price: 12
    },
    {
        id: 3,
        name: 'SEASHELL NECKLACE',
        image: 'necklace.png',
        price: 14
    },
    {
        id: 4,
        name: 'OCTOPUS PLUSHIE',
        image: 'octopus.png',
        price: 22
    },
    {
        id: 5,
        name: 'STARFISH PLUSHIE',
        image: 'starfish.png',
        price: 30
    },
    {
        id: 6,
        name: 'WHALE PLUSHIE',
        image: 'whale.png',
        price: 20
    },
    {
        id: 7,
        name: 'FRAMED SEA PAINTING',
        image: 'painting.png',
        price: 45
    },
    {
        id: 8,
        name: 'SEA THEAMED TOTE BAG',
        image: 'tote.png',
        price: 11
    },
    {
        id: 9,
        name: 'SEASHELL BRACELET',
        image: 'bracelet.png',
        price: 10
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../images/image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../images/image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = `$${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
    // Store order summary in local storage
    localStorage.setItem('orderSummary', JSON.stringify(listCards));
    localStorage.setItem('totalPrice', totalPrice);
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
// Function to check if cart is empty
function checkCart() {
    let totalPrice = 0;
    listCards.forEach((value) => {
        totalPrice += value.price;
    });

    return totalPrice === 0;
}

// Event listener for checkout button
total.addEventListener('click', () => {
    if (checkCart()) {
        alert("The cart is empty");
    } else {
        // Proceed to checkout if cart is not empty
        window.location.href = '../html/checkout.html'; // Change 'checkout.html' to the desired HTML page
    }
});
