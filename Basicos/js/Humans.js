class Humans {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    info() {
        return console.log(this);
    }
}
let Gaurav = new Humans('Gaurav', 24, 'Male');
let Nishi = new Humans('Nishi', 23, 'Female');

Gaurav.info();
Nishi.info();

class Teacher extends Humans{

    constructor( name, age, gender, subject, grade ) {
       super(name, age, gender);
       this.subject = subject;
       this.grade = grade;
    }

    info(){
        return console.log(this);
    }
       
}
let teacher = new Teacher('GauravMehla', 24, 'Male','Science', 'A');
teacher.info();