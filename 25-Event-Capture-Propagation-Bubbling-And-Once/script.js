const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

divs.forEach(div => div.addEventListener('click', logText));

button.addEventListener('click', () => {
  console.log('click!!!')
}, {
  once: true
});

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation();
}
