window.onload = () =>{

    let facebook_currentUser = JSON.parse(localStorage.getItem("facebook_current_user"));

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
        

    } else {
        window.location.href = `./login.html`;
    }
}