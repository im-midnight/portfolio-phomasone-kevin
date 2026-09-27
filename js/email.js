function sendEmail() {
    const lang = localStorage.getItem('lang') || 'fr';
    const t = (data[lang] && data[lang].email) ? data[lang].email : data.fr.email;

    const btn = document.querySelector(".form-submit");
    const gotcha = document.querySelector('[name="_gotcha"]').value;

    if (gotcha) return; // honeypot: bot filled hidden field, bail silently

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        lang_header: t.emailHeader, // translated label, shown inside the email template
    };

    if (!params.name || !params.email || !params.message) {
        alert(t.fillAll);
        return;
    }

    btn.disabled = true;

    emailjs.send("service_ygqcimn", "template_itfx5pv", params)
        .then(() => {
            alert(t.success);
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert(t.error);
        })
        .finally(() => {
            btn.disabled = false;
        });
}