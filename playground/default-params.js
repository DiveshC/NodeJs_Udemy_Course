const greeter = (name) => {
    console.log(name);
}


const trans = (type, {label, stock =0}={}) =>{
    console.log(type,label,stock);
}

trans('order', product);