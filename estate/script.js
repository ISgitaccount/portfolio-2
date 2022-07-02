'use strict';

let imgs = document.querySelectorAll('.presentationimg');

let dropdown = document.querySelector('.dropdown-content');

let dropbtn = document.querySelector('.dropbtn');

document.querySelector('.turnleft').addEventListener('click', change);

document.querySelector('.turnright').addEventListener('click', change);




let autoChange = setInterval(change, 5000);

function change() {
    for (let i = 0; i < imgs.length; i++) {
        if (!imgs[i].classList.contains('hidden')) {
            imgs[i].classList.add('hidden');
        } else {
            imgs[i].classList.remove('hidden');
        }
    }
}

function clear() {
    clearInterval(autoChange);
}

document.querySelector('.turnleft').addEventListener('click', clear);

document.querySelector('.turnright').addEventListener('click', clear);

document.querySelector('.language').addEventListener('click', function() {
    
    dropdown.classList.toggle('hidden');
    
    setTimeout(function() {
        dropdown.classList.add('hidden');    
    }, 5000);
    
});


document.querySelector('.dropbtn').addEventListener('mouseenter', function() {
    dropbtn.style.color = '#4D6EAF';
})

document.querySelector('.dropbtn').addEventListener('mouseleave', function() {
    dropbtn.style.color = '#6E6E6E';
})





