class DateClass {
  private timeZone: string;
  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }
  //methods
  getTime() {
    const d = new Date();
    return d.getTime();
  }

  getMonth() {
    return new Date().getMonth();
  }

  getCountry() {
    return this.timeZone;
  }
}

const dateObj = new DateClass("11 Dec 2023");
console.log(dateObj.getTime());
