function handleAddImage() {
    // <img />
    const img_elem = document.createElement('img')

    // <img src='static/frenchie.jpeg' />
    img_elem.src = "static/frenchie.jpeg"

    document.getElementById('images-box').appendChild(img_elem)
}