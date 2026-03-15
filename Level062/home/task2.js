function calculateFactorial(N) {
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    
    return factorial;
}

const N = prompt(prompt("შეიყვანეთ რიცხვი: "));
console.log(`${N}-ის ფაქტორიალია: ${calculateFactorial(N)}`);
