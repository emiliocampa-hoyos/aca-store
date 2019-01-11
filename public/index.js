


function getListOfProductNames() {
    var startTag = "<ul>";
    var endTag = "</ul>";

    var elements = "";
    for (var i = 0; i < products.length; i++) {
        elements += "<li> " + products[i].name + " <button onclick="+'alert()'+">Add To Cart?</button> "
                 + " <ul>" 
                 + "<li> Rating: " + products[i].rating + " </li>"
                 + "<li> Reviews: " + products[i].reviews.length + " </li>"
                 + "<li> Price: " + products[i].price + " </li>" 
                 + " </ul>" 
                 + " </li>"
    }
    
    return startTag + elements + endTag; 
}


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



