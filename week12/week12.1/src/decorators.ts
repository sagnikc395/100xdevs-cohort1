//language agnostic concept present in many programming languages.

//decorators :- add some functionality to a language.
class DateClass2 {
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

  expensiveOperation() {
    const startTime = new Date().getTime(); //unix time stamp
    let ctr = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      ctr++;
    }
    const endTime = new Date().getTime();
    console.log(`${ctr} ; Total time taken: ${endTime - startTime} ms `);
  }
}

const dateObj2 = new DateClass2("11 Dec 2023");
console.log(dateObj2.getTime());

console.log(new DateClass2("IST").expensiveOperation());
