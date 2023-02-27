document.addEventListener('DOMContentLoaded', () => {
  const numberField = document.querySelector('.numberField');
  const componentField = document.querySelector('.componentField');
  const calcuDisplay = document.querySelector('.calcuDisp p');
  const body = document.querySelector('body');
  calcuDisplay.value = '';
  let firstValue = '';
  let firstValueSel = false;
  let secondValue = '';
  let secondValueSel = false;
  let componentValue = '';
  let componentSelected = false;

  function calcuDispTextFunc(value) {
    calcuDisplay.innerText = value;
  };

  function keyBoardCompSelect(compClassName) {
    componentSelectFunc(compClassName, componentField.querySelector(`.${compClassName}`).innerText)
    componentField.querySelector(`.${compClassName}`).style.backgroundColor = '#f09e3c'
    setTimeout(() => {
      componentField.querySelector(`.${compClassName}`).removeAttribute('style');
    }, 110);
  }

  function componentSelectFunc(className, type) {
    componentValue = className;
    calcuDispTextFunc(type);
    componentSelected = true;
  };

  function sumValueFunc(firstValueArg, secondValueArg) {
    let sum = 0;
    if (componentValue === 'add') {
      sum = parseFloat(firstValueArg) + parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    } else if (componentValue === 'minus') {
      sum = parseFloat(firstValueArg) - parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    } else if (componentValue === 'divide') {
      sum = parseFloat(firstValueArg) / parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    } else if (componentValue === 'multiply') {
      sum = parseFloat(firstValueArg) * parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    }
  };

  //eventListener will register when clicked with mouse
  numberField.addEventListener('click', (e) => {
    let target = e.target;
    let numberValue = target.innerHTML;
    if (target.tagName === 'P' && componentSelected === false) {
      firstValue = firstValue + numberValue;
      calcuDispTextFunc(firstValue);
      firstValueSel = true;
    } else if (componentSelected === true) {
      secondValue = secondValue + numberValue;
      calcuDispTextFunc(secondValue);
      secondValueSel = true;
    }
  });

  body.addEventListener('keyup', (e) => {
    
    let pElements = numberField.querySelectorAll('p');  
    console.info(`${e.key}: ${e.code}`);

    // if(e.key === '+'){
    //   console.log(true)
    // }
    if (componentSelected === false || firstValue === 0) {
      for (let i = 0; i < pElements.length; i++) {
        let pElement = pElements[i];
        let pElementTextCode = `Digit${pElement.innerText}`;
        if (pElementTextCode === e.code) {
          firstValue = firstValue + pElement.innerText;
          calcuDispTextFunc(firstValue)
          pElement.style.backgroundColor = '#f09e3c';
          setTimeout(() => {
            pElement.removeAttribute('style');
          }, 100);
          break;
        }
      }
      console.log(`firstValue: ${firstValue}`);
    } else {
      for (let i = 0; i < pElements.length; i++) {
        let pElement = pElements[i];
        let pElementTextCode = `Digit${pElement.innerText}`;
        if (pElementTextCode === e.code) {
          secondValue = secondValue + pElement.innerText;
          calcuDispTextFunc(secondValue)
          pElement.style.backgroundColor = '#f09e3c';
          setTimeout(() => {
            pElement.removeAttribute('style');
          }, 100);
          break;
        }
      }
      console.log(`secondValue: ${secondValue}`);
    }

    if(e.key === '+') {
        keyBoardCompSelect('add');
    } else if(e.key === '-') {
        keyBoardCompSelect('minus');
    } else if(e.key === '*') {
      keyBoardCompSelect('multiply');
    } else if(e.key === '/') {
      keyBoardCompSelect('slash');
    } else if(e.key === '=' || e.key === 'Enter') {
      sumValueFunc(firstValue, secondValue)
    }
  });

  componentField.addEventListener('click', (e) => {
    let target = e.target;
    if (target.innerText === 'CLR') {
      firstValue = '';
      firstValueSel = false;
      secondValue = '';
      secondValueSel = false;
      componentValue = '';
      componentSelected = false;
      calcuDisplay.innerText = '';
    }
    if (target.className === 'add' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    } else if (target.className === 'minus' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    } else if (target.className === 'divide' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    } else if (target.className === 'multiply' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    }
    else if (target.className === 'sum' && componentSelected === true) {
      sumValueFunc(firstValue, secondValue);
    }
  });


});