//complete this code
class Person {
	constructor(name , age)
	{
		this.name = name;
		this.age = age;
	}
	get getName()
	{
		return this.name;
	}
	set setage(newAge)
     setage(newAge)
	{
		this.age = newAge;
	}
}


class Student extends Person {
	constructor(name , age)
	{
		// super.getName(this.name);
		// super.setage(this.age) = age;
		super(name,age);
	}
	set setage(newAge){
		super.age = newAge;
	}
	study()
	{
		console.log(this.name + " is studying");
	}
}
class Teacher extends Person {
	constructor(name , age)
	{
		super(name , age);
		// this.age = age;
	}
	set setage(newAge){
		super.age = newAge;
	}
	teach()
	{
		console.log(this.name + " is teaching");
	}
}



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
