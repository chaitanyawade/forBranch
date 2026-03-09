let a = document.createElement('button');
a.innerText = "click";
a.classList.add('red', 'bg-red');

let body = document.querySelector('body');

body.appendChild(a);