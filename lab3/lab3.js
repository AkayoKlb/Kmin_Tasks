
let contentText = document.getElementById('content').textContent;

let rulesText = document.getElementById('rules').textContent;

document.getElementById('content').textContent = 'Новий текст для контенту';

document.getElementById('rules').textContent = 'Нові правила Бойцовського клубу: будьте відверті і чесні.';

let elements = document.getElementsByTagName('*');
for (let element of elements) {
    element.style.backgroundColor = 'red';
}

for (let element of elements) {
    element.style.color = 'blue';
}

let classes = document.getElementById('rules').classList;
console.log(classes);

let fcElements = document.getElementsByClassName('fc_rules');

for (let el of fcElements) {
    el.style.color = 'red';
}


let users = [
    {
      name: 'vasya',
      age: 31,
      status: false,
      address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
    },
  ];
  
  let container = document.getElementById('userContainer');
  
  for (let user of users) {
    let userBlock = document.createElement('div');
    userBlock.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>
      <p>Status: ${user.status ? 'Active' : 'Inactive'}</p>
      <div>
        <p>Address:</p>
        <p>City: ${user.address.city}</p>
        <p>Country: ${user.address.country}</p>
        <p>Street: ${user.address.street}</p>
        <p>House Number: ${user.address.houseNumber}</p>
      </div>
    `;
    container.appendChild(userBlock);
  }
  