function addToCart(elem) {
    let quantity = elem.parentNode.querySelector("input").value;
    const price = elem.parentNode.querySelector("span").innerHTML.substr(1);
    let total = price * quantity;


    let outputQuantity = document.querySelector('span.itemsCount').textContent;
    let outputValue = document.querySelector('span.itemsTotal').textContent;
    outputQuantity = parseInt(outputQuantity) || 0
    outputValue = parseInt(outputValue) || 0

    if (0 === outputQuantity || 0 === outputValue) {
        document.querySelector('span.itemsCount').innerHTML = quantity;
        document.querySelector('span.itemsTotal').innerHTML = total;
    } else {
        quantity = parseInt(quantity)
        total = parseInt(total)
        document.querySelector('span.itemsCount').innerHTML = outputQuantity + quantity;
        document.querySelector('span.itemsTotal').innerHTML = total + outputValue;
    }


}
