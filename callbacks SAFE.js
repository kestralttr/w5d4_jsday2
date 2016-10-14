class Clock {

  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let d = new Date();
    this.hours = d.getHours();
    this.mins = d.getMinutes();
    this.secs = d.getSeconds();
    // this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.mins}:${this.secs}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.secs += 1;
    this.printTime();
  }
}

const clock = new Clock();
