import HeroImage from "/assets/hero-img.webp";
import HeroImage1 from "/assets/hero-img1.webp";
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
import Proyek5 from "/assets/proyek/absen.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

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
    nama: "Absesnsi Mahasiswa",
    desk: "Website manajemen kehadiran mahasiswa yang memudahkan dosen dalam mencatat dan memantau absensi perkuliahan. Sistem menyediakan fitur pencatatan status hadir, izin, dan sakit serta rekapitulasi data kehadiran secara terstruktur.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "website profil modern yang tidak hanya menampilkan informasi dasar perusahaan, tetapi juga menekankan interaksi, visual yang menarik, dan kemudahan akses informasi untuk membangun citra profesional dan kepercayaan audiens.",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];
