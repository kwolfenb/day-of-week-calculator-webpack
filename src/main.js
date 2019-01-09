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
});