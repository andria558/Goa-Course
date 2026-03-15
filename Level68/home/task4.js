var cinema = {
  cinemaName: "Artemis",
  moviesCount: 10,
  location: "sweden",
  movieReviews: {
    review1: "affordable prices",
    review2: "long variety of snacks",
    review3: "Good grafiycs"
  }
};

console.log(Object.keys(cinema));
console.log(Object.values(cinema));

if (cinema.hasOwnProperty("vipSeats")) {
  console.log(cinema.vipSeats);
} else {
  console.log(false);
}

Object.assign(cinema, { ticketPrice: 12 });
console.log(cinema);

Object.freeze(cinema);

cinema.cinemaName = "Arees";
console.log(cinema);

console.log(Object.isFrozen(cinema));
