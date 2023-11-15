
let span = document.getElementById('span')
let text = document.getElementById('text')
let button = document.getElementById('man')
let div1 = document.getElementById('shower')
let div2 = document.getElementById('grower')
let para = document.getElementById('were')
let main = document.getElementById('main')

button.addEventListener( 'click' , ()=> {

    button.style.display = 'none'
    div1.style.display = 'flex'
    div2.style.display = 'flex'
})


document.body.addEventListener('keypress' , (e)=> {
    main.style.display = 'none'
    para.style.display = 'block'
    span.innerHTML = `<b> ${e.code} </b>`
     text.innerHTML = `<b> ${e.keyCode} </b>`
})
