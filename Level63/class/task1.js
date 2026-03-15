
let result = 1


for (let x = prompt() ; x > 0 ; x++) {

    result *= x

    if (result > 10000){
        break;
    }

    console.log(result)
}

