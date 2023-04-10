document.addEventListener('DOMContentLoaded', () => {
  // const numberField = document.querySelector('.numberField');
  // const componentField = document.querySelector('.componentField');
  const btnCntr = document.querySelector('.button-cntr');
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

  function keyBoardHighlightFunc(className) {
    //componentField
    btnCntr.querySelector(`.${className}`).style.backgroundColor = '#f09e3c'
    setTimeout(() => {
      //componenField
      btnCntr.querySelector(`.${className}`).removeAttribute('style');
    }, 110);
  }

  function keyBoardCompSelect(compClassName) {
    componentSelectFunc(compClassName, btnCntr.querySelector(`.${compClassName}`).innerText);
    keyBoardHighlightFunc(compClassName);
  }

  function componentSelectFunc(className, type) {
    componentValue = className;
    calcuDispTextFunc(type);
    componentSelected = true;
    firstValueSel = false;
  };

  function backspaceFunc() {
    if(firstValueSel === true) {
    firstValue = firstValue.slice(0, firstValue.length - 1);
    calcuDispTextFunc(firstValue);
    } else {
      secondValue = secondValue.slice(0, secondValue.length - 1);
      calcuDispTextFunc(secondValue);
    }
  }

  function sumValueFunc(firstValueArg, secondValueArg) {
    let sum = 0;
    if (componentValue === 'add') {
      sum = parseFloat(firstValueArg) + parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    } else if (componentValue === 'minus') {
      sum = parseFloat(firstValueArg) - parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    } else if (componentValue === 'slash') {
      sum = parseFloat(firstValueArg) / parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    } else if (componentValue === 'multiply') {
      sum = parseFloat(firstValueArg) * parseFloat(secondValueArg);
      calcuDispTextFunc(sum);
    }
  };

  //eventListener will register when clicked with mouse
  //numberField
  btnCntr.addEventListener('click', (e) => {
    let target = e.target;
    let numberValue = target.innerHTML;
    // console.log(target)
    if (target.tagName === 'BUTTON' && componentSelected === false) {
      firstValue = firstValue + numberValue;
      calcuDispTextFunc(firstValue);
      firstValueSel = true;
    } else if (componentSelected === true) {
      secondValue = secondValue + numberValue;
      calcuDispTextFunc(secondValue);
      secondValueSel = true;
    }

    if (target.innerText === 'CLR') {
      firstValue = '';
      firstValueSel = false;
      secondValue = '';
      secondValueSel = false;
      componentValue = '';
      componentSelected = false;
      calcuDisplay.innerText = '';
    }
    if(target.className === 'backspace') {
      if(firstValueSel === true) {
        backspaceFunc();
      } else {
        backspaceFunc();
      }
    }else if (target.className === 'add' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    } else if (target.className === 'minus' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    } else if (target.className === 'slash' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    } else if (target.className === 'multiply' && componentSelected === false) {
      componentSelectFunc(target.className, target.innerText);
    }
    else if (target.className === 'sum' && componentSelected === true) {
      sumValueFunc(firstValue, secondValue);
    }

  });

  body.addEventListener('keyup', (e) => {
    
    let pElements = btnCntr.querySelectorAll('button');  
    console.info(`${e.key}: ${e.code}`);
    if (componentSelected === false || firstValue === 0) {
      firstValueSel = true;
      for (let i = 0; i < pElements.length; i++) {
        let pElement = pElements[i];
        let pElementTextCode = `${pElement.innerText}`;
        if (pElementTextCode === e.key) {
          firstValue = firstValue + pElement.innerText;
          calcuDispTextFunc(firstValue);
          pElement.style.backgroundColor = '#f09e3c';
          setTimeout(() => {
            pElement.removeAttribute('style');
          }, 100);
          break;
        }
      }
    } else {
      console.info(`${e.key}: ${e.code}`);
      for (let i = 0; i < pElements.length; i++) {
        let pElement = pElements[i];
        let pElementTextCode = `${pElement.innerText}`;
        if (pElementTextCode === e.key) {
          secondValue = secondValue + pElement.innerText;
          calcuDispTextFunc(secondValue)
          pElement.style.backgroundColor = '#f09e3c';
          setTimeout(() => {
            pElement.removeAttribute('style');
          }, 100);
          break;
        }
      }
    }

    if(e.key === '+') {
        keyBoardCompSelect('add');
        console.log(e.key)
    } else if(e.key === '-') {
        keyBoardCompSelect('minus');
    } else if(e.key === '*') {
      keyBoardCompSelect('multiply');
    } else if(e.key === '/') {
      keyBoardCompSelect('slash');
    } else if(e.key === 'Backspace') {
      if(firstValueSel === true) {
        keyBoardHighlightFunc('backspace');
        backspaceFunc();
      } else {
        keyBoardHighlightFunc('backspace');
        backspaceFunc();
      }
    } else if(e.key === '=' || e.key === 'Enter') {
      sumValueFunc(firstValue, secondValue)
      console.log(firstValue + secondValue + componentValue)
    }
  });

  // componentField.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target.innerText === 'CLR') {
  //     firstValue = '';
  //     firstValueSel = false;
  //     secondValue = '';
  //     secondValueSel = false;
  //     componentValue = '';
  //     componentSelected = false;
  //     calcuDisplay.innerText = '';
  //   }
  //   if(target.className === 'backspace') {
  //     if(firstValueSel === true) {
  //       backspaceFunc();
  //     } else {
  //       backspaceFunc();
  //     }
  //   }else if (target.className === 'add' && componentSelected === false) {
  //     componentSelectFunc(target.className, target.innerText);
  //   } else if (target.className === 'minus' && componentSelected === false) {
  //     componentSelectFunc(target.className, target.innerText);
  //   } else if (target.className === 'slash' && componentSelected === false) {
  //     componentSelectFunc(target.className, target.innerText);
  //   } else if (target.className === 'multiply' && componentSelected === false) {
  //     componentSelectFunc(target.className, target.innerText);
  //   }
  //   else if (target.className === 'sum' && componentSelected === true) {
  //     sumValueFunc(firstValue, secondValue);
  //   }
  // });


});