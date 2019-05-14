//object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

//Object destructuring 
//const {properties you want} = object;

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

//const {label, stock} = product; //destructuring 
//change the variable name 
// ---> const {label: productLabel, stock} = product;

const transaction = (type, { label,stock }) => {
    console.log(type,label,stock); 
}

transaction('order', product);