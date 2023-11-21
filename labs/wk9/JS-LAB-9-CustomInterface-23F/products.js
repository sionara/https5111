//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = applyPreferences;
function applyPreferences(){    
    //check for stored values
    if (document.cookie.length >0) {
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
    }
}