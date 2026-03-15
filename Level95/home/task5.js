const button = document.getElementById('loadBtn');
const list = document.getElementById('userList');

button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      list.innerHTML = ''; // გასუფთავება
      data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email})`;
        list.appendChild(li);
      });
      console.log("მონაცემები დაემატა");
    })
    .catch(error => {
      console.error("შეცდომა:", error);
    });
});