function rollDice(){
    const numOfDie = document.getElementById("num_Dice").value;
    const textRes=document.getElementById("result-text");
    const imgRes=document.getElementById("result-img");
    const val=[];
    const img=[];

    for(let i=0;i<numOfDie;i++){
        let value=Math.floor(Math.random()*6)+1;
        val.push(value);
        img.push(`<img src=dice${value}.png alt="dice 1">`)
    }
    textRes.textContent=`Dice: ${val.join(', ')}`;
    imgRes.innerHTML=img.join(' ');
}