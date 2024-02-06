// bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Kontak
function sendWhatsAppMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Construct WhatsApp message
  var whatsappMessage =
    "Nama: " + name + " " + "Email: " + email + " " + "Pesan: " + message;

  // Encode message for URL
  var encodedMessage = encodeURIComponent(whatsappMessage);

  // WhatsApp URL
  var whatsappURL = "https://wa.me/6281818199908/?text=" + encodedMessage;

  // Open WhatsApp in new tab
  window.open(whatsappURL);
}
