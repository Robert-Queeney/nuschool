class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.communtiy = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(student) {
    if (this.students.filter(person => person.email === student.email).length) {
      console.log(`The student ${student.email} is already registered.`);
    } else {
      this.students.push(student);
      console.log(`Registering ${student.email} to the bootcamp`);
    }
    return this.students;
  }
}
