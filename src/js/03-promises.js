// Import Notification library
import Notiflix from 'notiflix';

// Form query selector
const formRef = document.querySelector('.form');

// Form event listener
formRef.addEventListener('submit', event => {
  event.preventDefault();

  let timeDelay = Number(event.target[0].value);
  // Iteration over amount
  for (i = 1; i <= event.target[2].value; i += 1) {
    const promise = createPromise(i, timeDelay);
    promise
      .then(value => Notiflix.Notify.success(value))
      .catch(value => Notiflix.Notify.failure(value));
    timeDelay += Number(event.target[1].value);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
