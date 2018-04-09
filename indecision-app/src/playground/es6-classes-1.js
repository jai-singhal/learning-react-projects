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
        return "His name is: ${this.name} and he is ${this.age} year(s) old";
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