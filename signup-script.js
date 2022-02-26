document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});

function loginFun() {
    let box1 = document.querySelector(".pop-box1");
    box1.innerHTML = "";
    let box2 = document.querySelector(".pop-box2");
    box2.innerHTML = "";

    let img = document.createElement("img");
    img.src = "https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg";


    box2.innerHTML = `
    <div class="user-id user-data">
          <input type="email" name="" id="emailcheck" required=""/>
          <label>Email ID/Mobile Number</label>
        </div>
        <div class="user-id user-data">
          <input type="password" name="" id="passwordcheck" required=""/>
          <label>Password</label>
        </div>
        <button type='button' id="login-btn" onclick='checkLog()'>Login</button>
        <p id="forgot"><a href="#">Forgot Password?</a>
        </p>
        <hr>
        <p id="signup">New to Pepperfry? Register HereLogin</p>
        <hr>
        <div class="social">
          <div>OR Continue with</div>
          <div><img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt=""></div>
          <div><img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt=""></div>
        </div>
    `;
    box1.append(img);
}


let userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];

function userDataBase() {
    let name = document.querySelector("#name").value;
    let mobile = document.querySelector("#number").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    //console.log(name, mobile, email, password)
    const usersData = {
        name: name,
        number: mobile,
        email: email,
        password: password,
    }
    //console.log(usersData)
    userStack.push(usersData);
    console.log(userStack);
    localStorage.setItem("userDataBase", JSON.stringify(userStack));
    loginFun();
}

let finalFun = document.querySelector("#login-btn");
//finalFun.addEventListener("click", checkLog);

let resUser = JSON.parse(localStorage.getItem("userDataBase"));
function checkLog() {
    let user = document.querySelector("#emailcheck").value;
    let pass = document.querySelector("#passwordcheck").value;

    for (let i = 0; i < resUser.length; i++) {
        if (resUser[i].email == user && resUser[i].password == pass) {
            alert("Login sucess");
        }
        else {
            alert("wrong details");
        }
    }
}