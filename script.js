hamburgerBtn = document.getElementById("hamburgerButton");
hamburgerBtn.addEventListener("click", () => {
  document.querySelector(".navbar-menu__offcanvas").classList.toggle("open");
});

const closeOffcanvasMenu = () => {
  document.querySelector(".navbar-menu__offcanvas").classList.remove("open");
};

xmarkBtn = document.getElementById("xmarkButton");
navMenuBtn = document.querySelectorAll(".navbar-menu__list-offcanvas-item");
xmarkBtn.addEventListener("click", () => {
  closeOffcanvasMenu();
});

for (i = 0; i < navMenuBtn.length; i++) {
  navMenuBtn[i].addEventListener("click", closeOffcanvasMenu);
}

// Fungsi untuk mengubah bahasa navbar
function changeLanguage() {
  // Ambil nilai bahasa yang dipilih
  const selectedLanguage = document.getElementById("languageSelect").value;

  // Simpan bahasa yang dipilih ke dalam localStorage
  localStorage.setItem("preferredLanguage", selectedLanguage);

  // Dapatkan semua elemen dengan kelas "lang"
  const allLanguages = document.querySelectorAll("[class*='lang-']");

  // Sembunyikan semua elemen bahasa terlebih dahulu
  allLanguages.forEach((element) => {
    element.style.display = "none";
  });

  // Tampilkan elemen sesuai bahasa yang dipilih
  const selectedElements = document.querySelectorAll(`.lang-${selectedLanguage}`);
  selectedElements.forEach((element) => {
    element.style.display = "block";
  });
}

// Fungsi untuk mengatur bahasa saat halaman dimuat berdasarkan localStorage
function initializeLanguage() {
  // Ambil bahasa yang disimpan di localStorage atau default ke EN jika belum ada
  const savedLanguage = localStorage.getItem("preferredLanguage") || "EN";

  // Setel dropdown ke bahasa yang tersimpan
  document.getElementById("languageSelect").value = savedLanguage;

  // Panggil changeLanguage untuk mengatur tampilan sesuai bahasa yang tersimpan
  changeLanguage();
}

// Event listener untuk dropdown, memanggil changeLanguage setiap kali pilihan berubah
document.getElementById("languageSelect").addEventListener("change", changeLanguage);

// Panggil fungsi initializeLanguage saat halaman pertama kali dimuat
initializeLanguage();

// Fungsi untuk mengubah bahasa offcanvas
function changeOffcanvasLanguage() {
  // Ambil nilai bahasa yang dipilih
  const selectedLanguage = document.getElementById("languageSelectOffCanvas").value;

  // Simpan bahasa yang dipilih ke dalam localStorage
  localStorage.setItem("preferredLanguage", selectedLanguage);

  // Dapatkan semua elemen dengan kelas "lang-"
  const allLanguages = document.querySelectorAll("[class*='lang-']");

  // Sembunyikan semua elemen bahasa terlebih dahulu
  allLanguages.forEach((element) => {
    element.style.display = "none";
  });

  // Tampilkan elemen sesuai bahasa yang dipilih
  const selectedElements = document.querySelectorAll(`.lang-${selectedLanguage}`);
  selectedElements.forEach((element) => {
    element.style.display = "block";
  });

  // Menutup offcanvas setelah memilih bahasa
  closeOffcanvasMenu();
}

// Fungsi untuk mengatur bahasa saat halaman dimuat berdasarkan localStorage
function initializeOffcanvasLanguage() {
  // Ambil bahasa yang disimpan di localStorage atau default ke ID jika belum ada
  const savedLanguage = localStorage.getItem("preferredLanguage") || "ID";

  // Setel dropdown ke bahasa yang tersimpan
  document.getElementById("languageSelectOffCanvas").value = savedLanguage;

  // Panggil changeLanguage untuk mengatur tampilan sesuai bahasa yang tersimpan
  changeOffcanvasLanguage();
}

// Event listener untuk dropdown, memanggil changeOffcanvasLanguage setiap kali pilihan berubah
document.getElementById("languageSelectOffCanvas").addEventListener("change", changeOffcanvasLanguage);

// Panggil fungsi initializeOffcanvasLanguage saat halaman pertama kali dimuat
initializeOffcanvasLanguage();

var tahunElement = document.getElementById("tahun");
var tahunSaatIni = new Date().getFullYear();
tahunElement.textContent = tahunSaatIni;

const sunMoonToggle = document.getElementById("sunMoonToggle");
const sunMoonToggleOffCanvas = document.getElementById("sunMoonToggleOffCanvas");
const themeStyle = document.getElementById("theme-style");

// Fungsi untuk mengatur tema dan gambar berdasarkan preferensi pengguna
function setThemeAndImage() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeStyle.setAttribute("href", "style-dark.css");
    sunMoonToggle.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggle.querySelector("img").setAttribute("alt", "Moon");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("alt", "Moon");
  } else {
    themeStyle.setAttribute("href", "style-light.css");
    sunMoonToggle.querySelector("img").setAttribute("src", "img/bx-sun.svg");
    sunMoonToggle.querySelector("img").setAttribute("alt", "Sun");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("alt", "Moon");
  }
}

function setThemeAndImageOffCanvas() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeStyle.setAttribute("href", "style-dark.css");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("alt", "Moon");
  } else {
    themeStyle.setAttribute("href", "style-light.css");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("alt", "Moon");
  }
}

// Fungsi untuk mengubah tema dan gambar secara manual
function toggleThemeAndImage(event) {
  event.preventDefault(); // Mencegah aksi default dari link
  const currentImgSrc = sunMoonToggle.querySelector("img").getAttribute("src");

  if (currentImgSrc.includes("bx-sun.svg")) {
    themeStyle.setAttribute("href", "style-dark.css");
    sunMoonToggle.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggle.querySelector("img").setAttribute("alt", "Moon");
  } else {
    themeStyle.setAttribute("href", "style-light.css");
    sunMoonToggle.querySelector("img").setAttribute("src", "img/bx-sun.svg");
    sunMoonToggle.querySelector("img").setAttribute("alt", "Sun");
  }
}

function toggleThemeAndImageOffCanvas(event) {
  event.preventDefault(); // Mencegah aksi default dari link
  const currentImgSrc = sunMoonToggleOffCanvas.querySelector("img").getAttribute("src");

  if (currentImgSrc.includes("bx-sun.svg")) {
    themeStyle.setAttribute("href", "style-dark.css");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("src", "img/bxs-moon.svg");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("alt", "Moon");
  } else {
    themeStyle.setAttribute("href", "style-light.css");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("src", "img/bx-sun.svg");
    sunMoonToggleOffCanvas.querySelector("img").setAttribute("alt", "Sun");
  }
}

let imageIndex = 0;
let interval;

const images = ["img/listfilm/FotoWebListfilm.png", "img/listfilm/Upcoming.png", "img/listfilm/nowplaying.png", "img/listfilm/bookmark.png", "img/listfilm/serch.png"];

const images2 = ["img/forumdiskusi/home.png", "img/forumdiskusi/discus.png", "img/forumdiskusi/profile.png", "img/forumdiskusi/search.png", "img/forumdiskusi/login.png", "img/forumdiskusi/signup.png"];

const images3 = ["img/pos/point of sales.png", "img/pos/antar.png", "img/pos/beli.png", "img/pos/jual.png", "img/pos/kasir.png"];

const images4 = ["img/blog/fotoblog.png", "img/blog/content.png", "img/blog/login.png", "img/blog/sigunp.png", "img/blog/profile.png"];

function rotateImage() {
  imageIndex = (imageIndex + 1) % images.length;
  document.getElementById("rotatingImage").src = images[imageIndex];
  document.getElementById("rotatingImage2").src = images2[imageIndex];
  document.getElementById("rotatingImage3").src = images3[imageIndex];
  document.getElementById("rotatingImage4").src = images4[imageIndex];
}
setInterval(rotateImage, 1500);

setThemeAndImage();
setThemeAndImageOffCanvas();

// Pantau perubahan pada preferensi warna
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setThemeAndImage);
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setThemeAndImageOffCanvas);

// Tambahkan event listener untuk mengubah tema dan gambar secara manual
sunMoonToggle.addEventListener("click", toggleThemeAndImage);
sunMoonToggleOffCanvas.addEventListener("click", toggleThemeAndImageOffCanvas);
