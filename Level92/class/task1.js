class Person {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  info() {
    return `My name is  ${this.name} and my lastname is ${this.lastname} im ${this.age} year old`
  }
}

P1 = new Person('Andria', 'Kupreishvili', 19)

console.log(P1.info());



