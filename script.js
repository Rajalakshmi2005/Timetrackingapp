let val;

let timeframe;
let day;
let week;
let month;

let workdiv;
let daydata;
let monthdata;
let weekdata;

let monthval;

fetch(`data.json`)
  .then(function (repeat) {
    return repeat.json();
  })
  .then(function (val) {
    // console.log(val);
    // console.log(val.length);

    start(val);
    daydata = val;
    monthdata = val;
    weekdata = val;
    weekly();
  });

//   let box = document.createElement("div");
//   boxes.appendChild(box).id = "";

function start(val) {
  let start = document.querySelectorAll(".p");
  for (let i = 0; i < val.length; i++) {
    start[i].innerHTML += `${val[i].title}`;
  }
}

function weekly() {
  console.log("qwert");
  let datas = document.querySelectorAll(".curr");
  let prev = document.querySelectorAll(".pre");

  for (let b = 0; b < 6; b++) {
    timeframe = weekdata[b].timeframes;

    day = timeframe.daily;

    week = timeframe.weekly;

    month = timeframe.monthly;

    datas[b].innerText = `${week.current}hrs`;
    prev[b].innerText = `lastweek-${week.previous}hrs`;
  }
}
function daily() {
  let datas = document.querySelectorAll(".curr");
  let prev = document.querySelectorAll(".pre");
  for (let z = 0; z < 6; z++) {
    timeframe = daydata[z].timeframes;

    day = timeframe.daily;

    week = timeframe.weekly;

    month = timeframe.monthly;

    // workdiv.innerHTML = `${week.current}`;

    datas[z].innerText = `${day.current}hrs`;
    prev[z].innerText = `lastday-${day.previous}hrs`;
  }
}

function Monthly() {
  let datas = document.querySelectorAll(".curr");
  let prev = document.querySelectorAll(".pre");
  for (let y = 0; y < 6; y++) {
    timeframe = monthdata[y].timeframes;
    day = timeframe.daily;
    week = timeframe.weekly;
    month = timeframe.monthly;
    datas[y].innerText = `${month.current}hrs`;
    prev[y].innerText = `lastmonth-${month.previous}hrs`;
  }
}
