import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/60 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">

          {/* BRAND */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="font-bold text-2xl tracking-tight">
              PYYT<span className="text-[#10d9a0]">.</span>DEV
            </div>
            <p className="text-white/50 text-sm leading-7">
              Jasa pembuatan website modern, cepat, dan powerful.
              Fokus pada desain yang rapi dan kode yang solid.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#10d9a0] animate-pulse"></div>
              <p className="text-[#10d9a0] uppercase tracking-[2px] text-[10px] font-semibold">
                Available For Freelance
              </p>
            </div>
          </div>

          {/* NAVIGASI */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">
              Navigasi
            </h3>
            {[
              { label: "Beranda", href: "#beranda" },
              { label: "Tentang", href: "#tentang" },
              { label: "Tools", href: "#tools" },
              { label: "Proyek", href: "#proyek" },
              { label: "Kontak", href: "#kontak" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/50 text-sm hover:text-[#10d9a0] transition duration-200 w-fit"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* LAYANAN */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">
              Layanan
            </h3>
            {[
              "Website Development",
              "UI/UX Design",
              "Landing Page",
              "Poster Design",
              "Maintenance & Support",
            ].map((item) => (
              <p
                key={item}
                className="text-white/50 text-sm hover:text-[#f5a623] transition duration-200 w-fit cursor-default"
              >
                {item}
              </p>
            ))}
          </div>

          {/* KONTAK & SOSIAL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">
              Kontak
            </h3>
            
            <a 
              href="mailto:ppatih99@gmail.com"
              className="text-white/50 text-sm hover:text-[#ff4f75] transition duration-200 w-fit"
            >
              ppatih99@gmail.com
            </a>
            
            <a 
              href="https://wa.me/6283893611581"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-[#ff4f75] transition duration-200 w-fit"
            >
              +62 838-9361-1581
            </a>
            <p className="text-white/50 text-sm">Indonesia</p>

            <div className="flex gap-2 mt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-white/50 text-base hover:bg-[#10d9a0] hover:text-black hover:border-[#10d9a0] transition duration-200">
                <i className="ri-github-fill"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-white/50 text-base hover:bg-[#f5a623] hover:text-black hover:border-[#f5a623] transition duration-200">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center text-white/50 text-base hover:bg-[#ff4f75] hover:text-black hover:border-[#ff4f75] transition duration-200">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-white/40 font-mono">
            © 2026 Muhammad Iqbal Patih. All rights reserved.
          </span>
          <div className="flex gap-6 text-[11px] text-white/40 font-mono">
            <a href="#" className="hover:text-[#10d9a0] transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#f5a623] transition duration-200">Terms of Service</a>
            <span>Made with ❤ in Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;