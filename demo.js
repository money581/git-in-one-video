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
items[2].style.backgroundColor = 'green';
for (i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
    items[i].style.color = 'red'
}
//listItems[1].style.color  = "green"