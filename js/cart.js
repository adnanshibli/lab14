/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}
console.log(cart);

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    table.innerHTML = '<thead><tr><th>Remove</th><th>Quantity</th><th>Item</th></tr></thead>';

    // document.getElementsByTagName('tr').innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function showCart() {

    // TODO: Find the table body
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    var tableE = document.getElementById('cart');
    // TODO: Iterate over the items in the cart
    Cart.all =[];
    for (let i = 0; i < Product.allProducts.length; i++) {
      if(JSON.parse(localStorage.getItem(Product.allProducts[i].name))){
        Cart.all.push(JSON.parse(localStorage.getItem(Product.allProducts[i].name)));
      }
    }
    
    console.log(Cart.all);
    for (let i = 0; i < Cart.all.length; i++) {
      // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
  
      var trE = document.createElement('tr');
      tableE.appendChild(trE);
      trE.setAttribute('class',Cart.all[i].items.product);
  
      var tdE = document.createElement('td');
      trE.appendChild(tdE);
      tdE.innerText = 'X';
      tdE.setAttribute('class',Cart.all[i].items.product);
  
      var tdE = document.createElement('td');
      trE.appendChild(tdE);
  
      tdE.innerText = Cart.all[i].items.quantity ; 
      var tdE = document.createElement('td');
      trE.appendChild(tdE);
      tdE.innerText = Cart.all[i].items.product;
    }
  
  }
  //   var items = JSON.parse(localStorage.getItem('cart'));
  //   for (var i = 0; i < items.length; i++) {
  //     var tr = document.createElement('tr');
  //     var tdX = document.createElement('td');
  //     tdX.textContent = 'X';
  //     tdX.setAttribute('id', i);
  //     tr.appendChild(tdX);
  //     var tdIt = document.createElement('td');
  //     tdIt.textContent = items[i][0];
  //     tr.appendChild(tdIt);
  //     var tdQu = document.createElement('td');
  //     tdQu.textContent = items[i][1];
  //     tr.appendChild(tdQu);
  //     var tdImage = document.createElement('td');
  //     tr.appendChild(tdImage);
  //     var img = document.createElement('img');
  //     tdImage.appendChild(img);
  //     table.appendChild(tr);
  //     if (items[i][0] === 'Pet Sweep') {
  //       img.src = 'assets/pet-sweep.jpg';
  //     } else if (items[i][0] === 'Taun-Taun') {
  //       img.src = 'assets/tauntaun.jpg';
  //     } else if (items[i][0] === 'Sweep') {
  //       img.src = 'assets/sweep.png';
  //     } else if (items[i][0] === 'USB') {
  //       img.src = 'assets/usb.gif';
  //     } else if (items[i][0] === 'Water Can') {
  //       img.src = 'assets/water-can.jpg';
  //     } else if (items[i][0] === 'Wine Glass') {
  //       img.src = 'assets/wine-glass.jpg';
  //     } else {
  //       img.src = `assets/${items[i][0].toLowerCase()}.jpg`;
  //     }
  //   }
  // }


// function showCart() {

//     // TODO: Find the table body
//     var tbody = document.getElementsByTagName('tbody');

//     // TODO: Iterate over the items in the cart
//     for (var i = 0; i < cart.items.length; i++) {
//         // TODO: Create a TR
//         var tr = document.createElement('tr');
//         tr.setAttribute('id', i);
//         // TODO: Create a TD for the delete link, quantity,  and the item
//         // TODO: Add the TR to the TBODY and each of the TD's to the TR
//         var td = document.createElement('td');
//         td.textContent = 'delete';
//         tr.appendChild(td);
        
//         var totalQuantity = document.createElement('td');
//         totalQuantity.textContent = cart.items[i].quantity;
//         tr.appendChild(totalQuantity);
        
//         var itemEltd = document.createElement('td');
//         itemEltd.textContent = cart.items[i].product;
//         tr.appendChild(itemEltd);
        
//         tbody.appendChild(tr);
//         table.appendChild(tbody);

//     }
// }

    function removeItemFromCart(event) {

        // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
        console.log(event.target.className);
        if(event.target.innerText ==='X'){
          document.getElementsByClassName(event.target.className)[0].remove();
      
          localStorage.removeItem(event.target.className);
      
        
        };
      
      }
      
      // This will initialize the page and draw the cart on screen
      
        
        // var deleteId;
        // if (event.target.textContent === 'X'){
        //     deleteId = event.target.id;
        //     cart.removeItem(deleteId);
        // }
        // cart.saveToLocalStorage();
        // clearCart();
        // renderCart();

        // var eventTarget = event.target;
        // if (eventTarget.textContent == 'delete') {
        //     cart.removeItem(eventTarget.id);
        // }

        // TODO: Save the cart back to local storage

        // localStorage.setItem('cart', JSON.stringify(cart.items));

        // TODO: Re-draw the cart table

        // renderCart();

    

    // This will initialize the page and draw the cart on screen
    renderCart();
    // table.addEventListener('click', removeItemFromCart);

