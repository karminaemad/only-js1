let names =[ 'karmina','krkr','koko','karamela'];
let ages =['21 years old','15 years old','19 years old','20 years old'];
let container = document.createElement ('div');
document.body.appendChild(container);
container.style.textAlign='center';
function element(names,ages)
{
//element
let card = document.createElement('div');
let title = document.createElement('h2');
let age = document.createElement('p');
let img = document.createElement('img');

//content
let head = document.createTextNode(names);
let agecontent = document.createTextNode(ages);
img.src = 'images/pic.jpg';
title.appendChild(head);
age.appendChild(agecontent);
card.appendChild(title);
card.appendChild(age);
card.appendChild(img);

//style
card.style.width='200px';
card.style.background='#000';
card.style.color='#fff';
card.style.padding='10px';
card.style.margin='2px';
card.style.display='inline-block';



img.style.width='100%';


container.appendChild(card);
}

for (let i = 0 ; i <4 ; i++){
    element(names[i],ages[i])
}