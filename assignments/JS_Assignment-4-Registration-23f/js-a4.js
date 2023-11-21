window.onload = projectSignUp

function projectSignUp (){

  var ixdFormEle = document.forms.ixdForm;
  ixdFormEle.onsubmit = displayConfirm; 

  function displayConfirm(){
    var confirmMsg = document.getElementById("result");
    var header = document.getElementById("welcome");

    var formfname = ixdFormEle.f__fName;
    var fname = document.getElementById("result__Fname");

    var formlname = ixdFormEle.f__lName;
    var lname = document.getElementById("result__Lname");

    // regular expression variable to check humber id
    var checkId = /(n|N)\d{8}/;
    
    var formid = ixdFormEle.f__id;
    var id = document.getElementById("result__id")

    var formProgram = ixdFormEle.f__program;
    var Program = document.getElementById("result__program");

    var formDelivery = ixdFormEle.f__deliver;
    var delivery = document.getElementById("result__delivery");

    var formProject = ixdFormEle.f__project;
    var project = document.getElementById("result__project");
    
    if (formfname.value === ""){
      formfname.style.background = "red";
      formfname.focus();
      return false
    } else if (formlname.value === ""){
      formlname.style.background = "red";
      formlname.focus();
      return false
    }
// validating id with Regex
    if (!checkId.test(formid.value)){ 
      formid.style.background = "red";
      formid.focus(); 
      return false
    } else {
      id.innerHTML = formid.value;
    }

    if (formProgram.value === "X"){
      formProgram.style.background = "red";
      formProgram.focus();
      return false
    }else if (formDelivery.value === ""){
      document.getElementById("caption_deliver").style.background = "red";
      return false
    }else if (formProject.value === ""){
      document.getElementById("caption_project").style.background = "red";
      return false
    }

    header.style.display = "none";
    ixdFormEle.style.display = "none";
    confirmMsg.style.display = "block";

    fname.innerHTML = formfname.value;
    lname.innerHTML =formlname.value;
  
    if (formProgram.value === "CS"){
      Program.innerHTML = "Content Strategy";
    } else if (formProgram.value === "CT"){
      Program.innerHTML = "Creative Technologies";
    } else if (formProgram.value === "UX"){
      Program.innerHTML = "User Experience Design";
    } else if (formProgram.value === "WD")
      Program.innerHTML = "Web Development";

    delivery.innerHTML = formDelivery.value;
    project.innerHTML = formProject.value;
    return false
  }
}