const fs = require('fs')

// const book ={
//     name : 'Think and Grow Reach',
//     author:'Tarang'
// }

// // console.log(book)

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// fs.writeFileSync('json_file1.json',bookJSON)


// // const data = JSON.parse(bookJSON)
// // console.log(data)

// const dataBuffer = fs.readFileSync('json_file1.json')
// console.log(dataBuffer)
// const dataJson  = dataBuffer.toString()
// console.log(dataJson)
// const data = JSON.parse(dataJson)
// console.log(data)


const dataBuffer = fs.readFileSync('json_file1.json')
const data = JSON.parse(dataBuffer.toString())
data.age = 21
data.name='Tarang'
console.log(data)
fs.writeFileSync('json_file1.json',JSON.stringify(data))
