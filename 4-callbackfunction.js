setTimeout(()=>{
    console.log('2 sec Timer')
},2000)

// Asynchronous /NOdeAPI


const vech= ['car','Helicopter','Jets']
const sel_vech = vech.filter((item)=>{
    return item.length >3
})
console.log(sel_vech)
//synchronous

const geocode= (address,callback) =>{
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0
        }
        return data 
    },2000)
} 
const data = geocode()
console.log(data)

// const geocode= (address,callback) =>{
//     setTimeout(()=>{
//         const data = {
//             latitude:0,
//             longitude:0
//         }
//         callback(data)
//     },2000)
// } 
// geocode('dsa',(data)=>{
//     console.log(data)
// })
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (n1,n2,callback)=>{
    setTimeout(()=>{
        callback(n1+n2)
    },2000)

}
add(7, 4, (sum) => {
    console.log(sum) // Should print: 5
})



