document.getElementById("submit").onclick=function(){
    let username=document.getElementById("Username").value;
    let password=document.getElementById("Password").value;
    if(username!=="" && password!==""){
        if(username!=="user1" || password!=="passkey@1"){
            window.alert("Invalid Credentials!!! Try agian");
        }
        else{
            document.getElementById("message").innerHTML="Logged in successfully";
        }
    }
}