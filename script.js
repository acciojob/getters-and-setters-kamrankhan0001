//complete this code
class Person {
	constructor(name,age){
		this._name;
		this._age;
	}
}
get(){
	return this._name;
}
set(value){
	return this._age;
}

class Student extends Person {
	study() {
    console.log('${this._name}'is studying);
  }
}

class Teacher extends Person {
	teach() {
    console.log('${this._name}' is teaching);
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
