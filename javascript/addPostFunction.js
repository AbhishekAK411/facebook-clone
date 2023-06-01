function post_submit(event){
    event.preventDefault();
    let facebook_currentUser = JSON.parse(localStorage.getItem("facebook_current_user"));
    let facebook_userData = JSON.parse(localStorage.getItem("facebook_users"));

    let postImage = document.getElementById("post_image").value;
    let postDesc = document.getElementById("post_desc").value;

    if(!!facebook_currentUser){

        if(postImage && postDesc){

            let postObject = {
                postUsername : facebook_currentUser.username,
                image: postImage,
                desc: postDesc
            };

            for(let i=0;i<facebook_userData.length;i++){
                if(facebook_currentUser.email == facebook_userData[i].email){
                    if(facebook_userData[i].posts == undefined){
                        facebook_userData[i].posts = [postObject];
                    } else {
                        facebook_userData[i].posts.push(postObject);
                    }
                }
            }

            localStorage.setItem("facebook_users", JSON.stringify(facebook_userData));
            document.getElementById("post_image").value = "";
            document.getElementById("post_desc").value = "";
            alert("Post Added Successfully.");

        } else {
            alert("All fields are mandatory.");
        }

    } else {
        window.location.href = `./login.html`;
    }
}