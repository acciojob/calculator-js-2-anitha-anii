
  let buttons = document.querySelectorAll('button');
  let display = document.getElementById('display');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      if (this.innerHTML === '=') {
        display.innerText = eval(display.innerText);
      } else if (this.innerHTML === 'C') {
        display.innerText = '';
      } else {
        display.innerText += this.innerHTML;
      }
    });
  }


