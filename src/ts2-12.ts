let value:number|string
value = 120
value = "Mark"

console.log(value)

function display(data: (number|string)){
    console.log(data)
}

display(123)
display("Mark")

let arrType:number[]|string[]
let z:number
arrType = [10,20,30]
for(z = 0; z < arrType.length; z++){
    console.log(arrType[z])
}

arrType = ["Thai","Lao","Malaysia"]
for(z = 0; z < arrType.length; z++){
    console.log(arrType[z])
}