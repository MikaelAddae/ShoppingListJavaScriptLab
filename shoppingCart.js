console.log("Hello, please select items to purchase")


function addToCart()
{
    let selection = prompt("Please type an item you would like to purchase").toLowerCase()

    let selected = document.getElementsById(selection);
    const cart = [selected]

}

function cartTotal()
{
    for(let i = 0; i < cart.length; i++)
    {
        let total = i.valueOf();

    }
}

function Reciept()
{
    for (let i= 0; i < cart.length; i++)
    {
        console.log(cart[i])
    }
    console.log(cartTotal)
}