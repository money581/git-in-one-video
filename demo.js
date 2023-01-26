var headerTitle = document.getElementById('header-title')
//var title = document.getElementsByClassName('title')

headerTitle.style.borderBottom = 'solid 3px black'
const title = document.getElementById('xyz')
title.style.color = "green"
title.style.fontWeight = "bold"
//console.log(title.textContent)

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
//console.log(xyz);
xyz[1].style.color='green'
var apple = document.querySelectorAll('li:nth-child(odd)')
for ( i=0; i<apple.length; i++){
    apple[i].style.backgroundColor='green'
}
//task no 7 start
    //-parent node
var itemList=document.querySelector('#items');
//console.log(itemList.parentNode);
//console.log(itemList.parentNode.parentNode);
itemList.parentNode.style.backgroundColor='#6dbed6'
//itemList.parentNode.parentNode.style.backgroundColor='#6dbed6'

//-parentElement   parent element also use same as parent node  we can replace the word node from element only  result will be same


 // childNode
//  console.log(itemList.childNodes);
//children
 //console.log(itemList.children);
//  console.log(itemList.children[3]);
//  itemList.children[3].style.backgroundColor='grey'
//here also have property called  firstChild  which has select first element .  but we can do same by using children
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello aman'   do same as for last 
//nextSibling
// console.log(itemList.nextSibling);
//same as nextElementSibling
// also has property previousSibling  and previousElementSibling
  

//creat element
//create new div
var newDiv=document.createElement('div')

//create class name
newDiv.className='hello'
//create id
newDiv.id='hello1'
//create attributes
newDiv.setAttribute('title','hello-div')
//create a textNode 
var newDivText=document.createTextNode('HEllo')
// add textNode in this div
newDiv.appendChild(newDivText)
// this text only in console directory not in dom so we can fix in dom by thease property 
// first we assign where we want add this text
var container = document.querySelector('header .container')
var h1=document.querySelector('header h1')
//then assign
container.insertBefore(newDiv,h1)
newDiv.style.fontWeight='bold'
//console.log(newDiv)
// add new hello word before item list 1 as per task-7

var newSecondDiv=document.createElement('div')
newSecondDiv.className='nmstey'
newSecondDiv.id='pranam'
newSecondDiv.setAttribute('title','hello-div2')
var newSecondDivText=document.createTextNode('HEllo')
newSecondDiv.appendChild(newSecondDivText)
//console.log(newSecondDiv)
var secondChange = document.querySelector('.list-group')
//console.log(secondChange)
var h2=document.querySelector('.list-group-item')
//console.log(secondChange)
secondChange.insertBefore(newSecondDiv,h2)
newSecondDiv.style.fontWeight='bold'


 