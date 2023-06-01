let submitbutton=document.querySelector("#btn");

submitbutton.addEventListener("click",(e)=>
{
    let success=submission();
    if (success){
        // console.log("Successfully logged in")
    }
    else{
        e.preventDefault();
    }
    
})

function passwordcheck(password){

    let pass=password
    if (password.length<8 || password>15){
        document.getElementById("errforpassword").innerHTML="Length must be between 8 and 15 characters"
        return false
    }
    else
        return true
}

function submission(){
    // console.log("Clicked")
    let username=document.getElementById("username").value;
    username=username.trim();
    console.log("Username: " + username)
    let password=document.getElementById("password").value;
    password=="password"
    console.log("password: " + password)
    if (username=="" || password=="")
    {
        if(username==='' && password==='') {
            document.getElementById("errforusername").innerHTML="*required"
            document.getElementById("errforpassword").innerHTML="*required"
            return false;
        }
        else if (username==="")
        {
            document.getElementById("errforusername").innerHTML="*required"    
            document.getElementById("errforpassword").innerHTML=""
            return false;
        }
        else if(password==="")
        {
            document.getElementById("errforusername").innerHTML=""
            document.getElementById("errforpassword").innerHTML="*required"    
            return false;
        }
        
    }
    else{
        document.getElementById("errforusername").innerHTML=""
        if (passwordcheck(password)){
            document.getElementById("errforpassword").innerHTML=""
            return true
        }
        // document.getElementById("errforpassword").innerHTML=""
        return false
    }
}