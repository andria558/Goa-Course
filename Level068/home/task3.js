var hotel = {
  hotelName: "Rosa", 
  stars: 4.7, 
  location: "borjom",
  guestReviews: {  
    review1: "good service (4.5)",
    review2: "rooms is clean and big (5)",
    review3: "so big cafe and garden (4.7)"
  }
};

console.log(Object.keys(hotel));
console.log(Object.values(hotel));

if (hotel.hasOwnProperty("spa")) {
  console.log(hotel.spa);
} else {
  console.log(false);
}

Object.assign(hotel, { roomsCount: 150 });
console.log(hotel);

Object.freeze(hotel);

hotel.hotelName = "Roses";
console.log(hotel);

console.log(Object.isFrozen(hotel));
