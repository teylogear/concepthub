import {articulos} from './articulos.js'

document.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  if (id){

    document.querySelectorAll('.tab-btn').forEach( btn => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')

    document.querySelectorAll('.content').forEach( art => {
      art.classList.remove('active')
    })
    document.getElementById(id).classList.add('active')
  }

  if (e.target.matches('.entry-title')){
    const entry = e.target.parentElement
    document.querySelectorAll('.entry').forEach( e => {
      if (e !== entry) e.classList.remove('show-body')      
    })
    const title = entry.querySelector('p').textContent
    entry.querySelector('.entry-body-c').innerHTML = articulos[title]?.body
    entry.classList.toggle('show-body')    
  }
    
  if (e.target.matches('.entry-title *')){
    const entry = e.target.parentElement.parentElement
    document.querySelectorAll('.entry').forEach( e => {
      if (e !== entry) e.classList.remove('show-body')      
    })
    const title = entry.querySelector('p').textContent
    entry.querySelector('.entry-body-c').innerHTML = articulos[title]?.body
    entry.classList.toggle('show-body')
  }   

})
