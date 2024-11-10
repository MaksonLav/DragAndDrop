// // const item = document.querySelectorAll('.item')
// // const placeholders = document.querySelectorAll('.placeholder')
// const ite = document.querySelectorAll('.ite')
// const it = document.querySelectorAll('.it')

// for(const item of items){
//     item.addEventListener('dragstart', dragstart)
//     item.addEventListener('dragend', dragend)
// }

// for(const ite of ite){
//     item.addEventListener('dragstart', dragstart)
//     item.addEventListener('dragend', dragend)
// }

//  for(const it of it){
//     item.addEventListener('dragstart', dragstart)
//     item.addEventListener('dragend', dragend)
// }

// console.log(placeholders)

// item.addEventListener('dragstart', dragstart)
// item.addEventListener('dragend', dragend)

// ite.addEventListener('dragstart', dragstart)
// ite.addEventListener('dragend', dragend)

// it.addEventListener('dragstart', dragstart)
// it.addEventListener('dragend', dragend)

// function dragstart(event){
//     event.target.classList.add('hold')
//     setTimeout(() => event.target.classList.add('hide'), 0)

// }

// function dragend(event){
// event.target.classList.remove('hold')
// event.target.classList.remove('hide')
// }
    
// for (const placeholder of placeholders){
//     placeholder.addEventListener('dragover', dragover)
//     placeholder.addEventListener('dragenter', dragenter)
//     placeholder.addEventListener('dragleave', dragleave)
//     placeholder.addEventListener('drop', dragdrop)
// }

// function dragover(event) {
//     event.preventDefault()
// }

// function dragenter(event) {
//     event.target.classList.add('hovered')
// }

// function dragleave(event) {
//     event.target.classList.remove('hovered')
// }

// function dragdrop(event) {
//     event.target.classList.remove('hovered')
//     event.target.append(item)
// }

// function dragdrop(event) {
//     event.target.classList.remove('hovered')
//     event.target.append(ite)
// }

// function dragdrop(event) {
//     event.target.classList.remove('hovered')
//     event.target.append(it)
// }

// const items = document.querySelectorAll('.item')
// const placeholders = document.querySelectorAll('.placeholder')

// for (const item of items) {
// item.addEventListener('dragstart', dragstart)
// item.addEventListener('dragent', dragend)
// }

// function dragstart(event){
//     event.target.classList.add('hold')
// }

// function dragend(event){
//     event.target.classList.remove('hold')
//     event.target.classList.remove('hide')
// }

// for (const placeholder of placeholders) {
//     placeholder.addEventListener('dragover', dragover)
//     placeholder.addEventListener('dragenter', dragenter)
//     placeholder.addEventListener('dragleave', dragleave)
//     placeholder.addEventListener('drop', dragdrop)
// }

// function dragover(event) {
//     event.preventDefault()
// }

// function dragenter(event) {
//     event.target.classList.add('hovered')
// }

// function dragleave(event) {
//     event.target.classList.remove('hovered')
// }

// function dragdrop(event) {
//     event.target.classList.remove('hovered')
//     event.target.append(event.target.parentNode.querySelector('.item'))
// }
const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

items.forEach(item => {
  item.addEventListener('dragstart', dragstart);
  item.addEventListener('dragend', dragend);
});

function dragstart(event) {
  event.dataTransfer.setData('text/plain', event.target.id); // Передаём информацию об id при перетаскивании в объект event.dataTransfer
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold');
  event.target.classList.remove('hide');
}

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});

function dragover(event) {
  event.preventDefault(); // Разрешаем drop
}

function dragenter(event) {
    if (!event.target.classList.contains('item')) {
        event.target.classList.add('hovered');
    }
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function dragdrop(event) {
  event.preventDefault(); // Отменяем стандартное поведение drop
  event.target.classList.remove('hovered');

  const draggedItemId = event.dataTransfer.getData('text/plain'); // Достаём id из объекта 
  const draggedItem = document.getElementById(draggedItemId); // Получаем объект по id

  if (!event.target.classList.contains('item')) { // Проверяем не является ли элемент item
    event.target.appendChild(draggedItem); // Вставляем элемент в конец списка дочерних элементов
    //event.target.insertBefore(draggedItem, event.target.firstChild); // Вставляем элемент в начало списка дочерних элементов
  }
}