
localStorage.setItem('headerText', 'I am from local storage.');
const element = document.createElement('div');
document.body.prepend(element);
element.textContent = localStorage.getItem('headerText');
element.style.color = localStorage.getItem('headerColor');
element.style.backgroundColor = localStorage.getItem(('headerBackgroundColor'));

const input1 = document.createElement('input');
document.body.prepend(input1);
input1.addEventListener('input',function(e) {
    element.style.color = e.target.value;
    localStorage.setItem('headerColor', e.target.value);
} )

const input2 = document.createElement('input');
document.body.appendChild(input2);
input2.addEventListener('input', function(e) {
    element.style.backgroundColor = e.target.value;
    localStorage.setItem('headerBackgroundColor', e.target.value);
})

const url = 'https://jsonplaceholder.typicode.com/todos'
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        console.log(xhr.readyState);
        const response = JSON.parse(xhr.responseText);
        const completed = response.filter( todo => {
            return todo.completed;
        });
    }
    console.log(completed);
    const incomplete = response.filter( todo => {
        return todo.completed;
    })
};

xhr.send();

const request = new Request(url);

const URL = request.url;
const method = request.method;

fetch(request).then( response => {
    if (response.status === 200) {
        return response.json();
    }
})