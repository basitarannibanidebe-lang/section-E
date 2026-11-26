import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function decrement() {
    setCount((currentCount) => Math.max(0, currentCount - 1));
  }

  return (
    <section
      className={`counter ${count > 0 ? 'counter--active' : 'counter--empty'}`}
      aria-label="Counter"
    >
      <p className="counter__eyebrow">Counter</p>
      <output className="counter__value" aria-live="polite">
        {count}
      </output>
      <p className="counter__status">
        {count === 0 ? 'no activity completed' : `Activities completed: ${count}`}
      </p>
      <div className="counter__controls">
        <button
          className="counter__button counter__button--secondary"
          type="button"
          onClick={decrement}
          aria-label="Decrease count"
        >
          −
        </button>
        <button
          className="counter__button counter__button--primary"
          type="button"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          +
        </button>
        <button
          className="counter__button counter__button--secondary"
          type="button"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
