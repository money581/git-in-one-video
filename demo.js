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
items[2].style.backgroundColor = 'green';
for (i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
    items[i].style.color = 'orange'
}
//calling elements by tag name then see diffrence 
const li = document.getElementsByTagName('li')
li[2].style.backgroundColor = 'green';
for (i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold'
    li[i].style.color = 'red'
}