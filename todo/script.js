
'use strict';


let todoL = document.querySelector('form.todo');
let footer = document.querySelector('form.todo div.footer');
let items = document.querySelectorAll('form.todo div.item');
let itemDescription = document.querySelectorAll('form.todo div.item div.description');
let todos = [];
for (let i = 0; i < items.length; i++) {
    
    todos.push(items[i].textContent.match(/[a-z0-9]/gi).join(''));
}
 
 
document.querySelector('form.todo').addEventListener('click', (e) => {
    if( !e.target.closest('img.itemicon') ) return;
    let elem = e.target.closest('img.itemicon');
    let item = elem.parentElement;
    if( elem.classList.contains('itemActive') ) elem.src = 'unactivetask.gif';
    else elem.src = 'activetask.jpg';
    elem.classList.toggle('itemActive');
    item.classList.toggle('active');
});
 
document.querySelector('form.todo').addEventListener('click', (e) => {
    if( !e.target.closest('img.closeimg') ) return;
    let item = e.target.closest('div.item')
    item.remove();
    countItems();
});
 
 
document.querySelector('form.todo input.tasks').addEventListener('keydown', (e) => {
    if (!e.target.value) return;
    if(e.keyCode === 13) {
        e.preventDefault();
        let newtask = document.querySelector('form.todo div.item').cloneNode(true);
        newtask.querySelector('div.description').innerText = e.target.value;
        e.target.parentElement.after(newtask);
                
        let input = document.querySelector('form.todo input.tasks');
        input.value = '';
        countItems();
    }
});
 
 
let countItems = function() {
    let items = document.querySelectorAll('form.todo div.item img.itemicon');
    let blankItems = [];
    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains('itemActive')) {
            blankItems.push(items[i]);    
        }
    
    }
 
    let count = blankItems.length;
 
    let itemsLeft = document.querySelector('form.todo div.footer div.itemsleft');
    itemsLeft.innerHTML = `${count} items left`; 
}
countItems();
 
 
document.querySelector('form.todo').addEventListener('click', (e) => {
    if (!e.target.closest('img.itemicon') ) return;
    countItems();       
});
 
 
document.querySelector('form.todo').addEventListener('click', (e) => {
    if( !e.target.closest('button.buttonselect') ) return;
    e.preventDefault();
    let form = document.querySelector('form.todo');
    let img = document.querySelectorAll('form.todo div.item img.itemicon');
    let item = document.querySelectorAll('form.todo div.item');

    if (e.target.classList.contains("activeitem")) {
    for (let i = 0; i < img.length; i++) {
      if (img[i].classList.contains("itemActive")) {
        item[i].style.display = "none";
      } else {
        item[i].style.display = "flex";
      }
    }
  }
    else if (
    e.target.classList.contains('completeditem')) {
        for (let i = 0; i < img.length; i++) {
            if (!item[i].classList.contains('active')) {
                item[i].style.display = 'none';
            } else item[i].style.display = 'flex';
        }
    } else if (e.target.classList.contains('allitems')) {
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = 'flex';
        }
    }
    return form;
});


