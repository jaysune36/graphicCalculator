document.addEventListener('DOMContentLoaded', () => {
  const numberField = document.querySelector('.numberField');
  const componentField = document.querySelector('.componentField');
  const calcuDisplay = document.querySelector('.calcuDisp input');
  calcuDisplay.value = 0;
  let firstValue = '';
  let firstValueSel = false;
  let secondValue = '';
  let secondValueSel = false;
  let componentValue = '';
  let componentSelected = false;

  numberField.addEventListener('click', (e) => {
    let target = e.target;
    let numberValue = target.innerHTML;
    if (target.tagName === 'P' && componentSelected === false) {
      firstValue = firstValue + numberValue;
      calcuDisplay.value = firstValue;
      firstValueSel = true;
    } else if (componentSelected === true) {
      secondValue = secondValue + numberValue;
      calcuDisplay.value = secondValue;
      secondValueSel = true;
    }
  });

  componentField.addEventListener('click', (e) => {
    let target = e.target;
    let sum = 0;
    if (target.innerText === 'CLR') {
      firstValue = '';
      firstValueSel = false;
      secondValue = '';
      secondValueSel = false;
      componentValue = '';
      componentSelected = false;
      calcuDisplay.value = ''
    }
    if (target.innerText === '+' && componentSelected === false) {
      componentValue = 'addition';
      calcuDisplay.value = ''
      componentSelected = true;
    } else if (target.innerText === '-' && componentSelected === false) {
      componentValue = 'subtraction';
      calcuDisplay.value = ''
      componentSelected = true;
    } else if (target.innerText === '/' && componentSelected === false) {
      componentValue = 'divide';
      calcuDisplay.value = ''
      componentSelected = true;
    } else if (target.innerText === '*' && componentSelected === false) {
      componentValue = 'multiply';
      calcuDisplay.value = ''
      componentSelected = true;
    }
    else if (target.className === 'sum' && componentSelected === true) {
      if (componentValue === 'addition') {
        sum = parseFloat(firstValue) + parseFloat(secondValue);
        calcuDisplay.value = sum;
      } else if (componentValue === 'subtraction') {
        sum = parseFloat(firstValue) - parseFloat(secondValue);
        calcuDisplay.value = sum;
      } else if (componentValue === 'divide') {
        sum = parseFloat(firstValue) / parseFloat(secondValue);
        calcuDisplay.value = sum;
      } else if (componentValue === 'multiply') {
        sum = parseFloat(firstValue) * parseFloat(secondValue);
        calcuDisplay.value = sum;
      }
    }
  })


})