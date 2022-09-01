const btn = document.getElementById("btn");
const window_ = document.getElementById("window");
btn.addEventListener("click",function (e){
    window_.style.visibility = "visible";
});
const close = (e) => {
    if (e.key === "Escape") {
        window_.style.visibility = "hidden";
    }
}
window.addEventListener("keydown", close)
const submit_btn = document.getElementById("submit_btn");
const username = document.getElementById("user_name").value
const user_email = document.getElementById("user_email").value
const stat = document.querySelector(".stat");
const sendData = async (username, user_email) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                body: JSON.stringify({
                    name: username,
                    email: user_email
                })
            }
        );
        const data = await response.json();
        stat.classList.add("success")
    }
    catch(e) {
        stat.classList.add("error")
    }
}
submit_btn.addEventListener("click",()=> sendData(username,user_email));
