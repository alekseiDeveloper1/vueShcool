<template>
  <div>
    <form class="number-form__first">
      <input class="number-input" name='number' min="2" max="5" placeholder='введите размер числа 2-3-4-5 разрядов' type="number" required>
      <input class="number-input" name='time' step="0.1" min="0.2" max="2" placeholder='введите время показа от 0.2 до 2 секунд' type="number" required>
      <button class="number-btn">
        start
      </button>
    </form>
    <form class="number-form__last hide">
      <input class="number-input" name='int' placeholder='введите число' type="number" required>
      <button class="number-btn">
        start
      </button>
    </form>
  </div>
</template>

<style>
  input {
    display: block;
    line-height: 2;
    width: 30%;
    margin: 20px auto;
  }
  button {
    background: rgb(0, 152, 253);
    padding: 10px 40px;
    border: none;
    border-radius: 10px;
    color: white;
  }
  button:hover {
    background: rgb(27, 164, 255);
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }

</style>