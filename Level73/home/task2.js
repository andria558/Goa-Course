function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();


    return  {years, months, days} ;
}

console.log(calculateAge('2012 06 17'));


document.getElementById('age').textContent = calculateAge;
