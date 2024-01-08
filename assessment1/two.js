function one(event){
    event.preventDefault()
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let mail = document.getElementById("mail");
    let numb = document.getElementById("numb");
    let radi = document.getElementById("radi");
    let raj = document.getElementById("raj");
    let date = document.getElementById("date");
    let add = document.getElementById("add");
    let num = document.getElementById("num");
    let abu = document.getElementById("abu");
    let a = document.getElementById('a');
    let qual = document.getElementById("qual")
    let pass = document.getElementById("pass")
    let button = document.getElementById("button").style.backgroundColor="green"
    // Regex
    var fnameRegex = /^[a-zA-Z]{3,6}$/;
    var numRegex = /^\d+$/;


    if(fname.value == ""){
        alert("Please enter first name")
        fname.focus();
    }

    else if(lname.value == ""){
        alert("Please enter last name")
        lname.focus()
    }
    else if(mail.value == ""){
        alert("Please enter mail address")
        mail.focus()
    }
    else if(numb.value == ""){
        alert("Please enter area pin")
        numb.focus()
    }
    else if(radi.value == ""){
        alert("Please select gender")
        radi.focus()
    }
    else if(date.value == ""){
        alert("Please select date")
        date.focus()
    }
    else if(add.value == ""){
        alert("Please enter address")
        add.focus()
    }
    else if(num.value == ""){
        alert("Please enter mobile number")
        num.focus()
    }
    else if(abu.value == ""){
        alert("Please enter city name")
        abu.focus()
    }
    else if(a.value == ""){
        alert("please select specialization")
        a.focus()
    }
    else if(raj.value == ""){
        alert("Please enter state")
        raj.focus()
    }
    else if(pass.value == ""){
        alert("Please enter first name")
        pass.focus()
    }

    else if(qual.value == ""){
        alert("Please enter qualification")
        qual.focus()
    }

    else{
        if (!(fnameRegex.test(fname.value))) {
            alert("First name should be alphabets and length should be between 3 to 6")
            fname.focus()
        }
        if (!(numRegex.test(numb.value))) {
            alert("Phone number should contain only numbers")
            numb.focus()
        } 
    }
   
}