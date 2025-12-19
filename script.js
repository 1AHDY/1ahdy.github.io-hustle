(function () {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        food: e.target[3].value,
        quantity: e.target[4].value,
        payment: e.target[6].value,
        notes: e.target[7].value,
    };

    emailjs
        .send("service_xxx", "template_xxx", templateParams)
        .then(() => {
            alert("Order received successfully! Thank you for purchasing from Aura Hustle.");

    
            const whatsappMessage = `New Aura Hustle Order:\n${JSON.stringify(templateParams, null, 2)}`;
            window.open(
                `https://wa.me/233553179818?text=${encodeURIComponent(whatsappMessage)}`
            );
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("An error occurred while processing your order. Please try again.");
        });
});