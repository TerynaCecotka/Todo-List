const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-button')
const listBox = document.querySelector('.list-box')
const completeTask = document.querySelector('complete-task')

const insertList = () => {
    const todo = document.createElement('div')
    todo.classList.add('list')

    const listText = document.createElement('p')
    listText.innerHTML = input.value

    const icons = document.createElement('div')
    icons.classList.add('icons')
    const checkIcon = document.createElement('div')
    checkIcon.classList.add('fa', 'fa-check')
    const trashIcon = document.createElement('div')
    trashIcon.classList.add('fa', 'fa-trash')

    icons.append(checkIcon, trashIcon)
    todo.append(listText, icons)
    listBox.prepend(todo)

    checkIcon.addEventListener('click', () => {
        checkIcon.remove()
        todo.style.backgroundColor = "rgba(144, 238, 144, 0.7)"
        todo = completeTask
    })

    trashIcon.addEventListener('click', () => {
        todo.remove()
    }) 
}

const addNewTodoList = () => {
    if (input.value.length > 0) {
        insertList()
        input.value = ""
    }
}

const inputKeyEnter = (event) => {
    if (event.key === 'Enter') {
    addNewTodoList()
    }
}

input.addEventListener('keydown', inputKeyEnter)
addBtn.addEventListener('click', addNewTodoList)