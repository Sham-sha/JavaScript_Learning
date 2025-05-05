let employees = [
    { empName: "Sam", Salary: 100000 },
    { empName: "John", Salary: 90000 },
    { empName: "David", Salary: 80000 }
]

let filterData = employees.filter(val, name => { return val.Salary >= 90000, name.empName })

console.log(filterData);






