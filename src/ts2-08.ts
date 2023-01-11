// let employee:object

let employee: {
    firstName: string
    lastName: string
    age:number
    job: string
}

employee = {
    firstName: "Mark",
    lastName: "Zuckerberg",
    age: 45,
    job: "CEO of Facebook"
}

console.log(`Name: ${employee.firstName} ${employee.lastName}`)
console.log(`Age: ${employee.age}`)
console.log(`Job: ${employee.job}`)