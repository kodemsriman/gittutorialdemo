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
var li = document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
}