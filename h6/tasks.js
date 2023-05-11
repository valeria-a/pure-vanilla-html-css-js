const handleTaskSubmit = (event) => {

    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData.entries())

    console.log(data)

    const tasksList = document.getElementById('tasks')

    const newTask = document.createElement('li')
    newTask.setAttribute('class', 'form-check mb-3')

    const taskChk = document.createElement('input')
    taskChk.setAttribute('class', 'form-check-input')
    taskChk.setAttribute('type', 'checkbox')
    taskChk.setAttribute('id', 'task-chkbox-id')
    taskChk.onchange = () => {
        console.log(taskChk.checked)
        const result = confirm('Are you sure?')
        if (result) {
            newTask.remove()
        } else {
            taskChk.checked = false
        }
    }

    const taskLbl = document.createElement('label')
    taskLbl.setAttribute('class', 'form-check-label')
    taskChk.setAttribute('for', 'task-chkbox-id')
    taskLbl.innerText = `(${data.complete_by}) - ${data.title}`
    // taskLbl.innerText = "(" + data.complete_by + ") - " + data.title

    newTask.appendChild(taskChk)
    newTask.appendChild(taskLbl)
    tasksList.appendChild(newTask)



}