document.addEventListener('DOMContentLoaded', () => {
  const numberField = document.querySelector('.numberField');
  const componentField = document.querySelector('.componentField');
  const calcuDisplay = document.querySelector('.calcuDisp input');
  calcuDisplay.value = '';
  let firstValue = '';
  let firstValueSel = false;
  let secondValue = '';
  let secondValueSel = false;
  let componentValue = '';
  let componentSelected = false;

  function calcuDispTextFunc(value) {
    calcuDisplay.value = value;
  };

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

  //eventlistener will register when clicked with keyboard
  calcuDisplay.addEventListener('keyup', (e)=> {
    let pElements = numberField.querySelectorAll('p');
    let pComponents = componentField.querySelectorAll('p');
    
    for(let i=0; i<pElements.length;i++) {
      let pElement = pElements[i];
      let pElementTextCode = `Digit${pElement.innerText}`;
      if(pElementTextCode === e.code) {
        pElement.style.backgroundColor = '#f09e3c';
        setTimeout(() => {
          pElement.removeAttribute('style');
        }, 100);
        break;
      }
    }
    console.log(e.code.toLowerCase());
    for(let i=0; i<pComponents.length;i++) {
      let pComponent = pComponents[i];
      let pComponentCode = pComponent.className;
      if(pComponentCode === 'add') {
        pComponentCode = 'shiftright'
        console.log(pComponentCode)
      } else if(pComponentCode = 'multiply') {
        pComponentCode = 'shiftleft'
      }
      if(pComponentCode === e.code.toLowerCase()) {
        pComponent.style.backgroundColor = '#f09e3c'
        setTimeout(() => {
          pComponent.removeAttribute('style');
        }, 110);
      }
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
      calcuDisplay.value = '';
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


})