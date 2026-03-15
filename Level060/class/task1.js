
let coffe = Number(prompt(`Enter your choise (1-Americano; 2-Esspresso; 3-cappuccino : )`));


switch (coffe) {
    case 1:
        console.log(`Americano`);
        break;

    case 2:
        console.log(`Esspresso`);
        break;

    case 3:
        console.log(`cappuccino`);
        break;

    default:
        console.log(`invalid coffe`);
};
