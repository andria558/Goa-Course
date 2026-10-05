if (process.env.NODE_ENV === "production") {
  console.log("[SERVER] ჩართულია Live რეჟიმი");
} else {
  console.log("[SERVER] ჩართულია Test რეჟიმი");
}


const arg = process.argv[2];

if (arg === "status") {
  console.log("Memory usage:", process.memoryUsage());
} else {
  console.log("No valid command provided.");
}


const memoryUsage = process.memoryUsage();

function toMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

if (arg === "status") {
  const heapUsedMB = toMB(memoryUsage.heapUsed);
  console.log(`Heap Used: ${heapUsedMB} MB`);
} else {
  console.log("გთხოვ, გამოიყენე არგუმენტი 'status'");
}


function toMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

const heapUsedMB = toMB(memoryUsage.heapUsed);

console.log(`Heap Used: ${heapUsedMB} MB`);

if (heapUsedMB > 50) {
  console.log("Warning: მაღალი მეხსიერების მოხმარება!");
} else {
  console.log("მეხსიერება ნორმაშია");
}
