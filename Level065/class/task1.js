
let myself = {

    Name: 'Andria',
    LastName: 'Kupreishvili',
    Profession: 'programmer',
    hobby: 'codding',
    car: 'dont have :(',
    
    information: function () {
        return `Hi,  i'm  ${this.Name} ${this.LastName} My proffesion is ${this.Profession} and my hobby is ${this.hobby} also my car is ${this.car}`
    }
}

console.log(myself.information())