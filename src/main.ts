import "./style.css";
import {
  AVATAR_FALLBACK,
  ambilDaftarBerita,
  ambilDaftarGaleri,
  ambilDaftarGuru
} from "./store";

const tahunEl = document.getElementById("tahun");
if (tahunEl) tahunEl.textContent = String(new Date().getFullYear());

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Berita & Filter
const daftarBeritaEl = document.getElementById("daftarBeritaPublik");
const cariBeritaEl = document.getElementById("cariBerita") as HTMLInputElement | null;
const filterPills = document.querySelectorAll<HTMLButtonElement>("#filterKategoriBerita .pill");

let kategoriAktif = "Semua";
let kataKunciAktif = "";

function renderBerita(): void {
  if (!daftarBeritaEl) return;
  const hasil = ambilDaftarBerita().filter((item) => {
    const cocokKategori = kategoriAktif === "Semua" || item.kategori === kategoriAktif;
    const teks = `${item.judul} ${item.ringkasan} ${item.kategori}`.toLowerCase();
    const cocokCari = !kataKunciAktif || teks.includes(kataKunciAktif);
    return cocokKategori && cocokCari;
  });

  if (hasil.length === 0) {
    daftarBeritaEl.innerHTML = `<div class="card"><p class="small-note">Tidak ada berita ditemukan.</p></div>`;
    return;
  }

  daftarBeritaEl.innerHTML = hasil
    .map(
      (item) => `
      <article class="card">
        <div class="announcement-meta">
          <span class="announcement-date">${item.tanggal}</span>
          <span class="badge">${item.kategori}</span>
        </div>
        <h3>${item.judul}</h3>
        <p>${item.ringkasan}</p>
        <a href="berita.html?slug=${encodeURIComponent(item.slug)}" class="text-link">Baca selengkapnya →</a>
      </article>
    `
    )
    .join("");
}

filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    filterPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    kategoriAktif = pill.dataset.kategori ?? "Semua";
    renderBerita();
  });
});

if (cariBeritaEl) {
  cariBeritaEl.addEventListener("input", () => {
    kataKunciAktif = cariBeritaEl.value.trim().toLowerCase();
    renderBerita();
  });
}

// Guru & Staf
const daftarGuruEl = document.getElementById("daftarGuruPublik");
function renderGuru(): void {
  if (!daftarGuruEl) return;
  const daftar = ambilDaftarGuru();
  if (daftar.length === 0) {
    daftarGuruEl.innerHTML = `<p class="small-note">Belum ada data guru dan staf.</p>`;
    return;
  }

  daftarGuruEl.innerHTML = daftar
    .map(
      (g) => `
      <article class="card staff-card">
        <img
          src="${g.foto || AVATAR_FALLBACK}"
          alt="Foto ${g.nama}"
          class="staff-photo"
          onerror="this.onerror=null;this.src='${AVATAR_FALLBACK}';"
        />
        <span class="badge">${g.jabatan}</span>
        <h3>${g.nama}</h3>
        ${g.bidang ? `<p class="staff-field">${g.bidang}</p>` : ""}
        ${g.nip ? `<p class="small-note">NIP/NIY: ${g.nip}</p>` : ""}
      </article>
    `
    )
    .join("");
}

// Galeri Foto & Lightbox
const daftarGaleriEl = document.getElementById("daftarGaleriPublik");
const lightboxModal = document.getElementById("lightboxModal");
const tutupLightbox = document.getElementById("tutupLightbox");

if (tutupLightbox && lightboxModal) {
  tutupLightbox.addEventListener("click", () => {
    lightboxModal.hidden = true;
  });
  lightboxModal.addEventListener("click", (e: MouseEvent) => {
    if (e.target === lightboxModal) lightboxModal.hidden = true;
  });
}

function renderGaleri(): void {
  if (!daftarGaleriEl) return;
  const daftar = ambilDaftarGaleri();
  if (daftar.length === 0) {
    daftarGaleriEl.innerHTML = `<p class="small-note">Belum ada foto galeri.</p>`;
    return;
  }

  daftarGaleriEl.innerHTML = daftar
    .map(
      (item, idx) => `
      <figure class="card gallery-card" data-idx="${idx}">
        <img src="${item.foto}" alt="${item.judul}" class="gallery-photo" />
        <figcaption class="gallery-caption">
          <div class="announcement-meta">
            <span class="badge">${item.kategori}</span>
            ${item.tanggal ? `<span class="announcement-date">${item.tanggal}</span>` : ""}
          </div>
          <h4>${item.judul}</h4>
          ${item.deskripsi ? `<p class="small-note">${item.deskripsi}</p>` : ""}
        </figcaption>
      </figure>
    `
    )
    .join("");

  daftarGaleriEl.querySelectorAll<HTMLElement>(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = Number(card.dataset.idx);
      const item = daftar[idx];
      if (!item || !lightboxModal) return;

      const imgEl = document.getElementById("lightboxImg") as HTMLImageElement | null;
      const badgeEl = document.getElementById("lightboxBadge");
      const judulEl = document.getElementById("lightboxJudul");
      const descEl = document.getElementById("lightboxDeskripsi");

      if (imgEl) imgEl.src = item.foto;
      if (badgeEl) badgeEl.textContent = item.kategori;
      if (judulEl) judulEl.textContent = item.judul;
      if (descEl) descEl.textContent = [item.tanggal, item.deskripsi].filter(Boolean).join(" — ");
      lightboxModal.hidden = false;
    });
  });
}

// Form Kontak
const formKontak = document.getElementById("formKontak") as HTMLFormElement | null;
const statusKontak = document.getElementById("statusKontak");
if (formKontak && statusKontak) {
  formKontak.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    statusKontak.textContent = "Pesan berhasil dikirim.";
    statusKontak.className = "form-status success";
    formKontak.reset();
  });
}

renderBerita();
renderGuru();
renderGaleri();