
//arguement object - no longer bound with arrow function

const user = {
    name: "Jai Singhal",
    techs: ["Python", "Django", "React"],

    printMethod: function() {
        // let that = this;
        // for(let i = 0; i < this.techs.length; i++)
        //     console.log(this.name + "knows" + this.techs[i]);

        const techNames = this.techs.map((tech) => this.name + " knows " +  tech );
        return techNames;
        // this.techs.forEach((tech)  => {
        //     console.log(this.name + " knows " + tech);
        // });
    }
};

const power = {
    numbers : [1, 2, 3, 4, 5],
    pow : 3,
    
    squares() {
        return this.numbers.map( (val) =>  
            (this.pow)*val
        );
    }
};


console.log(user.printMethod());
console.log(power.squares());