window.onload = function(){

	document.getElementById("jsGamePic").onclick = function(){
		console.log("abc")
	};

	document.getElementById("submit").onclick = function(){

		if (inputsPass() && emailOk()){
			submitMessage();
		}
	};

	document.addEventListener('click', function(e) {
	    e = e || window.event;

		var target = e.target || e.srcElement;

		if (target.nodeName === "IMG"){
		    var imgSrc = target.src;

		    document.getElementById("fullImg").src = imgSrc;
		    document.getElementById("imgBack").style.display = "block";
		}

	}, false);

	document.getElementById("imgBack").addEventListener("click", function(e){

		e = e || window.event;

		var target = e.target || e.srcElement;

		//if (target.nodeName !== "IMG"){
			document.getElementById("imgBack").style.display = "none";
		//}
	});
}

function inputsPass(){

	var allClear = true
	var ids = ["name","email", "subject", "message"];

	for (var i = 0; i < ids.length; i++){

		if (isEmpty(ids[i])){
			displayError(ids[i] + "err", "This field is required");
			allClear = false
		} else {
			hideError(ids[i] + "err");
		}
	}

	return allClear
}

function isEmpty(id){

	if (document.getElementById(id).value == ""){
		return true;
	}

	return false;
}

function displayError(id, msg){

	document.getElementById(id).style.display = "block";
	document.getElementById(id).textContent = msg;
}

function hideError(id){
	document.getElementById(id).style.display = "none";
}

function emailOk() {

	var email = document.getElementById("email").value
    var re = /\S+@\S+\.\S+/;

    if (re.test(email)){
    	return true;
    } else {
    	displayError("emailerr", "Seems like the entered email is not valid.");
    	return false;
    }
}