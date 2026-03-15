// Properties unpack
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

const { name, age, city } = person;
console.log(`Person: Name = ${name}, Age = ${age}, City = ${city}`);

// 2. Properties unpack from nested object
const company = {
    companyName: 'iTech',
    location: {
        country: 'USA',
        state: 'samfrancisko'
    },
    employees: 150
};

const { companyName, location: { country, state }, employees } = company;
console.log(`Company: Name = ${companyName}, Country = ${country}, State = ${state}, Employees = ${employees}`);

// 3. Change name of properties
const product = {
    id: '#QR101',
    productName: 'Laptop',
    price: 1200
};

const { id: productId, productName: item, price: cost } = product;
console.log(`Product: ID = ${productId}, Item = ${item}, price = ${cost}`);
