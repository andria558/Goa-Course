weather = Number(prompt(`Enter number: `, `1-2-3-4`));


switch (weather) {
    case 1:
        console.log(`მზიანი`);
        break;

    case 2:
        console.log(`წვიმიანი`);
        break;

    case 3:
        console.log(`მოღრუბლული`)

    case 4:
        console.log(`ქარიანი`)

    default:
        console.log(`არ არის დადგენილი`)
}