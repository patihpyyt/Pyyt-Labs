import { useEffect, useState } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

// ===== DATA ARTIKEL =====
// Taruh ini di file ./data.js kalau mau konsisten sama listTools & listProyek,
// atau biarin di sini juga gak masalah — tinggal pilih.
const listArtikel = [
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

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projectStyles = [
    { bg: "#04120d", borderHover: "hover:border-[#10d9a0]/40", tagColor: "#10d9a0" },
    { bg: "#140b02", borderHover: "hover:border-[#f5a623]/40", tagColor: "#f5a623" },
    { bg: "#15040a", borderHover: "hover:border-[#ff4f75]/40", tagColor: "#ff4f75" },
  ];

  return (
    <div className="text-white min-h-screen w-full overflow-x-hidden relative">

     {/* ===== FOTO FULL PAGE BACKGROUND + ANIMASI ===== */}
<div className="fixed inset-0 z-0 overflow-hidden">
  <img
    src={DataImage.gwImage}
    alt="background"
    className="bg-photo"
  />

  {/* Overlay lebih terang di HP */}
  <div className="absolute inset-0 bg-black/90"></div>

  {/* Gradient kiri */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 md:from-black from-30% via-black/20 md:via-black/75 via-40% to-transparent"></div>

  {/* Gradient kanan */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/20 md:from-black from-5% via-black/10 md:via-black/0 via-20% to-transparent"></div>

  {/* Gradient bawah */}
   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>

<style>{`
  @keyframes bgFloat {
    0% {
      transform: translateY(0px) scale(1.03);
    }
    50% {
      transform: translateY(-18px) scale(1.06);
    }
    100% {
      transform: translateY(0px) scale(1.03);
    }
  }

  .bg-photo {
    position: absolute;
    height: 100%;
    object-fit: cover;
    object-position: 85% top;
    top:0;
    animation: bgFloat 10s ease-in-out infinite;

    width: 60%;
    right: 0;
    left: auto;

    filter: brightness(0,1);
  }

  @media (max-width: 768px) {
    .bg-photo {
      width: 100%;
      height: 120%;
      top: -5%;

      left: 0;
      right: 0;

      object-position: 65% top;

  
    }
  }
`}</style>

      {/* CURSOR GLOW */}
      <div
        id="cursor-glow"
        className="fixed hidden md:block w-[360px] h-[360px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(16,217,160,0.08)_0%,transparent_70%)]"
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* HERO — full width, no photo card */}
        <section
          id="beranda"
          className="min-h-screen flex flex-col justify-center pt-[130px] pb-20"
        >
          <div className="flex flex-col gap-7 max-w-3xl">

            {/* BADGE */}
            <div className="w-fit px-5 py-2 rounded-full border border-[#10d9a0]/20 bg-[#10d9a0]/5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#10d9a0] animate-pulse"></div>
              <p className="text-[#10d9a0] uppercase tracking-[2px] text-[11px] font-semibold">
                Available For Freelance
              </p>
            </div>

            {/* TITLE */}
            <h1 className="text-[3.5rem] md:text-[4.5rem] leading-[0.95] font-black tracking-[-4px]">
              Muhammad
              <br />
              Iqbal{" "}
              <span className="text-[#10d9a0]">Patih</span>
            </h1>

            {/* SUB */}
            <p className="uppercase text-[#f5a623] tracking-[5px] text-[12px] font-semibold">
              Web Developer & UI Designer
            </p>
            {/* DESC */}
            <p className="text-white/80 text-lg leading-9 max-w-xl">
              Jasa pembuatan website yang bukan cuma
              <span className="text-[#f5a623] font-semibold"> kelihatan keren </span>
              — tapi juga
              <span className="text-[#10d9a0] font-semibold"> smooth, cepat, modern, dan powerful.</span>
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6283893611581?text=Halo%20saya%20tertarik%20dengan%20portfolio%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#10d9a0] text-black font-black hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(16,217,160,.35)]"
              >
                Hubungi Saya
              </a>
              <a
                href="#proyek"
                className="px-8 py-4 rounded-xl border border-white/10 bg-black/30 hover:bg-black/50 backdrop-blur-sm transition duration-300"
              >
                Lihat Proyek
              </a>
            </div>

          </div>
        </section>

        {/* STATS ROW */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden my-20">
          <div className="bg-black/50 backdrop-blur-sm p-7 text-center hover:bg-black/70 transition duration-200">
            <div className="text-4xl font-bold text-[#10d9a0]">45+</div>
            <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Proyek Selesai</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-7 text-center hover:bg-black/70 transition duration-200">
            <div className="text-4xl font-bold text-[#f5a623]">4+</div>
            <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Tahun Ngoding</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-7 text-center hover:bg-black/70 transition duration-200">
            <div className="text-4xl font-bold text-[#ff4f75]">∞</div>
            <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1">Semangat Buat Berkarya</div>
          </div>
        </div>

        {/* TENTANG SAYA */}
        <section id="tentang" className="py-20">
          <div className="mb-14">
            <p className="uppercase tracking-widest text-[#10d9a0] text-xs mb-2">// tentang saya</p>
            <h2 className="text-4xl font-bold tracking-tight">Latar Belakang?</h2>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
            <div className="bg-black/50 backdrop-blur-sm border border-white/5 rounded-2xl p-9 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-[#10d9a0] before:via-[#f5a623] before:to-[#ff4f75]">
              <p className="text-6xl font-bold text-[#10d9a0] opacity-20 leading-none">"</p>
              <p className="text-white/60 leading-relaxed -mt-2 text-[15px]">
                Hai! Saya <span className="text-white font-medium">Muhammad Iqbal Patih</span> —{" "}
                <span className="text-white font-medium">Full Stack Web Developer</span> sekaligus{" "}
                <span className="text-white font-medium">UI/UX Designer</span>. Saya percaya desain yang bagus dan kode yang solid harus selalu jalan bareng.
                <br /><br />
                Setiap piksel dan setiap baris kode punya tujuan. Saya suka detail kecil yang bikin perbedaan besar — dari micro-interaction sampai arsitektur database.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-black/50 backdrop-blur-sm border border-white/5 rounded-xl p-5">
                <p className="text-[11px] uppercase tracking-wider text-[#f5a623] mb-1">philosophy</p>
                <p className="text-white/50 text-sm">"Kode yang gacor lahir dari ketekunan." — bukan sekadar quote, tapi cara saya kerja tiap hari.</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/5 rounded-xl p-5">
                <p className="text-[11px] uppercase tracking-wider text-[#ff4f75] mb-1">fokus</p>
                <p className="text-white/50 text-sm">Web dev, UI/UX, poster design. Semua yang bikin layar jadi tempat yang enak dilihat &amp; dipakai.</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/5 rounded-xl p-5">
                <p className="text-[11px] uppercase tracking-wider text-[#10d9a0] mb-1">approach</p>
                <p className="text-white/50 text-sm">User-first. Performance-obsessed. Deadline-friendly. Tanpa kompromi soal kualitas.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        {/* TOOLS */}
        <section id="tools" className="py-32">
          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#f5a623] text-xs mb-3">Tech Stack</p>
            <h1 className="text-5xl font-black tracking-[-2px]">Tools Yang Biasa Dipakai</h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:-translate-y-2 hover:border-[#10d9a0]/30 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-black/60 flex items-center justify-center mb-5">
                  <img src={tool.gambar} alt={tool.nama} className="w-8 h-8 object-contain" />
                </div>
                <h1 className="text-lg font-bold mb-1">{tool.nama}</h1>
                <p className="text-white/70 text-sm">{tool.ket}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section id="proyek" className="pb-32">
          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#ff4f75] text-xs mb-3">Project</p>
            <h1 className="text-5xl font-black tracking-[-2px]">Karya Terbaik</h1>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
            {listProyek.map((proyek, index) => {
              const style = projectStyles[index % projectStyles.length];
              return (
                <div
                  key={proyek.id}
                  className={`bg-black/50 backdrop-blur-sm border border-white/10 rounded-[26px] overflow-hidden hover:-translate-y-2 ${style.borderHover} transition duration-300`}
                >
                  <div className="h-[230px] relative overflow-hidden" style={{ backgroundColor: style.bg }}>
                    <img
                      src={proyek.gambar}
                      alt={proyek.nama}
                      onClick={() => setSelectedImage(proyek.gambar)}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="text-2xl font-black mb-4">{proyek.nama}</h1>
                    <p className="text-white/80 leading-8 mb-5">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full text-xs font-semibold border"
                          style={{
                            borderColor: style.tagColor + "55",
                            color: style.tagColor,
                            backgroundColor: style.tagColor + "10",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                      <a
                        href={proyek.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block px-5 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#10d9a0] to-[#0ea57b]"
                      >
                        Lihat Website
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ARTIKEL & INSIGHT */}
        <section id="artikel" className="pb-32">
          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#10d9a0] text-xs mb-3">Insight & Studi Kasus</p>
            <h1 className="text-5xl font-black tracking-[-2px]">Artikel & Cerita Dari Lapangan</h1>
            <p className="text-white/50 text-sm mt-4 max-w-xl leading-7">
              Hal-hal yang gw pelajari sambil ngerjain puluhan proyek — biar lo tahu apa yang bakal lo dapet kalau kerja sama gw.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
            {listArtikel.map((artikel, index) => {
              const style = projectStyles[index % projectStyles.length];
              return (
                <div
                  key={artikel.id}
                  onClick={() => setSelectedArtikel(artikel)}
                  className={`bg-black/50 backdrop-blur-sm border border-white/10 rounded-[26px] p-7 cursor-pointer hover:-translate-y-2 ${style.borderHover} transition duration-300 flex flex-col`}
                >
                  <span
                    className="w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5"
                    style={{
                      color: style.tagColor,
                      backgroundColor: style.tagColor + "15",
                      border: `1px solid ${style.tagColor}40`,
                    }}
                  >
                    {artikel.kategori}
                  </span>
                  <h1 className="text-xl font-black mb-3 leading-snug">{artikel.judul}</h1>
                  <p className="text-white/60 text-sm leading-7 mb-6 flex-1">{artikel.ringkasan}</p>
                  <div className="flex items-center justify-between text-xs text-white/40 font-mono mt-auto">
                    <span>{artikel.waktuBaca}</span>
                    <span className="font-bold" style={{ color: style.tagColor }}>
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        {/* KONTAK */}
        <section id="kontak" className="py-20">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-widest text-[#10d9a0] text-xs mb-2">// kontak</p>
            <h2 className="text-4xl font-bold tracking-tight">Yuk Ngobrol</h2>
            <p className="text-white/50 text-sm mt-2">Ada ide keren? Atau proyek yang butuh sentuhan gw? Gas!</p>
          </div>
          <div className="max-w-[600px] mx-auto bg-black/50 backdrop-blur-sm border border-white/5 rounded-2xl p-9 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_left,rgba(16,217,160,0.08)_0%,transparent_55%)] before:pointer-events-none">
            <form action="https://formsubmit.co/ppatih99@gmail.com" method="POST" autoComplete="off" className="relative z-10">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-white/50 font-mono">Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama"
                    className="bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white outline-none focus:border-[#10d9a0] focus:shadow-[0_0_0_3px_rgba(16,217,160,0.12)] transition duration-200"
                    placeholder="Namamu disini..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-wider text-white/50 font-mono">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white outline-none focus:border-[#10d9a0] focus:shadow-[0_0_0_3px_rgba(16,217,160,0.12)] transition duration-200"
                    placeholder="email@kamu.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label className="text-[10px] uppercase tracking-wider text-white/50 font-mono">Pesan</label>
                <textarea
                  name="pesan"
                  rows="4"
                  className="bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white outline-none resize-none focus:border-[#10d9a0] focus:shadow-[0_0_0_3px_rgba(16,217,160,0.12)] transition duration-200"
                  placeholder="Ceritain proyekmu..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#10d9a0] text-black font-bold text-sm rounded-xl shadow-[0_4px_30px_rgba(16,217,160,0.3)] hover:shadow-[0_8px_40px_rgba(16,217,160,0.5)] hover:-translate-y-0.5 transition duration-200"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </section>

      </div>

    

      {/* IMAGE PREVIEW MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
            alt="preview"
          />
        </div>
      )}

      {/* ARTIKEL FULL MODAL */}
      {selectedArtikel && (
        <div
          onClick={() => setSelectedArtikel(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
          >
            <button
              onClick={() => setSelectedArtikel(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition"
              aria-label="Tutup"
            >
              ✕
            </button>

            <span
              className="w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5 inline-block"
              style={{
                color: "#10d9a0",
                backgroundColor: "#10d9a015",
                border: "1px solid #10d9a040",
              }}
            >
              {selectedArtikel.kategori}
            </span>

            <h2 className="text-3xl font-black mb-2 leading-tight pr-8">{selectedArtikel.judul}</h2>
            <p className="text-white/40 text-xs font-mono mb-8">{selectedArtikel.waktuBaca}</p>

            <div className="text-white/70 leading-8 text-[15px] whitespace-pre-line">
              {selectedArtikel.isi}
            </div>

            <a
              href="https://wa.me/6283893611581?text=Halo%20saya%20habis%20baca%20artikel%20lo%2C%20mau%20diskusi%20proyek"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block px-6 py-3 rounded-xl bg-[#10d9a0] text-black font-black text-sm hover:scale-105 transition duration-300"
            >
              Diskusi Proyek Lo Sekarang
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;