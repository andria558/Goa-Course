function isPositive(number) {
    if (number > 0) {
        return "yes";
    }  
    else if (number == 0) {
        return "0"
    }   
    else {
        return "no";
    }
}


console.log(isPositive(10));  
