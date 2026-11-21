import type { BeritaItem, GaleriItem, GuruItem } from "./types";

export const KEYS = {
  BERITA: "sma_hb_berita_ts_v1",
  GURU: "sma_hb_guru_ts_v1",
  GALERI: "sma_hb_galeri_ts_v1",
  ADMIN_SESSION: "sma_hb_admin_ts_v1"
} as const;

export const DATA_BERITA_BAWAAN: BeritaItem[] = [
  {
    slug: "penerimaan-peserta-didik-baru-ppdb-2027",
    tanggal: "20 November 2026",
    kategori: "PPDB",
    ringkasan: "Pendaftaran peserta didik baru tahun ajaran 2027/2028 dibuka untuk jalur prestasi dan reguler.",
    judul: "Pembukaan Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2027/2028",
    paragraf: [
      "SMA Harapan Bangsa membuka pendaftaran peserta didik baru tahun ajaran 2027/2028 secara daring maupun langsung di sekolah.",
      "Calon siswa dapat memilih peminatan Sains & Teknologi, Sosial & Humaniora, atau Bahasa & Kreatif."
    ],
    poin: [
      "Gelombang 1 dibuka mulai 1 Desember 2026",
      "Jalur prestasi akademik & non-akademik tersedia",
      "Informasi lengkap dapat ditanyakan melalui kontak sekolah"
    ]
  },
  {
    slug: "prestasi-olimpiade-sains-dan-robotika",
    tanggal: "12 November 2026",
    kategori: "Akademik",
    ringkasan: "Tim siswa meraih juara pada kompetisi sains dan robotika pelajar tingkat regional.",
    judul: "Siswa SMA Harapan Bangsa Raih Juara Olimpiade Sains & Robotika",
    paragraf: [
      "Perwakilan siswa berhasil meraih penghargaan atas karya riset dan purwarupa teknologi ramah lingkungan.",
      "Pembinaan rutin bersama guru pembimbing terus dilakukan untuk menghadapi tingkat berikutnya."
    ],
    poin: [
      "Juara 1 Riset Sains Terapan",
      "Juara Harapan Robotika Pelajar"
    ]
  },
  {
    slug: "festival-literasi-dan-karya-siswa",
    tanggal: "05 November 2026",
    kategori: "Kesiswaan",
    ringkasan: "Pameran karya tulis, seni, dan kreativitas siswa digelar meriah di lingkungan sekolah.",
    judul: "Festival Literasi & Pameran Karya Siswa Akhir Semester",
    paragraf: [
      "OSIS dan ekstrakurikuler mengadakan pameran karya siswa serta pentas seni sebagai ajang pengembangan bakat.",
      "Wali murid dan warga sekolah turut hadir memberikan dukungan."
    ],
    poin: [
      "Pameran karya tulis & desain siswa",
      "Pentas seni dan kreativitas"
    ]
  }
];

export const DATA_GURU_BAWAAN: GuruItem[] = [
  {
    id: "guru-1",
    nama: "Drs. Hendra Wijaya, M.Pd.",
    jabatan: "Kepala Sekolah",
    bidang: "Manajemen Pendidikan",
    nip: "197204121998021003",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "guru-2",
    nama: "Siti Rahmawati, S.Si., M.Sc.",
    jabatan: "Wakasek Kurikulum",
    bidang: "Kimia & Riset",
    nip: "198409182009032007",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "guru-3",
    nama: "Budi Santoso, S.Kom.",
    jabatan: "Staf IT & Lab Komputer",
    bidang: "Informatika",
    nip: "199002112015041002",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
  }
];

export const DATA_GALERI_BAWAAN: GaleriItem[] = [
  {
    id: "galeri-1",
    judul: "Kegiatan Praktikum Laboratorium",
    kategori: "Akademik",
    tanggal: "14 Oktober 2026",
    deskripsi: "Siswa melaksanakan praktikum sains dengan pendampingan guru.",
    foto: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "galeri-2",
    judul: "Upacara & Apresiasi Siswa",
    kategori: "Prestasi",
    tanggal: "02 November 2026",
    deskripsi: "Penyerahan penghargaan kepada siswa berprestasi.",
    foto: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "galeri-3",
    judul: "Perpustakaan & Ruang Belajar",
    kategori: "Fasilitas",
    tanggal: "10 November 2026",
    deskripsi: "Suasana membaca dan diskusi kelompok siswa.",
    foto: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80"
  }
];

export const AVATAR_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="#dbeafe"/><circle cx="150" cy="112" r="50" fill="#3b82f6"/><path d="M52 272c14-56 56-84 98-84s84 28 98 84" fill="#1d4ed8"/></svg>`
  );

function bacaList<T>(key: string, fallback: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : fallback;
  } catch {
    return fallback;
  }
}

export function ambilDaftarBerita(): BeritaItem[] {
  const list = bacaList<BeritaItem>(KEYS.BERITA, DATA_BERITA_BAWAAN);
  return list.length > 0 ? list : DATA_BERITA_BAWAAN;
}

export function simpanDaftarBerita(daftar: BeritaItem[]): void {
  localStorage.setItem(KEYS.BERITA, JSON.stringify(daftar));
}

export function resetDaftarBerita(): BeritaItem[] {
  localStorage.removeItem(KEYS.BERITA);
  return DATA_BERITA_BAWAAN;
}

export function ambilDaftarGuru(): GuruItem[] {
  return bacaList<GuruItem>(KEYS.GURU, DATA_GURU_BAWAAN);
}

export function simpanDaftarGuru(daftar: GuruItem[]): void {
  localStorage.setItem(KEYS.GURU, JSON.stringify(daftar));
}

export function resetDaftarGuru(): GuruItem[] {
  localStorage.removeItem(KEYS.GURU);
  return DATA_GURU_BAWAAN;
}

export function ambilDaftarGaleri(): GaleriItem[] {
  return bacaList<GaleriItem>(KEYS.GALERI, DATA_GALERI_BAWAAN);
}

export function simpanDaftarGaleri(daftar: GaleriItem[]): void {
  localStorage.setItem(KEYS.GALERI, JSON.stringify(daftar));
}

export function resetDaftarGaleri(): GaleriItem[] {
  localStorage.removeItem(KEYS.GALERI);
  return DATA_GALERI_BAWAAN;
}

export function kompresGambarKeDataURL(
  file: File,
  maksLebar = 720,
  kualitas = 0.8
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev: ProgressEvent<FileReader>) => {
      const result = ev.target?.result;
      if (typeof result !== "string") {
        reject(new Error("Hasil pembacaan gambar tidak valid."));
        return;
      }
      const img = new Image();
      img.onload = () => {
        const skala = Math.min(1, maksLebar / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * skala));
        canvas.height = Math.max(1, Math.round(img.height * skala));
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Kanvas tidak tersedia di browser."));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", kualitas));
      };
      img.onerror = () => reject(new Error("File gambar tidak dapat diproses."));
      img.src = result;
    };
    reader.onerror = () => reject(new Error("Gagal membaca file gambar."));
    reader.readAsDataURL(file);
  });
}