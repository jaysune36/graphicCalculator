document.addEventListener('DOMContentLoaded', () => {
  const numberField = document.querySelector('.numberField');
  const componentField = document.querySelector('.componentField');
  const answerField = document.querySelector('.answerField');
  let firstValue = null;
  let firstValueSel = false;
  let secondValue = null;
  let secondValueSel = false;
  let componentValue = '';
  let componentSelected = false;

  numberField.addEventListener('click', (e) => {
    let target = e.target;
    let numberValue = target.innerHTML;
    if (target.tagName === 'P' && firstValue === null) {
      firstValue = parseFloat(numberValue);
      firstValueSel = true;
    } else if (firstValueSel === true && componentSelected === true && secondValueSel === false) {
      secondValue = parseFloat(numberValue);
      secondValueSel = true;
    }
  });

  componentField.addEventListener('click', (e) => {
    let target = e.target;
    let sum = 0;
    if (target.innerText === '+' && componentSelected === false) {
      componentValue = 'addition';
      componentSelected = true;
    } else if (target.innerText === '-' && componentSelected === false) {
      componentValue = 'subtraction';
      componentSelected = true;
    } else if (target.innerText === '/' && componentSelected === false) {
      componentValue = 'divide';
      componentSelected = true;
    } else if (target.innerText === '*' && componentSelected === false) {
      componentValue = 'multiply';
      componentSelected = true;
    }
    else if (target.className === 'sum' && componentSelected === true) {
      if (componentValue === 'addition') {
        sum = firstValue + secondValue;
        console.log(`The answer is: ${sum}`);
      } else if (componentValue === 'subtraction') {
        sum = firstValue - secondValue;
        console.log(`The answer is: ${sum}`);
      } else if (componentValue === 'divide') {
        sum = firstValue / secondValue;
        console.log(`The answer is: ${sum}`);
      } else if (componentValue === 'multiply') {
        sum = firstValue * secondValue;
        console.log(`The answer is: ${sum}`);
      }
    }
  })


})