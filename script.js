async function submitForm() {
    const userType = document.querySelector(".tab-btn.active").innerText.toLowerCase();
    const url = userType === "customer" ? "/api/customers/register" : "/api/business/register";

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
    };

    if (userType === "business") {
        data.businessName = document.getElementById("business-name").value;
        data.businessAddress = document.getElementById("business-address").value;
        data.businessType = document.getElementById("business-type").value;
    }

    try {
        const response = await fetch(`http://localhost:3000${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const message = await response.text();
        alert(message);
    } catch (error) {
        alert("Error submitting form.");
    }
}