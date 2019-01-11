
function GetItems(toLookFor) {
    toLookFor = toLookFor.toLowerCase();
    let toReturn = [];
    let product;

    for (var i = 0; i < products.length; i++) {
        product = products[i];
        
        if (product.name.toLowerCase().includes(toLookFor)) {
            toReturn.push(product);
        }
    }
    return toReturn;
}


function addToCart(itemKey) {
    console.log("Item: " + itemKey);
}



