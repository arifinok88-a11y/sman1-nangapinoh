const KEY_BERITA = "sma_hb_berita_portal_v1";
const KEY_GURU = "sma_hb_guru_portal_v1";
const KEY_GALERI = "sma_hb_galeri_portal_v1";
const KEY_SESI = "sma_hb_sesi_portal_v1";

const BERITA_BAWAAN = [
  {
    slug: "pembukaan-ppdb-2027-2028",
    tanggal: "20 November 2026",
    kategori: "PPDB",
    ringkasan: "Pendaftaran peserta didik baru tahun ajaran 2027/2028 dibuka untuk jalur prestasi dan reguler.",
    judul: "Pembukaan PPDB Tahun Ajaran 2027/2028",
    paragraf: [
      "SMA Harapan Bangsa membuka pendaftaran peserta didik baru tahun ajaran 2027/2028 untuk peminatan MIPA, IPS, serta Teknologi & Digital.",
      "Calon siswa dapat melakukan pendaftaran dan konsultasi jadwal seleksi melalui kontak resmi sekolah."
    ],
    poin: [
      "Jalur prestasi akademik dan non-akademik",
      "Jalur reguler sesuai kuota rombongan belajar",
      "Pendampingan pemilihan peminatan"
    ]
  },
  {
    slug: "prestasi-olimpiade-sains-dan-inovasi",
    tanggal: "12 November 2026",
    kategori: "Akademik",
    ringkasan: "Tim siswa meraih juara pada kompetisi sains dan inovasi pelajar tingkat daerah.",
    judul: "Tim Siswa Raih Juara Olimpiade Sains & Inovasi",
    paragraf: [
      "Perwakilan siswa SMA Harapan Bangsa meraih prestasi membanggakan pada ajang kompetisi sains dan proyek inovasi pelajar.",
      "Capaian ini merupakan hasil pembinaan rutin bersama guru pembimbing dan pemanfaatan laboratorium sekolah."
    ],
    poin: [
      "Juara 1 Riset Sains Terapan",
      "Penghargaan Karya Inovasi Pelajar"
    ]
  },
  {
    slug: "peringatan-hari-guru-dan-karya-siswa",
    tanggal: "05 November 2026",
    kategori: "Kesiswaan",
    ringkasan: "Rangkaian kegiatan apresiasi pendidik, pentas seni, dan pameran karya siswa di sekolah.",
    judul: "Peringatan Hari Guru & Pameran Karya Siswa",
    paragraf: [
      "OSIS dan ekstrakurikuler menyelenggarakan pameran karya tulis, desain, dan pentas seni siswa.",
      "Kegiatan ini mempererat kebersamaan warga sekolah serta menumbuhkan kreativitas peserta didik."
    ],
    poin: [
      "Pameran karya tulis & proyek digital siswa",
      "Pentas seni & apresiasi guru"
    ]
  }
];

const GURU_BAWAAN = [
  {
    id: "g-1",
    nama: "Drs. Hendra Wijaya, M.Pd.",
    jabatan: "Kepala Sekolah",
    bidang: "Manajemen Pendidikan",
    nip: "197204121998021003",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g-2",
    nama: "Siti Rahmawati, S.Si., M.Sc.",
    jabatan: "Wakasek Kurikulum",
    bidang: "Kimia & Riset MIPA",
    nip: "198409182009032007",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "g-3",
    nama: "Budi Santoso, S.Kom.",
    jabatan: "Guru Teknologi & Digital",
    bidang: "Informatika & Lab Komputer",
    nip: "199002112015041002",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
  }
];

const GALERI_BAWAAN = [
  {
    id: "gl-1",
    judul: "Praktikum Sains & Riset",
    kategori: "Akademik",
    tanggal: "14 Oktober 2026",
    deskripsi: "Kegiatan praktikum dan observasi siswa di laboratorium.",
    foto: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gl-2",
    judul: "Kegiatan Kesiswaan & Prestasi",
    kategori: "Prestasi",
    tanggal: "02 November 2026",
    deskripsi: "Apresiasi capaian akademik dan non-akademik siswa.",
    foto: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gl-3",
    judul: "Perpustakaan & Ruang Baca",
    kategori: "Fasilitas",
    tanggal: "10 November 2026",
    deskripsi: "Fasilitas literasi dan diskusi kelompok siswa.",
    foto: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"
  }
];

const AVATAR_DEFAULT =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="#dbeafe"/><circle cx="150" cy="112" r="50" fill="#2563eb"/><path d="M52 272c14-56 56-84 98-84s84 28 98 84" fill="#1e3a8a"/></svg>`
  );

function bacaData(key, fallback) {
  try {
    const raw = JSON.parse(localStorage.getItem(key) || "null");
    if (Array.isArray(raw)) return raw;
  } catch {}
  return fallback;
}

function ambilBerita() {
  const d = bacaData(KEY_BERITA, BERITA_BAWAAN);
  return d.length ? d : BERITA_BAWAAN;
}
function simpanBerita(d) { localStorage.setItem(KEY_BERITA, JSON.stringify(d)); }
function resetBerita() { localStorage.removeItem(KEY_BERITA); return BERITA_BAWAAN; }

function ambilGuru() { return bacaData(KEY_GURU, GURU_BAWAAN); }
function simpanGuru(d) { localStorage.setItem(KEY_GURU, JSON.stringify(d)); }
function resetGuru() { localStorage.removeItem(KEY_GURU); return GURU_BAWAAN; }

function ambilGaleri() { return bacaData(KEY_GALERI, GALERI_BAWAAN); }
function simpanGaleri(d) { localStorage.setItem(KEY_GALERI, JSON.stringify(d)); }
function resetGaleri() { localStorage.removeItem(KEY_GALERI); return GALERI_BAWAAN; }

function kompresFoto(file, maksLebar = 720, kualitas = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const skala = Math.min(1, maksLebar / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * skala));
        canvas.height = Math.max(1, Math.round(img.height * skala));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", kualitas));
      };
      img.onerror = () => reject(new Error("File gambar tidak valid."));
      img.src = ev.target.result;
    };
    reader.onerror = () => reject(new Error("Gagal membaca file."));
    reader.readAsDataURL(file);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const th = document.getElementById("tahun");
  if (th) th.textContent = String(new Date().getFullYear());

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
  }
});