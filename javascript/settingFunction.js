window.onload = () =>{
    let facebook_currentUser = JSON.parse(localStorage.getItem("facebook_current_user"));

    if(facebook_currentUser){

    } else {
        window.location.href = `./login.html`;
    }
}


function settingDropdown(){
    let navBox = document.getElementById("nav_box");

    if(navBox.style.display == "none"){
        navBox.style.display = "block";
    } else {
        navBox.style.display = "none";
    }
}