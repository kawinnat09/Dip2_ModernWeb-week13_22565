let empCode:any = 111
let employeeCode = empCode as number
console.log(`${employeeCode} is ${typeof(employeeCode)}`)

let empFname:any = "Mark"
let empFirstName = <string>empFname
console.log(`${empFirstName} is ${typeof(empFirstName)}`)