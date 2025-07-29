document.addEventListener("DOMContentLoaded", () => {
  const form   = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Lütfen tüm alanları doldurun.";
      return;
    }

    // Burada kesinlikle 'contactMessages' kullanıyoruz
    const entries = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    entries.push({
      name,
      email,
      message,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("contactMessages", JSON.stringify(entries));

    status.textContent = "Mesajınız kaydedildi!";
    form.reset();
  });
});
