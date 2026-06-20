function Artikel({ selectedArtikel, onArtikelClick }) {
  if (!selectedArtikel) return null;

  const tagColors = {
    "Web Development": "#10d9a0",
    "UI/UX Design": "#f5a623",
    "Studi Kasus": "#ff4f75",
  };
  const tagColor = tagColors[selectedArtikel.kategori] || "#10d9a0";

  return (
    <div
      onClick={() => onArtikelClick(null)}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0a0a0a] border border-white/10 rounded-[26px] max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
      >
        {/* Tombol close */}
        <button
          onClick={() => onArtikelClick(null)}
          aria-label="Tutup"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition duration-200 z-10"
        >
          ✕
        </button>

        <div className="p-8 md:p-10">
          {/* Kategori */}
          <span
            className="w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5 inline-block"
            style={{
              color: tagColor,
              backgroundColor: tagColor + "15",
              border: `1px solid ${tagColor}40`,
            }}
          >
            {selectedArtikel.kategori}
          </span>

          {/* Judul */}
          <h2 className="text-2xl md:text-3xl font-black mb-3 leading-snug">
            {selectedArtikel.judul}
          </h2>

          {/* Waktu baca */}
          <p className="text-xs text-white/40 font-mono mb-7">
            {selectedArtikel.waktuBaca}
          </p>

          {/* Isi artikel */}
          <div className="text-white/70 text-[15px] leading-8 whitespace-pre-line">
            {selectedArtikel.isi}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artikel;