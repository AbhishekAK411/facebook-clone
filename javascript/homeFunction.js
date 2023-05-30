window.onload = () =>{

    let facebook_currentUser = JSON.parse(localStorage.getItem("facebook_current_user"));

    if(!!facebook_currentUser){

    } else {
        window.location.href = `./login.html`;
    }
}