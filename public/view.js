
function searchForItemView() {
    var toLookFor = document.getElementById('searchBarId').value;
    renderItems(GetItemsByName(toLookFor));   
}

function renderItems(productsToRender) {
    var productNamesDOM = document.getElementById('productNamesListId');
                    
    var startTag = "<ul>";
    var endTag = "</ul>";

    var elements = "";
    for (var i = 0; i < productsToRender.length; i++) {
        let myProduct = productsToRender[i];
        elements += "<li> " + myProduct.name + " <button onclick="+'addToCart('+ myProduct._id +')'+">Add To Cart?</button>" 
                 + "<button onclick=displayItemDetails(" + myProduct._id + ") >Details</button>";
    }
    productNamesDOM.innerHTML = startTag + elements + endTag; 
}

function displayItemDetails(itemId) {
    let myProduct = GetItemById(itemId);
    var productNamesDOM = document.getElementById('productNamesListId');
                    
    var startTag = "<ul>";
    var endTag = "</ul>";
    let elements = "<li> " + myProduct.name + " <button onclick="+'addToCart('+ myProduct._id +')'+">Add To Cart?</button>"
    + " <ul>" 
    + "<li> Rating: " + myProduct.rating + " </li>"
    + "<li> Reviews: " + myProduct.reviews.length + " </li>"
    + "<li> Price: " + myProduct.price + " </li>" 
    + " </ul>" 
    + " </li>"
    productNamesDOM.innerHTML = startTag + elements + endTag; 
}


function displayCategoryDropDown() {
    let categories = getProductCategories();
    let dropdown = "<option>Category</option>";
    
    for (let  i = 0; i < categories.length; i++) {
        let category = categories[i];
        dropdown += "<option value="+ category +">" + category + "</option>";
    }
    let categoryDOM = document.getElementById('categoryId');
    categoryDOM.innerHTML = dropdown;
}



function displaySelectedCategoryProducts() {
    let selecteCategoryDOM = document.getElementById("categoryId");
    let selectedOption = selecteCategoryDOM.options[selecteCategoryDOM.selectedIndex].value;

    let itemstoDisplay = getProductsByCategory(selectedOption);
    renderItems(itemstoDisplay);
}

function displayHome() {
    let homeDOM = document.getElementById('homeId');
    homeDOM.hidden = false;
    let cartItemsDOM = document.getElementById('cartId');
    cartItemsDOM.hidden = true;
}

function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        var cartItemsDOM = document.getElementById('cartItemsId');
        cartItemsDOM.innerHTML = "";
        clearSession();    
    }
}

function displayCart() {
    let homeDOM = document.getElementById('homeId');
    homeDOM.hidden = true;

    let myCart = JSON.parse(sessionStorage.getItem("cartItems"));
    let itemsList = "";

    if (myCart) {
        for (let i = 0; i < myCart.length; i++) {
            itemsList += "<li>" + myCart[i].name + "</li>";
        }
        itemsList = "<ul>" + itemsList + "</ul>";

        var cartItemsDOM = document.getElementById('cartItemsId');
        cartItemsDOM.innerHTML = itemsList;    
    }
    
    let cartDOM = document.getElementById('cartId');
    cartDOM.hidden = false;
}