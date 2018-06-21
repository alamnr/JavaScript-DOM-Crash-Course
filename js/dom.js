// Examine the document object

// console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent ='Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);


// GET ELEMENT BY ID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header= document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Good bye';

//console.log(headerTitle.textContent); // display-none text will be shown
//console.log(headerTitle.innerText); // display-none text will not be shown

//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';


// GET ELEMENTS BY CLASS NAME
/*
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent= 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// ES5 of 2015
Array.from(items).forEach(element => {
    element.style.backgroundColor = '#f4f4f4';
});

// ES6 of 2016
for (elem of items){
    elem.style.backgroundColor = 'coral';
}

// ES6 of 2017
[...items].forEach(element => {
    element.style.backgroundColor = '#fff';
});  */

// GET ELEMENT BY TAG NAME
/*
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent= 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// ES5 of 2015
Array.from(li).forEach(element => {
    element.style.backgroundColor = 'blue';
});

// ES6 of 2016
for (elem of li){
    elem.style.backgroundColor = 'coral';
}

// ES6 of 2017
[...li].forEach(element => {
    element.style.backgroundColor = 'red';
});  */

// QUERY SELECTOR

/*
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px red';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type=\'submit\']');
submit.value = 'Send';

var item = document.querySelector('.list-group-item');
item.style.color = 'pink';


var lastItem = document.querySelector('.list-group-item:last-child');

lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
*/

// QUERY SELECTOR

// Return NodeList which is an array like object but not Array
/*
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(elem  of odd){
    elem.style.backgroundColor='coral';
}


var even = document.querySelectorAll('li:nth-child(even)');

for(elem  of even){
    elem.style.backgroundColor='red';
}
*/

// TRAVERSING THE DOM

var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode);

// parent Element
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement);


// Child node
//console.log(itemList.childNodes); // shows the line break as textnode don't use it, instead ude children
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

// FirstChild
//console.log(itemList.firstchild); // don't use instead use firstElementChild
// firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello-1';

// lastChild
//console.log(itemList.lastchild); // don't use instead use firstElementChild
// lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello-1';

// next Sibling
//console.log(itemList.nextSibling);
// next element sibling
//console.log(itemList.nextElementSibling);

// previousSibling
//console.log(itemList.previousSibling);
// previous Element sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='coral';

// create element

// create a div
/*
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hellow1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container  = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);
*/

// EVENTS
/*
var button = document.getElementById('button').addEventListener('click',(e)=>{
    //console.log('Button Clicked');
    //document.getElementById('header-title').textContent = 'Changed';
    //document.querySelector('#main').style.backgroundColor='coral';
    //console.log(e);

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList ); // returns DomTokenList which is an array like object but not an array

    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type);

    console.log(e.clientX); // from whole document
    console.log(e.clientY);

    console.log(e.offsetX); // from actual  target element
    console.log(e.offsetX);


    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
});*/

var output = document.getElementById('output');

//document.getElementById('button').addEventListener('click',
//document.getElementById('button').addEventListener('dblclick',
//document.getElementById('button').addEventListener('mousedown',
/*document.getElementById('button').addEventListener('mouseup',
(e)=>{
 console.log('Event Type: '+e.type);
});*/
// 'mouseenter' and 'mouseleave' fires when you enter and leave the box element but 'mouseover' and 'mouseout' fires when you enter or leave the child of the box elementand the box itself
//document.getElementById('box').addEventListener('mouseenter',
//document.getElementById('box').addEventListener('mouseleave',
//document.getElementById('box').addEventListener('mouseover',
//document.getElementById('box').addEventListener('mouseout',
//document.getElementById('box').addEventListener('mousemove',
//document.querySelector('input[type=\'text\']').addEventListener('keydown',
//document.querySelector('input[type=\'text\']').addEventListener('keyup',
//document.querySelector('input[type=\'text\']').addEventListener('keypress',
//document.querySelector('input[type=\'text\']').addEventListener('focus',
//document.querySelector('input[type=\'text\']').addEventListener('blur',
// document.querySelector('input[type=\'text\']').addEventListener('paste',
//  document.querySelector('input[type=\'text\']').addEventListener('cut',
//document.querySelector('input[type=\'text\']').addEventListener('input',
// document.querySelector('select').addEventListener('change',
//document.querySelector('select').addEventListener('input',
document.querySelector('form').addEventListener('submit',
(e)=>{
    e.preventDefault();
    console.log('Event Type: '+e.type);
    //output.innerHTML = '<h3>MouseX: '+e.offsetX+ ' </h3><h3>MouseY: '+e.offsetY+' </h3>'
    //box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
    //document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
    //console.log(e.target.value);
   // document.getElementById('output').innerHTML='<h3>'+e.target.value+',/h3>';
   
})