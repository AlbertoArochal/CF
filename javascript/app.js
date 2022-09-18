const title = document.getElementById('title');
title.innerHTML = "Cursos"
const description = document.getElementById("description");
description.textContent = "Listado de Cursos"
description.innerHTML = " <strong>" + description.textContent + "</strong> "

const items = document.getElementsByClassName('list-group-item')
const list = document.querySelector('ul')
list.firstElementChild.style.background = '#f2f2f2'

const button = document.querySelector('.btn')
button.addEventListener('click', (e) => {
    console.log(e)
    if (title.style.display === 'none' && description.style.display === 'none') {
        title.style.display = 'block';
        description.style.display = 'block';
        e.target.textContent= 'Mostrar Texto'
    } else {
        title.style.display = 'none';
        description.style.display = 'none';
        e.target.textContent = 'Ocultar texto'
    }
})

button.addEventListener('mouseenter', (e) => {console.log(e)
    e.target.style.background = 'red';
    e.target.style.color = 'white'
})