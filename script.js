// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// ANIMASI SCROLL
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        let pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});

// COUNTER
function startCounter() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        document.getElementById("counter").innerText = count;

        if (count === 50) clearInterval(interval);
    }, 30);
}

// VALIDASI FORM
function kirim() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;

    if (nama === "" || email === "") {
        document.getElementById("notif").innerText = "Harap isi data!";
    } else {
        document.getElementById("notif").innerText = "Pesan berhasil dikirim!";
    }
}
