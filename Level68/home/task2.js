let sportsClub = {
  clubName: "Golden Eagles",
  sportType: "Basketball",
  foundedYear: 1990,
  achievements: {
    title1: "ლიგის გამარჯვება 2010",
    title2: "ფრანგულ კუპის გამარჯვება 2012",
    title3: "კონტინენტალური ტიტული 2015"
  }
};

console.log(Object.keys(sportsClub));

console.log(Object.values(sportsClub));

if (sportsClub.hasOwnProperty("sponsors")) {
  console.log(sportsClub.sponsors);
} else {
  console.log(false);
}

Object.assign(sportsClub, { stadiumCapacity: 5000 });
console.log(sportsClub);

Object.freeze(sportsClub);

sportsClub.clubName = "New Eagles";
console.log(sportsClub);

console.log(Object.isFrozen(sportsClub));
