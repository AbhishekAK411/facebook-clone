function facebook_register(event){
    event.preventDefault();
    
    let f_userName = document.getElementById("facebook_username").value;
    let f_userEmail = document.getElementById("facebook_email").value;
    let f_userPassword = document.getElementById("facebook_password").value;;
    let f_userConfirmPassword = document.getElementById("facebook_confirmPassword").value;
    let f_userDateDay = document.getElementById("facebook_day").value;
    let f_userDateMonth = document.getElementById("facebook_month").value;
    let f_userDateYear = document.getElementById("facebook_year").value;
    let f_userBio = "";
    let f_userImage = "";
    let f_userPosts = [];
    let f_userVids = [];

    if(f_userName && f_userEmail && f_userPassword && f_userConfirmPassword && f_userDateDay && f_userDateMonth && f_userDateYear){
        if(f_userPassword.length >=8 && f_userConfirmPassword>=8){
            if(f_userPassword === f_userConfirmPassword){
                let facebook_userData = JSON.parse(localStorage.getItem("facebook_users")) || [];
                let flag = false;
                for(let i=0;i<facebook_userData.length;i++){
                    if(f_userEmail == facebook_userData[i].email){
                        flag = true;
                    }
                }
                if(!flag){
                    const dateOfBirth = new Date(f_userDateYear, f_userDateMonth-1, f_userDateDay);
                    let facebook_object = {
                        username: f_userName,
                        email: f_userEmail,
                        password: f_userPassword,
                        DOB: dateOfBirth,
                        bio: f_userBio,
                        ProfileImage: f_userImage,
                        posts: f_userPosts,
                        videos: f_userVids
                    };
                    facebook_userData.push(facebook_object);
                    localStorage.setItem("facebook_users", JSON.stringify(facebook_userData));
                    alert("Registration Successful");
                    document.getElementById("facebook_username").value = "";
                    document.getElementById("facebook_email").value = "";
                    document.getElementById("facebook_password").value = "";
                    document.getElementById("facebook_confirmPassword").value = "";
                    document.getElementById("facebook_day").value = "";
                    document.getElementById("facebook_month").value = "";
                    document.getElementById("facebook_year").value = "";
                } else {
                    alert("Email is already registered. Proceed To Login.");
                    window.location.href = `./home.html`;
                }
            }
        } else {
            alert("Password should be more than 8 characters.");
        }
    } else {
        alert("All fields are required.");
    }
}


function facebook_login(event){
    event.preventDefault();
    
    let f_loginUserEmail = document.getElementById("facebook_login_email").value;
    let f_loginPassword = document.getElementById("facebook_login_password").value;

    if(f_loginUserEmail && f_loginPassword){

        let flag=false;;
        let facebook_userData = JSON.parse(localStorage.getItem("facebook_users"));
        let facebook_current_user;

        for(let i=0;i<facebook_userData.length;i++){
            if(f_loginUserEmail === facebook_userData[i].email && f_loginPassword === facebook_userData[i].password){
                flag = true;
                facebook_current_user = facebook_userData[i];
            }
        }

        if(flag){
            localStorage.setItem("facebook_current_user", JSON.stringify(facebook_current_user));
            alert("Login successful.");
            window.location.href = `./home.html`;

        } else {
            alert("Please check your credentials.");
        }

    } else {
        alert("All fields are mandatory.");
    }

}


function redirectToRegister(){
    window.location.href = `./register.html`;
}


function redirectToLogin(){
    window.location.href = `./login.html`;
}