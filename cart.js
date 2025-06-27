// laoding all the items in the cart when the browser is loaded
document.addEventListener("DOMContentLoaded",()=>{
    loadCart()
})
let cartItems=[]


function loadCart(){
    let cartvalues=localStorage.getItem("cartitem")
    if(cartvalues){
        cartItems=JSON.parse(cartvalues)
        // function to update cartui
        updateCartUi()
    }
}

function updateCartUi(){
    let cartContainer=document.querySelector(".cart")
    cartContainer.innerHTML=''
    // displaying all the items added into the cart dynamically
    cartItems.forEach(ele=>{
        let cartCard=document.createElement("div")
        cartCard.className='col-12 col-sm-12 col-md-3 col-lg-3'
        cartCard.innerHTML=` <div class="card product shadow" >
  <img src="${ele.imgUrl}" class="product-img" alt="...">
  <div class="card-body product-inf0">
    <h5 class="card-title product-title">${ele.title}</h5>
    <p class="card-text product-des">${ele.desc}</p>
    <p class="card-text product-price">${ele.price}</p>
    <!-- quntity container -->
    <div class="quantity-container">
        <button class="btn btn-success increment">+</button>
        <span class="quantity">${ele.quantity}</span>
        <button class="btn btn-danger decrement">-</button>
        <!-- delete functionality -->
    <button class="btn btn-warning">delete</button>
    </div>
  </div>
</div>`
// accessing all the icrement and decrete quantity and delete
let incrementBtn=cartCard.querySelector(".increment")
let decrementBtn=cartCard.querySelector(".decrement")
let deleteBtn=cartCard.querySelector(".delete-btn")
let Qval=cartCard.querySelector(".quantity")

// adding the functionalities

incrementBtn.addEventListener("click",function(){
handleIncrement(ele,Qval)
})
decrementBtn.addEventListener("click",function(){
    handleDecrement(ele,Qval)
})
deleteBtn.addEventListener("click",function(){
    handleDelete(ele)
})

        // appending the child
        cartContainer.appendChild(cartCard)
    })

}

// function to handle increment
function handleIncrement(ele,Qval){
    ele.quantity++
    Qval.innerText=ele.quantity
}

// function to handle decrement
function handleDecrement(){

}

// function to delete
function handleDelete(){

}

// function to handle clear all
function handleClearAll(){

}
// function to handle total
function handleCartTotal(){

}