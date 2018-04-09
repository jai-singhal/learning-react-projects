class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName(){
        console.log(this.name);
    }
    printAge(){
        console.log(this.age);
    }
    getDescription(){
        return "His name is: " + this.name + " and he is " + this.age + " year(s) old";
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let parentDesc = super.getDescription();
        return parentDesc + " doing " + this.major;
    }
}

const p = new Person("Jai", 20);
console.log(p);
p.printName();
p.printAge();

const q = new Person("Deepak", 22);
console.log(q);
q.printName();
q.printAge();

console.log(p.getDescription());


const s1 = new Student("Jai Singhal", 20, "Computer Science");
console.log(s1.getDescription());
console.log(s1);