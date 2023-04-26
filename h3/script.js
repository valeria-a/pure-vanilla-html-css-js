function formSubmitHandler(event) {
            
    event.preventDefault();

    const mainSection = document.getElementById('main-section')

    // Check whether there is a need to add a section
    let productsSection = document.getElementById('products')
    let sectionHeader = document.getElementById('header-p')

    if (productsSection === null) {

        // Add header
        sectionHeader = document.createElement('p')
        sectionHeader.setAttribute('class', 'text-start')
        sectionHeader.setAttribute('id', 'header-p')
        sectionHeader.innerText = 'Added items:'
        mainSection.appendChild(sectionHeader)

        //Add products section
        productsSection = document.createElement('ul')
        productsSection.setAttribute('id', 'products')
        productsSection.setAttribute('class', 'round list-group')
        mainSection.appendChild(productsSection)
    }

    let formData = new FormData(event.target)
    formData = Object.fromEntries(formData)
    const productName = formData.product
    const qty = formData.qty


    // Create li
    const li = document.createElement('li')
    li.setAttribute('class', 'list-group-item')
    productsSection.appendChild(li)

    // Hstack
    const hstack = document.createElement('div')
    hstack.setAttribute('class', 'hstack gap-3')
    li.appendChild(hstack)

    //Product name
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'text-start w-100')
    productDiv.innerText = productName
    hstack.appendChild(productDiv)

    // Qty
    const qtyStack = document.createElement('div')
    qtyStack.setAttribute('class', 'hstack')
    hstack.appendChild(qtyStack)

    const minusButton = document.createElement('button')
    minusButton.setAttribute('class', 'btn btn-sm btn-secondary p-1 badge')
    minusButton.addEventListener('click', () => {
        const newVal = Number(qtyDiv.innerText) - 1
        if (newVal === 1) {
            minusButton.setAttribute('disabled', false)
        }
        qtyDiv.innerText = newVal
    })
    const minusIcon = document.createElement('i')
    minusIcon.setAttribute('class', 'fa-solid fa-minus')
    qtyStack.appendChild(minusButton)
    minusButton.appendChild(minusIcon)

    const qtyDiv = document.createElement('div')
    qtyDiv.setAttribute('class', 'p-2')
    qtyDiv.innerText = qty
    qtyStack.appendChild(qtyDiv)

    const plusButton = document.createElement('button')
    plusButton.setAttribute('class', 'btn btn-sm btn-secondary p-1 badge')
    plusButton.addEventListener('click', () => {
        const newVal = Number(qtyDiv.innerText) + 1
        if (newVal === 2) {
            minusButton.removeAttribute('disabled')
        }
        qtyDiv.innerText = newVal
    })
    const plusIcon = document.createElement('i')
    plusIcon.setAttribute('class', 'fa-solid fa-plus')
    qtyStack.appendChild(plusButton)
    plusButton.appendChild(plusIcon)

    const vr = document.createElement('div')
    vr.setAttribute('class', 'vr')
    hstack.appendChild(vr)

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'btn btn-danger p-1 badge')
    deleteButton.addEventListener('click', () => {
        productsSection.removeChild(li)
        if (productsSection.childElementCount === 0) {
            mainSection.removeChild(productsSection)
            mainSection.removeChild(sectionHeader)
        }
    })
    const deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'fa-solid fa-trash')
    hstack.appendChild(deleteButton)
    deleteButton.appendChild(deleteIcon)


    event.target.reset()
}