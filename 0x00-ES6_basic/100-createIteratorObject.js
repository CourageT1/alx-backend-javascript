// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const iterator = {
    index: 0,
    departments: Object.values(report.allEmployees),
    next() {
      if (this.index < this.departments.length) {
        const employees = this.departments[this.index];
        const employeeIndex = this.indexInDepartment || 0;

        if (employeeIndex < employees.length) {
          const employee = employees[employeeIndex];
          this.indexInDepartment = employeeIndex + 1;
          return { value: employee, done: false };
        }

        this.index++;
        this.indexInDepartment = undefined;
        return this.next();
      }

      return { done: true };
    },
  };

  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
