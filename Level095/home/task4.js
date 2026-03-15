function asyncPromiseFunction(task) {
  return new Promise((resolve, reject) => {
    if (!task || task.trim() === "") {
      reject("შეცდომაა ლომო");
    } else {
      setTimeout(() => {
        resolve(`"${task}" შესრულდა წარმატებით`);
      }, 1000);
    }
  });
}

asyncPromiseFunction("work 2")
  .then(result => console.log(result))
  .catch(error => console.log(error));

asyncPromiseFunction("work 3")
  .then(result => console.log(result))
  .catch(error => console.log(error));


asyncPromiseFunction("")
  .then(result => console.log(result))
  .catch(error => console.log(error));
