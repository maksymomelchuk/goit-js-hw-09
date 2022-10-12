// Import calendar picker
import flatpickr from 'flatpickr';
// Import styles
import 'flatpickr/dist/flatpickr.min.css';
// Import Notiflix
import Notiflix from 'notiflix';

// Refs
const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

// Disable start button on default
refs.startBtn.disabled = true;

let remainingTime = 0;

// Calendar picker config
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // Raise alarm if picked time less than current time
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    // If time is OK, activate Start button and re-wright remainingTime variable
    refs.startBtn.disabled = false;
    remainingTime = selectedDates[0].getTime();
  },
};

// Event listener on Start button
refs.startBtn.addEventListener('click', () => {
  // Disable Start button on click
  refs.startBtn.disabled = true;
  // Set interval
  const timer = setInterval(() => {
    const t = remainingTime - Date.now();
    const values = convertMs(t);
    // Raise success message if timer is over
    if (Object.values(values).reduce((a, b) => a + b) === 0) {
      Notiflix.Notify.success('Wake up!');
      clearInterval(timer);
    }
    // Update interface if timer is running
    Object.entries(values).forEach(item => {
      document.querySelector(`[data-${item[0]}]`).textContent = addLeadingZero(
        item[1]
      );
    });
  }, 1000);
});

flatpickr(refs.datePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
