class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate;
  }

  start() {
    setInterval(this.countDown.bind(this), 1000);
  }

  countDown() {
    const sec = 1000 * 60;
    const hour = sec * 60;
    const day = hour * 24;

    const deltaTime = this.targetDate - Date.now();
    const days = this.padInt(Math.floor(deltaTime / day));
    const hours = this.padInt(Math.floor((deltaTime % day) / hour));
    const mins = this.padInt(Math.floor((deltaTime % hour) / sec));
    const secs = this.padInt(Math.floor((deltaTime % sec) / 1000));

    return { days, hours, mins, secs };
  }

  padInt(value) {
    return String(value).padStart(2, "0");
  }
}

class CountdownTimerData extends CountdownTimer {
  constructor({ targetDate, selector }) {
    super(targetDate);
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('[data-value="days"');
    this.hoursRef = this.timerRef.querySelector('[data-value="hours"');
    this.minsRef = this.timerRef.querySelector('[data-value="mins"');
    this.secsRef = this.timerRef.querySelector('[data-value="secs"');
    this.timersStyle();
    this.countDown();
  }

  timersStyle() {
    this.timerRef.style.display = "flex";
    this.timerRef.style.flexWrap = "wrap";
    this.timerRef.style.justifyContent = "space-evenly";
    this.timerRef.style.fontSize = "30px";
    this.timerRef.style.fontFamily = "'Rubik', sans-serif";
  }

  countDown() {
    const { days, hours, mins, secs } = super.countDown();
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
}

const timer = new CountdownTimerData({
  targetDate: new Date("July 24, 2023").getTime(),
  selector: "#timer-1",
});
timer.start();