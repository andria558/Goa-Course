function Flight(flightId, status) {
    this.flightId = flightId;
    this.status = status;

    this.getStatusMessage = function() {
        return `Flight ${this.flightId} has ${this.status}`;
    };
}


const flight = new Flight("NGT 929", "landed");

console.log(flight.getStatusMessage());
