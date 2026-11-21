export type KategoriBerita = "PPDB" | "Akademik" | "Kesiswaan" | "Umum";

export interface BeritaItem {
  slug: string;
  tanggal: string;
  kategori: KategoriBerita;
  ringkasan: string;
  judul: string;
  paragraf: string[];
  poin: string[];
}

export interface GuruItem {
  id: string;
  nama: string;
  jabatan: string;
  bidang: string;
  nip: string;
  foto: string;
}

export type KategoriGaleri = "Akademik" | "Kesiswaan" | "Prestasi" | "Fasilitas";

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: KategoriGaleri;
  tanggal: string;
  deskripsi: string;
  foto: string;
}

export interface CadanganKonten {
  dieksportPada: string;
  berita: BeritaItem[];
  guruDanStaf: GuruItem[];
  galeri: GaleriItem[];
}