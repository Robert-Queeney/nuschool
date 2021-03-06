class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
    const isPresent = this.students.find(x => x.email === student.email);
    if (!isPresent) {
      this.students.push(student);
      console.log(
        `Registering ${student.name} to the bootcamp ${student.community}.`
      );
    } else {
      console.log(
        `${student.name} is already registered in ${student.community}`
      );
    }
    return this.students;
  }
}
