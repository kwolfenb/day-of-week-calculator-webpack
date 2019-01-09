export function Day(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  

  Day.prototype.isLeapYear = function(y)
  {
      if (y % 400 == 0) {
        return true;
      } 
      else if(y % 100 == 0) {
        return false;
      }
      else if (y % 4 ==0) {
        return true;
      }
      else {
        return false;
      } 
    
  }

  Day.prototype.dayOfWeek = function(daysTotal) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=daysTotal % 7; 
    let dayOfWeek = days[day];
    return dayOfWeek;
  }

  Day.prototype.calculateDays = function()
  {
    const nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daysTotal = 0;

    for(let y = 1; y < this.year; y++) {
      if(this.isLeapYear(y)==true) {
        daysTotal += 366;
      }
      else if(this.isLeapYear(y)==false) {
        daysTotal += 365;
      }
    }
    for(let m = 0; m < this.month -1; m++) {
      if (this.isLeapYear(this.year)==true) {
        daysTotal += leapYear[m];
      }
      else if (this.isLeapYear(this.year)==false) {
        daysTotal += nonLeapYear[m];
      }
    }

    for(let d = 0; d < this.day; d++) {
      daysTotal += 1;

      }
    
    return daysTotal;
  }



}