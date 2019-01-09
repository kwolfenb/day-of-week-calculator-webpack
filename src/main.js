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
    let totalDays = inputDate.calculateDays();
    let result = inputDate.dayOfWeek(totalDays);
    $(".result").text(result);


  });
});