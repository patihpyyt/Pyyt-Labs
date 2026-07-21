import { useEffect, useState } from "react";
import DataImage from "./data";
import Artikel from "./components/Artikel";
import { listTools, listProyek, listArtikel } from "./data";

// DATA PAKET HARGA (FORMAT NATIVE NOMINAL & IKON RAPI)
const listHarga = [
  {
    id: 1,
    nama: "Tugas Kuliah / TA",
    harga: "300rb - 700rb",
    sub: "Bantuan Tugas & Skripsi Web",
    fitur: [
      "Full Source Code (Clean Code)",
      "Database MySQL & File .SQL",
      "Free Revisi s/d ACC",
      "Penjelasan Logika Kodingan",
      "Panduan Setup Localhost"
    ],
    badge: "Mahasiswa",
    highlight: false,
    waText: "Halo%20Iqbal,%20mau%20konsultasi%20Paket%20Tugas%20Kuliah",
    icon: (
      <svg className="w-6 h-6 text-[#10d9a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    id: 2,
    nama: "UMKM & Landing Page",
    harga: "1 - 1,5 Juta",
    sub: "Website Profil Usaha Terima Jadi",
    fitur: [
      "Desain Responsive HP & PC",
      "Termasuk Domain .com / .biz.id (1 Thn)",
      "Termasuk Hosting cPanel (1 Thn)",
      "Integrasi Button WA Direct",
      "Garansi Fix Bug / Maintenance"
    ],
    badge: "Best Seller",
    highlight: true,
    waText: "Halo%20Iqbal,%20mau%20order%20Paket%20Website%20UMKM",
    icon: (
      <svg className="w-6 h-6 text-[#10d9a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 3,
    nama: "Custom Fullstack System",
    harga: "2 Juta++",
    sub: "Sistem Informasi & Aplikasi Web Kompleks",
    fitur: [
      "Custom Framework (Laravel/React)",
      "Full Admin Panel & Management Data",
      "Integrasi Rest API / Payment / Multi Role",
      "Setup Server cPanel / Vercel",
      "Full Dokumentasi System"
    ],
    badge: "Custom",
    highlight: false,
    waText: "Halo%20Iqbal,%20mau%20diskusi%20Paket%20Custom%20System",
    icon: (
      <svg className="w-6 h-6 text-[#10d9a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
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

          filter: brightness(1);
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

        {/* HERO */}
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

        {/* ===== SECTION HARGA / PRICING ===== */}
        <section id="layanan" className="py-20">
          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#10d9a0] text-xs mb-3">// Paket & Layanan</p>
            <h1 className="text-5xl font-black tracking-[-2px]">Paket Harga</h1>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 items-stretch">
            {listHarga.map((item) => (
              <div
                key={item.id}
                className={`bg-black/50 backdrop-blur-sm border rounded-[26px] p-8 flex flex-col justify-between transition duration-300 relative ${
                  item.highlight
                    ? "border-[#10d9a0] shadow-[0_0_30px_rgba(16,217,160,0.15)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <span
                  className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.highlight
                      ? "bg-[#10d9a0] text-black"
                      : "bg-white/10 text-white/70 border border-white/10"
                  }`}
                >
                  {item.badge}
                </span>

                <div>
                  {/* Judul + Icon Minimalis */}
                  <div className="flex items-center gap-3 mb-1 mt-2">
                    <div className="p-2 rounded-lg bg-[#10d9a0]/10 border border-[#10d9a0]/20">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black">{item.nama}</h3>
                  </div>

                  <p className="text-white/50 text-xs mb-6">{item.sub}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-black text-[#10d9a0]">Rp {item.harga}</span>
                  </div>

                  <div className="h-px bg-white/10 mb-6"></div>

                  <ul className="flex flex-col gap-3 mb-8 text-sm text-white/70">
                    {item.fitur.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {/* Custom Clean SVG Check Icon */}
                        <div className="w-4 h-4 rounded-full bg-[#10d9a0]/10 border border-[#10d9a0]/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#10d9a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/6283893611581?text=${item.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition duration-300 block ${
                    item.highlight
                      ? "bg-[#10d9a0] text-black hover:scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Pesan Paket Ini
                </a>
              </div>
            ))}
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
      <Artikel selectedArtikel={selectedArtikel} onArtikelClick={setSelectedArtikel} />

    </div>
  );
}

export default App;