// loading all btn the items when the browser is loaded
document.addEventListener("DOMContentLoaded",()=>{
    // accessing all the btn elements when browser is loaded
    let addtocartBtn=document.querySelectorAll(".add-to-cart")
    console.log(addtocartBtn)
    // accessing the cartIcon
    let cartIcon=document.querySelector(".cart-icon")
    console.log(cartIcon)
    // addting functionalities for all btn elements
    addtocartBtn.forEach(button=>{
        console.log(button)
        button.addEventListener("click",()=>{
            // console.log(button.parentElement.parentElement)
            // gathering all product informatiom
            let productInfo=button.parentElement.parentElement;
            let Pname=productInfo.querySelector(".product-title").innerText;
            let Pprice=productInfo.querySelector(".product-price").innerText;
            let Pdes=productInfo.querySelector(".product-des").innerText;
            let Pimage=productInfo.querySelector(".product-img").src;
            console.table([Pname,Pprice,Pdes,Pimage])
// create the object for selected object
            let selectedprod={
                title:Pname,
                desc:Pdes,
                price:parseFloat(Pprice.replace(/[^0-9]/g,"")),
                imgUrl:Pimage,
                quantity:1
            }
            // passing all productinfo to addtocart to check item present or not
            Addtocart(selectedprod)
         })
    })
    // adding functionalities for cart icon
    cartIcon.addEventListener("click",()=>{
        window.location.href="cart.html"
    })
})
// array to add selected items
let cartItems=[]



// function to addcart : to check whether ites exist in the cart
function Addtocart(product){
    console.log("P",product)
    let existingItems=cartItems.find(item=>item.title===product.title)
    if(existingItems){
        existingItems.quantity++
    }else{
        cartItems.push(product)
    }
// adding the items to local storge
localStorage.setItem("cartitem",JSON.stringify(cartItems))
handleCartIconTotal()
}



// function to print cart icon value
function handleCartIconTotal(){
    let cartIconVal=document.querySelector(".cart-icon-value")
    console.log(cartIconVal)
    let cartTotal=cartItems.reduce((total,ele)=>total+ele.quantity,0)
    cartIconVal.textContent=cartTotal;
}





// loading all the items when the browser is responded from localstorage
function loadCart(){
    let cartvalues=localStorage.getItem("cartitem")
    if(cartvalues){
        cartItems=JSON.parse(cartvalues)
        handleCartIconTotal()
    }
}
loadCart()