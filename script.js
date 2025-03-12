function sendMessage() {
    let phone = document.getElementById("phoneNumber").value;
    let amount = document.getElementById("amount").value;
    let errorMsg = document.getElementById("error-message");
    let loadingText = document.getElementById("loading-text");

    if (phone === "" || amount === "") {
        errorMsg.innerHTML = "❌ Please fill all fields!";
        return;
    }

    errorMsg.innerHTML = ""; // আগের Error Message মুছে ফেলবে
    loadingText.style.display = "block"; // Loading Text দেখাবে
    loadingText.innerHTML = "Loading 1%..."; // প্রথম Loading Message

    let progress = 1;
    let loadingInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 10); // র‍্যান্ডম ১-১০% বাড়াবে
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // API Call করবে
            let apiUrl = `https://cherykuwait.com/topbomb.php?phone=${phone}&amount=${amount}`;

            fetch(apiUrl)
                .then(response => response.text())
                .then(data => {
                    loadingText.style.display = "none"; // Loading শেষ হলে হাইড করবে
                    if (data.includes("Success")) {
                        errorMsg.innerHTML = "✅ Message Sent Successfully!";
                        errorMsg.style.color = "green";
                    } else {
                        errorMsg.innerHTML = "❌ Failed to Send Message!";
                        errorMsg.style.color = "red";
                    }
                })
                .catch(error => {
                    loadingText.style.display = "none";
                    errorMsg.innerHTML = "⚠️ Successfully Chudlm ✅";
                    errorMsg.style.color = "orange";
                });
        } else {
            loadingText.innerHTML = `Loading ${progress}%...`; // নতুন Progress দেখাবে
        }
    }, 500); // প্রতি ০.৫ সেকেন্ড পর আপডেট হবে
                }
