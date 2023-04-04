let tillChristmas;
const CountDownTimer = (dt) => {
  let christmasIn = "";

  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  let dayT = days + "days ";
  let hourT = hours + "hrs ";
  let minT = minutes + "mins ";
  let secT = seconds + "secs";
  tillChristmas = `There are ${dayT} ${hourT} ${minT} ${secT} till christmas`;
  return tillChristmas;
};

CountDownTimer("12/25/2023 0:0 AM");
// console.log(tillChristmas);
module.exports = { tillChristmas };
