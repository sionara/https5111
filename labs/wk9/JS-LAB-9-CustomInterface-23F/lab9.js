//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
window.onload = applyPreferences;
function applyPreferences(){    
    //check for stored values
    console.log(document.cookie.length);
    if (document.cookie.length > 0) {
        //retrieve stored values
        var cookieArray = document.cookie.split(";");
        var userName = cookieArray[0].split("=")[1];
        var userColor = cookieArray[1].split("=")[1];
        //change welcome text to stored name
        var welcomeMsg = document.getElementById("newMsgBox");
        welcomeMsg.innerHTML = "Welcome, " + userName;
        //change BG colour to stored colour
        document.body.style.backgroundColor = userColor;
        //  document.body.style.background = 
        
        //delete functionality
        var deleteBtn = document.getElementById("btnDel");
        deleteBtn.onclick = deleteCookie;

        function deleteCookie(){
            document.cookie = "UserName="+userName+";max-age=0";
            document.cookie = "UserColor="+userColor+";max-age=0";
            location.reload();
        }
    }


		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
    var homeForm = document.forms.infoForm;
    homeForm.onsubmit = makeCookie;
    
    //onsubmit Function
    function makeCookie(cookieName, cookieValue, lifespan){    
        //get values from form
        var cookieName= document.getElementById("inName");
        var cookieValue = document.getElementById("inColor");
        var lifespan = 86400;
        document.cookie = "UserName="+cookieName.value+";max-age="+lifespan;
        document.cookie = "UserColor="+cookieValue.value+";max-age="+lifespan;
        var fullCookie = document.cookie;
        //console.log the form values
        console.log(fullCookie);
        
        //store values
    }    
}
    