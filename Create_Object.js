const employeeManager = {
    name: null,
    id: null,
    salary: null,
    position: null,
  
    addEmployee(employee) {
      this.id = employee.id;
      this.name = employee.name;
      this.position = employee.position;
      this.salary = employee.salary;
    },
  
    removeEmployee() {
      this.id = null;
      this.name = null;
      this.position = null;
      this.salary = null;
    },
  
    getEmployeeDetails() {
      return {
        id: this.id,
        name: this.name,
        position: this.position,
        salary: this.salary,
      };
    },
  
    getSalary() {
      return this.salary;
    }
  };
  
  employeeManager.addEmployee({
    id: 1,
    name: "Shafayat",
    position: "Programmer",
    salary: 75000
  });
  
  console.log(employeeManager.getEmployeeDetails());
  
  employeeManager.removeEmployee();
  console.log(employeeManager.getEmployeeDetails());

  console.log(employeeManager.getSalary());
  