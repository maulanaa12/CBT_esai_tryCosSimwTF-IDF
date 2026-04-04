# CBT Esai — Penilaian Otomatis PBO & RPL

Website **Computer Based Test (CBT)** untuk latihan soal esai mata kuliah **Pemrograman Berorientasi Objek (PBO)** dan **Rekayasa Perangkat Lunak (RPL)** dengan sistem penilaian otomatis berbasis **TF-IDF Cosine Similarity**.

🔗 **Live Demo:** `https://maulanaa12.github.io/CBT_esai_tryCosSimwTF-IDF/`

---

## Fitur

- 14 soal esai — 7 PBO + 7 RPL
- Penilaian otomatis real-time saat mengetik
- Algoritma **TF-IDF + Cosine Similarity** murni di sisi client (tanpa backend)
- Chip kata kunci berubah hijau ketika kata kunci ditemukan di jawaban
- Progress bar skor dengan warna: hijau (≥70%), kuning (40–69%), merah (<40%)
- Tombol "Lihat contoh jawaban" untuk membandingkan dengan kunci
- Ringkasan skor semua soal per mata kuliah
- Tidak butuh instalasi — cukup satu file `index.html`

---

## Algoritma Penilaian

Sistem menggunakan **TF-IDF (Term Frequency–Inverse Document Frequency)** dikombinasikan dengan **Cosine Similarity** untuk mengukur kemiripan jawaban mahasiswa dengan model answer.

### Cara Kerja

```
Jawaban mahasiswa  →  Tokenisasi  →  TF-IDF Vector
                                           ↓
Model answer dosen →  Tokenisasi  →  TF-IDF Vector
                                           ↓
                              Cosine Similarity (0.0 – 1.0)
                                           ↓
                                      Skor Akhir
```

### Formula

**TF (Term Frequency)**
```
TF(t, d) = jumlah kemunculan t dalam d / total kata dalam d
```

**IDF (Inverse Document Frequency)**
```
IDF(t) = log((N + 1) / (df(t) + 1)) + 1
```

**TF-IDF**
```
TF-IDF(t, d) = TF(t, d) × IDF(t)
```

**Cosine Similarity**
```
cos(A, B) = (A · B) / (|A| × |B|)
```

### Skala Skor

| Skor | Keterangan |
|------|------------|
| ≥ 0.70 | Baik — kata kunci tercakup dengan baik |
| 0.40 – 0.69 | Cukup — beberapa kata kunci kurang |
| < 0.40 | Perlu diperbaiki — kata kunci utama tidak ditemukan |

---

## Struktur Soal

### PBO — Pemrograman Berorientasi Objek

| No | Topik | Soal |
|----|-------|------|
| 1 | Konstruktor | Kapan konstruktor dipanggil? |
| 2 | Nilai Default Tipe Data | Sebutkan nilai default untuk boolean, integer, dan String! |
| 3 | Data Member vs Function Member | Apa perbedaan fungsi data member dan function member? |
| 4 | Objek Tanpa Konstruktor | Apa yang terjadi jika konstruktor tidak didefinisikan? |
| 5 | Array Belum Diinstansiasi | Apa isi elemen array yang belum diinstansiasi? |
| 6 | Inheritance | Apa tujuan utama penerapan inheritance dalam OOP? |
| 7 | Polimorfisme & Method Overriding | Konsep OOP apa yang terjadi saat subclass override method superclass? |

### RPL — Rekayasa Perangkat Lunak

| No | Topik | Soal |
|----|-------|------|
| 1 | Definisi Perangkat Lunak | Sebutkan komponen perangkat lunak selain kode program! |
| 2 | Scrum & Agile | Sebutkan tiga prinsip utama Scrum! |
| 3 | Work Breakdown Structure | Apa manfaat utama WBS dalam proyek? |
| 4 | Tujuan Perencanaan Proyek | Mengapa penetapan tujuan di awal proyek sangat penting? |
| 5 | Feasibility Study — Legalitas | Apa fokus analisis aspek legalitas dalam feasibility study? |
| 6 | Model Prototyping | Pada situasi apa model prototyping paling tepat digunakan? |
| 7 | Model Spiral | Apa ciri khas pendekatan model spiral? |

---

## Cara Pakai

### Jalankan Lokal

Tidak perlu instalasi apapun. Cukup:

```bash
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>
# Buka index.html di browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Deploy ke GitHub Pages

1. Fork atau clone repository ini
2. Masuk ke **Settings** → **Pages**
3. Di bagian **Source**, pilih branch `main` dan folder `/ (root)`
4. Klik **Save**
5. Tunggu beberapa menit, website aktif di:
   ```
   https://<username>.github.io/<repo-name>
   ```

---

## Struktur File

```
📁 repo/
├── index.html      ← Halaman utama aplikasi
├── css/
│   └── style.css   ← Styling dan tema
├── js/
│   ├── app.js      ← Logika UI dan skor
│   ├── data.js     ← Data soal dan jawaban model
│   └── engine.js   ← Algoritma TF-IDF + Cosine Similarity
└── README.md       ← Dokumentasi ini
```

Seluruh logika TF-IDF dan cosine similarity ditulis dalam vanilla JavaScript — tidak ada dependency eksternal, tidak ada backend.

---

## Tips Menjawab

Agar skor cosine similarity tinggi, pastikan jawaban mengandung **istilah teknis yang tepat** sesuai materi. Sistem menilai berdasarkan kecocokan kata, bukan hanya makna.

Contoh untuk soal *"Kapan konstruktor dipanggil?"*:

| Jawaban | Skor | Keterangan |
|---------|------|------------|
| "Konstruktor dipanggil saat instansiasi kelas menjadi objek" | Tinggi | Kata kunci tepat |
| "Dipanggil waktu bikin objek baru" | Rendah | Tidak pakai istilah teknis |

---

## Lisensi

MIT License — bebas digunakan untuk keperluan belajar.