

refreshContact();

(function(){
    emailjs.init("user_TxCaAKYp5TE4Evs3vh6xh");
})();

function imgH_out() {
    document.getElementById("imgH").src="images/அ.png";
}

function imgH_over() {
    document.getElementById("imgH").src="images/a.png";
}

function openTab(event, tabID) {
    document.getElementById(tabID).click();
}

function openURL(event, link) {
    location.href = link;
}

function initMail() {
    console.log("1");
    refreshContact();
    var name = document.getElementById('ct-name').value;
    var email = document.getElementById('ct-email').value;
    var subject = document.getElementById('ct-subject').value;
    var message = document.getElementById('ct-message').value;
    var isValid = true;

    console.log("2");
    if(name == ""){
        document.getElementById("ct-err-name_mand").style.display = "block";
        isValid = false;
    }
    if(email == ""){
        document.getElementById("ct-err-email_mand").style.display = "block";
        isValid = false
    }else if(!isValidEmailAddress(email)){
        document.getElementById("ct-err-valid_email").style.display = "block";
        isValid = false;
    }

    console.log(isValid);

    if(isValid){
        document.getElementById("ct-form").style.display = "none";
        document.getElementById("ct-sending").style.display = "block";
        emailjs.send("gmail", "avenkit_services",
            {"name":name,"email":email,"subject":subject,"message":message})
        .then(function(response) {
            setTimeout(function () {
                document.getElementById("ct-sending").style.display = "none";
                document.getElementById("ct-sent").style.display = "block";
            }, 3500);
            
        }, function(err) {
            alert('Error - '+ err);
        });
    }
}

function refreshContact(){
    document.getElementById("ct-sending").style.display = "none"; 
    document.getElementById("ct-sent").style.display = "none";
    document.getElementById("ct-err-name_mand").style.display = "none";
    document.getElementById("ct-err-email_mand").style.display = "none";
    document.getElementById("ct-err-valid_email").style.display = "none";
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};