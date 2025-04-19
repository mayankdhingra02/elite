console.clear();

// Load cart badge from cookies
if (document.cookie.indexOf(',counter=') >= 0) {
  const counter = document.cookie.split(',')[1].split('=')[1];
  document.getElementById("badge").innerHTML = counter;
}

// DOM containers
let cartContainer = document.getElementById('cartContainer');
let boxContainerDiv = document.createElement('div');
boxContainerDiv.id = 'boxContainer';

let totalContainerDiv = document.createElement('div');
totalContainerDiv.id = 'totalContainer';

let totalDiv = document.createElement('div');
totalDiv.id = 'total';

let totalh2 = document.createElement('h2');
totalh2.innerText = 'Total Amount';
totalDiv.appendChild(totalh2);

let buttonDiv = document.createElement('div');
buttonDiv.id = 'button';

let placeOrderButton = document.createElement('button');
let placeOrderLink = document.createElement('a');
placeOrderLink.href = '/orderPlaced.html';
placeOrderLink.innerText = 'Place Order';
placeOrderButton.appendChild(placeOrderLink);

let clearCartButton = document.createElement('button');
clearCartButton.innerText = 'Clear Cart';
clearCartButton.onclick = function () {
  document.cookie = "orderId=,counter=0; path=/";
  location.reload();
};

buttonDiv.appendChild(placeOrderButton);
buttonDiv.appendChild(clearCartButton);


totalContainerDiv.appendChild(totalDiv);

// 🧩 Renders each item in cart
function dynamicCartSection(product, quantity) {
  let boxDiv = document.createElement('div');
  boxDiv.id = 'box';

  let img = document.createElement('img');
  img.src = product.preview;

  let h3 = document.createElement('h3');
  h3.innerText = `${product.name} × ${quantity}`;

  let h4 = document.createElement('h4');
  h4.innerText = `Amount: $ ${product.price * quantity}`;
  

  boxDiv.appendChild(img);
  boxDiv.appendChild(h3);
  boxDiv.appendChild(h4);
  let removeBtn = document.createElement('button');
removeBtn.innerText = 'Remove';
removeBtn.onclick = function () {
  removeFromCart(product.id);
};
boxDiv.appendChild(removeBtn);


  boxContainerDiv.appendChild(boxDiv);
}

// 🧮 Total price display
function amountUpdate(amount) {
  let totalh4 = document.createElement('h4');
  totalh4.innerText = `Amount: $ ${amount}`;
  totalDiv.appendChild(totalh4);
}

// 🧠 Parse cookie to get product IDs
function renderCart() {
  if (document.cookie.indexOf(',counter=') === -1) return;

  let cookieParts = document.cookie.split(',');
  let itemList = cookieParts[0].split('=')[1].trim().split(' ');
  let counter = Number(cookieParts[1].split('=')[1]);

  document.getElementById("totalItem").innerText = 'Total Items: ' + counter;

  let itemCountMap = {};
  itemList.forEach(id => {
    if (!id) return;
    itemCountMap[id] = (itemCountMap[id] || 0) + 1;
  });

  let totalAmount = 0;
  for (let id in itemCountMap) {
    let product = products.find(p => p.id === parseInt(id));
    if (product) {
      let quantity = itemCountMap[id];
      totalAmount += product.price * quantity;
      dynamicCartSection(product, quantity);
    }
  }

  amountUpdate(totalAmount);
  totalDiv.appendChild(buttonDiv);

  cartContainer.appendChild(boxContainerDiv);
  cartContainer.appendChild(totalContainerDiv);
  
}
function removeFromCart(id) {
    if (document.cookie.indexOf('orderId=') === -1) return;
  
    let orderList = document.cookie.split(',')[0].split('=')[1].trim().split(' ');
    let newOrder = [];
    let removed = false;
  
    for (let i = 0; i < orderList.length; i++) {
      if (!removed && parseInt(orderList[i]) === id) {
        removed = true; // only remove one occurrence
        continue;
      }
      newOrder.push(orderList[i]);
    }
  
    const newCounter = newOrder.length;
    document.cookie = `orderId=${newOrder.join(' ')},counter=${newCounter}; path=/`;
    location.reload();
  }
  

// 🚀 Run it
renderCart();
