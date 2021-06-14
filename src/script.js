
window.document.addEventListener('DOMContentLoaded', () => {
  const form    = document.querySelector('.number-form__first');
  const entForm = document.querySelector('.number-form__last');
  const body    = document.querySelector('div');

  bindPostData(entForm);
  bindPostData(form);

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('hide');
      const formData = new FormData(form);
      const dataForm = Object.fromEntries(formData.entries());
      getData(dataForm);
      form.reset();
    });
  }

  function getData(data) {
    if (data.time && data.number) {
      getNumberTime(data);
     } else {
      checkNumber(data.int, document.querySelector('.number').innerHTML);
    }
  }

  function getNumberTime(newData) {
    console.log(newData.number);
    const numberRan = Math.floor(Math.random() * 10 ** newData.number);
    const timeRan = newData.time * 1000;
    showNumber(numberRan, timeRan);
  }

  function showNumber(num, time) {
    const numberShow = document.createElement('div');
    numberShow.innerHTML = num;
    numberShow.classList.add('number');
    numberShow.style.fontSize = '50px';
    body.append(numberShow);

    setTimeout(() => {
      body.querySelector('.number').style.display = 'none';
      entForm.classList.remove('hide');
    }, time);
  }
  
  function checkNumber(firstNumber, lastNumber) {
    if (firstNumber == lastNumber) {
      body.innerHTML = 'Успех';
    } else {
      body.innerHTML = 'Неудача';
    }
    setTimeout(() => {
      window.location = '/';
    }, 2000);
  }
});