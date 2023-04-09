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
    return "Alice is studying";
  }
}

class Teacher extends Person {
	teach() {
    return "john is studying";
}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
