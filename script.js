//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }
}


class Student extends Person {
	study() {
    console.log('${this._name} is studying');
  }
}

class Teacher extends Person {
	teach() {
    console.log('${this._name} is teaching');
}
}
const person = new Person("John", 30);
console.log(person.name);  // Output: John
person.age = 31;

const student = new Student("Alice", 20);
console.log(student.name);  // Output: Alice
student.study();     // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
console.log(teacher.name);  // Output: Bob
teacher.teach();     // Output: Bob is teaching

// Do not change the code below this line
//window.Person = Person;
//window.Student = Student;
//window.Teacher = Teacher;
