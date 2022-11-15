// console.log(document);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// document.title = "Changed title of the items";
// console.log(document.title);
// console.log(document.doctype) ;
// console.log(document.forms);
// console.log(document.links);
// console.log(document.head);
// console.log(document.body);
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Hi there';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// var header = document.getElementById('main-header')
// header.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('list-group-item');
// //console.log(items[2]);

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }
//get Elements by tagName

// var li = document.getElementsByTagName('li');
// li[1].style.backgroundColor = '#f4f4f4';
// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }
 
// Queryselector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var secItem = document.querySelectorAll('.list-group-item');
// secItem[1].style.color = 'green';

// var item = document.getElementsByClassName('list-group-item');
// var thirdItem = item[2];
// thirdItem.style.visibility = 'hidden';

// var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }


//Traversing the dom//
// var itemList = document.querySelector('#items');
// //console.log(itemList);
// // ParentNode
// //console.log(itemList.parentNode);
// //itemList.parentNode.style.backgroundColor = '#f4f4f4';
// //console.log(itemList.parentNode.parentNode);
// //itemList.parentNode.parentNode.style.backgroundColor = 'orange';
// //console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// //console.log(itemList.parentElement.parentElement);

// //creatElement

// //create a div
// var newDiv = document.createElement('div');
// //add id
// newDiv.id = 'hello';
// //add class
// newDiv.className = "hello1";
// //add attribute
// newDiv.setAttribute('title', 'Hello Div');
// // create text node
// var newDivText = document.createTextNode('Hello World');
// //add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv,h1);
// console.log(newDiv);
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e)
{
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value; 
    //creat new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    console.log(li);
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    //create del button element
    var deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append textNOde
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to list
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);
}
//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}