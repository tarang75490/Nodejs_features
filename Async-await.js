// const doWork = ()=>{ 
//     return new Promise((resolve,reject)=>{
//     resolve('Tarang')
// })
// }
// const doWork = async () => {
//     // throw new Error('Something went Wrong')
//     return "Tarang" 
// }



const add = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (a<0 || b<0)
            {
                reject('Numbers should be positive')
            }
            resolve(a+b)
        },2000)
    })
}




const doWork  = async () => {
    const sum = await add(1,4)
    const sum2 = await add(sum,5)
    const sum3 = await add(sum2,10)
    return sum3
}

doWork().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log("error :"+error)
})



// benefits of async-await functions
// *     firstly we can return promises with much simpler code syntactically
// *     we are access to all the results inside async fuction and ca use it unlike promises chaining where
//      we have define global var and assign it to get accsee 