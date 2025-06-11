var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll(".product-box");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productNameElement = productList[count].querySelector("p");

        if (productNameElement) {
            var productName = productNameElement.textContent.toUpperCase();

            if (productName.indexOf(enteredValue) < 0) {
                productList[count].style.display = "none";
            } else {
                productList[count].style.display = "block";
            }
        }
    }
});