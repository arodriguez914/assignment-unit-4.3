console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem (item) {
    if (isFull() === false){
    basket.push(item);
    return true;
}   else{
    console.log('Basket is Full');
    return false;   
}
}

console.log(addItem('bananas'));
console.log(addItem('oranges'));
console.log(addItem('peaches'));
empty();
console.log(addItem('mangoes'));
console.log(addItem('apples'));
console.log(addItem('grapes'));


isFull();

console.log(basket);

function listItems () {
    for (let cartItem of basket){
        console.log(cartItem);
    }
}

listItems();

function empty (){
    while (basket.length > 0){
    basket.pop();
    }
}


console.log(basket);

function isFull() {
    if (basket.length < maxItems){
        return false;
    } else{ return true;     
    }
}

isFull();

function removeItem(unWantedItems){
    if (basket.includes(unWantedItems)){
     basket.splice(basket.indexOf(unWantedItems),1)
    return unWantedItems;
} else {
    return null;
}
}

removeItem('apples');
console.log(basket);


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
