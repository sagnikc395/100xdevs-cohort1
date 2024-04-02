import { once } from "helpful-decorators";

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
}

const dateObject = new DateClass3("IST");
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();

