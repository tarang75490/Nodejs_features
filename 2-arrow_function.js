// const multiply = function(x){
//     return x*x
// }
// const multiply = (x) => {
//     return x*x
// }

const multiply = (x) => x*x



const event={
    name:'Birthday Party',
    guestList : ['Tarang','satyam','dhwani'],
    printguestList: function() {
        console.log('GuEST lIST for '+this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest+' is meeting for '+this.name )
        })
    }    
}
const num = [2,4,6]
const result = num.map(multiply)
console.log(result)
event.printguestList()