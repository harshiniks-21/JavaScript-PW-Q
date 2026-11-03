//!Class
//! syntax class ClassName{ }




// class StudentDetails{
//     constructor(name,id,age){
//         this.name=name;
//         this.id=id;
//         this.age=age;
//     }
//     display()
//     {
//         console.log(`Name:${this.name}`);
//         console.log(`Id:${this.id}`);
//         console.log(`Age:${this.age}`);

//     }

// }
//  let std1=new StudentDetails("Harshini",25,100)
//  console.log(std1)
//  std1.display();
//  let std2=new StudentDetails("Krupa",25,102)
//  console.log(std2);

 //! Inheritance->re-use
// class person{
//     constructor(name,age)
//     {
//     this.name=name;//left side value will be different than actual value but the right side value should be same.
//     this.age=age;
//     }
//     displayPerson()
//     {
//         console.log(`Name : ${this.name}`);
//          console.log(`Age : ${this.age}`);
//     }
// }

// class Student extends person{
//     constructor(name,age,course)
//     {
//         super(name,age);
//         this.course=course
//     }
//     displayStudent(){
//         console.log(`course : ${this.course}`);
//     }
// }

// let s1 = new Student("Harshini",25,"Javascript")
// console.log(s1)
// s1.displayStudent()
// s1.displayPerson()

class Animal
{
sound()
{
    console.log(`Animal makes Sound`)
}
}
class Dog extends Animal
{
    sound(){
    super.sound();
    console.log("Dog Barks")
    }
}
let dog=new Dog()
dog.sound()