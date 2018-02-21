
document.getElementById("welcome").style.display = "block"; 

document.getElementById("ct-sending").style.display = "none"; 

document.getElementById("ct-sent").style.display = "none";

function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function openURL(event, link) {
    location.href = link;
}

function initMail() {
    var name = document.getElementById('ct-name').value;
    var email = document.getElementById('ct-email').value;
    var subject = document.getElementById('ct-subject').value;
    var message = document.getElementById('ct-message').value;

    document.getElementById("ct-form").style.display = "none";

    if(name == "" || email == ""){
        alert('Please enter both name and email (mandatory * fields).');
    }else{
        document.getElementById("ct-sending").style.display = "block";
        emailjs.send("gmail", "avenkit_services",
            {"name":name,"email":email,"subject":subject,"message":message})
        .then(function(response) {
            document.getElementById("ct-sending").style.display = "none";
            document.getElementById("ct-sent").style.display = "block";
        }, function(err) {
            alert('Error - '+ err);
        });
    }
}