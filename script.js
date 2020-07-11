let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body')
let btn = document.getElementById('button')

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}

btn.addEventListener('click', function() {
   let randomColor = Math.floor(Math.random()*16777215);
   body.style.background = '#' + randomColor
   css.textContent = body.style.background + ';';
})

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);