import { measure, once } from "helpful-decorators";

class DateClass3 {
  private timeZone: string;
  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  @once
  getTime() {
    const d = new Date();
    console.log(`hi from getTime`);
    return d.getTime();
  }

  @measure
  reallyComplex() {
    let i = -30000;
    for (let j = 0; j < 1_000_000_000; j++) {
      i += 1;
    }
    return i;
  }
}

const dateObject = new DateClass3("IST");
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();

dateObject.reallyComplex();
