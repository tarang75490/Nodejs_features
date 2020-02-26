const doworkpromise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Running Successfully')
        reject('Errorrrrrr')
    },2000)
})


doworkpromise.then((result) =>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})