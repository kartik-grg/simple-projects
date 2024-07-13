let expr="";
let result=0;
let lastChar=null;
let handledEqual=false;
const preRes=document.getElementById("preRes")
const res=document.getElementById("res")


function append(ch){
    lastChar=ch;
    expr += String(lastChar);
    preRes.textContent=expr;
    if(typeof lastChar != 'number'){
        res.textContent=null;
    }
    else{
        result=eval(expr);
        res.textContent=result;
    }
}

function handleAC(){
    expr="";
    result="";
    lastChar=null;
    preRes.textContent=expr;
    res.textContent=result;
}1

function handleClear(){
    expr=expr.substring(0,expr.length-1);
    preRes.textContent=expr;
    if(expr[expr.length-1] == '+' || expr[expr.length-1] == '-' || expr[expr.length-1] == '*'|| expr[expr.length-1] == '/'){
        res.textContent=null;
    }
    else{
        result=eval(expr);
        res.textContent=result;
    }
}

function handleEqualTo(){
    if (typeof lastChar != 'number'){
        res.textContent="Error";
        return;
    }
    preRes.textContent=result;
    expr=result;
    res.textContent=null;
    handledEqual=true;
}

