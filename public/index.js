

var listOfProducts;

// Print the list of available products
function getProducts() {  
    return products;
}


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

/*
function getListOfProductNames(filteredListOfProducts) {
    var startTag = "<ul>";
    var endTag = "</ul>";

    var elements = "";
    for (var i = 0; i < filteredListOfProducts.length; i++) {
        elements += "<li> " + filteredListOfProducts[i].name + " <button onclick="+'alert()'+">Add To Cart?</button> "
                 + " <ul>" 
                 + "<li> Rating: " + filteredListOfProducts[i].rating + " </li>"
                 + "<li> Reviews: " + filteredListOfProducts[i].reviews.length + " </li>"
                 + "<li> Price: " + filteredListOfProducts[i].price + " </li>" 
                 + " </ul>" 
                 + " </li>"
    }
    
    return startTag + elements + endTag; 
}
*/


