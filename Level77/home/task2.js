// Add a new li element to the end of the list.\
const ul = document.getElementById('MyList');
const  NewItem = document.createElement("li");
NewItem.textContent = "item VI";
ul.appendChild(NewItem);

// Remove the first li element from the list.
const FirstElem = ul.firstElementChild;
ul.removeChild(FirstElem);

// Change the text content of a specific li element.
const SpecificElem = document.getElementsByTagName("li");
SpecificElem[2].textContent = "new content";