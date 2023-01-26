var headerTitle = document.getElementById('header-title')
//var title = document.getElementsByClassName('title')

headerTitle.style.borderBottom = 'solid 3px black'
const title = document.getElementById('xyz')
title.style.color = "green"
title.style.fontWeight = "bold"
console.log(title.textContent)

const items = document.getElementsByClassName('list-group-item')
//console.log(items)
//console.log(items[]);
//get elements by class name there is no change in item-5 because there is no class name
// items[2].style.backgroundColor = 'green';
// for (i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold'
//     items[i].style.color = 'orange'
// }
//calling elements by tag name then see diffrence 
const li = document.getElementsByTagName('li')
//li[2].style.backgroundColor = 'green';
for (i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold'
    li[i].style.color = 'red'
}
//task no 6 using querryselector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input =document.querySelector('input')
// input.value="helo world"
// var submit = document.querySelector('input[type="submit"]')
// submit.value="send"
// var item = document.querySelector('.list-group-item')
// item.style.color='black'
// var abc = document.querySelector('.list-group-item:nth-child(2)').style.backgroundColor = 'green'
// var abc = document.querySelector('.list-group-item:nth-child(3)').style.display = 'none'
var xyz =document.querySelectorAll('.list-group-item')
console.log(xyz);
xyz[1].style.color='green'
var apple = document.querySelectorAll('li:nth-child(odd)')
for ( i=0; i<apple.length; i++){
    apple[i].style.backgroundColor='green'
}
