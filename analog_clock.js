document.querySelector(".save_alarm_btn").addEventListener("click", setalarmbtn);
function setalarmbtn() {
    alarmtimeset = document.getElementById("alam_timer_set").value;
    alarmdateset = document.getElementById("alam_date_set").value;
    localStorage.setItem("get_time", alarmtimeset);
    localStorage.setItem("get_date", alarmdateset);
}
document.querySelector(".clear_storagebtn").addEventListener("click", clearalarm);
function clearalarm() {
    localStorage.clear();
}
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let soundbar = document.querySelector('.soundbar');
setInterval(() => {
    let mydate = new Date();
    let myhour = mydate.getHours();
    let myminutes = mydate.getMinutes();
    let myseconds = mydate.getSeconds();
    let ampm = "";
    if (myhour >= 12) {
        ampm = "pm"
    }
    else {
        ampm = "am"
    };
    if (myhour > 12) {
        myhour = myhour - 12;
    };
    function pad(str) {
        var newstr = str + "";
        if (newstr.length < 2) {
            return "0" + newstr
        }
        else {
            return newstr
        }
    }
    let completeTime = `${pad(myhour)} : ${pad(myminutes)} : ${pad(myseconds)} - ${ampm}`
    document.querySelector(".virtual_timer").innerText = completeTime;
    let momentformatedayfull = moment(mydate).format('ddd');
    let momentformatemonthyear = moment(mydate).format("MMM Do YY");
    let compeleteyearformate = `${momentformatedayfull} : ${momentformatemonthyear}`;
    document.querySelector(".virtual_date").innerText = compeleteyearformate;
    let secondsdeg = 6 * myseconds;
    let minutesdeg = 6 * myminutes;
    let hoursdeg = 30 * myhour + myminutes / 2
    seconds.style.transform = `rotate(${secondsdeg}deg)`;
    minutes.style.transform = `rotate(${minutesdeg}deg)`;
    hours.style.transform = `rotate(${hoursdeg}deg)`;
    let conpeletenewtime = `${pad(myhour)}:${pad(myminutes)}`;
    let get_alarm_time = localStorage.getItem("get_time");
    let get_alarm_date = localStorage.getItem("get_date");
    momentformatedayfull = moment().format('YYYY-MM-DD');
    if (mydate.getMinutes() == 0 || conpeletenewtime == get_alarm_time && momentformatedayfull == get_alarm_date) {
        soundbar.classList.add("start");
        var audio = new Audio('../../../Data_store_this_place/data/CLOCKChim_Grandfather clock hour 2 (ID 1570)_BSB.wav');
        audio.play();
    }
    else {
        soundbar.classList.remove("start");
    }
}, 1000);

