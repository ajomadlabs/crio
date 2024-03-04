// const incrementEl = document.getElementById('increment');
// const counterValueEl = document.getElementById('counterValue');
// const decrementEl = document.getElementById('decrement');

// incrementEl.addEventListener('click', () => {
//   let value = parseInt(counterValueEl.textContent);
//   counterValueEl.textContent = value + 1;
// });

// decrementEl.addEventListener('click', () => {
//   let value = parseInt(counterValueEl.textContent);
//   counterValueEl.textContent = value + 1;
// });

class CounterComponent {
  constructor(id) {
    this.containerEl = document.getElementById(id);
    this.count = 0;
  }
  increment() {
    this.count = this.count + 1;
    this.updateDisplay();
  }
  decrement() {
    this.count = this.count - 1;
    this.updateDisplay();
  }
  updateDisplay() {
    this.counterValue.textContent = this.count;
  }
  render() {
    this.containerEl.innerHTML = `
      <button type="button" id="increment${this.containerEl.id}">Increment</button>
      <span id="counterValue${this.containerEl.id}">${this.count}</span>
      <button type="button" id="decrement${this.containerEl.id}">Decrement</button>
    `;
    this.counterValue = document.querySelector(
      `#counterValue${this.containerEl.id}`
    );
    document
      .querySelector(`#increment${this.containerEl.id}`)
      .addEventListener('click', () => this.increment());
    document
      .querySelector(`#decrement${this.containerEl.id}`)
      .addEventListener('click', () => this.decrement());
    console.log('Container Element', this.containerEl);
  }
}
const counterOne = new CounterComponent('container-one');
counterOne.render();
const counterTwo = new CounterComponent('container-two');
counterTwo.render();
