const academy = {
    name: 'GOA',
    courses: '2 lesson in week',
    socialLink: 'www.excaple.gg',
    reviews: {
        person1: {
            name: 'lana',
            status: 'child',
            review: "1000/10"
        },
        person2:{
            name: 'mamuka',
            status: 'parent',
            review: "1000/10"
        },
        person3: {
            name: 'ilia',
            status: 'child',
            review: "1000/10"
        }
    }
}

member = {
    first: 'lika',
    second: 'saba',
    third: 'ilia'
}
console.log(Object.entries(academy), "syudent")

console.log(Object.keys(academy))

console.log(Object.values(academy))

console.log(Object.hasOwn(academy))

console.log(Object.assign(academy,member))

Object.freeze(academy)

console.log(Object.isFrozen(academy))


