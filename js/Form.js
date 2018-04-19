function validateForm() {
    var fname = document.forms["form-text"]["fName"].value;
    var sname = document.forms["form-text"]["sName"].value;
    var textbox = document.forms["form-text"]["message"].value;
    var regex = new RegExp("[a-z]");
    var textbox = new RegExp("[A-Za-z0-9 .'?!,@$#-):;]");
    if(fname == "" && sname == "" && textbox == ""){
        alert("Invaild characters in first name area");
        return false;
    }
    else if(fname == "" && sname == "" && textbox == ""){
        alert("Pleas fill all areas");
        return false;
    }
    else if(fname == "" && sname == ""){
        alert("First name and last name must be filled out");
        return false;
    }
    else if(fname == "" && textbox == ""){
        alert("First name and message must be filled out");
        return false;
    }
    else if(textbox == "" && sname == ""){
        alert("Last name and message must be filled out");
        return false;
    }
    else if(textbox == "" ){
        alert("Message must be filled out");
        return false;
    }
    else if(sname == "" ){
        alert("Last name must be filled out");
        return false;
    }
    else if(fname == "" ){
        alert("First name must be filled out");
        return false;
    }
    else if(!regex.test(fname) && !regex.test(sname)){
        alert("Invaild characters in first name and last name areas");
        return false;
    }
    else if(!regex.test(fname) && !regex.test(sname) && !textbox.test(message)){
        alert("invaild characters in all areas");
        return false;
    }
    else if(!regex.test(fname) && !textbox.test(message)){
        alert("invaild characters in first name and message areas");
        return false;
    }
    else if(!regex.test(sname) && !textbox.test(message)){
        alert("invaild characters in second name and message areas");
        return false;
    }
    else if(!regex.test(sname)){
        alert("invaild characters in second name area");
        return false;
    }
    else if(!regex.test(message)){
        alert("invaild characters in message area");
        return false;
    }
    else if(!regex.test(fname)){
        alert("invaild characters in first name area");
        return false;
    }
    else alert("Form sent successfully")
}
