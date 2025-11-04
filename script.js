const namaBand = document.querySelector("#namaBand");
const tglAcara = document.querySelector("#tglAcara");
const lokasiAcara = document.querySelector("#lokasiAcara");
const deskripsiAcara = document.querySelector("#deskripsiAcara");
const tema = document.querySelector("#tema");

const bandPrev = document.querySelector("#bandPreview");
const tanggalPrev = document.querySelector("#tanggalPreview");
const lokasiPrev = document.querySelector("#lokasiPreview");
const descPrev = document.querySelector("#descPreview");
const previewPoster = document.querySelector("#previewPoster");


function updatePoster() {
  bandPrev.textContent = namaBand.value || "Nama Band Kamu";
  tanggalPrev.textContent = tglAcara.value ? `Tanggal: ${tglAcara.value}` : "Tanggal Acara";
  lokasiPrev.textContent = lokasiAcara.value ? `Lokasi: ${lokasiAcara.value}` : "Lokasi Acara";
  descPrev.textContent = deskripsiAcara.value || "Deskripsi acara akan muncul di sini.";
}


namaBand.addEventListener("input", updatePoster);
tglAcara.addEventListener("input", updatePoster);
lokasiAcara.addEventListener("input", updatePoster);
deskripsiAcara.addEventListener("input", updatePoster);


tema.addEventListener("change", function() {
  previewPoster.className = this.value;
});
