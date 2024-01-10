//main.ts

// Task 1: Teacher Interface and Example
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Directors Interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: printTeacher Function and Interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

// Task 4: StudentClass Class and Interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentInstance: StudentClassInterface = new StudentClass('Alice', 'Smith');
console.log(studentInstance.displayName());
console.log(studentInstance.workOnHomework());
