function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";

    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    toast.className = `toast show ${type}`;

    clearTimeout(toast._hideTimeout);
    toast._hideTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

function sendEmail() {
    const lang = localStorage.getItem('lang') || 'fr';
    const t = (data[lang] && data[lang].email) ? data[lang].email : data.fr.email;
    const btn = document.querySelector(".form-submit");
    const gotcha = document.querySelector('[name="_gotcha"]').value;

    if (gotcha) return;

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        lang_header: t.emailHeader,
    };

    if (!params.name || !params.email || !params.message) {
        showToast(t.fillAll, "error");
        return;
    }

    btn.disabled = true;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.sending}`;

    emailjs.send("service_ygqcimn", "template_itfx5pv", params)
        .then(() => {
            showToast(t.success, "success");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            showToast(t.error, "error");
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerHTML = originalHTML;
        });
}