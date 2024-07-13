function generatePassword(){
    const length=document.getElementById("len").value;
    const abcd=document.getElementById("lower").checked;
    const ABCD=document.getElementById("upper").checked;
    const num=document.getElementById("number").checked;
    const sym=document.getElementById("symbol").checked;
    
    const abcdSt="abcdefghijklmnopqrstuvwxyz";
    const ABCDst="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numSt="1234567890";
    const symSt="!@#$%&*_+-=?";

    let charAvailable=(abcd?abcdSt:"");
    charAvailable+=(ABCD?ABCDst:"");
    charAvailable+=(num?numSt:"");
    charAvailable+=(sym?symSt:"");
    
    let password="";

    if(length<=0){
        window.alert("Length of the password must be atleast 1 characters long. Try again.")
        return;
    }
    if(charAvailable.length==0){
        window.alert("Choose at least one character type and try again.")
        return;
    }

    for(i=0;i<length;i++){
        const index=Math.floor(Math.random()*charAvailable.length);
        password+=charAvailable[index];
    }
    document.getElementById("result").innerHTML=`Generated Password : <b>${password}<b>`;
}