class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor( name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if(this.students.filter(person => person.email === students.email).length) {
            console.log(`The student ${student.email} is already registered`)
        } else {
            this.students.push(students);
            console.log(`The student ${student.email} is now register`)

        }
    return this.students;
    }
}
