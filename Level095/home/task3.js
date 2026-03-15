console.log("Please White..");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('users');
    container.innerHTML = '';

    data.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user';
      div.innerHTML = `
        <strong>${user.name}</strong><br>
        Email: ${user.email}<br>
        City: ${user.address.city}
      `;
      container.appendChild(div);
    });

    console.log("დავამთავრე ");
  })
  .catch(error => {
    console.error("შეცდომა:", error);
    document.getElementById('users').innerHTML = "მონაცემების ჩატვირთვა ვერ მოხერხდა.";
  });
