import {Day} from './weekday';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





$(document).ready(function() {
  $("#weekday").submit(function(event) {
    event.preventDefault();
    let day = parseInt($("input#day").val());
    let month = parseInt($("input#month").val());
    let year = parseInt($("input#year").val());
    let inputDate = new Day (day, month, year);
    if ((month==2 && day>29) || (month== 4 && day>30) || (month==6 && day>30) || (month==9 && day>30) ||(month==11 && day>30)) {
      $(".result").text("This is not a valid date");
    }
    else {

    
    let totalDays = inputDate.calculateDays();
    let result = inputDate.dayOfWeek(totalDays);
    $(".result").text(result);
    }

  });

    $("#birthday").submit(function(event) {
      event.preventDefault();
      let birthday = parseInt($("input#birthday").val());
      let birthmonth = parseInt($("input#birthmonth").val());
      let birthyear = parseInt($("input#birthyear").val());
      let inputDate = new Day (birthday, birthmonth, birthyear);
      let todaysDate = new Date();
      let dd = todaysDate.getDate();
      let mm = todaysDate.getMonth() +1;
      let yyyy = todaysDate.getFullYear();
      let today = new Day (dd, mm, yyyy);
      if ((birthmonth==2 && birthday>29) || (birthmonth== 4 && birthday>30) || (birthmonth==6 && birthday>30) || (birthmonth==9 && birthday>30) ||(birthmonth==11 && birthday>30)) {
        $(".result").text("This is not a valid date");
      }
      else {
      let totalDays = inputDate.calculateDays();
      let todaysDays = today.calculateDays();
      let ageInDays = todaysDays-totalDays;
      $(".result").text(`Your age in days is ${ ageInDays }`);
      }

  });
});