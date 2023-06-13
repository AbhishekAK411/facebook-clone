window.onload = () =>{

    let facebook_currentUser = JSON.parse(localStorage.getItem("facebook_current_user"));
    let facebook_userData = JSON.parse(localStorage.getItem("facebook_users"));

    if(!!facebook_currentUser){
        
        //left-category-username field
        let left_categoryUsername = document.getElementById("left-category-username");
        let categoryUsernameStructure = `<img src="https://cdn-icons-png.flaticon.com/512/44/44948.png" alt="" />
        <p>${facebook_currentUser.username}</p>`;
        left_categoryUsername.innerHTML = categoryUsernameStructure;

        //input field username
        let inputUsername = document.getElementById("replace-input-username");
        let inputUsernameStructure = `<input type="text" placeholder="What's on your mind, ${facebook_currentUser.username}?" />`;
        inputUsername.innerHTML = inputUsernameStructure;

        //replace-other-users
        let otherUsers = document.getElementById("replace-other-users");
        let otherUsersString = "";
        for(let i=0;i<facebook_userData.length;i++){
            if(facebook_currentUser.email !== facebook_userData[i].email){
                otherUsersString += `<div class="contact-select">
                <div class="contact-image">
                    <div class="contact-image-circle">
                        <img src="https://cdn-icons-png.flaticon.com/512/44/44948.png" alt="user-logo" />
                    </div>
                </div>
                <div class="contact-name">
                    <p>${facebook_userData[i].username}</p>
                </div>
            </div>`;
            }
        }
        otherUsers.innerHTML = otherUsersString;


        //replace navbar profile username

        let navProfileUsername = document.getElementById("replace-nav-profile-name");
        let navProfileUsernameStructure = `<p>${facebook_currentUser.username}</p>`;
        navProfileUsername.innerHTML = navProfileUsernameStructure;


    } else {
        window.location.href = `./login.html`;
    }
}



//navbar profile dropdown function
function nav_dropdown(){
    
    let navBox = document.getElementById("nav_box");

    if(navBox.style.display == "none"){
        navBox.style.display = "block";
    } else {
        navBox.style.display = "none";
    }

}

function main_addPostOrVid(event){

    let postBox = document.getElementById("post_box");
    let greyScreen = document.getElementById("grey_screen");

    if(postBox.style.display=="none"){
        postBox.style.display="block";
        document.body.style.overflow = "hidden";
        greyScreen.style.display="block";
        event.stopPropogation();
    }else{
        postBox.style.display="none";
        document.body.style.overflow = "auto";
        greyScreen.style.display="none";
    }

    let homeScreen = document.getElementById("home-screen");
    homeScreen.style.pointerEvents = (postBox.style.display == "none") ? "auto" : "none";
}

function logout(){
    localStorage.removeItem("facebook_current_user");
    window.location.reload();
}

function redirectToSettings(){
    window.location.href = `./settings.html`;
}