const para = document.querySelector('p');
console.log(para);
const para2 = document.querySelector('.error');
console.log(para2);
const para3 = document.querySelector('div.error');
console.log(para3);

const para4 = document.querySelector('body > h1');
// selector is copied from console element copy selector
console.log(para4);

const paras = document.querySelectorAll('p');
//to select all para and it gives a node list
console.log(paras);
// to access use array method
console.log(paras[0], paras[1]);
// if you want to access all three use a for loop
paras.forEach(element => {
    console.log(element);
    // here element is a iterator only >> you can use lita , bita, jita anything
});

const paradiff = document.querySelectorAll('.error');
console.log(paradiff);

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = '<h2>THIS IS NEW H2</h2>';

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.codingninjas.com/');
link.innerText = 'CODING NINJA WEBSITE';

const msg = document.querySelector('.name');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'sucess');
msg.setAttribute('style', 'color:green;');

const editor = document.querySelector('#set');
console.log(editor.classList);
editor.classList.add('error');
editor.classList.remove('error');
editor.classList.add('success');
editor.classList.remove('success');

const ll = document.querySelectorAll('body > div.ll > p');
console.log(ll);
ll.forEach(p => {
    if (p.textContent.includes('error'))
    /// innerText and textConent are same but for hidden words textContent is used 
        p.classList.add('error');
    if (p.textContent.includes('success'))
        p.classList.add('success');

});

const title = document.querySelector('.title');
title.classList.toggle('text');
title.classList.toggle('text');