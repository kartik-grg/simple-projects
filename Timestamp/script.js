
function showTime(){
    const timeHolder=document.getElementById("time");
    const dayHolder=document.getElementById("day");
    const weekdayHolder=document.getElementById("weekday");
    const date=new Date();
    let hrs = date.getHours()>12 ? (date.getHours()%12).toString().padStart(2,0) : (date.getHours().toString().padStart(2,0));
    if(hrs=="00"){
        hrs="12";
    }
    let min = date.getMinutes().toString().padStart(2,0);
    let sec = date.getSeconds().toString().padStart(2,0);
    let meridian = date.getHours()<12 ? "AM" : "PM";
    let timeStr = `${hrs} : ${min} : ${sec} ${meridian}`;

    const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day=date.getDate().toString().padStart(2,0);
    let month=(date.getMonth()+1).toString().padStart(2,0);
    let year=date.getFullYear().toString();
    let dayStr=`${day}-${month}-${year} `;

    timeHolder.textContent=timeStr;
    dayHolder.textContent=dayStr;
    weekdayHolder.textContent=`(${days[date.getDay()]})`;
}
showTime();
setInterval(showTime, 1000);