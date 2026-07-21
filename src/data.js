import HeroImage from "/assets/hero-img.webp";
import gwImage from "/assets/gw-img.webp";

const Image = {
  HeroImage,
  gwImage

};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/py.png";
import Tools13 from "/assets/tools/php.png";
import Tools14 from "/assets/tools/lar.png";
import Tools15 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "py",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "php",
    ket: "Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "laravel",
    ket: "Framework",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "mysql",
    ket: "Database",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/servis.webp";
import Proyek2 from "/assets/proyek/py.webp";
import Proyek3 from "/assets/proyek/ke.webp";
import Proyek4 from "/assets/proyek/kal.webp";
import Proyek5 from "/assets/proyek/bansos.webp";
import Proyek6 from "/assets/proyek/buku.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Service elektronik",
    desk: "Platform pencatatan dan pengelolaan jasa service barang elektronik — HP, Laptop, Printer, TV, Kulkas, Mesin Cuci, dan perangkat lainnya.",
    tools: ["HTML", "CSS", "PHP", "database-MYSQL"],
    link: "http://servis-hp-babel.rf.gd/?i=1",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Password Security Checker",
    desk: "Aplikasi desktop berbasis Python untuk mengelola dan mengevaluasi keamanan password. Fitur yang tersedia meliputi pembuatan password acak, pengecekan kekuatan password, deteksi password rentan, pencarian data akun, serta impor dan ekspor data ke Excel.",
    tools: ["Python"],
     clickable: true,
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Platform Kesehatan Digital",
    desk: "Website layanan kesehatan yang memudahkan pengguna untuk mencari dokter, melakukan konsultasi online, melihat informasi kesehatan, serta menemukan fasilitas kesehatan terdekat melalui antarmuka yang modern dan responsif.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "Laravel"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "KALKULATOR RELASI & FUNGSI MTK DISKRIT",
    desk: "Aplikasi web yang membantu pengguna memvisualisasikan dan menganalisis fungsi matematika melalui grafik interaktif. Pengguna dapat memasukkan persamaan fungsi, melihat bentuk grafik secara otomatis, serta mempelajari karakteristik fungsi dengan lebih mudah.",
    tools: ["html", "CSS", "javacript"],
    link: "https://relas-fungsi-xaz.vercel.app/grafik.html",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Sistem monitoring Bantuan Sosial",
    desk: "Aplikasi untuk petugas desa mendata warga penerima bansos (PKH, BLT, BPNT), status penyaluran, dan laporan per periode. Warga bisa cek status bantuan mereka via web.",
    tools: ["HTML", "Talwind CSS", "Javascript", "Laravel"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Buku Kakulus",
    desk: "WEB kalkulus menyelasikan permasalhan materi fungsi turunan dan integeral",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];

export const listArtikel = [
  {
    id: 1,
    kategori: "Tips",
    judul: "5 Alasan Kenapa Website Lo Wajib Ngebut (Bukan Cuma Buat SEO)",
    ringkasan:
      "Website lambat bukan cuma bikin Google ngambek — tapi bikin calon customer cabut sebelum sempet baca apa yang lo tawarin.",
    waktuBaca: "3 menit baca",
    isi: `Coba lo ingat-ingat, pernah gak lo klik link, terus loading-nya kelamaan, dan lo langsung pencet tombol back? Nah, calon client lo juga ngelakuin hal yang sama ke website lo kalau loading-nya lambat.

Google emang lebih suka website cepat buat urusan SEO, tapi yang lebih penting: orang yang lagi cari jasa atau produk biasanya gak sabar. Begitu mereka ragu sedikit aja soal kecepatan, kepercayaan ke brand lo ikut turun — padahal mereka belum baca apa-apa.

Di setiap proyek yang gw pegang, gw selalu mastiin gambar dikompres tanpa ngurangin kualitas, kode yang gak kepake dibuang, dan halaman dimuat secara bertahap biar yang penting muncul duluan. Hasilnya, website tetep keliatan premium tapi jalannya enteng.

Intinya, kecepatan itu bukan fitur tambahan — itu bagian dari pengalaman pertama calon client sama brand lo. Dan first impression, kita semua tau, cuma dapet sekali kesempatan.`,
  },
  {
    id: 2,
    kategori: "Insight",
    judul: "UI Cantik vs UX yang Jalan: Kenapa Dua-Duanya Harus Nyatu",
    ringkasan:
      "Desain yang Instagram-able doang gak otomatis bikin orang betah. Ini kenapa estetika dan fungsi itu satu paket, gak bisa dipisah.",
    waktuBaca: "4 menit baca",
    isi: `Banyak yang mikir kalau website udah keliatan estetik, urusan selesai. Tapi sering gw nemu kasus: desainnya bagus buat di-screenshot, tapi orang bingung mau klik apa, atau form kontaknya ketutup banner.

UI itu soal gimana sesuatu kelihatan. UX itu soal gimana sesuatu kerasa dipakai. Dua hal ini harus jalan bareng — tombol CTA emang harus eye-catching, tapi dia juga harus jelas itu tombol apa dan ngarah ke mana.

Di tiap proyek, gw selalu mulai dari mikirin alur: orang dateng dari mana, apa yang mereka cari, dan apa langkah selanjutnya yang paling masuk akal buat mereka. Baru setelah alurnya jelas, gw mikirin warna, tipografi, sama animasi yang nge-support alur itu — bukan sebaliknya.

Jadi kalau lo nemu developer yang nanya "tujuan utama halaman ini apa" sebelum nanya "mau warna apa", itu pertanda bagus. Itu artinya dia ngedesain buat hasil, bukan cuma buat tampilan.`,
  },
  {
    id: 3,
    kategori: "Studi Kasus",
    judul: "Dari Brief Berantakan Jadi Website yang Convert",
    ringkasan:
      "Cerita gimana gw biasa ngubah ide yang masih mentah jadi website yang rapi, cepat, dan bisa diandalkan buat jualan.",
    waktuBaca: "4 menit baca",
    isi: `Hampir semua client yang dateng ke gw biasanya bawa ide yang masih acak — kadang cuma referensi beberapa website yang disuka, kadang cuma cerita lisan tentang bisnisnya. Itu normal, dan justru dari situ kerjasama dimulai.

Langkah pertama yang gw lakuin selalu sama: ngobrol dulu soal siapa target audiens-nya, apa yang mau dicapai dari website itu — jualan, branding, atau portofolio — baru setelah itu masuk ke struktur halaman dan konten apa aja yang perlu ada.

Dari situ, brief yang awalnya berantakan jadi punya bentuk: halaman mana yang paling penting, informasi apa yang harus keliatan duluan, dan call-to-action apa yang paling masuk akal buat bisnis itu. Baru di tahap ini desain visual mulai dikerjain.

Hasil akhirnya bukan cuma website yang rapi secara tampilan, tapi yang strukturnya emang dipikirin buat ngarahin pengunjung ke satu tujuan: percaya sama brand itu, lalu ngambil tindakan.`,
  },
  {
    id: 4,
    kategori: "Tips",
    judul: "Checklist Sebelum Lo Order Jasa Bikin Website",
    ringkasan:
      "Biar gak salah pilih developer, ini hal-hal yang wajib lo tanyain sebelum deal — termasuk ke gw sendiri.",
    waktuBaca: "3 menit baca",
    isi: `Order jasa bikin website itu investasi, jadi wajar kalau lo mau mastiin uang lo gak salah tempat. Ini beberapa hal yang gw saranin buat ditanyain ke developer manapun — termasuk ke gw.

Pertama, minta liat portofolio yang relevan sama jenis bisnis lo, bukan cuma yang paling keren. Kedua, tanyain gimana proses revisinya — berapa kali boleh revisi dan gimana kalau ada perubahan di luar brief awal. Ketiga, pastiin lo dapet kejelasan soal siapa yang pegang source code dan domain setelah proyek selesai.

Keempat, jangan ragu nanya soal performa: apakah website-nya bakal cepat diakses dari HP, karena sebagian besar pengunjung sekarang dateng dari mobile. Kelima, pastiin ada kejelasan timeline — kapan mulai, kapan target selesai, dan apa yang terjadi kalau ada keterlambatan dari kedua belah pihak.

Developer yang jujur gak akan keberatan dijawab pertanyaan-pertanyaan ini. Justru itu nunjukin dia kerja secara profesional, bukan asal jadi.`,
  },
  {
    id: 5,
    kategori: "Proses Kerja",
    judul: "Gimana Gw Kerja: Dari Ngobrol Santai Sampe Website Live",
    ringkasan:
      "Biar lo tau apa yang bakal lo lalui kalau kerja sama gw — gak ada drama, gak ada ghosting, jelas dari awal sampe akhir.",
    waktuBaca: "3 menit baca",
    isi: `Banyak orang ragu pakai jasa freelance karena takut prosesnya gak jelas — mulai dari susah dihubungi, sampe hasil akhirnya beda jauh dari ekspektasi. Makanya gw selalu pastiin proses kerja gw jelas dari awal.

Gw mulai dari ngobrol santai soal kebutuhan lo, lewat chat atau call, sampe gw paham gambaran besarnya. Dari situ gw bikin rencana halaman dan estimasi waktu, biar lo tau persis apa yang bakal lo dapet dan kapan.

Selama proses pengerjaan, gw kasih update berkala — bukan cuma diem dan muncul lagi pas udah jadi. Kalau ada bagian yang menurut gw bisa lebih baik dari brief awal, gw bakal kasih saran, tapi keputusan akhir tetep di tangan lo.

Pas website udah jadi, gw pastiin lo paham cara pakainya, dan tetep available kalau ada pertanyaan atau penyesuaian kecil setelahnya. Jadi gak ada cerita "developer ngilang abis transfer DP" di sini.`,
  },
];