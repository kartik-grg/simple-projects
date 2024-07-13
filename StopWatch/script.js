let ms=0;
let sec=0;
let min=0;
let hrs=0;
const hrslabelTime=document.getElementById("hrsLabel");
const minlabelTime=document.getElementById("minLabel");
const seclabelTime=document.getElementById("secLabel");
const mslabelTime=document.getElementById("msLabel");
let isRunning=false;

function increment(){
    if(ms==99){
        if(sec==59){
            if(min==59){
                hrs++;
                min=0;
            }
            else{
                min++;
            }
            sec=0;
        }
        else{
            sec++;
        }
        ms=0;
    }
    else{
        ms++;
    }
    ms=ms.toString().padStart(2,0);
    sec=sec.toString().padStart(2,0);
    min=min.toString().padStart(2,0);
    hrs=hrs.toString().padStart(2,0);
    // let timeStr = `${hrs} : ${min} : ${sec} : ${ms}`;
    // labelTime.textContent=timeStr;
    hrslabelTime.textContent=hrs;
    minlabelTime.textContent=min;
    seclabelTime.textContent=sec;
    mslabelTime.textContent=ms;    
}

let myInterval;

function startShow(){
    if(!isRunning){
        increment();
        myInterval=setInterval(increment,10);
        isRunning=true;
    }
}
function stopShow(){
    clearInterval(myInterval);
    isRunning=false;
}

function resetShow(){
    if(isRunning){
        stopShow();
    }
    ms=sec=min=hrs=0;
    hrslabelTime.textContent="00";
    minlabelTime.textContent="00";
    seclabelTime.textContent="00";
    mslabelTime.textContent="00";

}






