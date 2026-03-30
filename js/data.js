// ─────────────────────────────────────────
//  DATA SOAL
// ─────────────────────────────────────────
const questions = {
  pbo: [
    {
      id: 'pbo1',
      topic: 'Konstruktor',
      soal: 'Jelaskan apa itu konstruktor dalam OOP, kapan dipanggil, dan apa fungsinya!',
      modelAnswer: 'Konstruktor adalah metode khusus dalam OOP yang digunakan untuk menginisialisasi variabel instans dari sebuah objek. Konstruktor dipanggil secara otomatis pada saat proses instansiasi kelas menjadi objek. Fungsi konstruktor adalah memastikan objek yang dibuat sudah memiliki nilai awal yang sesuai sejak pertama kali dibuat.',
      keywords: ['konstruktor','menginisialisasi','variabel instans','instansiasi','objek','metode khusus','nilai awal']
    },
    {
      id: 'pbo2',
      topic: 'Nilai Default Tipe Data',
      soal: 'Jelaskan apa itu nilai default pada tipe data di Java dan sebutkan nilai default untuk tipe data boolean, integer, dan String!',
      modelAnswer: 'Nilai default adalah nilai yang secara otomatis diberikan oleh Java ketika data member tidak diinisialisasi secara eksplisit. Nilai default untuk tipe data boolean adalah false, untuk integer adalah 0, dan untuk tipe data referensi seperti String adalah null.',
      keywords: ['nilai default','boolean','false','integer','null','String','tidak diinisialisasi','tipe data referensi']
    },
    {
      id: 'pbo3',
      topic: 'Data Member vs Function Member',
      soal: 'Jelaskan perbedaan antara data member dan function member dalam sebuah kelas!',
      modelAnswer: 'Data member adalah variabel yang dideklarasikan di dalam kelas dan berfungsi sebagai tempat penyimpanan data objek. Function member adalah metode yang dideklarasikan di dalam kelas dan berfungsi untuk memproses data yang dimiliki objek. Data member menyimpan data sedangkan function member memproses data.',
      keywords: ['data member','function member','tempat penyimpanan data','memproses data','atribut','metode','dideklarasikan']
    },
    {
      id: 'pbo4',
      topic: 'Objek Tanpa Konstruktor',
      soal: 'Apa yang terjadi pada objek jika konstruktor tidak didefinisikan dalam sebuah kelas?',
      modelAnswer: 'Jika konstruktor tidak didefinisikan, objek tetap dapat dibuat namun dalam keadaan kosong. Data pada objek tersebut harus diisi satu persatu secara manual setelah objek terbentuk. Java secara otomatis menyediakan konstruktor default tanpa parameter agar proses pembuatan objek tetap bisa berjalan.',
      keywords: ['konstruktor','objek kosong','diisi satu persatu','konstruktor default','tanpa parameter','otomatis','manual']
    },
    {
      id: 'pbo5',
      topic: 'Array Belum Diinstansiasi',
      soal: 'Apa isi dari elemen array yang sudah dideklarasikan tetapi belum diinstansiasi objeknya di Java?',
      modelAnswer: 'Elemen array yang sudah dideklarasikan tetapi belum diinstansiasi akan berisi nilai null. Hal ini terjadi karena array di Java adalah tipe data referensi, sehingga sebelum objek diinstansiasi, setiap indeks array tidak menunjuk ke objek manapun dan nilainya otomatis null.',
      keywords: ['null','belum diinstansiasi','tipe data referensi','indeks array','tidak menunjuk','dideklarasikan','objek']
    },
    {
      id: 'pbo6',
      topic: 'Inheritance / Pewarisan',
      soal: 'Jelaskan apa itu inheritance dalam OOP dan apa tujuan utama penggunaannya!',
      modelAnswer: 'Inheritance atau pewarisan adalah konsep OOP di mana sebuah subclass mewarisi atribut dan metode dari superclass atau kelas induk. Tujuan utama inheritance adalah menghindari duplikasi kode dan membuat program lebih terorganisir melalui prinsip reusable code, sehingga kode yang sudah ada dapat digunakan kembali tanpa harus ditulis ulang.',
      keywords: ['inheritance','pewarisan','subclass','superclass','kelas induk','duplikasi kode','reusable code','terorganisir','mewarisi']
    },
    {
      id: 'pbo7',
      topic: 'Polimorfisme & Method Overriding',
      soal: 'Jelaskan konsep polimorfisme dalam OOP dan bagaimana method overriding menjadi salah satu bentuk penerapannya!',
      modelAnswer: 'Polimorfisme adalah konsep OOP di mana satu method dapat memiliki perilaku yang berbeda tergantung pada objek yang memanggilnya. Method overriding adalah penerapan polimorfisme di mana subclass mendefinisikan ulang method yang sudah ada di superclass dengan perilaku yang berbeda. Contohnya kelas Hewan memiliki method bersuara secara generik sedangkan kelas Kucing sebagai subclass melakukan override sehingga method bersuara menghasilkan suara Meow.',
      keywords: ['polimorfisme','method overriding','perilaku berbeda','subclass','superclass','mendefinisikan ulang','Hewan','Kucing','bersuara']
    }
  ],
  rpl: [
    {
      id: 'rpl1',
      topic: 'Definisi Perangkat Lunak',
      soal: 'Jelaskan pengertian perangkat lunak secara lengkap dan sebutkan komponen yang termasuk di dalamnya selain kode program!',
      modelAnswer: 'Perangkat lunak atau software adalah sekumpulan program komputer prosedur data dan dokumentasi yang digunakan untuk menjalankan fungsi tertentu pada sistem komputer. Selain kode program perangkat lunak juga mencakup dokumentasi teknis prosedur operasional dan data konfigurasi yang mendukung jalannya sistem.',
      keywords: ['perangkat lunak','software','program komputer','prosedur','dokumentasi','data','fungsi tertentu','sistem komputer','konfigurasi']
    },
    {
      id: 'rpl2',
      topic: 'Scrum & Prinsip Agile',
      soal: 'Jelaskan apa itu Scrum dan prinsip utama yang digunakannya dalam pengembangan perangkat lunak!',
      modelAnswer: 'Scrum adalah metode dari Agile Software Development yang dikembangkan oleh Jeff Sutherland pada awal tahun 1990an. Scrum menggunakan prinsip Agile yang mengacu pada kolaborasi tim incremental product dan proses iterasi untuk mencapai tujuan produk. Prinsip utama Scrum adalah transparansi inspeksi dan adaptasi yang diterapkan melalui siklus sprint secara berulang untuk meningkatkan kinerja produk tim dan lingkungan kerja.',
      keywords: ['Scrum','Agile','Jeff Sutherland','kolaborasi tim','incremental','iterasi','transparansi','inspeksi','adaptasi','sprint']
    },
    {
      id: 'rpl3',
      topic: 'Work Breakdown Structure',
      soal: 'Jelaskan apa itu Work Breakdown Structure dan apa manfaat utama penggunaannya dalam proyek perangkat lunak!',
      modelAnswer: 'Work Breakdown Structure atau WBS adalah teknik pemecahan pekerjaan proyek menjadi bagian yang lebih kecil dan terstruktur. Manfaat utama WBS adalah membuat pekerjaan menjadi terdefinisi dan terkontrol dengan baik sehingga setiap tugas dapat diidentifikasi diestimasi dan dialokasikan secara lebih efisien dalam proyek.',
      keywords: ['Work Breakdown Structure','WBS','pemecahan pekerjaan','terstruktur','terdefinisi','terkontrol','identifikasi','estimasi','alokasi','efisien']
    },
    {
      id: 'rpl4',
      topic: 'Tujuan Perencanaan Proyek',
      soal: 'Mengapa penetapan tujuan yang jelas di awal perencanaan proyek perangkat lunak sangat penting?',
      modelAnswer: 'Penetapan tujuan yang jelas di awal proyek sangat penting karena berfungsi untuk menyelaraskan harapan semua pemangku kepentingan dan menjadi dasar pengambilan keputusan sepanjang proyek berlangsung. Tanpa tujuan yang jelas proyek rentan mengalami perubahan ruang lingkup yang tidak terkontrol estimasi yang tidak akurat dan konflik antar tim.',
      keywords: ['tujuan','pemangku kepentingan','menyelaraskan harapan','dasar pengambilan keputusan','ruang lingkup','estimasi','terkontrol','konflik']
    },
    {
      id: 'rpl5',
      topic: 'Feasibility Study — Aspek Legalitas',
      soal: 'Dalam feasibility study, jelaskan apa fokus analisis pada aspek legalitas!',
      modelAnswer: 'Aspek legalitas dalam feasibility study berfokus pada memastikan proyek tidak melanggar hukum yang berlaku. Analisis ini mencakup pemeriksaan terhadap aturan zonasi wilayah hak cipta perlindungan data konsumen dan regulasi lingkungan hidup. Tujuannya adalah agar proyek dapat berjalan secara sah sesuai peraturan perundang-undangan yang berlaku.',
      keywords: ['legalitas','feasibility study','melanggar hukum','hak cipta','perlindungan data','regulasi','peraturan perundang-undangan','sah','zonasi']
    },
    {
      id: 'rpl6',
      topic: 'Model Prototyping',
      soal: 'Jelaskan apa itu model prototyping dan pada situasi apa model ini paling tepat digunakan!',
      modelAnswer: 'Model prototyping adalah model pengembangan perangkat lunak di mana dikembangkan prototipe awal yang kemudian dievaluasi bersama klien secara berulang. Model ini paling tepat digunakan ketika klien belum bisa mendefinisikan secara detail input dan output dari sistem yang diinginkan sehingga prototipe membantu memperjelas kebutuhan secara bertahap.',
      keywords: ['prototyping','prototipe awal','dievaluasi','klien','input','output','kebutuhan belum jelas','berulang','bertahap','mendefinisikan']
    },
    {
      id: 'rpl7',
      topic: 'Model Spiral',
      soal: 'Jelaskan apa itu model spiral dan apa ciri khas pendekatannya dalam pengembangan perangkat lunak!',
      modelAnswer: 'Model spiral adalah model proses pengembangan perangkat lunak yang berorientasi pada risiko atau risk-driven. Ciri khas model spiral adalah penggunaan iterasi dalam bentuk lingkaran yang terus membesar di mana setiap iterasi mencakup tahap perencanaan analisis risiko pengembangan dan evaluasi. Model ini cocok untuk proyek besar dengan tingkat risiko tinggi yang memerlukan evaluasi risiko secara berkelanjutan.',
      keywords: ['model spiral','risk-driven','risiko','iterasi','lingkaran membesar','perencanaan','analisis risiko','evaluasi','proyek besar','berkelanjutan']
    }
  ]
};
