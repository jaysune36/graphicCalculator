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

  function componentTypeFunc(className) {
    componentValue = className;
    calcuDisplay.value = ''
    componentSelected = true;
  }

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
    if (target.className === 'add' && componentSelected === false) {
      componentTypeFunc(target.className)
    } else if (target.className === 'subtract' && componentSelected === false) {
      componentTypeFunc(target.className)
    } else if (target.className === 'divide' && componentSelected === false) {
      componentTypeFunc(target.className)
    } else if (target.className === 'multiply' && componentSelected === false) {
      componentTypeFunc(target.className)
    }
    else if (target.className === 'sum' && componentSelected === true) {
      if (componentValue === 'add') {
        sum = parseFloat(firstValue) + parseFloat(secondValue);
        calcuDisplay.value = sum;
      } else if (componentValue === 'subtract') {
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