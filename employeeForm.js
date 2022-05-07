let empNameInput = document.getElementById('name');
let empIdInput = document.getElementById('empId');
let joinDateInput = document.getElementById('joinDate');
let hoursWorkedInput = document.getElementById('hoursWorked');
let designationInput = document.getElementById('designation');
let details;

let employeeList = [];

class Employee {
    constructor(empName, empId, joinDate, hoursWorked, designation) {
        this.empName = empName;
        this.empId = empId;
        this.joinDate = joinDate;
        this.hoursWorked = hoursWorked;
        this.designation = designation;
        if (designation == "Manager") {
            this.salary = hoursWorked * 90;
        }
        else if (designation == "Consultant") {
            this.salary = hoursWorked * 70;
        }
        else if (designation == "Trainee") {
            this.salary = hoursWorked * 45;
        }
    }
    getDetails() {
        return `${this.empName} who is a ${this.designation} will get $${this.salary}`;
    }
}
document.addEventListener("submit", (e) => {
    e.preventDefault();
    let empName = empNameInput.value;
    let empId = empIdInput.value;
    let joinDate = joinDateInput.value;
    let hoursWorked = hoursWorkedInput.value;
    let designation = designationInput.value;
    employeeList.push(new Employee(empName, empId, joinDate, hoursWorked, designation));
    console.log("Done");
    empNameInput.value = null;
    empIdInput.value = null;
    joinDateInput.value = null;
    hoursWorked.value = null;
    designation.value = null;
});

function passOn() {
    localStorage.clear();
    let details = employeeList.map((employee) => { return employee.getDetails(); });
    localStorage.setItem('details',JSON.stringify(details));
}