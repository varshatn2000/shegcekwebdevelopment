function changecontent(){
    let x=document.getElementById("more");
    if(x.style.display=="block"){
        x.style.display="none";
    }
    else {
        x.style.display="block";
    }
}
function validation(){
    if (document.getElementById("name").value==""){
        document.getElementById("name-validate").style.display="block";
        return false;
    }
    if (document.getElementById("email").value==""){
        document.getElementById("email-validate").style.display="block";
        return false;
    }
    if (document.getElementById("password").value==""){
        document.getElementById("password-validate").style.display="block";
        return false;
    }
}