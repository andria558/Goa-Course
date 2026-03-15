function asyncPromiseFunction(work) {
  return new Promise((resolve, reject) => {
    if (work === "") {
      reject(Error("Nothing Katleti"));
    } else {
      setTimeout(() => {
        resolve(work);
      }, 1000);
    }
  });
}

asyncPromiseFunction("kotoleti")
  .then((result) => {
    console.log("Vefxvi, lomi, wolki, yvelaferri");
  })
  .catch((err) => {
    console.log(err.message);
  });

