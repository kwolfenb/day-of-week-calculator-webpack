import { Day } from '../src/weekday.js';
describe('Day', function() {
  
  it('should test if the correct year is returned', function() {
    let randomYear  = new Day(1,1,1998);
    expect(randomYear.year).toEqual(1998);
  });

  it('should test whether a Date is a non leapyear', function() {
    let nonLeapYear  = new Day(1,1,1999);
    expect(nonLeapYear.isLeapYear(1999)).toEqual(false);
  });

  it('should test whether a Date is a leapyear', function() {
    let leapYear  = new Day(1,1,2004);
    expect(leapYear.isLeapYear(2004)).toEqual(true);
  });

  it('should test whether a Date divisible by 100 is a non leapyear', function() {
    let nonLeapYear  = new Day(1,1,1900);
    expect(nonLeapYear.isLeapYear(1900)).toEqual(false);
  });

  it('should test if  a Date divisible by 400 is a LeapYear', function() {
    let leapYear  = new Day(1,1,2000);
    expect(leapYear.isLeapYear(2000)).toEqual(true);
  });

  it('should count days up to a given year', function() {
    let daysFromYear  = new Day(0,1,4);
    expect(daysFromYear.calculateDays()).toEqual(1095);
  });

  it('should add days up to month for leap year', function() {
    let monthAndYear  = new Day(0,5,4);
    expect(monthAndYear.calculateDays()).toEqual(1216);
  });
  it('should add days up to month for non leap year', function() {
    let monthAndYear  = new Day(0,3,5);
    expect(monthAndYear.calculateDays()).toEqual(1520);
  });

  it('should add days up to the input day', function() {
    let monthAndYear  = new Day(9,1,2019);
    expect(monthAndYear.calculateDays()).toEqual(737068);
  });

  it('should return day of week from the past', function() {
    let dayOfWeek  = new Day(18, 2, 1995);
    let days = dayOfWeek.calculateDays();
    console.log(dayOfWeek.dayOfWeek(days));
    expect(dayOfWeek.dayOfWeek(days)).toEqual("Saturday");
  });

  it('should return day of week in the Future', function() {
    let dayOfWeek  = new Day(4, 7, 2030);
    let days = dayOfWeek.calculateDays();
    console.log(dayOfWeek.dayOfWeek(days));
    expect(dayOfWeek.dayOfWeek(days)).toEqual("Thursday");
  });

  it ('should calculate the age in days based on birthday', function() {
    let birthDate = new Day (27,5,1990);
    let today = new Date();
    let todayDay = new Day(today.getDate(), today.getMonth(), today.getFullYear());
    let totalDays = birthDate.calculateDays();
    let todaysDays = todayDay.calculateDays();
    let ageInDays = todaysDays - totalDays;
    expect(ageInDays).toEqual(10454);
  });

  });