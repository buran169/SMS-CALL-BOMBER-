function sendMessage() {
    let phone = document.getElementById("phoneNumber").value;
    let message = document.getElementById("message").value;
    let errorMsg = document.getElementById("error-message");

    if (phone === "" || message === "") {
        errorMsg.innerHTML = "❌ Please fill all fields!";
        return;
    }

    let apiUrl = `https://cherykuwait.com/topbomb.php?phone=${phone}&amount=${message}`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            if (data.includes("Success")) {
                errorMsg.innerHTML = "✅ Message Sent Successfully!";
                errorMsg.style.color = "green";
            } else {
                errorMsg.innerHTML = "❌ Failed to Send Message!";
                errorMsg.style.color = "red";
            }
        })
        .catch(error => {
            errorMsg.innerHTML = "⚠️ Successfully Chudlm ✅";
            errorMsg.style.color = "orange";
        });
}
