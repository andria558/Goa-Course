const html = document.getElementById('btnHtml');
const css = document.getElementById('btnCss');
const js = document.getElementById('btnJs');
const img = document.getElementById('img');


html.addEventListener('click', () => {

  img.src = 'html.jpeg'
})

css.addEventListener('click', () => {

  img.src = 'css.jpeg'
})

js.addEventListener('click', () => {

  img.src = 'js.jpeg'
})