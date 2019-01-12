var cartItems = [];

if (sessionStorage.getItem("cartItems")) {
    cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
}

function GetItemsByName(toLookFor) {
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


function getProductsByCategory(toLookFor) {
    toLookFor = toLookFor.toLowerCase();
    let toReturn = [];
    let product;

    for (var i = 0; i < products.length; i++) {
        product = products[i];
        
        if (product.category.toLowerCase() == toLookFor) {
            toReturn.push(product);
        }
    }
    return toReturn;
}


function GetItemById(_id) {
   for (let i = 0; i < products.length; i++) {
       if (products[i]._id == _id)
        return products[i];
   }
}


function addToCart(itemKey) {
    let productToAdd = GetItemById(itemKey);
    cartItems.push(productToAdd);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart: " + productToAdd.name);
}



function getProductCategories() {
    let categories = [];

    for (let i = 0; i < products.length; i++) {
        if (categories.indexOf(products[i].category) == -1)
            categories.push(products[i].category);
    }
    return categories;
}


function clearSession() {
    sessionStorage.clear();
}



