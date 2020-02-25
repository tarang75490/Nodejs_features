//object Property SHort Hand

// In this the short hand can be applied when object property value is variable and when both the property name nad value variable is same
// Nice Syntax Improvement

const name = 'Tarang'
const UserAge = '21'

const user={
    name,
    age:UserAge,
    place:'Jabalpur',
}

console.log(user)

// Object Destructuring

const product = {
    label:'Red NOtebook',
    price: 3,
    stock:201,
    salePrice:undefined,
}


// const label = product.label
// const stock = product.stock


// const {label,stock,rating}  = product  //destructuring
// console.log(label)
// console.log(stock)
// console.log(rating)


//renaming and default value is used when value is undefined in object
const {label:productLabel,stock,rating='5'}  = product  //destructuring
console.log(productLabel)
console.log(stock)
console.log(rating)

// Direct desturcturing inside in the fuction Arguments
const transaction = (type,{label,stock,key="dasd"}) =>{
    console.log(type)
    console.log(label)
    console.log(stock)
    console.log(key)
}


// object as a parameter
transaction('Cash',product)


